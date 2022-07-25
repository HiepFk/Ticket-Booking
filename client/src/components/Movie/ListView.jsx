import React from "react";
import styled from "styled-components";
import { movies } from "../../utils/data";
function ListView() {
  return (
    <Wrapper>
      {movies.map((item) => {
        return (
          <div className="item">
            <img src={item.url} alt="" className="img" />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="time">2hrs 50 min</div>
              <div className="gener">Action | Adventure | Fantasy</div>
              <div className="date">Release Date : November 8 , 2020</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
                maiores, animi pariatur voluptatem incidunt vel nesciunt,
                corporis facere velit est atque id debitis ipsam. Et illum alias
                quia pariatur inventore!
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .item {
    display: flex;
    margin-bottom: 2rem;
  }
  .img {
    width: 15rem;
    height: 22rem;
    margin-right: 2rem;
    border-radius: 1rem;
  }
  .name {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .time {
    color: #31d7a9;
    font-size: 1.25rem;
  }
  .date,
  .gener {
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .desc {
    margin-top: 0.5rem;
    opacity: 0.8;
  }
`;
export default ListView;
