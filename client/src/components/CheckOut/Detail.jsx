import React from "react";
import styled from "styled-components";
function Detail() {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="title_big">Thông tin người đặt :</div>
        <div className="title">
          <div>Name :</div> <span>Nguyễn Huy Hiệp</span>{" "}
        </div>
        <div className="title">
          <div>Email :</div> <span>hiepnh.fk@gmail.com</span>{" "}
        </div>
        <div className="title">
          <div>Phone :</div> <span>0359196312</span>{" "}
        </div>
      </div>

      <div className="wrapper">
        <div className="name">John Wick</div>
        <div className="title">
          <div>Quantity :</div> <span>5</span>
        </div>
        <div className="title">
          <div>Seat :</div> <span>A1,A2</span>
        </div>
        <div className="title">
          <div>Cinema :</div> <span>Hoàng Mai</span>
        </div>
        <div className="title">
          <div>Room :</div> <span>01</span>
        </div>
        <div className="title">
          <div>Date :</div> <span>5h - 12/8/2001</span>
        </div>
        <div className="title">
          <div>Cost :</div> <span>$12</span>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .wrapper {
    margin-bottom: 2rem;
  }
  .name,
  .title_big {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .title {
    font-size: 1.25rem;
    color: #31d7a9;
    margin-bottom: 0.25rem;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 3rem;
      color: white;
    }
  }
`;
export default Detail;
