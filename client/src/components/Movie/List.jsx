import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";
function List() {
  return (
    <Wrapper>
      <GridView />
      <ListView />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;
export default List;
