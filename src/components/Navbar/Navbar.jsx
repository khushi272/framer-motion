import React from "react";
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import youtube from "../../images/youtube.png"
import dribble from "../../images/dribbble.png"

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Sidebar/>
        <div className="wrapper">K & S
        <div className="social">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={youtube} alt="" />
          </a>
          <a href="#">
            <img src={dribble} alt="" />
          </a>
        </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
