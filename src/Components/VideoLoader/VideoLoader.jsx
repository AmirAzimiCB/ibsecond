import React, { useRef, useEffect, useState } from "react";
import useStore from "../../store/ZustandStore";

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
      console.log(Navigateto);
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
          position: "absolute",
          zIndex: 999999,
          left: 0,
          top: 0,
          width: window.innerWidth,
          minHeight: window.innerHeight,
          objectFit: "fill",
        }}
      >
        <source
          style={{ width: "100vw", height: "100vh" }}
          src={"/Video/final_train.mkv"}
          type='video/mp4'
        />
      </video>
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "5%",
          zIndex: 999999,
          color: "black",
          fontSize: "18px",
          fontWeight: "bold",
          display: showVideo ? "block" : "none",
        }}
      >
        <p>Hold the right arrow key to continue </p>
      </div>
    </div>
  );
}
