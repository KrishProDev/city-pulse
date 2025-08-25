import React, { useState, useEffect } from "react";
import { save, load, remove } from "../storage";

const KEY = "auth_user";

export function useAuth() {
  const [user, setUser] = useState(() => load(KEY, null));

  useEffect(() => {
    if (user) save(KEY, user);
    else remove(KEY);
  }, [user]);

  async function login({ email }) {
    const mockUser = { email, name: email?.split?.("@")?.[0] || "User" };
    setUser(mockUser);
    await new Promise(r => setTimeout(r, 500)); // simulate delay
    return mockUser;
  }

  function logout() {
    setUser(null);
  }

  async function biometricLogin() {
    if (window.PublicKeyCredential) {
      const mock = { email: "biometric@local", name: "BiometricUser" };
      setUser(mock);
      return mock;
    } else {
      const mock = { email: "biometric@local", name: "BiometricUser" };
      setUser(mock);
      return mock;
    }
  }

  return { user, login, logout, biometricLogin };
}
