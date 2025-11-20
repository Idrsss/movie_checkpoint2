import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./movielist";
import MovieDetail from "./moviedetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
