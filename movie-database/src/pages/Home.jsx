import React, { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchMovies = async () => {
    if (!query) {
      setError("Please enter a movie name.");
      return;
    }

    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: process.env.REACT_APP_MOVIE_API_KEY, // ✅ matches .env variable
          s: query
        }
      });

      if (response.data.Response === "True") {
        setMovies(response.data.Search);
        setError("");
      } else {
        setMovies([]);
        setError(response.data.Error || "No movies found.");
      }
    } catch (err) {
      console.error("Error fetching movies:", err.message);
      setError("Failed to fetch movies. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Database</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          className="border p-2 rounded-l-md w-1/2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchMovies}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
