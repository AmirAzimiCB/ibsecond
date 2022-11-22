import { Canvas, useThree } from "@react-three/fiber";
import { Environment, useGLTF, Html, useProgress } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { gsap } from "gsap";
import "./index.css";
import Loader from "../Loader/Loader";
import Contact from "../ContactBox/Contact";
import Header from "../Header/Header";
const target = new Vector3(0, 0, 0);

const Model = ({ config }) => {
  const gltf = useGLTF("/Models/afrogirl.glb");
  const { camera } = useThree();
  console.log(gltf);
  const ref = useRef();

  window.addEventListener("mousemove", (e) => {
    if (ref.current) {
      target.set(
        (e.clientX - window.innerWidth / (config.onlyHead ? 4 : 2)) *
          (config.onlyHead ? 0.004 : 0.004),
        (e.clientY - window.innerHeight / 4) *
          (config.onlyHead ? -0.003 : -0.004),
        camera.position.z + 1
      );
      gsap.to(
        ref.current.children[1].children[0].children[0].children[0].children[0]
          .rotation,
        {
          ease: "power3.easeOut",
          duration: 5,
          delay: 1,

          onUpdate: () => {
            if (config.onlyHead) {
              ref.current.children[1].children[0].children[0].children[0].children[0].children[0].lookAt(
                target
              );
            } else {
              ref.current.children[1].children[0].children[0].children[0].children[0].children[0].lookAt(
                target
              );
              ref.current.children[1].children[0].children[0].children[0].children[0].lookAt(
                target
              );
            }
          },
        }
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

export default function CoverHead({ config }) {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
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
