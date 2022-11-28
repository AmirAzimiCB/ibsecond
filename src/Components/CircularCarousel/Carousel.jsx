import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Carousel.css";

export default function Carousel({ setObject, setIsClicked }) {
  const ref = useRef();
  let deg;
  let drag = false;
  useEffect(() => {
    deg = 0;
    if (ref.current) {
      gsap.to(ref.current.rotation, {
        duration: 1,
        y: deg,
        ease: "none",
        repeat: -1,
      });
    }

    const requestAnimationFrame = () => {
      deg = deg + 0.00001;

      ref.current.style.webkitTransform = "rotate(" + deg + "deg)";
      ref.current.style.mozTransform = "rotate(" + deg + "deg)";
      ref.current.style.msTransform = "rotate(" + deg + "deg)";
      ref.current.style.oTransform = "rotate(" + deg + "deg)";
      ref.current.style.transform = "rotate(" + deg + "deg)";
      requestAnimationFrame();
    };

    // const animationId = setInterval(requestAnimationFrame, 20);

    // window.addEventListener("mouseup", () => (drag = false));
    // document.addEventListener("mousedown", () => (drag = true));
    // document.addEventListener("mousemove", () => {
    //   if (!drag) return;
    //   deg = deg + 1;

    //   ref.current.style.webkitTransform = "rotate(" + deg + "deg)";
    //   ref.current.style.mozTransform = "rotate(" + deg + "deg)";
    //   ref.current.style.msTransform = "rotate(" + deg + "deg)";
    //   ref.current.style.oTransform = "rotate(" + deg + "deg)";
    //   ref.current.style.transform = "rotate(" + deg + "deg)";
    // });
  }, []);

  const iconPointer = () => {};
  const iconGrab = () => {
    document.body.style.cursor = "grab";
  };

  const handleClick = () => {
    setObject({
      title: "Incendiary Balloons",
    });

    setIsClicked(true);
  };

  const onHover = () => {
    //remove animation from ref
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
        className='about-image-container'
        draggable='false'
        unselectable={true}
      >
        <div className='about-container' draggable='false' unselectable={true}>
          <div
            className='about-inner-container'
            ref={ref}
            draggable='false'
            unselectable={true}
          >
            <li style={{ "--i": 0 }}>
              <img
                className='icon-img'
                src='/Icons/body.png'
                draggable='false'
                alt='body'
                onPointerEnter={onHover}
                onPointerLeave={onHoverOut}
                onClick={handleClick}
                unselectable={true}
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
                unselectable={true}
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
                unselectable={true}
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
                unselectable={true}
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
                unselectable={true}
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
                unselectable={true}
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
                unselectable={true}
              />
            </li>
          </div>
        </div>
      </div>
    </>
  );
}
