import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import "./Carousel.scss";

export default function Carousel({ setObject, setIsClicked, isClicked }) {
  const ref = useRef();
  const refAboutImage = useRef();

  const handleClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      gsap.to(refAboutImage.current, {
        duration: 1.5,
        opacity: 0,
        ease: "ease-out",
      });
      ref.current.style.animationPlayState = "paused";
    } else {
      gsap.to(refAboutImage.current, {
        duration: 1.5,
        opacity: 1,
        ease: "ease-out",
      });
      ref.current.style.animationPlayState = "running";
    }
  }, [isClicked]);

  const onHover = () => {
    document.body.style.cursor = "pointer";
    ref.current.style.animationPlayState = "paused";
  };
  const onHoverOut = () => {
    ref.current.style.animationPlayState = "running";
    document.body.style.cursor = "default";
  };
  return (
    <>
      <div
        ref={refAboutImage}
        className="about-image-container"
        draggable="false"
      >
        <div className="about-container" draggable="false">
          <div className="about-instruction-text-container">
            <div
              style={{
                width:
                  window.innerWidth < 900
                    ? window.innerWidth < 768
                      ? window.innerWidth < 600
                        ? window.innerWidth < 480
                          ? window.innerWidth < 380
                            ? "36%"
                            : "32%"
                          : "30%"
                        : "25%"
                      : "32%"
                    : "20%",
                height: "auto",
                padding: "10px",
                textAlign: "center",
              }}
              className="about-instruction-text-background"
            >
              <div className="about-instruction-test-arrow-container">
                <div className="vertical-arrow-container vertical-arrow-manifesto ">
                  <div class="arrow arrow-down">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="arrow arrow-up">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="horizontal-arrow-container horizontal-arrow-manifesto ">
                  <div class="arrow arrow-left">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="arrow arrow-right">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <span className="about-instruction-text">
                  Click on one of the images to read About Our Site
                </span>
              </div>
            </div>
          </div>
          <div className="about-inner-container" ref={ref} draggable="false">
            <li style={{ "--i": 0 }}>
              <img
                className="icon-img"
                src="/Icons/body.png"
                draggable="false"
                alt="body"
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 1 }}>
              <img
                className="icon-img"
                src="/Icons/bottle.png"
                draggable="false"
                alt="bottle"
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 2 }}>
              <img
                className="icon-img"
                src="/Icons/earings.png"
                draggable="false"
                alt="earings"
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 3 }}>
              <img
                className="icon-img"
                src="/Icons/fist.png"
                draggable="false"
                alt="fist"
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 4 }}>
              <img
                className="icon-img"
                src="/Icons/nails.png"
                draggable="false"
                alt="nails"
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>

            <li style={{ "--i": 5 }}>
              <img
                className="icon-img"
                src="/Icons/teeth.png"
                draggable="false"
                alt="teeth"
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
