import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";

function Favorites() {
  const { favorites, removeFromFavorites } = useMovieContext();

  return (
    <div className="favorites">
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites, and they will appear here.</p>
        </div>
      ) : (
        <div className="favorites-list">
          <h2>Your Favorite Movies</h2>
          <ul>
            {favorites.map((movie) => (
              <li key={movie.id} className="favorite-item">
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p>{movie.description}</p>
                </div>
                <button onClick={() => removeFromFavorites(movie.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Favorites;
