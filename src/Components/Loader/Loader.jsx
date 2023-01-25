import React from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loader.css";

export default function Loader({ setIsLoading }) {
  const { progress } = useProgress();
  if (progress > 70) {
    setIsLoading(false);
  }
  return (
    <Html>
      <div className='loader-container'>
        <div className='loader-text'>
          <span className='loader-percent'>{progress.toFixed(2)}%</span>
          <div class='loading-anim'>
            <span class='loading-p'>l</span>
            <span class='loading-p'>o</span>
            <span class='loading-p'>a</span>
            <span class='loading-p'>d</span>
            <span class='loading-p'>i</span>
            <span class='loading-p'>n</span>
            <span class='loading-p'>g</span>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          id='myVideo'
          style={{
            width:
              window.innerWidth < 756
                ? window.innerWidth * 2
                : window.innerWidth,
            minHeight: window.innerHeight,
            objectFit: "fill",
          }}
        >
          <source
            style={{
              width: window.innerWidth < 756 ? "150vw" : "100vw !important",
              height: "100vh",
            }}
            src='/Video/loader.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </Html>
  );
}
