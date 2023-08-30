import React from "react";
import "./index.css";
import Scene from "./Scene";

function FounderSection4() {
  return (
    <div
      className="founder-section"
      style={{
        height: window.innerWidth < 900 ? "200vh" : "150vh",
      }}
    >
      <img
        className="founder-section2-img founder-section-img"
        src="/Images/founder2.png"
        alt=""
      />
      <div
        className="founder-text-container"
        style={
          window.innerWidth < 900
            ? {
                flexDirection: "column-reverse",
              }
            : null
        }
      >
        <span
          className="founder-text-bg founder2-text"
          style={{
            marginLeft: window.innerWidth < 900 ? "0" : "2rem",
          }}
        >
          “Incendiary Balloons was born out of the fire of a lifelong passion.
          As a child, I always wanted to be a journalist. I always had a deep
          passion for telling the stories of people who were often so unheard,
          overlooked and taken advantage of: because I always existed on that
          exact same spectrum. The media at the time often depicted Black people
          and BIPOC communities very stereotypically, or placed their own
          narratives on our communities all together. As a result of negative
          and false media portrayal, I experienced the very real-world effects
          and aftershocks that every BIPOC person has felt.I knew I wanted to
          change this somehow and I saw media as the most powerful tool to do
          so.
        </span>
        <Scene
          position={window.innerWidth < 900 ? [0, 0, 0] : [0.4, -0.4, 0]}
        />
      </div>
      <div className=" founder-text-container">
        <Scene position={window.innerWidth < 900 ? [0, 0, 0] : [-0.4, 0, 0]} />
        <span className="founder-text-bg founder3-text">
          Incendiary Balloons was birthed out of a calling. I dreamt of
          reshaping the tapestry that ensnared my community, of rewriting the
          lamentations that haunted my neighborhood. When I was little I used to
          dream that I could change what I saw happening in my community… what
          my neighborhood was going through. I hated the narrative used to
          describe my home; what we would now consider to be “expected” cultural
          canon and zeitgeist. First I turned to fiction- writing poems and
          short stories. My poetry and writings were drenched in the blood of my
          surroundings. Then in highschool I shifted to non-fiction news and
          documentaries. Today, I exist between both worlds. My passion, my
          activism, all of the fires that were burning in me, and the rushing
          rivers that were swirling all translated into my journalism and
          reporting.
        </span>
      </div>
    </div>
  );
}

export default FounderSection4;
