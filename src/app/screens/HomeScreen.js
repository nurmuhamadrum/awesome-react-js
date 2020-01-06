import React, { Component } from "react";
import "./../../App.css";
import BannerImage from "./../assets/header-teamwork.svg";
import { services1, services2, services3 } from "./../assets";

class Banner extends Component {
  render() {
    return (
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
    );
  }
}

class Swiper extends Component {
  render() {
    return (
      <div className="home-slider">
        <h4>Trusted By</h4>
      </div>
    );
  }
}

class Services extends Component {
  render() {
    return (
      <div className="home-services-cont">
        <div className="services-title">
          <h2>Business Growth Services</h2>
          <p>
            We serve small and medium sized companies in all tech related
            industries with high quality growth services which are presented
            below
          </p>
        </div>
        <div className="services-card">
          <div className="services-card-detail">
            <img className="services-card-img" src={services1} />
            <h4>Market Analysis</h4>
            <p>
              Our team of enthusiastic marketers will analyse and evaluate how
              your company stacks against the closest competitors
            </p>
          </div>
          <div className="services-card-detail">
            <img className="services-card-img" src={services1} />
            <h4>Market Analysis</h4>
            <p>
              Our team of enthusiastic marketers will analyse and evaluate how
              your company stacks against the closest competitors
            </p>
          </div>
          <div className="services-card-detail">
            <img className="services-card-img" src={services1} />
            <h4>Market Analysis</h4>
            <p>
              Our team of enthusiastic marketers will analyse and evaluate how
              your company stacks against the closest competitors
            </p>
          </div>
        </div>
      </div>
    );
  }
}

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen-cont">
        <Banner />
        <Services />
      </div>
    );
  }
}

export default HomeScreen;
