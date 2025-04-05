"use client";

import "./app.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import TopBar from "./topBar";
import { UserProvider } from "./userContext";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Authenticator>
          <UserProvider>
            <TopBar />
            {children}
          </UserProvider>
        </Authenticator>
      </body>
    </html>
  );
}
