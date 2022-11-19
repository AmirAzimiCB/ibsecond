import React from "react";
import Icon from "../Components/3dModels/Icon";

export default function About() {
  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className='container'
    >
      <img
        style={{ height: "100vh", width: "100%", overflow: "hidden" }}
        src={"/Images/background.png"}
        alt='background'
      />
      <Icon />
    </div>
  );
}
