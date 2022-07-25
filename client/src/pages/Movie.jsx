import React from "react";
import styled from "styled-components";
import Banner from "../components/Detail/Banner";
import Video from "../components/Detail/Video";
function Movie() {
  return (
    <Wrapper>
      <Banner />
      <Video />
    </Wrapper>
  );
}
const Wrapper = styled.div``;
export default Movie;
