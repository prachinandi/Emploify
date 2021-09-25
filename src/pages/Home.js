import React from "react";
import { Link } from "react-router-dom";
import BackImage from "../assets/hom.png";
import "../styles/Home.css";
import About from "./About";

function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${BackImage})` }}>
      <div className="headerContainer">
        <h1> HIRE US </h1>
        <p> We are here for you:)</p>
        <Link to="/hire">
          <button> HIRE US </button>
        </Link>
      </div>
      </div>
    <About/>
    </>
  
  );
}

export default Home;
