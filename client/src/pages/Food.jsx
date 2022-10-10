import React from "react";

import Banner from "../components/Banner";
import img from "../assets/banner/food.jpg";
import FoodList from "../components/Food/FoodList";
function Food() {
  return (
    <>
      <Banner img={img} desc="FOOD FK'CINEMA" title="Welcome" />
      <FoodList />
    </>
  );
}

export default Food;
