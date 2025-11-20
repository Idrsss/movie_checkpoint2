import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./movies";

function MovieDetail() {
  const { title } = useParams(); // get title from URL
  const movie = movies.find((m) => m.title === title);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/5</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
