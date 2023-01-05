import React from "react";
import { Html, useProgress } from "@react-three/drei";
import "./Loader.css";

export default function Loader({ setIsLoading }) {
  const { progress } = useProgress();
  if (progress > 95) {
    setIsLoading(false);
  }
  return (
    <Html>
      <div className='loader-container'>
        <video autoPlay muted loop id='myVideo'>
          <source
            style={{
              width: window.innerWidth,
              height: window.innerHeight,
            }}
            src='/Video/loader.mp4'
            type='video/mp4'
          />
        </video>
      </div>
    </Html>
  );
}
