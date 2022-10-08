import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { createAxios } from "../apis/createInstance";
import { LoginSuccess } from "../redux/authSlice";
import { addTicket } from "../apis/schedule";

import Detail from "../components/CheckOut/Detail";
import Payment from "../components/CheckOut/Payment";
import styled from "styled-components";

function CheckOut() {
  const location = useLocation();
  const data = location.state;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user);
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, LoginSuccess);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);

  const addHandler = (e) => {
    e.preventDefault();
    const ticket = {
      schedule: data?.schedule,
      seat: data?.seat,
      quantity: data?.seat?.length,
      price: data?.seat?.length * 5,
    };
    // console.log(ticket);
    addTicket(ticket, navigate, axiosJWT, user?.accessToken);
  };

  return (
    <Wrapper className="app">
      <div className="wrapper">
        <div className="left">
          <img src={data?.poster} alt="" className="img" />
          <Payment />
        </div>
        <Detail data={data} user={user} />
      </div>
      <div className="btn">
        <button onClick={addHandler}>Mua vé</button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 2rem;
  }
  .img {
    width: 20rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  .btn {
    text-align: center;
    button {
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
      border: none;
    }
  }

  @media (max-width: 740px) {
    .img {
      width: 100%;
    }
  }
`;
export default CheckOut;
