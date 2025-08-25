import React, { useState } from "react";
import { useEvents } from "../common/hooks/useEvents";
import EventCard from "./EventCard";
import { useLocale } from "../common/hooks/useLocale";

export default function Home() {
  const { fetchEvents, loading, error } = useEvents();
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [events, setEvents] = useState([]);
  const { t } = useLocale();

  async function onSearch(e) {
    e.preventDefault();
    const res = await fetchEvents({ keyword, city });
    setEvents(res);
  }

  return (
    <div className="container">
      <form className="search-form" onSubmit={onSearch}>
        <input className="search-input" placeholder={t.searchPlaceholder} value={keyword} onChange={e=>setKeyword(e.target.value)} />
        <input className="search-input" placeholder={t.cityPlaceholder} value={city} onChange={e=>setCity(e.target.value)} />
        <button className="btn" type="submit">Search</button>
      </form>

      {loading && <div className="info">Loading...</div>}
      {error && <div className="error">{error}</div>}

      <div className="events-grid">
        {events.map(ev => <EventCard key={ev.id} event={ev} />)}
      </div>
    </div>
  );
}
