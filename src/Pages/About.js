import React, { useEffect } from "react";
import Carousel from "../Components/CircularCarousel/Carousel";
import AboutText from "../Components/AboutText/AboutText";

export default function About() {
  const [object, setObject] = React.useState();
  const [isClicked, setIsClicked] = React.useState(false);
  const ref = React.useRef();
  useEffect(() => {
    if (isClicked) {
      ref.current.style.backgroundColor = "rgba(0,0,0,.7)";
    } else {
      ref.current.style.backgroundColor = "rgba(0,0,0,0)";
    }
  }, [isClicked]);

  return (
    <div
      draggable='false'
      style={{
        height: window.innerWidth < 768 ? "101vh" : "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        onClick={() => setIsClicked(false)}
        ref={ref}
        style={{
          height: "100%",
          width: "100vw",
          top: 0,
          left: 0,
          overflowY: "hidden",
          position: "absolute",
          zIndex: 999,
          backgroundColor: "rgba(0,0,0,.01)",
        }}
      ></div>

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
      <Carousel
        setIsClicked={setIsClicked}
        setObject={setObject}
        isClicked={isClicked}
      />
      <AboutText
        setIsClicked={setIsClicked}
        isClicked={isClicked}
        object={object}
      />
    </div>
  );
}
