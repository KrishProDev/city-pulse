# 🎟️ City Pulse – Local Events Explorer

City Pulse is a React web application to explore live events using the **Ticketmaster Discovery API**.  
Users can search for events by keyword and city, view event details with venue maps, mark favorites, and toggle between English/Arabic (RTL).  

🚀 [Live Demo on Vercel](https://your-vercel-demo-link.vercel.app)  
📷 Screenshots: (add below after running locally or on Vercel)

🖼️ Screenshots

Splash Screen

Home – Search Events

Event Details with Map

Profile with Favorites

Login Page

## 📌 Assumptions

- Ticketmaster API may not return events for all cities (e.g., Delhi often returns none).

- Tested with: Los Angeles, New York, London, Chicago.

- Arabic translations are placeholders; focus is on RTL layout.

- Biometric login is simulated for demo purposes.

- LocalStorage used for persistence (not secure, assignment-only).

## ✨ Features
- **Splash → Home → Event Details → Profile → Login** navigation flow
- 🔍 Search events by **keyword + city**
- 📅 Event details with **map preview (Google Maps iframe)**
- ⭐ Mark/unmark events as **favorites** (persisted in `localStorage`)
- 👤 Profile screen shows user info & favorites
- 🔑 Mock **Login** (email-based) & simulated **Biometric login**
- 🌐 Language toggle **English ↔ Arabic** with **RTL support**
- 💾 User data (favorites, locale, auth) stored in `localStorage`



## Setup
```bash
npm install
update VITE_TM_API_KEY with real ticketMaster api key in .env  # then edit
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to Vercel
- Build command: `npm run build`
- Output dir: `dist`
- Add env var `VITE_TM_API_KEY` and `VITE_TM_BASE_URL`
