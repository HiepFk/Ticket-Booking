import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFood } from "../../apis/food";
import Loading from "../Loading";
import FoodInput from "./FoodInput";
function FoodDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getFood(setData, setLoading, id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return <FoodInput data={data} type="info" />;
}

export default FoodDetail;
