import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "250px" }}>
      <Link to={`/movie/${title}`}>
        <img src={posterURL} alt={title} style={{ width: "100%" }} />
        <h3>{title}</h3>
        <p>Rating: {rating}/5</p>
      </Link>
    </div>
  );
}

export default MovieCard;

