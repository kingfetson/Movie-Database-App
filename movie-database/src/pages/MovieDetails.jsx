import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${id}`)
      .then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500">⬅ Back to Search</Link>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-64 rounded shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Cast:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Rating:</strong> {movie.imdbRating} ⭐</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
