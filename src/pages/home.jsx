import React from "react";
import Upcoming from "../components/upcoming/upcoming";
import Content from "../components/content";

const HomePage = () => {
  return (
  <main className="main">
    <Upcoming/>
    <Content type="movie"/>
    <Content type="tv"/>
  </main>
  );
};

export default HomePage;
