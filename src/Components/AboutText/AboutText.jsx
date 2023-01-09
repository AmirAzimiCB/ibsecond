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
      <HiOutlineX
        className='cross-icon'
        onClick={() => {
          console.log("Clicked");
          setIsClicked(false);
        }}
      />

      <div className='about-image'>
        <img
          style={{ height: "100%", width: "100%", overflow: "hidden" }}
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
        <h2 className='about-text-title'>
          The culture, as told by the culture.
        </h2>
        <p className='about-text-desc'>
          One-Of-A-Kind Documentary News Platform Televising the Revolution and
          Reshaping the <span className='hide-text'>Media's Narrative</span> Of
          Our Communities facilisi. Nulla
          <br />
          Yung Lords is a one-of -a kind media publication that disrupts the
          space of news by taking an{" "}
          <span className='hide-text'>avant-garde</span>{" "}
          <span className='hide-text'>approach</span> to the ways news stories
          are traditionally structured.
          <br />A visual multimedia space that is perfectly designed to
          highlight issues <span className='hide-text'>affecting</span> all
          underrepresented groups regardless of race, gender, sexuality,
          identity politics, augmented world views, cultural{" "}
          <span className='hide-text'> experiences</span> , and everything
          in-between. Our primary focus is to highlight cutting edge global and
          domestic issues and provide space, for those who have grown weary of
          the established media’s{" "}
          <span className='hide-text'>mono-dimensional</span> coverage of
          communities of color and those who voices go unheard: via our uniquely
          nuanced immersive journalism. We are a{" "}
          <span className='hide-text'>creative</span> think hub dedicated and
          penned specifically for the people.
          <br />
          We discuss world issues in a nuanced avant garde ways and tackle each
          issue with thoughtful <span className='hide-text'>critiques</span>,
          beautiful imagery, engaging narratives, and insight straight from the{" "}
          <span className='hide-text'>people</span> who live these issues as
          their reality. Yung Lords moves beyond sensationalism to{" "}
          <span className='hide-text'>tackle</span>   the social, political, and
          economic effects of the issues at hand. Immersion journalism at its
          finest.
          <br />
        </p>
        <center>
          <p className='drag-over-text'>
            {window.innerWidth < 768 ? "Hold" : "Drag Over"} to Read Full About
            Section
          </p>
        </center>
      </div>
    </div>
  );
}
