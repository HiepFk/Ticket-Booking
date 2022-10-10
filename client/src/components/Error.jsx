import React from "react";
import styled from "styled-components";
import error from "../assets/error.gif";
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
  height: calc(100vh - 15rem);
  img {
    width: 30rem;
  }
`;
export default Error;
