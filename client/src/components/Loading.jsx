import React from "react";
import styled from "styled-components";
function Loading() {
  return (
    <Wrapper>
      <div className="loading" />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 11rem);
  .loading {
    position: relative;
    height: 5rem;
  }
  .loading:after,
  .loading:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5rem;
    width: 5rem;
    height: 5rem;
  }

  .loading:before {
    z-index: 5;
    border: 5px dashed white;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
    -webkit-animation: dashed 1s linear infinite;
    animation: dashed 1s linear infinite;
  }
  .loading:after {
    z-index: 10;
    border: 5px solid white;
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
    -webkit-animation: dashed 1s ease infinite;
    animation: dashed 1s ease infinite;
  }

  @keyframes dashed {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
