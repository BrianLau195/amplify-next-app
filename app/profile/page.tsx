"use client";

import {
  fetchUserAttributes,
  updateUserAttributes,
  confirmUserAttribute,
  UserAttributeKey,
} from "aws-amplify/auth";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "../userContext";

export default function Profile() {
  const router = useRouter();
  const [previousUserAttributes, setPreviousUserAttributes] =
    useState<Partial<Record<UserAttributeKey, string>>>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [verificationCode, setVerificationCode] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    fetchUserAttributes().then((attributes) => {
      setPreviousUserAttributes(attributes);
      setFirstName(attributes.given_name || "");
      setLastName(attributes.family_name || "");
      setEmail(attributes.email || "");
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    setMessage({ text: "", type: "" });

    try {
      const userAttributes: Record<string, string> = {
        given_name: firstName,
        family_name: lastName,
        email: email,
      };

      const _ = await updateUserAttributes({
        userAttributes,
      });

      if (email !== previousUserAttributes?.email) {
        setShowVerification(true);
        setMessage({
          text: "Profile updated! Please check your email for verification code.",
          type: "success",
        });
      } else {
        setMessage({
          text: "Profile updated successfully!",
          type: "success",
        });
        // Refresh user attributes
        const updatedAttributes = await fetchUserAttributes();
        setPreviousUserAttributes(updatedAttributes);
        if (userContext) {
          userContext.setUserAttributes(updatedAttributes);
        }
      }
    } catch (error) {
      setMessage({
        text: "Failed to update profile. Please try again.",
        type: "error",
      });
      console.error("Error updating profile:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setMessage({ text: "", type: "" });

    try {
      await confirmUserAttribute({
        userAttributeKey: "email",
        confirmationCode: verificationCode,
      });

      setMessage({
        text: "Email verified successfully!",
        type: "success",
      });
      setShowVerification(false);

      // Refresh user attributes
      const updatedAttributes = await fetchUserAttributes();
      setPreviousUserAttributes(updatedAttributes);
      if (userContext) {
        userContext.setUserAttributes(updatedAttributes);
      }
    } catch (error) {
      setMessage({
        text: "Failed to verify email. Please check the code and try again.",
        type: "error",
      });
      console.error("Error verifying email:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  const closeVerificationModal = () => {
    setShowVerification(false);
  };

  return (
    <div className="profile-container">
      <h1>Update Profile</h1>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small className="form-help">
            If you change your email, you will need to verify the new email
            address.
          </small>
        </div>

        <button type="submit" disabled={isUpdating}>
          {isUpdating ? "Updating..." : "Update Profile"}
        </button>

        {message.text && (
          <div className={`message ${message.type}`}>{message.text}</div>
        )}

        <button onClick={() => router.back()}>Back</button>
      </form>

      {showVerification && (
        <div className="modal-overlay">
          <div className="verification-container">
            <button
              className="close-button"
              onClick={closeVerificationModal}
              aria-label="Close"
            >
              <span className="close-button-text">×</span>
            </button>
            <h2>Verify Your Email</h2>
            <p>
              Please enter the verification code sent to your email address.
            </p>

            <form onSubmit={handleVerification} className="verification-form">
              <div className="form-group">
                <label htmlFor="verificationCode">Verification Code</label>
                <input
                  type="text"
                  id="verificationCode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  placeholder="Enter the code from your email"
                />
              </div>

              <button type="submit" disabled={isVerifying}>
                {isVerifying ? "Verifying..." : "Verify Email"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
