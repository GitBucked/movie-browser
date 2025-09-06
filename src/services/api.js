const API_KEY = "9f5e5c5fb20f1d7f2a3470f75de22071";
const BASE_URL = "https://api.themoviedb.org/3";

// Function to fetch popular movies
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return []; // Return an empty array to avoid breaking the UI
  }
};

// Function to search for movies
export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching for movies:", error);
    return []; // Return an empty array to avoid breaking the UI
  }
};