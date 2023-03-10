import React from "react";
import Scene from "./Scene";
import "./index.css";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowUp,
} from "react-icons/ai";

function FounderSection1() {
  return (
    <div
      className='founder-section'
      style={{
        justifyContent: window.innerWidth < 900 ? "center" : "flex-end",
      }}
    >
      <img
        className='founder-section1-img founder-section-img'
        src='/Images/founder1.png'
        alt=''
      />
      {window.innerWidth > 786 && (
        <div className='founder-scroll-text-container'>
          <div className='founder-scroll-text'>
            <div className='vertical-arrow-container'>
              <div class='arrow arrow-down'>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class='arrow arrow-up'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className='horizontal-arrow-container'>
              <div class='arrow arrow-left'>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div class='arrow arrow-right'>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <span>Scroll down to read more</span>
          </div>
        </div>
      )}

      <div
        className='founder-text-container'
        style={{ marginBottom: window.innerWidth < 900 ? "1rem" : "4rem" }}
      >
        <Scene
          position={window.innerWidth < 900 ? [0, -0.5, 0] : [-0.5, 0, 0]}
        />
        <div className='founder-section1-inner-text-container'>
          <span className='founders-name'>TALIA "BINX" SMITH</span>
          <span className='founder-text-bg founder1-text'>
            Meet our Creator and CEO, renowned journalist Talia Smith. A product
            of a single-mother household in inner-city Philadelphia, from an
            early age, Talia grew up, in-and-among various subcultures. It is
            through this lens that Talia developed a passion for journalistic
            storytelling as a means of shining a light on those whose narratives
            have been overlooked or erased. Talia began writing poetry and
            novels, based on, and inspired by her surroundings, as well as
            crafting visual art pieces, that told stories of her own community.
          </span>
        </div>
      </div>
    </div>
  );
}

export default FounderSection1;
