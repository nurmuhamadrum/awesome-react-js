import React, { Component } from "react";
import "./../../App.css";
import BannerImage from "./../assets/header-teamwork.svg";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen-cont">
        <div className="home-screen-banner">
          <div className="home-banner">
            <div className="home-headline">
              <h1>Start Up Landing Page Template Free</h1>
              <p>
                Use Evolo free landing page template to promote your business
                startup and generate leads for the offered services
              </p>
              <a href="#" className="home-btn">
                DISCOVER
              </a>
            </div>
            <div className="home-banner-img">
              <img className="banner-image" src={BannerImage} />
            </div>
          </div>
        </div>
        <div className="home-slider">
          <h4>Trusted By</h4>
          <div>
            {/* <Swiper>
              <div>Slide 1</div>
              <div>Slide 2</div>
              <div>Slide 3</div>
              <div>Slide 4</div>
              <div>Slide 5</div>
            </Swiper> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
