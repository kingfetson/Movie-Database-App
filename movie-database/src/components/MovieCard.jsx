import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
        alt={movie.Title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{movie.Title}</h2>
        <p className="text-gray-500">{movie.Year}</p>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-500 hover:underline mt-2 block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
