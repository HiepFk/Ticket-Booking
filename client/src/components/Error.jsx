import React from "react";
import error from "../assets/error.gif";
import styled from "styled-components";
function Error() {
  return (
    <Wrapper>
      <img src={error} alt="" />;
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 20rem);
  img {
    width: 30rem;
  }
`;
export default Error;
