import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Signup,
  Movies,
  Movie,
  Ticket,
  Food,
  CheckOut,
  Me,
  ActivationEmail,
  ForgotPassword,
  ResetPassword,
} from "./pages";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="movies" element={<Movies />} />
        <Route exact path="movies/:id" element={<Movie />} />
        <Route exact path="movies/ticket/:id" element={<Ticket />} />
        <Route exact path="food" element={<Food />} />
        <Route exact path="checkout" element={<CheckOut />} />
        <Route exact path="me" element={<Me />} />

        <Route
          exact
          path="user/activate/:activation_token"
          element={<ActivationEmail />}
        />
        <Route
          exact
          path="user/reset/:activation_token"
          element={<ResetPassword />}
        />
        <Route exact path="forgot" element={<ForgotPassword />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
