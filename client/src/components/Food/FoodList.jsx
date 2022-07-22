import React from "react";
import { foods } from "../../utils/data";
import FoodCard from "./FoodCard";
import styled from "styled-components";
function FoodList() {
  return (
    <Wrapper className="app">
      <div className="title_1">YOU'RE HUNGRY</div>
      <div className="title_2">WE HAVE FOOD</div>
      <div className="title_3">Prebook Your Meal and Save More!</div>
      <div className="wrapper">
        {foods.map((item) => {
          return <FoodCard data={item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  margin-top: 2rem;
  .title_1 {
    font-size: 2rem;
    color: #0ea292;
    margin-bottom: 1rem;
  }
  .title_2 {
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }
  .wrapper {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
    grid-row-gap: 5rem;
  }
`;
export default FoodList;
