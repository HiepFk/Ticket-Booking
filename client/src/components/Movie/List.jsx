import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from "../../apis/movie";
import styled from "styled-components";
import GridView from "./GridView";
import ListView from "./ListView";
import Loading from "../Loading";

function List({ listView }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movie?.loading);
  const movies = useSelector((state) => state.movie?.movies?.movies);

  useEffect(() => {
    // clearFilter(dispatch);
    getAllMovie(dispatch);
  }, [dispatch]);

  if (loading || !movies) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {listView ? <ListView movies={movies} /> : <GridView movies={movies} />}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
`;
export default List;
