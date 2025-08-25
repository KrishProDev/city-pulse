import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../common/hooks/useLocale";

export default function Navbar() {
  const { lang, toggle, t } = useLocale();
  return (
    <nav className="app-nav">
      <div className="nav-left">
        <Link className="nav-brand" to="/home">{t.title}</Link>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/profile">{t.profile}</Link>
        <Link className="nav-link" to="/login">{t.login}</Link>
      </div>
      <div className="nav-actions">
        <button className="btn nav-btn" onClick={toggle}>{lang === "en" ? "عربي" : "EN"}</button>
      </div>
    </nav>
  );
}
