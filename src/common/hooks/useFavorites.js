import React, { useState, useEffect } from "react";
import { save, load } from "../storage";

const KEY = "favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState(() => load(KEY, []) || []);

  useEffect(() => {
    save(KEY, favorites);
  }, [favorites]);

  function toggleFavorite(eventObj) {
    setFavorites(prev => {
      const exists = prev.find(e => e.id === eventObj.id);
      if (exists) return prev.filter(e => e.id !== eventObj.id);
      return [...prev, eventObj];
    });
  }

  function isFavorite(id) {
    return favorites.some(e => e.id === id);
  }

  return { favorites, toggleFavorite, isFavorite };
}
