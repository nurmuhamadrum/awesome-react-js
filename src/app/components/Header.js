import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../../App.css";
import { facebook, instagram, github } from "./../assets";

class Header extends Component {
  render() {
    return (
      <div id="navbar" className="header-cont">
        <a href="#" className="header-logo">
          MY WEBSITE
        </a>
        <div className="header-menu">
          <Link to={"/"}> Home </Link>
          <Link to={"/services"}> Services </Link>
          <Link to={"/pricing"}> Pricing </Link>
          <Link to={"/request"}> Request </Link>
          <Link to={"/about"}> About </Link>
          <Link to={"/contact"}> Contact </Link>
        </div>
        <div className="header-icon-cont">
          <img className="header-icon" src={facebook} alt="fb" />
          <img className="header-icon" src={instagram} alt="ig" />
          <img className="header-icon" src={github} alt="git" />
        </div>
      </div>
    );
  }
}

export default Header;
