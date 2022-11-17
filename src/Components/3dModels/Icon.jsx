import React, { useEffect } from "react";
import "./index.css";

import { Draggable } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(Draggable);
export default function Icon() {
  useEffect(() => {
    Draggable.create("#some", {
      type: "x,y",
      edgeResistance: 0.65,
      bounds: ".container",
      throwProps: true,
    });
  }, []);

  //to drag images using gsap
  const drag = (e) => {
    gsap.to(e.target, {
      duration: 1,
      x: e.clientX,
      y: e.clientY,
      ease: "power4.out",
    });
  };

  return (
    <div className='container'>
      <img
        className='pos body'
        src='/Icons/body.png'
        alt='body image'
        id='some'
      />
      <img className='pos bottle' src='/Icons/bottle.png' alt='bottle image' />
      <img
        className='pos earings'
        src='/Icons/earings.png'
        alt='earings image'
      />
      <img className='pos fist' src='/Icons/fist.png' alt='fist image' />
      <img className='pos nails' src='/Icons/nails.png' alt='nails image' />
      <img
        className='pos phoneix'
        src='/Icons/phoneix.png'
        alt='phoneix image'
      />
      <img className='pos teeth' src='/Icons/teeth.png' alt='teeth image' />
    </div>
  );
}
