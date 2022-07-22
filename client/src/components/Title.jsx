import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

function Title({ title }) {
  return (
    <Wrapper className="app">
      <div className="left">
        <div className="cot"></div>
        <div className="title">{title}</div>
      </div>
      <Link to={`movies`} className="right">
        <div className="text">View All</div>
        <BsArrowRight className="icon" />
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .left,
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .cot {
    width: 0.3rem;
    height: 4rem;
    background-color: #ff0000;
    margin-right: 1rem;
  }
  .title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  .right {
    color: #31d7a9;
    font-size: 1.25rem;
    :hover {
      .icon {
        transform: translateX(1rem);
      }
    }
  }
  .icon {
    margin-left: 0.5rem;
    transition: all 0.25s linear;
  }
`;
export default Title;
