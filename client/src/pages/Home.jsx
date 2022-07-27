import React from "react";
import Banner from "../components/Home/Banner";
import Service from "../components/Home/Service";
import List from "../components/Home/List";
import Contact from "../components/Home/Contact";
import Title from "../components/Title";
import { events } from "../utils/data";
function Home() {
  return (
    <>
      <Banner />
      <Service />
      <Title title="Movies" />
      <List type="movie" />
      {/* <Title title="Events" />
      <List movies={events} type="event" /> */}
      <Contact />
    </>
  );
}

export default Home;
