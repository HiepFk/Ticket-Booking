import React from "react";
import styled from "styled-components";
import Card from "../Card";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

import "swiper/css";

function List({ movies, type }) {
  SwiperCore.use([Autoplay]);

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
        {movies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Card data={item} key={item.id} type={type} />
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
      width: 37%;
    }
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 45%;
    }
  }
  @media (max-width: 600px) {
    .swiper-slide {
      width: 65%;
    }
  }
`;

export default List;
