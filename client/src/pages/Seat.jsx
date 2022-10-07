import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import Loading from "../components/Loading";
import { getSchedule } from "../apis/schedule";
import screen from "../assets/screen.png";
function Seat() {
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  // const [seat, setSeat] = useState([]);
  const nameArr = ["A", "B", "C", "D", "E", "F", "G"];
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr3 = [7, 8, 9, 10, 11, 12];
  const [ticket, setTicket] = useState({});

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
    setTicket({ ...ticket, seat: selected });
  };

  useEffect(() => {
    getSchedule(setData, setLoading, id, setTicket);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  console.log(ticket);
  return (
    <Wrapper className="app">
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Info :</div>
      </div>
      <div className="info">
        <div className="info_desc">
          <div className="cinema">{data?.room?.cinema?.name}</div>
          <div className="cot">|</div>
          <div className="cinema">{data?.room?.name}</div>
        </div>
        <div className="info_desc">
          <div className="day">{data?.day}</div>
          <div className="cot">|</div>
          <div className="time">{data?.time}</div>
        </div>
        <div className="info_desc">
          <div className="day">Movie</div>
          <div className="cot">: </div>
          <div className="time">{data?.movie?.name}</div>
        </div>
      </div>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Choose your seat :</div>
      </div>
      <div className="types">
        <div className="type">
          <div className="unavailable"></div>
          <div className="text">UnAvailable</div>
        </div>
        <div className="type">
          <div className="available"></div>
          <div className="text">Available</div>
        </div>
      </div>
      <div className="container">
        <div className="img_screen">
          <img src={screen} alt="" />
        </div>
        <div className="seats">
          {nameArr.map((item) => {
            return (
              <div className="seat_line">
                <div className="seat_area">
                  <div className="right">
                    {arr1.map((item_mini) => {
                      return (
                        <>
                          {data?.seatAvailable?.includes(
                            item + "" + item_mini
                          ) && (
                            <>
                              <div
                                alt=""
                                className={"img_seat active"}
                                key={item + "" + item_mini}
                              >
                                {item + "" + item_mini}
                              </div>
                            </>
                          )}

                          {!data?.seatAvailable?.includes(
                            item + "" + item_mini
                          ) && (
                            <div
                              alt=""
                              className={
                                selected.includes(item + "" + item_mini)
                                  ? "img_seat selected"
                                  : "img_seat"
                              }
                              key={item + "" + item_mini}
                              onClick={() =>
                                handeSelected(item + "" + item_mini)
                              }
                            >
                              {item + "" + item_mini}
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                  <div className="left">
                    {arr3.map((item_mini) => {
                      return (
                        <>
                          {data?.seatAvailable?.includes(
                            item + "" + item_mini
                          ) && (
                            <>
                              <div
                                alt=""
                                className={"img_seat active"}
                                key={item + "" + item_mini}
                              >
                                {item + "" + item_mini}
                              </div>
                            </>
                          )}

                          {!data?.seatAvailable?.includes(
                            item + "" + item_mini
                          ) && (
                            <div
                              alt=""
                              className={
                                selected.includes(item + "" + item_mini)
                                  ? "img_seat selected"
                                  : "img_seat"
                              }
                              key={item + "" + item_mini}
                              onClick={() =>
                                handeSelected(item + "" + item_mini)
                              }
                            >
                              {item + "" + item_mini}
                            </div>
                          )}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to={"/checkout"} state={ticket}>
        <div className="btn">Check Out</div>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .info,
  .types {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
  }
  .info_desc,
  .type {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    display: flex;
  }
  .cot {
    margin-right: 1rem;
    margin-left: 1rem;
  }
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
  .active,
  .unavailable {
    background-color: #e53637;
    pointer-events: none;
  }
  .selected,
  .available {
    background-color: #31d7a9;
  }
  .type {
    align-items: center;
  }
  .unavailable,
  .available {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.2rem;
    margin-right: 2rem;
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
