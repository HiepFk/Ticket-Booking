import React from "react";
import img from "../../assets/foods/banner.jpg";
import styled from "styled-components";
function Banner() {
  return (
    <Wrapper
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="wrapper">
        <div className="info">
          <div className="title">WELCOME</div>
          <div className="title_small">
            FOOD FK'CINEMA
            <span>👋</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50vh;
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.4);
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    padding-top: 20vh;
    z-index: 99;
    margin: 0 auto;
    color: white;
    max-width: 1024px;
  }
  .title {
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 5px;
  }
  .title_small {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1rem;
  }
`;
export default Banner;
