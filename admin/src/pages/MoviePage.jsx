import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "../components/Movie/MovieList";
import MovieDetail from "../components/Movie/MovieDetail";
import MoveInput from "../components/Movie/MoveInput";

function MoviePage() {
  return (
    <Routes>
      <Route exact path="/" element={<MovieList />} />
      <Route exact path=":id" element={<MovieDetail />} />
      <Route exact path="new" element={<MoveInput type="new" />} />
    </Routes>
  );
}
export default MoviePage;
