import React from "react";
import Carousel from "../Components/CircularCarousel/Carousel";
import AboutText from "../Components/AboutText/AboutText";

export default function About() {
  const [object, setObject] = React.useState();
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div
      draggable='false'
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      <img
        src='/Images/background.png'
        alt='background'
        draggable='false'
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <Carousel setIsClicked={setIsClicked} setObject={setObject} />
      <AboutText
        setIsClicked={setIsClicked}
        isClicked={isClicked}
        object={object}
      />
    </div>
  );
}
