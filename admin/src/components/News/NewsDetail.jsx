import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc } from "../../apis/handle";
import Loading from "../Loading";
import NewsInput from "./NewsInput";
function NewsDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getDoc(setData, setLoading, "news", id);
  }, [id]);
  if (loading) {
    return <Loading />;
  }

  return <NewsInput data={data} type="info" />;
}

export default NewsDetail;
