import React, { useState } from "react";
import { useAuth } from "../common/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, biometricLogin } = useAuth();
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    await login({ email });
    nav("/profile");
  }

  async function onBiometric() {
    await biometricLogin();
    nav("/profile");
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input className="search-input" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <button className="btn" type="submit">Login</button>
      </form>
      <hr />
      <button className="btn" onClick={onBiometric}>Use Biometric (simulate)</button>
    </div>
  );
}
