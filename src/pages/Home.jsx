import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="container">
      <h2 align="center" style={{ color: "#fff" }}>
        Welcome to the multi api app, <br /> Choose the options below:
      </h2>
      <div className="row">
        <div className="capsule">
          <Link to="/covid">
            <button className="button green">Corona</button>
          </Link>
          <Link to="/country">
            <button className="button red">Flags</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
