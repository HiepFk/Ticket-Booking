import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Movies,
  Movie,
  Ticket,
  Seat,
  Food,
} from "./pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="movies" element={<Movies />} />
        <Route exact path="movies/:id" element={<Movie />} />
        <Route exact path="movies/:id/ticket" element={<Ticket />} />
        <Route exact path="movies/:id/seat" element={<Seat />} />
        <Route exact path="food" element={<Food />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
