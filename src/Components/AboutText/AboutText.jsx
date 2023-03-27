import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import "./AboutText.css";
export default function AboutText({ setIsClicked, isClicked, object }) {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
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
          Array.from(results).map((item) => {
            if (item.className === "hide-text")
              item.style.backgroundColor = "#fff";
          });

          // setIsHovered(true);
        }}
      >
        <h2 className='about-text-title'>
          The culture, as told by the culture.
        </h2>
        {!isHovered && (
          <center>
            <p className='drag-over-text'>
              {window.innerWidth < 768 ? "Click on Screen " : "Drag Over"} to
              Read Full About Section
            </p>
          </center>
        )}

        <p className='about-text-desc'>
          Here at Incendiary Balloons we take an{" "}
          <span className='hide-text'>abolitionist</span> approach to news,
          media, and creativity. We are disrupting the space of news and
          rebuilding it to be structureless,{" "}
          <span className='hide-text'>non-conforming</span>, non-ridged, and
          fluid — without anything attached— and free of the jargon that hurts
          our communities.
          <br />
          <br />
          We take a <span className='hide-text'>scorched</span> earth approach
          to media: knocking down the established media’s current
          mono-dimensional coverage and deeply ingrained{" "}
          <span className='hide-text'>inherent</span> biases. We stray away from
          all roads that lead to tradition and{" "}
          <span className='hide-text'>uniformity</span>. Instead we are
          rebuilding a way of reporting the news that is for us, and by us.
          <br />
          <br />
          As a Black-owned, <span className='hide-text'>woman-owned</span>, and
          Gen-Z owned news platform our sole mission is to tell the stories of
          BIPOC folks from around the world. Incendiary Balloons is a visual
          news platform and <span className='hide-text'>multimedia</span>{" "}
          creative think hub that is perfectly designed to highlight issues
          affecting all underrepresented groups spanning across race, gender,
          sexuality, identity <span className='hide-text'>politics</span>,
          entertainment, augmented world views, cultural experiences, and
          everything in-between. Our primary focus is to highlight cutting edge
          global and <span className='hide-text'>domestic</span> issues and
          provide space for the voices of those who the media tries to erase. We
          discuss world issues in <span className='hide-text'>nuanced</span>{" "}
          avant-garde ways and tackle each issue with thoughtful critiques,
          beautiful imagery, <span className='hide-text'>engaging</span>{" "}
          narratives, and insight straight from the people who live these issues
          as their reality. Incendiary Balloons moves beyond sensationalism to
          tackle the social, political, and economic effects of the{" "}
          <span className='hide-text'>issues</span> at hand. We are the culture,
          as told by the culture
        </p>
      </div>
    </div>
  );
}
