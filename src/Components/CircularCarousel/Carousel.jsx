import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Carousel.css";

export default function Carousel({ setObject, setIsClicked, isClicked }) {
  const ref = useRef();
  const refAboutImage = useRef();

  const handleClick = () => {
    setObject({
      title: "Incendiary Balloons",
    });

    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      gsap.to(refAboutImage.current, {
        duration: 1.5,
        opacity: 0,
        ease: "ease-out",
      });
      ref.current.style.animationPlayState = "paused";
    } else {
      gsap.to(refAboutImage.current, {
        duration: 1.5,
        opacity: 1,
        ease: "ease-out",
      });
      ref.current.style.animationPlayState = "running";
    }
  }, [isClicked]);

  const onHover = () => {
    document.body.style.cursor = "pointer";
    ref.current.style.animationPlayState = "paused";
  };
  const onHoverOut = () => {
    ref.current.style.animationPlayState = "running";
    document.body.style.cursor = "default";
  };
  return (
    <>
      <div
        ref={refAboutImage}
        className='about-image-container'
        draggable='false'
      >
        <div className='about-container' draggable='false'>
          <div className='about-inner-container' ref={ref} draggable='false'>
            <li style={{ "--i": 0 }}>
              <img
                className='icon-img'
                src='/Icons/body.png'
                draggable='false'
                alt='body'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 1 }}>
              <img
                className='icon-img'
                src='/Icons/bottle.png'
                draggable='false'
                alt='bottle'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 2 }}>
              <img
                className='icon-img'
                src='/Icons/earings.png'
                draggable='false'
                alt='earings'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 3 }}>
              <img
                className='icon-img'
                src='/Icons/fist.png'
                draggable='false'
                alt='fist'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 4 }}>
              <img
                className='icon-img'
                src='/Icons/nails.png'
                draggable='false'
                alt='nails'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 5 }}>
              <img
                className='icon-img'
                src='/Icons/phoneix.png'
                draggable='false'
                alt='phoneix'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
            <li style={{ "--i": 6 }}>
              <img
                className='icon-img'
                src='/Icons/teeth.png'
                draggable='false'
                alt='teeth'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
