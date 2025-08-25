const BASE = import.meta.env.VITE_TM_BASE_URL || "https://app.ticketmaster.com/discovery/v2";
const KEY = import.meta.env.VITE_TM_API_KEY;

export async function searchEvents({ keyword = "", city = "", pageSize = 20, page = 0 }) {
  if (!KEY) throw new Error("VITE_TM_API_KEY not found in environment");
  const params = new URLSearchParams({
    apikey: KEY,
    keyword,
    city,
    size: pageSize,
    page
  });
  const url = `${BASE}/events.json?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network response was not ok");
  const json = await res.json();
  return json;
}

export async function getEventById(id) {
  if (!KEY) throw new Error("VITE_TM_API_KEY not found");
  const url = `${BASE}/events/${encodeURIComponent(id)}.json?apikey=${KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Event not found");
  return res.json();
}
