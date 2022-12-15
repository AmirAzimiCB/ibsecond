import React from "react";
import Scene from "./Scene";
import "./index.css";

function FounderSection3() {
  return (
    <div
      className='founder-section'
      style={{
        justifyContent: "center",
      }}
    >
      <img
        className='founder-section3-img founder-section-img'
        src='/Images/Home-img1.png'
        alt=''
      />
      <div className='founder-text-container '>
        <span
          className='founder-text-bg'
          style={{
            marginLeft: window.innerWidth < 900 ? "0" : "2rem",
            marginTop: window.innerWidth < 900 ? "5rem" : "0",
          }}
        >
          Coming up without any industry connections, Talia’s persistence
          allowed her to knock-down doors at major news outlets; that were not
          readily open to her cultural point of view. Talia’s work has appeared
          in Harper’s Bazaar, Cheddar TV, Paper Magazine, Vice, Nylon Magazine,
          Dazed & Confused, GALORE, The New York Observer, among many other
          places.
          <br />
          <br />
          Talia continues to persevere to ensure the that the culture is
          represented on increasingly bigger platforms, and that the revolution
          WILL be televised. Talia holds undergraduate degree in journalism from
          The Arthur L. Carter Institute at New York University and was heavily
          inspired by a long list of readings by James Baldwin, Audre Lorde and
          more. Talia describes her philosophy as a mixture of all her idols
          Tupac Shakur, Hayao Miyazaki, Will Smith, Frida Kahlo, Sandra Cisneros
          and strong women, like her mother.
        </span>
        <Scene position={window.innerWidth < 900 ? [0, 0.5, 0] : [0.5, 0, 0]} />
      </div>
    </div>
  );
}

export default FounderSection3;
