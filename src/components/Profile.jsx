import React from "react";
import { useAuth } from "../common/hooks/useAuth";
import { useFavorites } from "../common/hooks/useFavorites";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();
  const { favorites } = useFavorites();

  console.log("Profile render", { user, favorites });

  if (!user) {
    return (
      <div className="container">
        <p className="info">You are not logged in.</p>
        <Link className="link" to="/login">Login</Link>
      </div>
    );
  }

  return (
    <div className="container profile">
      <div className="profile-header">
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <button className="btn" onClick={logout}>Logout</button>
      </div>

      <hr />
      <h3>Favorites</h3>
      <ul className="favorites-list">
        {favorites.map(f => <li key={f.id}><Link className="link" to={`/events/${f.id}`}>{f.name}</Link></li>)}
      </ul>
    </div>
  );
}
