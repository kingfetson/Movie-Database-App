import React, { useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    if (!query) return;
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${query}`
    );
    setMovies(response.data.Search || []);
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
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
