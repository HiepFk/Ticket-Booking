import React from "react";
import { Routes, Route } from "react-router-dom";
import FoodList from "../components/Food/FoodList";
import FoodDetail from "../components/Food/FoodDetail";
import FoodInput from "../components/Food/FoodInput";
function FoodPage() {
  return (
    <Routes>
      <Route exact path="/" element={<FoodList />} />
      <Route exact path=":id" element={<FoodDetail />} />
      <Route exact path="new" element={<FoodInput type="new" />} />
    </Routes>
  );
}

export default FoodPage;
