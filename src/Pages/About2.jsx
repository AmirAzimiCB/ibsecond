import React, { useEffect, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import { gsap } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
//import "./about.css";
gsap.registerPlugin(MotionPathPlugin);

export default function About2() {
  useEffect(() => {
    const some = () => {
      var angle = 90;
      drawCircle(".box", 50, 200, angle, 310, 220);
      document.getElementById("movebtn").addEventListener("click", function () {
        angle = angle + 5;
        drawCircle(".box", 50, 200, angle, 310, 220);
      });
      // document
      //   .getElementById("#movebtn")
      //   .addEventListener("click", function () {
      //     angle = angle + 5;
      //     drawCircle(".box", 50, 200, angle, 310, 220);
      //   });
    };

    function drawCircle(selector, center, radius, angle, x, y) {
      var total = document.querySelector(selector).length;
      var alpha = (Math.PI * 2) / total;
      angle *= Math.PI / 180;

      [...document.querySelectorAll(selector)].map(function (item, index) {
        var theta = alpha * index;
        var pointx = Math.floor(Math.cos(theta + angle) * radius);
        var pointy = Math.floor(Math.sin(theta + angle) * radius);
        console.log(item.style);

        item.style.marginLeft = pointx + x + "px";
        item.style.marginTop = pointy + y + "px";
      });
    }

    some();
  });
  return (
    <>
      <button id='movebtn' class='btn btn-info btn-large'>
        Move around
      </button>
      <div class='container'>
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/body.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
        <img src='/Icons/teeth.png' class='box' />
      </div>
    </>
  );
}
