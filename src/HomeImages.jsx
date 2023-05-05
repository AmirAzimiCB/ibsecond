import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomeImages.css";

export default function HomeImages() {
  const descRefTop = React.useRef(null);

  return (
    <div
      style={{ zIndex: 9999 }}
      className="imagesContainer"
      id="imagesContainer"
    >
      <img className="homeBg" src="/Images/Home-bg.png" alt="1" border="0" />
      <div className="mainContainer">
        <div className="left-img-container">
          <img
            className="left-img"
            src="/Images/Home-img-left.png"
            alt="1"
            border="0"
          />
          <div className="home-desc-text" id="home-desc-text">
            <span ref={descRefTop} id="topText" className="top-text">
              Welcome to Incendiary Balloons! We are a One-Of-A-Kind Documentary
              News Platform Televising the Revolution and Reshaping the Media's
              Narrative Of Our Communities. You are about to enter our 3D Art
              Gallery. Once you enter, press the keys on your keyboard to move
              around the gallery and view all of our website categories.
              <br />
              <br />
              Use your mouse to click on each art installation picture frame.
              Every individual art piece leads you to read more about each
              individual news topic. If you are using your mobile phone, please
              navigate around the gallery by swiping in the direction that you
              would like to go in.
            </span>
          </div>
        </div>
        <div className="right-img-container">
          <div className="right-img-inner-upper-container">
            <Link to="/gallery">
              <div className="right-img-inner-upper">
                <img
                  src="/Images/Home-img1.png"
                  alt="1"
                  border="0"
                  className="home-img upper-right-img"
                />
                <div className="home-text-container">
                  <span className="home-text-container-span">ENTER</span>
                </div>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="right-img-inner-upper">
                <img
                  src="/Images/Home-img2.png"
                  alt="1"
                  className="home-img upper-right-img"
                  border="0"
                />
                <div className="home-text-container">
                  <span className="home-text-container-span">THE</span>
                </div>
              </div>
            </Link>
          </div>
          <Link to="/gallery">
            <div className="right-img-inner-lower-container">
              <div className="right-img-inner-lower">
                <img
                  src="/Images/Home-img3.png"
                  className="home-img"
                  alt="1"
                  border="0"
                />
                <div className="home-text-container">
                  <span className="home-text-container-span">GALLERY</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
