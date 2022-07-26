import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getMovie } from "../../apis/movie";
import Loading from "../Loading";
import MoveInput from "./MoveInput";
function MovieDetail() {
  const { movie, loading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    getMovie(dispatch, id);
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }
  return <MoveInput movie={movie?.data} type="info" />;
}
export default MovieDetail;
