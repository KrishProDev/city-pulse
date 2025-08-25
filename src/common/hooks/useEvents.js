import React, { useState } from "react";
import { searchEvents, getEventById } from "../api";

export function useEvents() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchEvents({ keyword, city, pageSize = 20 }) {
    setLoading(true);
    setError(null);
    try {
      const data = await searchEvents({ keyword, city, pageSize });
      const events = data._embedded?.events || [];
      setLoading(false);
      return events;
    } catch (err) {
      setError(err.message || "Error");
      setLoading(false);
      return [];
    }
  }

  async function fetchEventById(id) {
    setLoading(true);
    setError(null);
    try {
      const data = await getEventById(id);
      setLoading(false);
      return data;
    } catch (err) {
      setError(err.message || "Error");
      setLoading(false);
      return null;
    }
  }

  return { fetchEvents, fetchEventById, loading, error };
}
