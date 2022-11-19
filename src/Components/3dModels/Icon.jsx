import React, { useEffect } from "react";
import "./index.css";

import { Draggable } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(Draggable);
export default function Icon() {
  useEffect(() => {
    Draggable.create("#icon", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: ".container",
      inertia: true,
      cursor: "pointer",
    });
  }, []);

  return (
    <div>
      <img
        className='pos body'
        src='/Icons/body.png'
        alt='body'
        id='icon'
        onClick={() => alert("clicked")}
      />
      <img
        className='pos bottle'
        src='/Icons/bottle.png'
        alt='bottle '
        id='icon'
      />
      <img
        className='pos earings'
        src='/Icons/earings.png'
        alt='earings '
        id='icon'
      />
      <img className='pos fist' src='/Icons/fist.png' alt='fist ' id='icon' />
      <img
        className='pos nails'
        src='/Icons/nails.png'
        alt='nails '
        id='icon'
      />
      <img
        className='pos phoneix'
        src='/Icons/phoneix.png'
        alt='phoneix '
        id='icon'
      />
      <img
        className='pos teeth'
        src='/Icons/teeth.png'
        alt='teeth '
        id='icon'
      />
    </div>
  );
}
