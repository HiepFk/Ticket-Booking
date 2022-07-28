import React from "react";
import styled from "styled-components";
import Card from "../Card";
function GridView({ movies = [""] }) {
  return (
    <Wrapper>
      {movies?.map((item) => {
        return (
          <div className="movie_item">
            <Card data={item} key={item.id} className="movie_item" />
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  grid-row-gap: 3rem; */
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-left: -2.5rem;
  .movie_item {
    margin-left: 2.5rem;
    width: calc(100% / 3 - 2.5rem);
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    .movie_item {
      width: calc(100% / 2 - 2.5rem);
    }
  }
  @media screen and (max-width: 480px) {
    .movie_item {
      width: calc(100% / 1 - 2.5rem);
    }
  }
`;
export default GridView;
