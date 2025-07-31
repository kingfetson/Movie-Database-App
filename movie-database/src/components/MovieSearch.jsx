import React, { useState } from 'react';
import { searchMovies } from './services/api';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchMovies(query);
      setMovies(data.Search || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">🎬 Movie Database</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="border p-2 rounded w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          onClick={handleSearch} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="border p-3 rounded shadow">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{movie.Title}</h2>
            <p className="text-gray-500">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
