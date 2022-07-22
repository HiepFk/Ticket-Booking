import React from "react";
import styled from "styled-components";

function FoodCard({ data }) {
  return (
    <Wrapper>
      <img src={data.url} alt="" className="img" />
      <div className="name_food">{data.name}</div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: #242526;
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 1rem;
  :before {
    content: "$57";
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
    background: #31d7a9;
    min-width: 4rem;
    min-height: 4rem;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 75%, 0 100%, 0 0);
  }
  :after {
    content: "24%";
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
    background: #eb1436;
    min-width: 4rem;
    min-height: 4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img {
    height: 15rem;
    margin-bottom: 2rem;
  }
  .name_food {
    text-transform: lowercase;
    text-transform: capitalize;
  }
`;

export default FoodCard;
