import React from "react";
import img from "../../assets/movie/2.jpg";
import img2 from "../../assets/movie/1.jpg";
import styled from "styled-components";
import { BsClock, BsTag, BsCalendarEvent } from "react-icons/bs";
import { Link } from "react-router-dom";

function Banner() {
  const genres = ["Action", "Adventure"];
  return (
    <Wrapper>
      <div
        className="wrapper"
        style={{
          background: `url(${img}) no-repeat center center /cover`,
        }}
      >
        <div className="container">
          <div className="info">
            <img src={img2} alt="" className="img" />
            <div className="right">
              <div className="name">John Wick</div>
              <div className="desc_list">
                <div className="desc_item">
                  <BsTag className="icon" />
                  {genres?.map((item, index) => {
                    return <span key={index}>{item} | </span>;
                  })}
                </div>
                <div className="desc_item">
                  <BsCalendarEvent className="icon" />
                  <span>06 Dec, 2020</span>
                </div>
                <div className="desc_item">
                  <BsClock className="icon" />
                  <span>2 hrs 50 mins</span>
                </div>
              </div>
              <Link to={"ticket"}>
                <div className="btn">Buy ticket</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 2rem;
  .wrapper {
    height: 85vh;
  }
  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.6);
    height: 85vh;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    padding-top: calc(42.5vh - 15rem);
    z-index: 99;
    margin: 0 auto;
    color: white;
    max-width: 1200px;
  }
  .img {
    width: 20rem;
    border-radius: 1rem;
  }
  .right {
    margin-left: 5rem;
    width: 90%;
  }
  .name {
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 3rem;
  }
  .desc_item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    opacity: 0.8;
  }
  .icon {
    font-size: 1.25rem;
    font-weight: bold;
    margin-right: 1rem;
  }
  .btn {
    margin-top: 3rem;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    padding: 0.5rem 0rem;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 1rem;
    width: 8rem;
    text-align: center;
    text-transform: uppercase;
    color: white;
  }
  @media (max-width: 650px) {
    .info {
      flex-direction: column;
      padding-top: 5rem;
    }
    .img {
      width: 15rem;
    }
    .name {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-left: 0rem;
    }
    .btn {
      margin-top: 1rem;
    }
  }
`;
export default Banner;