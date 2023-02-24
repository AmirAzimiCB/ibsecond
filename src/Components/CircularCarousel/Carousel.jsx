import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";
import "./Carousel.css";

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
        className='about-image-container'
        draggable='false'
      >
        <div className='about-container' draggable='false'>
          <div className='about-instruction-text-container'>
            <div
              style={{
                width:
                  window.innerWidth < 900
                    ? window.innerWidth < 768
                      ? window.innerWidth < 600
                        ? window.innerWidth < 480
                          ? window.innerWidth < 380
                            ? "34%"
                            : "32%"
                          : "30%"
                        : "25%"
                      : "23%"
                    : "20%",
                height: "auto",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "white",
              }}
            >
              <div className='about-instruction-test-arrow-container'>
                <div className='vertical-arrow-container '>
                  <AiOutlineArrowDown
                    size={40}
                    color={"red"}
                    style={{ marginTop: "-15%" }}
                  />
                  <AiOutlineArrowUp
                    size={40}
                    color={"red"}
                    style={{ marginBottom: "-15%" }}
                  />
                </div>
                <div className='horizontal-arrow-container '>
                  <AiOutlineArrowRight
                    size={40}
                    color={"red"}
                    style={{ marginLeft: "-15%" }}
                  />
                  <AiOutlineArrowLeft
                    size={40}
                    color={"red"}
                    style={{ marginRight: "-15%" }}
                  />
                </div>
                <span className='about-instruction-text'>
                  Click on one of the images to read About Our Site
                </span>
              </div>
            </div>
          </div>
          <div className='about-inner-container' ref={ref} draggable='false'>
            <li style={{ "--i": 0 }}>
              <img
                className='icon-img'
                src='/Icons/body.png'
                draggable='false'
                alt='body'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 1 }}>
              <img
                className='icon-img'
                src='/Icons/bottle.png'
                draggable='false'
                alt='bottle'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 2 }}>
              <img
                className='icon-img'
                src='/Icons/earings.png'
                draggable='false'
                alt='earings'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 3 }}>
              <img
                className='icon-img'
                src='/Icons/fist.png'
                draggable='false'
                alt='fist'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 4 }}>
              <img
                className='icon-img'
                src='/Icons/nails.png'
                draggable='false'
                alt='nails'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>

            <li style={{ "--i": 5 }}>
              <img
                className='icon-img'
                src='/Icons/teeth.png'
                draggable='false'
                alt='teeth'
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
