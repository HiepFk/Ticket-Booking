import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import MyInfo from "../components/Me/MyInfo";
import MyTicket from "../components/Me/MyTicket";
import styled from "styled-components";
function Me() {
  const [choise, setChoise] = useState(1);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);
  const list = [
    {
      id: 1,
      title: "My Info",
    },

    {
      id: 2,
      title: "My Ticket",
    },
  ];
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [navigate, user]);
  return (
    <Wrapper className="app">
      <div className="choise_title">
        <div className="hi">Xin Chào :</div>
        <div className="name">{user?.name}</div>
        {list.map((item) => {
          return (
            <div
              className={
                choise === item.id ? "choise_item active" : "choise_item"
              }
              key={item.id}
              onClick={() => setChoise(item.id)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="choise_list page">
        {choise === 1 && <MyInfo />}
        {choise === 2 && <MyTicket />}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 8rem;
  margin-bottom: 5rem;
  display: flex;
  .choise_title {
    width: 20rem;
    display: flex;
    flex-direction: column;
    .hi {
      font-size: 1.5rem;
    }
    .name {
      margin-bottom: 3rem;
      color: #31d7a9;
      font-size: 1.5rem;
    }
    .choise_item {
      font-size: 1.25rem;
      text-transform: uppercase;
      opacity: 0.8;
      padding-left: 3rem;
      margin-bottom: 2rem;
      border-left: 0.2rem solid transparent;
      transition: all 0.25s linear;
      cursor: pointer;
      :hover {
        color: #31d7a9;
        border-left: 0.2rem solid #31d7a9;
      }
    }
  }
  .active {
    border-left: 0.2rem solid #31d7a9 !important;
    color: #31d7a9;
  }
  .choise_list {
    background-color: #212121 !important;
    width: 100%;
    border-radius: 1rem;
    padding: 0.5rem 2rem;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .choise_title {
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
    }
  }
  @media (max-width: 600px) {
    .choise_title {
      flex-direction: column;
      width: 100%;
    }
  }
`;
export default Me;
