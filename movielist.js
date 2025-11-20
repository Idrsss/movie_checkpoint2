import React, { useState } from "react";
import MovieCard from "./moviecard";
import Filter from "./filter";
import moviesData from "./movies";

function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1
  });

  const handleAddMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
  };

  const filteredMovies = movies.filter(
    (m) =>
      m.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      m.rating >= ratingFilter
  );

  return (
    <div>
      <h2>Watch a New Movie</h2>
      <input
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
      />
      <input
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: Number(e.target.value) })}
      />
      <button onClick={handleAddMovie}>Add Movie</button>

      <Filter setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
