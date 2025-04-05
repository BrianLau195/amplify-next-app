"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  return (
    <main>
      <h1>My Addresses</h1>
      <button onClick={() => router.push("/address")}>Address</button>
    </main>
  );
}
