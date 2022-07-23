import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { movies } from "../../utils/data";
function GridView() {
  return (
    <Wrapper>
      {movies.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
      {movies.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  grid-row-gap: 3rem;
`;
export default GridView;
