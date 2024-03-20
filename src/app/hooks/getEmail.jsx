"use client";

import { useEffect, useState } from "react";

export function useLogin() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setUserEmail(email);
    } else {
      window.location = "/auth/login";
    }
  }, []);
  return userEmail;
}