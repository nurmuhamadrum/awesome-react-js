import React, { Component } from "react";
import "./../../App.css";
import Background from "./../assets/header-background.jpg";

class Header extends Component {
  render() {
    return (
      <div className="header-cont">
        <a href="#" className="header-logo">
          MY WEBSITE
        </a>
        <div className="header-menu">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Request</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="header-icon">
          <a href="#">ICON 1</a>
          <a href="#">ICON 2</a>
        </div>
        <div>{/* <img src={Background} alt="Logo" />; */}</div>
      </div>
    );
  }
}

export default Header;
