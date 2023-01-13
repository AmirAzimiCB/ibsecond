import React, { useRef, useEffect, useState } from "react";
import useStore from "../../store/ZustandStore";
import { BsArrowRightSquare } from "react-icons/bs";
import "./VideoLoader.css";
export default function VideoLoader({ Navigateto }) {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(useStore.getState().showVideo);
  useEffect(() => {
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
        className='videoText'
        style={{
          display: showVideo ? "flex" : "none",
        }}
      >
        <span>
          Press and hold the left arrow key to go to the next page on Incendiary
          Balloons{" "}
          <BsArrowRightSquare
            fontSize={18}
            style={{ marginLeft: ".5rem", alignSelf: "center" }}
          />
        </span>
      </div>
    </div>
  );
}
