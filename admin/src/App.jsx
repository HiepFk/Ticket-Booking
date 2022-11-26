import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ClearAlert } from "./redux/alertSlice";
import { successAlert, errorAlert } from "./utils/alert";
import {
  HomePage,
  UserPage,
  UserListPage,
  MovieListPage,
  MoviePage,
  FoodListPage,
  FoodPage,
  ChartPage,
  LoginPage,
  AuthLayout,
} from "./pages";
import Navbar from "./components/Navbar";
import MovieNew from "./components/Movie/MovieNew";
import UserNew from "./components/User/UserNew";
import FoodNew from "./components/Food/FoodNew";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    if (!user && !user?.isAdmin) {
      navigate("/login");
    }
  }, [navigate, user]);

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
            <Route exact path="/users" element={<UserListPage />} />
            <Route exact path="/users/:id" element={<UserPage />} />
            <Route exact path="/users/new" element={<UserNew />} />
            <Route exact path="/movies" element={<MovieListPage />} />
            <Route exact path="/movies/:id" element={<MoviePage />} />
            <Route exact path="/movies/new" element={<MovieNew />} />
            <Route exact path="/food" element={<FoodListPage />} />
            <Route exact path="/food" element={<FoodNew />} />
            <Route exact path="/food" element={<FoodPage />} />
            <Route exact path="/chart" element={<ChartPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
