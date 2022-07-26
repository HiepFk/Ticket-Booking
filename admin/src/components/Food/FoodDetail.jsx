import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc } from "../../apis/handle";
import Loading from "../Loading";
import FoodInput from "./FoodInput";
function FoodDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDoc(setData, setLoading, "food", id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  return <FoodInput data={data} type="info" />;
}

export default FoodDetail;
