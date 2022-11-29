import React, { useEffect } from "react";
import Carousel from "../Components/CircularCarousel/Carousel";
import AboutText from "../Components/AboutText/AboutText";
import { gsap } from "gsap";

export default function About() {
  const [object, setObject] = React.useState();
  const [isClicked, setIsClicked] = React.useState(false);
  const ref = React.useRef();
  useEffect(() => {
    if (isClicked) {
      //to blur abount image container
      gsap.to(ref.current, {
        filter: "blur(5px)",
        duration: 1,
      });
      // ref.current.style.background = "rgba(0,0,0,0.9)";
    } else {
      gsap.to(ref.current, {
        filter: "blur(0px)",
        duration: 1,
      });
      //ref.current.style.background = "rgba(0,0,0,0)";
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
      <img
        ref={ref}
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
