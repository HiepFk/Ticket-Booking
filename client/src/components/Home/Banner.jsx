import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { banner } from "../../apis/home";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import { banner } from "../../utils/banner";

import "swiper/css";

function Banner() {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    banner(setData, setLoading);
  }, []);

  SwiperCore.use([Autoplay]);

  if (loading) {
    return <Loading />;
  }

  console.log(data);

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
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div
                className="item"
                style={{
                  background: `url(${item?.background}) no-repeat center center /cover`,
                }}
                key={item.id}
              >
                <div className="container">
                  <div className="info">
                    <img src={item?.poster} alt="" className="img" />
                    <div className="right">
                      <div className="name">{item?.name}</div>
                      <div className="desc">{item?.description}</div>
                      <div className="button">
                        <Link
                          to={`/movies/ticket/${item.slug}`}
                          className="btn book"
                        >
                          Book now
                        </Link>
                        <Link to={`/movies/${item.slug}`} className="btn check">
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
    min-height: 100vh;
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
    border-radius: 1rem;
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
  @media (max-width: 768px) {
    .info {
      flex-direction: column;
      text-align: center;
      padding-top: 15vh;
    }
    .desc {
      display: none;
    }
    .name {
      margin-top: 1rem;
      margin-bottom: 2rem;
      text-align: center;
    }
    .right {
      margin-left: 0rem;
    }
  }
  @media (max-width: 600px) {
    .info {
      padding-top: 20vh;
    }
    .name {
      font-size: 2rem;
    }
    .img {
      width: 15rem;
    }
    .btn {
      font-size: 1.25rem;
    }
  }
`;
export default Banner;
