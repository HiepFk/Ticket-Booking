import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function ListView({ movies = [""] }) {
  return (
    <Wrapper>
      {movies?.map((item) => {
        return (
          <div className="item">
            <img src={item.poster} alt="" className="img" />
            <div className="info">
              <div className="name">{item.name}</div>
              <div className="time">{item.time}</div>
              <div className="gener">
                {item?.genre.map((item_mini, index) => {
                  return (
                    <span key={index}>
                      {item_mini}
                      <span>
                        {index < item.genre?.length - 1 ? " | " : " "}
                      </span>
                    </span>
                  );
                })}
              </div>
              <div className="date">
                Release Date :{" "}
                {new Date(item?.release_date).toLocaleString().slice(9)}
              </div>
              <div className="desc">{item.description}</div>
              <Link to={`${item?.slug}`} className="btn_load">
                Detail
              </Link>
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
    width: 35rem;
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
    margin-bottom: 3rem;
  }
  .btn_load {
    color: white;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    font-weight: 550;
    font-size: 1rem;
  }
`;
export default ListView;
