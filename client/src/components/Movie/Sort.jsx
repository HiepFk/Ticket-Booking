import React, { useState } from "react";
import styled from "styled-components";
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";

function Sort() {
  const [listView, setListView] = useState(false);
  return (
    <Wrapper>
      <div className="icons">
        <div
          className={listView ? "icon" : "icon active"}
          onClick={() => setListView(false)}
        >
          <BsFillGridFill />
        </div>
        <div
          className={!listView ? "icon" : "icon active"}
          onClick={() => setListView(true)}
        >
          <FaList />
        </div>
      </div>
      <form className="sort_form">
        <label htmlFor="sort">Sort by : </label>
        <select name="sort" id="sort" className="sort_input">
          <option value="trending">Trending</option>
          {/* <option value="price-highest"></option> */}
          <option value="name-a">Name ( a-z )</option>
          <option value="name-z">Name ( z-a )</option>
        </select>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1rem 2rem;
  border: 1px solid rgba(163, 177, 198, 0.4);
  border-radius: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 14%;
  }
  .icon {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(163, 177, 198, 0.4);
    border-radius: 1rem;
    font-size: 1rem;
    opacity: 0.8;
    cursor: pointer;
  }
  .active {
    color: #31d7a9;
  }
  label {
    opacity: 0.8;
    margin-right: 0.5rem;
  }
  .sort_input {
    opacity: 0.8;
    outline: 0;
    border: 0;
    border: 1px solid rgba(163, 177, 198, 0.4);
    box-shadow: none;
    flex: 1;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    color: white;
    background-color: #0f0f0f;
    background-image: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;
export default Sort;
