import React from "react";
import styled from "styled-components";
import { classify, genre, experience } from "../../utils/data.js";
function Filter() {
  return (
    <Wrapper>
      <form action="" className="form">
        <div className="filter">
          <p>Filter by</p>
          <div className="btn_clear">Clear all</div>
        </div>
        <input type="text" className="search" placeholder="Name of movie" />
        {/* classify */}
        <div className="form_group">
          <div className="title">Classify</div>
          {classify.map((item) => {
            return (
              <div className="item" key={item.id}>
                <input type="checkbox" id={item.id} />
                <label htmlFor={item.id}>
                  <span></span> {item.title}
                </label>
              </div>
            );
          })}
        </div>
        {/* classify */}
        <div className="form_group">
          <div className="title">Genre</div>
          {genre.map((item) => {
            return (
              <div className="item" key={item.id}>
                <input type="checkbox" id={item.id} />
                <label htmlFor={item.id}>
                  <span></span> {item.title}
                </label>
              </div>
            );
          })}
        </div>
        {/* classify */}
        <div className="form_group">
          <div className="title">Experience</div>
          {experience.map((item) => {
            return (
              <div className="item" key={item.id}>
                <input type="checkbox" id={item.id} />
                <label htmlFor={item.id}>
                  <span></span> {item.title}
                </label>
              </div>
            );
          })}
        </div>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .form_group {
    padding: 1rem 0.75rem;
    background-color: #212121;
    width: 80%;
    margin-top: 2rem;
    border-radius: 1rem;
  }
  .filter {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    p {
      font-size: 1.75rem;
      font-weight: 600;
      color: #31d7a9;
    }
    .btn_clear {
      color: #f1481f;
      font-size: 1rem;
      letter-spacing: 1px;
    }
  }
  .search {
    width: 80%;
    background-color: transparent;
    border: 1px solid rgba(163, 177, 198, 0.4);
    padding: 0.5rem 1rem;
    color: rgba(255, 255, 255, 0.7);
    border-radius: 1rem;
    font-size: 1rem;
  }
  .title {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .item {
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
    label {
      display: flex;
      align-items: center;
      color: #9e9e9e;
      position: relative;
    }
    label > span {
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      border: 2px solid #9e9e9e;
      margin-right: 15px;
      border-radius: 3px;
      transition: all 0.3s;
    }
    input:checked + label > span {
      border: 10px solid #31d7a9;
    }

    input:checked + label > span::before {
      content: "";
      position: absolute;
      top: 0.2rem;
      border-right: 2px solid transparent;
      border-bottom: 2px solid transparent;
      width: 0.4rem;
      height: 0.8rem;
      border-color: #212121;
      transform: rotate(45deg);
    }
  }
  @media (max-width: 992px) {
    .filter,
    .form_group,
    .search {
      width: 100%;
    }
  }
`;
export default Filter;
