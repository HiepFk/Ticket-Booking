import React from "react";
import styled from "styled-components";

function Schedule() {
  const time = [
    "9:30",
    "10:45",
    "12:00",
    "13:45",
    "15:00",
    "16:30",
    "17:15",
    "18:00",
    "19:30",
    "20:45",
    "21:30",
    "22:15",
    "23:00",
  ];
  const room = ["01", "02", "03", "04", "05", "06"];
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Chọn phòng :</div>
      </div>
      <div className="dates">
        {room.map((item, index) => {
          return (
            <div className="date" key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Thời gian chiếu :</div>
      </div>
      <div className="dates">
        {time.map((item, index) => {
          return (
            <div className="date" key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 3rem;
  .title {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 2rem;
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
  .dates {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
    margin-top: 1rem;
  }
  .date {
    padding: 0.5rem 0.75rem;
    background-color: #212121;
    text-align: center;
    border-radius: 0.5rem;
    transition: all 0.25s linear;
    cursor: pointer;
    :hover {
      background-color: #31d7a9;
    }
  }
`;

export default Schedule;
