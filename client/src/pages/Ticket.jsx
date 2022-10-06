import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Ticket/Header";
import Schedule from "../components/Ticket/Schedule";
function Ticket() {
  const [searchParams, setSearchParams] = useSearchParams();
  const today = new Date();

  useEffect(() => {
    setSearchParams({
      city: "Hà Nội",
      day: `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app page">
      <Header setSearchParams={setSearchParams} searchParams={searchParams} />
      <Schedule setSearchParams={setSearchParams} searchParams={searchParams} />
    </div>
  );
}

export default Ticket;
