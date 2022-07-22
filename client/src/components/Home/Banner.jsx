import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { banner } from "../../utils/banner";

import "swiper/css";

function Banner() {
  SwiperCore.use([Autoplay]);

  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {banner.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="item"
                style={{
                  background: `url(${item?.banner}) no-repeat center center /cover`,
                }}
              >
                <div className="container">
                  <div className="info">
                    <img src={item?.main} alt="" className="img" />
                    <div className="right">
                      <div className="name">{item?.name}</div>
                      <div className="desc">{item?.desc}</div>
                      <div className="button">
                        <Link to={`/`} className="btn book">
                          Book now
                        </Link>
                        <Link to={`/`} className="btn check">
                          Check now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .item {
    height: 100vh;
    position: relative;
    /* padding: 0 1rem; */
  }

  .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(7, 24, 34, 0.6);
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    padding-top: calc(45vh - 12rem);
    z-index: 99;
    margin: 0 auto;
    color: white;
    max-width: 1024px;
  }
  .img {
    width: 20rem;
  }
  .right {
    margin-left: 5rem;
  }
  .name {
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
  .desc {
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }
  .btn {
    padding: 0.5rem 1.25rem;
    border-radius: 1.25rem;
    font-weight: 600;
    font-size: 1.5rem;
  }
  .book {
    background-color: red;
    color: white;
    box-shadow: 0px 0px 7px 8px #ff00004d;
    margin-right: 2rem;
  }
  .check {
    background-color: transparent;
    border: 2px solid white;
    padding: 0.3rem 1.05rem;
    color: white;
  }
`;
export default Banner;
