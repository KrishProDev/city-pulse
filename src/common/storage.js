const PREFIX = "citypulse_v1_";

export function save(key, value) {
  localStorage.setItem(PREFIX + key, JSON.stringify(value));
}

export function load(key, defaultValue = null) {
  const raw = localStorage.getItem(PREFIX + key);
  if (!raw) return defaultValue;
  try { return JSON.parse(raw); } catch { return defaultValue; }
}

export function remove(key) {
  localStorage.removeItem(PREFIX + key);
}
