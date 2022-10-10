import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { filterMovie, sortMovie, setFilterMovie } from "../../apis/filter";
import GridView from "./GridView";
import ListView from "./ListView";

function List({ movies }) {
  const dispatch = useDispatch();
  const listView = useSelector((state) => state.filter.listView);

  const FilterMovies = useSelector((state) => state.filter.filtered_movies);
  const { text, classify, genre } = useSelector(
    (state) => state.filter.filters
  );
  const sort = useSelector((state) => state.filter.sort);
  useEffect(() => {
    setFilterMovie(dispatch, movies);
  }, [dispatch, movies]);

  useEffect(() => {
    filterMovie(dispatch);
    sortMovie(dispatch);
  }, [dispatch, sort, text, classify, genre]);

  if (FilterMovies?.length === 0) {
    return <NoProduct>Sorry , no movies can't be found 😥</NoProduct>;
  }
  return (
    <Wrapper>
      {listView ? (
        <ListView movies={FilterMovies} />
      ) : (
        <GridView movies={FilterMovies} />
      )}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
`;
const NoProduct = styled.div`
  color: white;
  font-size: 2rem;
`;
export default List;
