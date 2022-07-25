import React from "react";
import styled from "styled-components";
import screen from "../../assets/seat/screen.png";
import one from "../../assets/seat/1.png";
import two from "../../assets/seat/2.png";
import { MdOutlineChair } from "react-icons/md";

function Seat() {
  const nameArr = ["A", "B", "C", "D", "E", "F", "G"];
  const arr1 = [1, 2, 3, 4];
  const arr2 = [5, 6, 7, 8, 9, 10];
  const arr3 = [11, 12, 13, 14];
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Choose your seat :</div>
      </div>
      <div className="container">
        <div className="img_screen">
          <img src={screen} alt="" />
        </div>
        <div className="seats">
          {nameArr.map((item) => {
            return (
              <div className="seat_line">
                <span>{item}</span>
                <div className="seat_area">
                  <div className="right">
                    {arr1.map((item) => {
                      return (
                        <img src={one} alt="" className="img_seat" key={item} />
                      );
                    })}
                  </div>
                  <div className="center">
                    {arr2.map((item) => {
                      return (
                        <img src={one} alt="" className="img_seat" key={item} />
                      );
                    })}
                  </div>
                  <div className="left">
                    {arr3.map((item) => {
                      return (
                        <img src={one} alt="" className="img_seat" key={item} />
                      );
                    })}
                  </div>
                </div>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 5rem;
  .title {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
  }
  .pillar {
    width: 0.25rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.75rem;
    color: white;
    font-weight: 600;
  }
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .img_screen {
    max-width: 1170px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .seat_line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .seat_area {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .right,
  .center,
  .left {
    display: flex;
    justify-content: space-between;
  }
  .img_seat {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;
export default Seat;
