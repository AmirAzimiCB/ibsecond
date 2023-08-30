import React from "react";
import "./index.css";
import Scene from "./Scene";

function FounderSection2() {
  return (
    <div
      className='founder-section'
      style={{
        height: window.innerWidth < 900 ? "200vh" : "150vh",
      }}
    >
      <img
        className='founder-section2-img founder-section-img'
        src='/Images/founder2.png'
        alt=''
      />
      <div
        className='founder-text-container'
        style={
          window.innerWidth < 900
            ? {
                flexDirection: "column-reverse",
              }
            : null
        }
      >
        <span
          className='founder-text-bg founder2-text'
          style={{
            marginLeft: window.innerWidth < 900 ? "0" : "2rem",
          }}
        >
         Ever since I can remember, my art and my work came as a reflex to forced circumstances. As a young Black girl, I saw the relationship between media and Black livelihood as parasitic.  Seeing little-to-no authentic representational viewpoints of Black women in the media, coupled with agenda-based narrative, forced upon the Black community, as a whole, within the news. That’s something I constantly work toward changing… It's definitely one of my top career and life goals. My passion, my activism, ignited within me as a reflex, born from the crucible of adversities.My passion, my activism, an instinct etched into my very being by the cruelties that my family and my neighborhood endured.  I witnessed the dearth of authentic portrayals of Black women in the media, suffocated by biased agendas thrust upon the Black collective. A ceaseless battle, a topmost ambition that fuels my life and career. Each breath I draw, each step I take, propels me toward this mission.
        </span>
        <Scene
          position={window.innerWidth < 900 ? [0, 0, 0] : [0.4, -0.4, 0]}
        />
      </div>
      <div className=' founder-text-container'>
        <Scene position={window.innerWidth < 900 ? [0, 0, 0] : [-0.4, 0, 0]} />
        <span className='founder-text-bg founder3-text'>
          My people have suffered from being objectified and commodified, our narratives and culture plundered, reworked to suit their advantage. Now, the time has come to reclaim our story, to restore it to the hands of our people. My lifelong goal has been to undo the heinous transmutation of our stories, our culture, that has been manipulated by profiteers who twist them to their advantage. Now, the time has come to wrest the narrative, the very essence of our culture, from their grasp.  Each documentary birthed from my soul is a battle cry for this singular cause. It is the unyielding commitment that stirs my waking hours, the resolve that propels me forward each day. It is my unyielding commitment, my daily purpose. To wage war. To fight for my truth, for the truth of my community, and for every community shackled by the plundering colonizers and the insidious machinations of economic and political systems designed to bolster their reign. My philosophy takes shape in a singular path, guided by these unwavering tenets: Identify. Disrupt & Dismantle. Rebuild. Distribute “- Talia Smith
        </span>
      </div>
    </div>
  );
}

export default FounderSection2;
