import React from "react";
import styled from "styled-components";
import Sort from "../components/Movie/Sort";
import Filter from "../components/Movie/Filter";
import List from "../components/Movie/List";
import Banner from "../components/Banner";
import img from "../assets/movie/banner.jpg";
function Movies() {
  return (
    <Wrapper>
      <Banner img={img} title="Welcome" desc="GET MOVIE TICKETS" />
      <div className="wrapper app">
        <div className="left">
          <Filter />
        </div>
        <div className="right">
          <Sort />
          <List />
          <div className="btn">Load more</div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .wrapper {
    margin-bottom: 5rem;
    display: flex;
  }
  .left {
    width: 25%;
  }
  .right {
    width: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .btn {
    margin-top: 2rem;
    background-image: -webkit-linear-gradient(
      169deg,
      #5560ff 17%,
      #aa52a1 63%,
      #ff4343 100%
    );
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export default Movies;
