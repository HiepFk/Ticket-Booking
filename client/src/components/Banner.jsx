import React from "react";
import styled from "styled-components";
function Banner({ img, title, desc }) {
  return (
    <Wrapper
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="wrapper">
        <div className="info">
          <div className="title">{title}</div>
          <div className="title_small">
            {desc}
            <span>👋</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50vh;
  margin-bottom: 2rem;
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.4);
    height: 50vh;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    text-transform: uppercase;
    text-align: center;
  }
  .title_small {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1rem;
    text-align: center;
  }
  /* @media (max-width: 768px) {
    .info {
      padding-top: 10vh;
    }
  } */
`;
export default Banner;
