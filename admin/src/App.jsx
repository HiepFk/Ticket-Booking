import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ClearAlert } from "./redux/alertSlice";
import { successAlert, errorAlert } from "./utils/alert";
import {
  HomePage,
  UserPage,
  MoviePage,
  FoodPage,
  NewsPage,
  CinemaPage,
  ChartPage,
  LoginPage,
  AuthLayout,
} from "./pages";
import Navbar from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (alert.type === "success") {
      successAlert(toast, alert?.msg);
    }
    if (alert.type === "error") {
      errorAlert(toast, alert?.msg);
    }
    dispatch(ClearAlert());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alert.type, alert.msg]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>

      <Navbar />
      <div className="main">
        <Routes>
          <Route exact path="/" element={<AuthLayout />}>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/users/*" element={<UserPage />} />
            <Route exact path="/movies/*" element={<MoviePage />} />
            <Route exact path="/foods/*" element={<FoodPage />} />
            <Route exact path="/news/*" element={<NewsPage />} />
            <Route exact path="/cinemas/*" element={<CinemaPage />} />
            <Route exact path="/chart" element={<ChartPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
