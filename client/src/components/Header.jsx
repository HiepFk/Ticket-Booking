import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../assets/logo.png";
import { links } from "../utils/link";
function Header() {
  const [index, setIndex] = useState(1);
  return (
    <Wrapper>
      <div className="header app">
        <img src={img} alt="" className="img" />
        <div className="menu">
          {links.map((item) => {
            return (
              <Link
                to={item.url}
                key={item.id}
                className={
                  index === item.id ? "item menu_item active" : "item menu_item"
                }
                onClick={() => setIndex(item.id)}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <Link to={`/login`} className="btn item">
          Login
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .img {
    width: 10rem;
  }
  .menu {
    display: flex;
  }
  .menu_item {
    margin-right: 2rem;
    border-bottom: 2.5px solid transparent;
    transition: all 0.25s linear;
    :hover {
      border-bottom: 2.5px solid #31d7a9;
    }
  }
  .active {
    border-bottom: 2.5px solid #31d7a9;
  }
  .item {
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    padding: 2rem 0rem;
    letter-spacing: 1px;
  }
  .btn {
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
  }
`;

export default Header;
