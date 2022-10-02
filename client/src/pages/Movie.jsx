import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { getMovie } from "../apis/movie";
import styled from "styled-components";
import Banner from "../components/Detail/Banner";
import Video from "../components/Detail/Video";
function Movie() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error } = useSelector((state) => state.movie);
  const movie = useSelector((state) => state.movie?.movie);

  useEffect(() => {
    getMovie(dispatch, id);
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <Banner movie={movie} />
      <Video video={movie?.video} />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default Movie;
