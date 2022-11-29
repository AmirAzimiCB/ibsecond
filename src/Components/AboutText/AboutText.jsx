import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { HiOutlineX } from "react-icons/hi";
import "./AboutText.css";
export default function AboutText({ setIsClicked, isClicked, object }) {
  const ref = useRef();
  useEffect(() => {
    if (isClicked) {
      gsap.to(ref.current, {
        duration: 1.5,
        opacity: 1,
        ease: "ease-out",
        y: 0,
      });
    } else {
      gsap.to(ref.current, {
        duration: 1.5,
        opacity: 0,
        ease: "ease-in",
        y: window.innerHeight,
      });
    }
  }, [isClicked]);

  return (
    <div
      ref={ref}
      className='about-text-container'
      onPointerEnter={() => (document.body.style.cursor = "default")}
    >
      <HiOutlineX className='cross-icon' onClick={() => setIsClicked(false)} />
      <div className='about-image'>
        <img
          style={{ height: "75%", width: "100%", overflow: "hidden" }}
          src={"/Images/aboutText.png"}
          alt='about'
        />
      </div>

      <div
        className='about-text'
        onPointerEnter={() => {
          let results = document.getElementsByTagName("span");
          Array.from(results).map(
            (item) => (item.style.backgroundColor = "#fff")
          );
        }}
        onPointerLeave={() => {
          let results = document.getElementsByTagName("span");
          Array.from(results).map(
            (item) => (item.style.backgroundColor = "#000")
          );
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 400,
            letterSpacing: "0.1rem",
          }}
        >
          The culture, as told by the culture.
        </h1>
        <p>
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. <span className='hide-text'> Nulla facilisi. </span>
          <br />
          <br />
          Lorem ipsum dolor sit amet,
          <span className='hide-text'> Nulla facilisi. </span>consectetur
          adipiscing elit. Sed condimentum, nisl ut aliquam lacinia, nunc nisl
          aliquam nisl, <span className='hide-text'> Nulla facilisi. </span>{" "}
          quis aliquam nisl nunc vel nunc. Nulla facilisi. Nulla facilisi. Nulla
          Nulla facilisi. Nulla facilisi.
          <br />
          <span className='hide-text'> Nulla facilisi. </span> Nulla facilisi.
          Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla <span className='hide-text'> Nulla facilisi. </span>
          <br />
          <br />
          <span className='hide-text'> Nulla facilisi. </span>lacinia, nunc nisl
          i. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.{" "}
          <span className='hide-text'> Nulla facilisi. </span> Nulla facilisi.
          Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi
          <br />
        </p>
        <center>
          <p className='drag-over-text'>Drag Over to Read Full About Section</p>
        </center>
      </div>
    </div>
  );
}
