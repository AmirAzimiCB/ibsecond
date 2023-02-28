import React, { useRef, useEffect, useState } from "react";
import useStore from "../../store/ZustandStore";
import { BsArrowRightSquare } from "react-icons/bs";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

import "./VideoLoader.css";
export default function VideoLoader({ Navigateto }) {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(useStore.getState().showVideo);
  useEffect(() => {
    if (window.innerWidth < 756) {
      useStore.setState({ showVideo: false });
      return;
    }
    useStore.subscribe(
      () => setShowVideo(useStore.getState().showVideo),
      (state) => state.showVideo
    );
    if (showVideo) {
      //add class to body

      document.body.classList.add("no-scroll");
    } else {
      //remove class from body
      document.body.classList.remove("no-scroll");
    }
    console.log(showVideo);
  }, [showVideo]);

  const handleKeyPress = (event) => {
    if (event.keyCode === 39) {
      videoRef.current.play();
    } else videoRef.current.pause();
  };
  const handleKeyUp = (event) => {
    if (event.keyCode === 39) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keyup", handleKeyUp);
  }, []);

  useEffect(() => {
    const handleEnded = () => {
      videoRef.current.pause();
      window.location.href = Navigateto;
    };

    videoRef.current.addEventListener("ended", handleEnded);
    return () => {
      if (videoRef.current)
        videoRef.current.removeEventListener("ended", handleEnded);
    };
  }, []);
  return (
    <div>
      <video
        ref={videoRef}
        style={{
          display: showVideo ? "block" : "none",
          width: window.innerWidth,
          minHeight: window.innerHeight,
          objectFit: "fill",
          zIndex: 100,
          position: "fixed",
        }}
        className='video'
      >
        <source
          style={{ width: "100vw", height: "100vh" }}
          src={"/Video/Train.mp4"}
          type='video/mp4'
        />
      </video>
      <div
        className='videoText-container'
        style={{
          display: showVideo ? "flex" : "none",
        }}
      >
        <div className='videoText'>
          <div className='vertical-arrow-container'>
            <img
              src='/Images/redarrow.png'
              style={{
                marginTop: "-3%",
                width: "3rem",
                objectFit: "contain",
                transform: "rotate(-90deg)",
              }}
              alt='arrow-down'
            />
            <img
              src='/Images/redarrow.png'
              style={{
                marginBottom: "-3%",
                width: "3rem",
                objectFit: "contain",
                transform: "rotate(90deg)",
              }}
              alt='arrow-down'
            />
          </div>
          <div className='horizontal-arrow-container vertical-arrow-video'>
            <img
              src='/Images/redarrow.png'
              style={{
                width: "3rem",
                objectFit: "contain",
                transform: "rotate(180deg)",
              }}
              alt='arrow-down'
            />
            <img
              src='/Images/redarrow.png'
              style={{
                width: "3rem",
                objectFit: "contain",
                transform: "rotate(0deg)",
              }}
              alt='arrow-down'
            />
          </div>
          <span>
            Press and hold the right arrow key to go to the next page on
            Incendiary Balloons{" "}
            <BsArrowRightSquare
              fontSize={18}
              style={{ marginLeft: ".5rem", alignSelf: "center" }}
            />
          </span>
        </div>
      </div>
    </div>
  );
}
