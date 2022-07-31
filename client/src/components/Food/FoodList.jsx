import React, { useState, useEffect } from "react";
import { getAllFoods } from "../../apis/food";
import Loading from "../Loading";

import FoodCard from "./FoodCard";
import styled from "styled-components";
function FoodList() {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getAllFoods(setData, setLoading);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="app">
      <div className="title_1">YOU'RE HUNGRY</div>
      <div className="title_2">WE HAVE FOOD</div>
      <div className="title_3">Prebook Your Meal and Save More!</div>
      <div className="wrapper">
        {data?.map((item) => {
          return <FoodCard data={item} key={item.id} />;
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 5rem;
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
