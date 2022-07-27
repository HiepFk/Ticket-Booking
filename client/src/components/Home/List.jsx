import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { banner } from "../../apis/home";
import Loading from "../Loading";

import "swiper/css";

function List({ movies, type }) {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    banner(setData, setLoading);
  }, []);

  SwiperCore.use([Autoplay]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="app">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={50}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card data={item} key={item.id} type={type} key={item.id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  .swiper-slide {
    width: 30%;
  }
  @media (max-width: 992px) {
    .swiper-slide {
      width: 40%;
    }
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    .swiper-slide {
      width: 65%;
    }
  }
`;

export default List;
