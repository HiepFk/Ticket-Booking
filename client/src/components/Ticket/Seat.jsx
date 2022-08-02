import React, { useState } from "react";
import styled from "styled-components";
import screen from "../../assets/seat/screen.png";
import { Link } from "react-router-dom";
function Seat() {
  const [selected, setSelected] = useState([]);
  const nameArr = ["A", "B", "C", "D", "E", "F", "G"];
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr3 = [7, 8, 9, 10, 11, 12];

  const handeSelected = (value) => {
    if (selected.includes(value)) {
      setSelected(
        selected.filter((item) => {
          return item !== value;
        })
      );
    } else {
      setSelected([...selected, value]);
    }
  };

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
                {/* <span>{item}</span> */}
                <div className="seat_area">
                  <div className="right">
                    {arr1.map((item_mini) => {
                      return (
                        <div
                          alt=""
                          className={
                            selected.includes(item + "" + item_mini)
                              ? "img_seat selected"
                              : "img_seat"
                          }
                          key={item + "" + item_mini}
                          onClick={() => handeSelected(item + "" + item_mini)}
                        >
                          {item + "" + item_mini}
                        </div>
                      );
                    })}
                  </div>
                  <div className="left">
                    {arr3.map((item_mini) => {
                      return (
                        <div
                          alt=""
                          className={
                            selected.includes(item + "" + item_mini)
                              ? "img_seat selected"
                              : "img_seat "
                          }
                          key={item + "" + item_mini}
                          onClick={() => handeSelected(item + "" + item_mini)}
                        >
                          {item + "" + item_mini}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* <span>{item}</span> */}
              </div>
            );
          })}
        </div>
      </div>
      <Link to={"/checkout"}>
        <div className="btn">Check Out</div>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
    /* width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center; */
    margin-bottom: 2rem;
  }
  .seat_area {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .right,
  .left {
    display: flex;
  }
  .img_seat {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    background-color: #4e5155;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.15s linear;
    :hover {
      background-color: #31d7a9;
    }
  }
  .active {
    background-color: #e53637;
    pointer-events: none;
  }
  .selected {
    background-color: #31d7a9;
  }
  .btn {
    margin-top: 2rem;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    padding: 0.5rem 0rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;
    width: 7rem;
    text-align: center;
    color: white;
  }
`;
export default Seat;
