import React from "react";
import { Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./components/Home";
import EventDetails from "./components/EventDetails";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}
