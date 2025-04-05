"use client";

import { useState, useEffect } from "react";

export default function TimeBasedGreeting({ userName }: { userName: string }) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        return "Good Morning,";
      } else if (hour >= 12 && hour < 18) {
        return "Good Afternoon,";
      } else {
        return "Good Evening,";
      }
    };

    // Set initial greeting
    setGreeting(getGreeting());

    // Update greeting every minute (in case the component stays mounted for a long time)
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="font-medium">
      {greeting} {userName}
    </span>
  );
}
