"use client";

import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { TimeBasedGreeting } from "../components";
import { useState, useContext } from "react";
import { UserContext } from "./userContext";

export default function TopBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const userContext = useContext(UserContext);

  const userName =
    userContext?.userAttributes?.given_name ??
    userContext?.userAttributes?.email ??
    "";

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="top-bar">
        <section className="top-bar-title">
          <button onClick={() => router.push("/profile")}>
            <TimeBasedGreeting userName={userName} />
          </button>
        </section>
        <section>
          <nav className="top-bar-nav">
            <button onClick={() => router.push("/")}>Home</button>
            <button onClick={() => router.push("/about")}>About</button>
            <button onClick={() => signOut()}>Sign Out</button>
          </nav>
          <button onClick={toggleMenu} className="top-bar-nav-mobile-button">
            Menu
          </button>
        </section>
      </header>
      <nav className={`top-bar-nav-mobile ${openMenu ? "open" : ""}`}>
        <button
          onClick={() => {
            router.push("/");
            toggleMenu();
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            router.push("/about");
            toggleMenu();
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            signOut();
            toggleMenu();
          }}
        >
          Sign Out
        </button>
      </nav>
    </>
  );
}
