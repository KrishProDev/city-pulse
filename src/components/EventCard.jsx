import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../common/hooks/useFavorites";

export default function EventCard({ event }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const img = event.images?.[0]?.url;
  return (
    <article className="card">
      {img && <img className="card-img" src={img} alt={event.name} />}
      <div className="card-body">
        <h3 className="card-title">{event.name}</h3>
        <p className="card-date">{event.dates?.start?.localDate}</p>
        <div className="card-footer">
          <Link className="link" to={`/events/${event.id}`}>Details</Link>
          <button className="btn favorite-btn" onClick={() => toggleFavorite({ id: event.id, name: event.name })}>
            {isFavorite(event.id) ? "★" : "☆"}
          </button>
        </div>
      </div>
    </article>
  );
}
