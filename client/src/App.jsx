import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClearAlert } from "./redux/alertSlice";
import {
  Home,
  Login,
  Signup,
  Movies,
  Movie,
  Ticket,
  Seat,
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
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);
  const success = () =>
    toast.success(`${alert.msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const error = () =>
    toast.error(`${alert.msg}`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (alert.type === "success") {
      success();
    }
    if (alert.type === "error") {
      error();
    }
    dispatch(ClearAlert());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.type, alert.msg]);

  return (
    <div>
      <ToastContainer />
      <Header onClick={success} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="movies" element={<Movies />} />
        <Route exact path="movies/:id" element={<Movie />} />
        <Route exact path="movies/ticket/:id" element={<Ticket />} />
        <Route exact path="seat/:id" element={<Seat />} />
        <Route exact path="food" element={<Food />} />
        <Route exact path="checkout" element={<CheckOut />} />
        <Route exact path="/me/*" element={<Me />} />

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
