import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc } from "../../apis/handle";
import Loading from "../Loading";
import CinemaInput from "./CinemaInput";
function CinemaDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDoc(setData, setLoading, "cinema", id);
  }, [id]);
  if (loading) {
    return <Loading />;
  }

  return <CinemaInput data={data} type="info" />;
}

export default CinemaDetail;
