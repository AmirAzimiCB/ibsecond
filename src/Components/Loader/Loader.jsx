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
        <div className='box'>
          <h2>{progress.toFixed(0)}</h2>
        </div>
      </div>
    </Html>
  );
}
