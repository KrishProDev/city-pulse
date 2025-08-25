import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const nav = useNavigate();
  useEffect(() => {
    const id = setTimeout(() => nav("/home"), 1200);
    return () => clearTimeout(id);
  }, [nav]);
  return (
    <div className="splash">
      <h1 className="splash-title">City Pulse</h1>
    </div>
  );
}
