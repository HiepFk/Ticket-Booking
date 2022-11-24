import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Loading from "../Loading";
import { getListMovie } from "../../apis/movie";
import { LoginSuccess } from "../../redux/authSlice";
import { createAxios } from "../../apis/createInstance";

import { Link } from "react-router-dom";
function MovieTable() {
  const auth = useSelector((state) => state.auth.user);
  const movies = useSelector((state) => state.movie?.movies?.data);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();

  let axiosJWT = createAxios(auth, dispatch, LoginSuccess);

  useEffect(() => {
    getListMovie(dispatch, axiosJWT, auth?.accessToken);
  }, []);

  const handleDelete = (id) => {
    console.log(id);
  };

  if (loading) {
    return <Loading />;
  }

  console.log(movies);
  return <Wrapper></Wrapper>;
}
const Wrapper = styled.div``;

export default MovieTable;
