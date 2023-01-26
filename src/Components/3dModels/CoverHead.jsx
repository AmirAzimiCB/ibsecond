import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Vector3 } from "three";
import * as THREE from "three";
import { gsap } from "gsap";
import "./index.css";
import Loader from "../Loader/Loader";
import Contact from "../ContactBox/Contact";
import Header from "../Header/Header";
import { useState } from "react";
import { useEffect } from "react";
import LoadingEnd from "../Loader/LoadingEnd";

const Model = ({ config }) => {
  const gltf = useGLTF("/Models/afrogirl.glb");
  let targetY = 0;
  let targetX = 0;
  const [target, setTarget] = useState(null);

  const ref = useRef();

  useEffect(() => {
    if (ref) {
      config.onlyHead
        ? setTarget(
            ref.current.children[1].children[0].children[0].children[0]
              .children[0].children[0]
          )
        : setTarget(
            ref.current.children[1].children[0].children[0].children[0]
              .children[0]
          );
    }
  }, [ref]);

  useFrame(({ pointer }) => {
    if (target) {
      targetY = config.onlyHead
        ? -pointer.y < 0.4
          ? -pointer.y > -0.1
            ? -pointer.y * 0.01 + 0.4
            : -pointer.y * 0.1 * 0.8
          : -pointer.y * 0.9
        : -pointer.y * 0.5;
      targetX = config.onlyHead
        ? pointer.x < 0.2 && pointer.x > -0.4
          ? pointer.x * 0.1 + 0.3
          : pointer.x * 0.8
        : pointer.x * 0.8;

      target.rotation.y = THREE.MathUtils.lerp(
        target.rotation.y,
        targetX,
        0.02
      );
      target.rotation.x = THREE.MathUtils.lerp(
        target.rotation.x,
        targetY,
        0.01
      );
    }
  });

  return (
    <primitive
      object={gltf.scene}
      ref={ref}
      dispose={null}
      position={config.position}
      scale={config.scale}
      rotation={config.rotation}
    />
  );
};
const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight
        position={[10, -10, 10]}
        intensity={2}
        penumbra={1}
        color={"#FC0FC0"}
      />
      <pointLight
        position={[-10, 10, 10]}
        penumbra={1}
        intensity={2}
        color={"#0000ff"}
      />

      <pointLight
        position={[-10, -10, 10]}
        intensity={2}
        penumbra={1}
        color={"#FC0FC0"}
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={2}
        penumbra={1}
        color={"#00ff00"}
      />
    </>
  );
};

const Video = () => {
  const videoRef = useRef();
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "/Video/vd.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.preload = "auto";
    vid.autoplay = true;

    return vid;
  });

  console.log("loaded");
  return (
    <mesh ref={videoRef} scale={1} position={[0, 0, -5]} rotation={[0, 1, 0]}>
      <planeGeometry args={[1080, 1920]} />

      <meshPhongMaterial
        side={THREE.DoubleSide}
        encoding={THREE.RGBAFormat}
        opacity={0}
        transparent={true}
      >
        <videoTexture
          attach='map'
          args={[video]}
          flipY={true}
          repeat={[1, 1]}
          offset={[0, 0]}
          opacity={1}
          wrapT={THREE.RepeatWrapping}
          wrapS={THREE.RepeatWrapping}
          encoding={THREE.RGBAFormat}
        />
      </meshPhongMaterial>
    </mesh>
  );
};

export default function CoverHead({ config }) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className='main-scene'>
      {isLoading || config.page === "contact" ? null : <LoadingEnd />}
      {isLoading ? null : (
        <img
          src={
            config.page === "cover"
              ? "/Images/Cover-bg.png"
              : "/Images/Contact-bg.png"
          }
          className='bg-img'
          alt='background'
        />
      )}
      <Canvas camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0, 0] }}>
        <Lighting />
        <Suspense fallback={<Loader setIsLoading={setIsLoading} />}>
          <Video />

          <Model config={config} />

          <Environment preset='sunset' />
        </Suspense>
      </Canvas>{" "}
      {isLoading ? null : (
        <>
          {config.page === "contact" && <Contact />}
          {config.page === "cover" && <Header />}
        </>
      )}
    </div>
  );
}
