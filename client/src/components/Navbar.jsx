import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { links } from "../utils/link";
import img from "../assets/logo.png";

import styled from "styled-components";

function Navbar() {
  const [choise, setChoise] = useState(false);
  const wrapperRef = useRef();
  useEffect(() => {
    const changeColorWrapper = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        wrapperRef.current.classList.add("change");
      } else {
        wrapperRef.current.classList.remove("change");
      }
    };
    window.addEventListener("scroll", changeColorWrapper);
    return () => {
      window.removeEventListener("scroll", changeColorWrapper);
    };
  }, []);
  return (
    <Wrapper className="app">
      <div className="wrapper">
        <div className="header" ref={wrapperRef}>
          <Link to={"/"} className="header_logo">
            <img src={img} alt="" />
          </Link>
          <div className="btn_open" onClick={() => setChoise(!choise)}>
            {!choise ? <FaBars /> : <FaTimes />}
          </div>
        </div>
      </div>

      <div className={!choise ? "choise" : "choise show"}>
        <ul className="header_links">
          {links.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.url} className="header_link">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to={`/login`} className="header_link">
          Login
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    padding: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .header_logo {
    width: 10rem;
  }
  .change {
    background-color: #18191a;
  }
  .choise {
    position: fixed;
    top: 4.5rem;
    left: 0;
    width: 30%;
    height: 100vh;
    background-color: #18191a;
    transition: all 0.25s linear;
    transform: translate(-100%);
    z-index: -1;
    padding: 2rem;
  }
  .show {
    transform: translate(0);
    z-index: 9999;
  }
  .header_links {
    display: flex;
    flex-direction: column;
  }
  .header_link {
    display: inline-block;
    font-size: 1.25rem;
    color: white;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    &:hover {
      border-bottom: 3px solid #ff4c4c;
    }
  }
  .btn_open {
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.25s linear;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
export default Navbar;
