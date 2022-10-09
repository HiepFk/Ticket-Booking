import React from "react";
import styled from "styled-components";
function Detail({ data, user }) {
  return (
    <Wrapper>
      <div className="wrapper">
        <div className="title_big">Thông tin người đặt :</div>
        <div className="title">
          <div>Name :</div> <span>{user?.name}</span>{" "}
        </div>
        <div className="title">
          <div>Email :</div> <span>{user?.email}</span>{" "}
        </div>
        <div className="title">
          <div>Phone :</div> <span>{user?.number}</span>{" "}
        </div>
      </div>

      <div className="wrapper">
        <div className="name">{data?.name}</div>
        <div className="title">
          <div>Quantity :</div> <span>{data?.seat?.length}</span>
        </div>
        <div className="title">
          <div>Seat :</div>
          <div>
            {data?.seat?.map((item, id) => {
              return (
                <span className="seat" key={id}>
                  {item},
                </span>
              );
            })}
          </div>
        </div>
        <div className="title">
          <div>Cinema :</div> <span>{data?.cinema}</span>
        </div>
        <div className="title">
          <div>Room :</div> <span>{data?.room}</span>
        </div>
        <div className="title">
          <div>Date :</div>{" "}
          <span>
            {data?.time} - {data?.day}
          </span>
        </div>
        <div className="title">
          <div>One ticket Cost :</div> <span>$5</span>
        </div>
        <div className="title">
          <div>Total :</div> <span>{`$${data?.seat?.length * 5}`}</span>
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
    display: flex;
    justify-content: space-between;
    span {
      margin-left: 3rem;
      color: white;
    }
  }
  .seat {
    margin-left: 0.5rem !important;
  }
`;
export default Detail;
