A clean, responsive **movie discovery app** built with **React + Vite**. Browse popular titles, search by name, and save **Favorites** locally. Small component set, a context provider, and a simple `services/api.js` layer for TMDB/OMDb.

> This README focuses on local development. Deployment is optional and can be added later.

---

## ✨ Features
- Home page with **popular movies** grid
- **Search** by title
- **Favorites** page (persisted with `localStorage` via Context)
- Responsive card UI (poster, title, year)
- Simple services/context architecture

---

## 🧰 Tech Stack
- **React 18** + **Vite**
- **CSS** files by feature (`/src/css`)
- **Fetch API** via `src/services/api.js`
- **Context API** in `src/context/MovieContext.jsx`

---

## 📁 Project Structure
```
src/
  assets/
  components/
    MovieCard.jsx
    NavBar.jsx
  context/
    MovieContext.jsx
  css/
    App.css
    Favorites.css
    Home.css
    index.css
    MovieCard.css
    Navbar.css
  pages/
    Favorites.jsx
    Home.jsx
  services/
    api.js
  App.jsx
  main.jsx
public/
index.html
vite.config.js
```

---

## 🔑 API Setup

This app expects a movie API. The examples use **TMDB**.

1. Create a free TMDB account and generate an API key.

---

## 🚀 Getting Started
```bash
# 1) Install dependencies
npm install

# 2) Start the dev server (http://localhost:5173)
npm run dev

# 3) Build for production (optional)
npm run build

# 4) Preview the production build (optional)
npm run preview
```

---

## 💾 Favorites
Favorites are stored in **localStorage** and managed through `MovieContext.jsx`. This keeps UX instant with no backend. For multi-device sync, add a small backend later (Supabase/Firebase) — optional.

---

## 📝 License & Attribution
- Code: **MIT** — see `LICENSE`.
- “This product uses the TMDB API but is not endorsed or certified by TMDB.”  
  Posters/metadata belong to their respective owners.

