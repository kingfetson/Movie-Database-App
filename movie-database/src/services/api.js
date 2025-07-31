import axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

// Search movies
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error.response?.data || error.message);
    throw new Error("Failed to fetch movies. Please try again later.");
  }
};

// Get movie details
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        i: movieId
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error.response?.data || error.message);
    throw new Error("Failed to fetch movie details. Please try again later.");
  }
};
