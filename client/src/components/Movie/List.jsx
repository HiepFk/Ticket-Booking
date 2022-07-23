import React from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import styled from "styled-components";
function List({ listView }) {
  return <Wrapper>{listView ? <ListView /> : <GridView />}</Wrapper>;
}
const Wrapper = styled.div`
  width: 100%;
`;
export default List;
