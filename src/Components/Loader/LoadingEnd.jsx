import React, { useEffect, useState, useRef } from "react";

export default function LoadingEnd() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef();
  useEffect(() => {
    const handleEnded = () => {
      setIsPlaying(false);
    };

    videoRef.current?.addEventListener("ended", handleEnded);
  }, []);

  if (window.innerWidth < 768) {
    return null;
  }
  return (
    <div
      className='loader-container'
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1000,
        display: isPlaying ? "flex" : "none",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        preload='auto'
        id='myVideo'
        style={{
          minWidth: window.innerWidth + 500,
          minHeight: window.innerHeight,
          objectFit: "fill",
        }}
      >
        <source
          style={{
            width: "120vw",
            height: "100vh",
          }}
          src='/Video/loadingEnd.mp4'
          type='video/mp4'
        />
      </video>
    </div>
  );
}
