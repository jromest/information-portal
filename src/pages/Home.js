import React from "react";
import MainSidebar from "../components/MainSidebar";

const Home = props => (
  <section className="o-container o-flex main">
    <div className="o-flex--basis-30">
      <MainSidebar />
    </div>
    <div className="feed">{props.children}</div>
  </section>
);

export default Home;
