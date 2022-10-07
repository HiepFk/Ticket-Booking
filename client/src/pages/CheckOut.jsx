import React from "react";
import { useLocation } from "react-router-dom";

import Detail from "../components/CheckOut/Detail";
import Payment from "../components/CheckOut/Payment";
import styled from "styled-components";

function CheckOut() {
  const location = useLocation();
  const data = location.state;

  console.log(data);
  return (
    <Wrapper className="app">
      <div className="left">
        <img src={data?.poster} alt="" className="img" />
        <Payment />
      </div>
      <Detail data={data} />
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
