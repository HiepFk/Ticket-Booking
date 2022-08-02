import React from "react";
import Detail from "../components/CheckOut/Detail";
import Payment from "../components/CheckOut/Payment";
import styled from "styled-components";

function CheckOut() {
  return (
    <Wrapper className="app">
      <div className="left">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/booking-ticket-online-fk.appspot.com/o/movie%2Fmain_5.jpg?alt=media&token=1cbdf27a-5b2e-4c71-9e39-805383bac0c2"
          alt=""
          className="img"
        />
        <Payment />
      </div>
      <Detail />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 2rem;
  .img {
    width: 20rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 740px) {
    .img {
      width: 100%;
    }
  }
`;
export default CheckOut;
