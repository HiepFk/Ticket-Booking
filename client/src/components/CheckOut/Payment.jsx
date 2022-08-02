import React from "react";
import styled from "styled-components";
import momo from "../../assets/checkout/momo.png";
import zalo from "../../assets/checkout/zalopay.png";
function Payment() {
  return (
    <Wrapper>
      <div className="title">Phương thức thanh toán :</div>
      <div className="payment">
        <input type="radio" name="classify" id="zalo" />
        <label htmlFor="zalo">
          <img src={zalo} alt="" className="img" />
          <span>Zalo pay</span>
        </label>
      </div>
      <div className="payment">
        <input type="radio" name="classify" id="momo" />
        <label htmlFor="momo">
          <img src={momo} alt="" className="img" />
          <span>Momo</span>
        </label>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 5rem;
  .title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .payment {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    label {
      align-items: center;
      display: flex;
    }
    .img {
      width: 2rem;
      border-radius: 0.5rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
`;
export default Payment;
