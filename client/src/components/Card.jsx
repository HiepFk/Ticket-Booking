import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Card({ data, type }) {
  return (
    <Wrapper>
      <div className="wrapper2">
        <Link to={`${data?.slug}`}>
          <img src={data?.poster} alt="" className="img" />
        </Link>
        {type === "event" && (
          <div className="date">
            <div className="day">22 </div>
            <div className="month">Dec </div>
          </div>
        )}
      </div>
      <div className="name">{data?.name}</div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .wrapper2 {
    overflow: hidden;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    position: relative;
    /* cursor: pointer; */
  }
  .img {
    width: 100%;
    height: 100%;
    transition: all 0.25s linear;
    /* cursor: pointer; */
    /* cursor: default; */
    :hover {
      transform: scale(1.1);
    }
  }
  .date {
    position: absolute;
    top: 0;
    left: 2rem;
    padding: 1rem;
    background-color: red;
    border-radius: 0 0 30px 30px;
    background-image: -webkit-linear-gradient(45deg, #f54646 0%, #f53da1 100%);
    text-align: center;
  }
  .name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
    text-align: center;
  }
`;

export default Card;
