import React from "react";
import Header from "../components/Ticket/Header";
import Schedule from "../components/Ticket/Schedule";
import Seat from "../components/Ticket/Seat";
function Ticket() {
  return (
    <div className="app">
      <Header />
      <Schedule />
      <Seat />
    </div>
  );
}

export default Ticket;
