import { UserAttributeKey, fetchUserAttributes } from "aws-amplify/auth";
import { createContext, useEffect, useState } from "react";

type UserContextType = {
  userAttributes: Partial<Record<UserAttributeKey, string>> | undefined;
  setUserAttributes: (
    attributes: Partial<Record<UserAttributeKey, string>>,
  ) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userAttributes, setUserAttributes] =
    useState<Partial<Record<UserAttributeKey, string>>>();

  useEffect(() => {
    fetchUserAttributes().then((attributes) => {
      setUserAttributes(attributes);
    });
  }, []);

  return (
    <UserContext.Provider value={{ userAttributes, setUserAttributes }}>
      {children}
    </UserContext.Provider>
  );
};
