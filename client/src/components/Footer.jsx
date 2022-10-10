import React from "react";
import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";

import img from "../assets/banner/footer.jpg";
import logo from "../assets/logo.png";
import { socials } from "../utils/social";
function Footer() {
  const Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper
      className="img"
      style={{
        background: `url(${img}) no-repeat center center /cover`,
      }}
    >
      <div className="top" onClick={Top}>
        <IoIosArrowUp className="icon" />
      </div>
      <div className="wrapper app">
        <div className="left">
          <img src={logo} alt="" className="img_logo" />
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            inventore labore, quo quam fugiat explicabo qui, culpa assumenda
            eius rerum voluptatum facere hic dignissimos sit laborum saepe illo
            consectetur natus.
          </div>
        </div>

        <div className="right">
          <div className="socials">
            {socials.map((item) => {
              return (
                <a className="social_item" key={item.id} href={item.url}>
                  <img src={item.img} alt="" className="social_img" />
                </a>
              );
            })}
          </div>
          <div className="footer">
            <h5 style={{ marginBottom: "0.25rem" }}>
              &copy;{new Date().getFullYear()}
              <span> HiepFK </span>
            </h5>
            <h5>All rights reserved</h5>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 15rem;
  .top {
    position: absolute;
    top: -1.5rem;
    left: calc(50% - 1.5rem);
    background-color: #e53637;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 99;
    :hover {
      .icon {
        transform: translateY(-5px);
      }
    }
  }
  .icon {
    color: white;
    font-size: 1.5rem;
    transition: all 0.25s linear;
  }
  .about {
    max-width: 20rem;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
  }
  .img_logo {
    width: 15rem;
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
  .social_item {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .social_img {
    width: 2rem;
  }
  .footer {
    margin-top: 1rem;
    color: white;
    text-align: center;
    font-size: 1.25rem;
  }
  span {
    color: #e53637;
    font-size: 1.25rem;
  }
`;
export default Footer;
