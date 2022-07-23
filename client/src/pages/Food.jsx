import React from "react";
import Banner from "../components/Banner";
import img from "../assets/foods/banner.jpg";

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
