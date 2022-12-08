import React, { useEffect } from "react";
import Carousel from "../Components/CircularCarousel/Carousel";
import AboutText from "../Components/AboutText/AboutText";
import { gsap } from "gsap";

export default function About() {
  const [object, setObject] = React.useState();
  const [isClicked, setIsClicked] = React.useState(true);
  const ref = React.useRef();
  useEffect(() => {
    if (isClicked) {
      // gsap.to(ref.current, {
      //   filter: "blur(5px)",
      //   backgroundColor: "rgba(0,0,0,0.9)",
      //   duration: 1,
      // });

      ref.current.style.display = "block";
    } else {
      // gsap.to(ref.current, {
      //   filter: "blur(0px)",
      //   backgroundColor: "rgba(0,0,0,0)",
      //   duration: 1,
      // });
      ref.current.style.display = "none";
    }
  }, [isClicked]);

  return (
    <div
      draggable='false'
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "hidden",
        position: "relative",
      }}
    >
      <div
        onClick={() => setIsClicked(!isClicked)}
        ref={ref}
        style={{
          height: "100vh",
          width: "100vw",
          top: 0,
          left: 0,
          overflowY: "hidden",
          position: "absolute",
          zIndex: 999,
          display: "none",
          backgroundColor: "rgba(0,0,0,.7)",
        }}
        onClick={() => setIsClicked(false)}
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
