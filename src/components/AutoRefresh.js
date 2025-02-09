// components/AutoRefresh.js
"use client";

import { useEffect } from "react";

export default function AutoRefresh() {
  useEffect(() => {
    let inactivityTimeout = setTimeout(() => {
      console.log("Inactivity detected: refreshing page.");
      window.location.reload();
    }, 120000);

    function resetInactivityTimeout() {
      clearTimeout(inactivityTimeout);
      inactivityTimeout = setTimeout(() => {
        console.log("Inactivity detected: refreshing page.");
        window.location.reload();
      }, 120000);
    }

    window.addEventListener("mousemove", resetInactivityTimeout);
    window.addEventListener("keydown", resetInactivityTimeout);
    window.addEventListener("click", resetInactivityTimeout);

    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener("mousemove", resetInactivityTimeout);
      window.removeEventListener("keydown", resetInactivityTimeout);
      window.removeEventListener("click", resetInactivityTimeout);
    };
  }, []);

  return null; // This component doesn't render any UI
}
