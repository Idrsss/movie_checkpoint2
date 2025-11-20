import React from "react";

function Filter({ setTitleFilter, setRatingFilter }) {
  return (
    <div style={{ margin: "10px" }}>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating..."
        min="1"
        max="5"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
