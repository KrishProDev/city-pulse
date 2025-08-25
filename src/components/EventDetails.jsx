import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocale } from "../common/hooks/useLocale";
import { useEvents } from "../common/hooks/useEvents";
import { useFavorites } from "../common/hooks/useFavorites";

export default function EventDetails() {
  const { id } = useParams();
  const { fetchEventById, loading, error } = useEvents();
  const [event, setEvent] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useLocale();

  useEffect(() => {
    fetchEventById(id).then(res => setEvent(res)).catch(()=>{});
  }, [id]);

  if (loading) return <div className="container"><div className="info">Loading...</div></div>;
  if (error) return <div className="container"><div className="error">{error}</div></div>;
  if (!event) return <div className="container"><div className="info">No event found</div></div>;

  const venue = event._embedded?.venues?.[0];
  const lat = venue?.location?.latitude;
  const lng = venue?.location?.longitude;

  return (
    <div className="container">
      <h2 className="details-title">{event.name}</h2>
      <p className="details-info">{event.info || event.pleaseNote || "No extra info"}</p>
      <button className="btn" onClick={() => toggleFavorite({ id: event.id, name: event.name })}>
        {isFavorite(event.id) ? "Remove favorite" : "Add favorite"}
      </button>

      {venue && (
        <div className="venue-block">
          <h4 className="venue-name">Venue: {venue.name}</h4>
          {lat && lng ? (
            <div className="details-map">
              <iframe
                title="map"
                width="100%"
                height="100%"
                frameBorder="0"
                src={`https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
              />
            </div>
          ) : <div className="info">No location available</div>}
        </div>
      )}
    </div>
  );
}
