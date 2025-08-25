# 🎟️ City Pulse – Local Events Explorer

City Pulse is a React web application to explore live events using the **Ticketmaster Discovery API**.  
Users can search for events by keyword and city, view event details with venue maps, mark favorites, and toggle between English/Arabic (RTL).  

🚀 [Live Demo](https://city-pulse-ten.vercel.app)  

🖼️ Screenshots

Splash Screen

<img width="1470" height="744" alt="Screenshot 2025-08-25 at 11 08 47 AM" src="https://github.com/user-attachments/assets/0e9a522d-38d7-4b41-813f-d2bfaaecddd7" />

Home – Search Events
<img width="1470" height="742" alt="Screenshot 2025-08-25 at 11 10 09 AM" src="https://github.com/user-attachments/assets/2726d265-087d-4457-9cf7-d79074f2389b" />

Event Details with Map
<img width="1467" height="746" alt="Screenshot 2025-08-25 at 11 10 41 AM" src="https://github.com/user-attachments/assets/7a8bbcd1-1ca2-4441-b615-5507ace441d3" />

Profile with Favorites
<img width="1011" height="421" alt="Screenshot 2025-08-25 at 11 11 14 AM" src="https://github.com/user-attachments/assets/ed99156f-6174-49c9-99ff-a7eaaa8e39a5" />

Login Page

<img width="904" height="412" alt="Screenshot 2025-08-25 at 11 11 47 AM" src="https://github.com/user-attachments/assets/1c1a1419-d38d-438a-8252-191f5c279bae" />

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
