import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  OrbitControls,
  Lightformer,
} from "@react-three/drei";
import "./index.css";
import React, { Suspense, useRef } from "react";
import { Vector3 } from "three";
import { gsap } from "gsap";

const target = new Vector3(0, 0, 0);

const Model = ({ config }) => {
  const gltf = useGLTF("/Models/3D-HEAD.glb");
  const { camera } = useThree();
  console.log(gltf);
  const ref = useRef();

  window.addEventListener("mousemove", (e) => {
    if (ref.current) {
      target.set(
        (e.clientX - window.innerWidth / (config.onlyHead ? 4 : 2)) * 0.004,
        (e.clientY - window.innerHeight / 4) * -0.004,
        camera.position.z + 1
      );
      //lerp look at

      gsap.to(
        ref.current.children[1].children[0].children[0].children[0].children[0]
          .rotation,
        {
          ease: "power3.easeOut",
          duration: 1,
          delay: 1,

          onUpdate: () => {
            ref.current.children[1].children[0].children[0].children[0].children[0].lookAt(
              target
            );
          },
        }
      );
      // ref.current.children[1].children[0].children[0].children[0].children[0].lookAt(
      //   target
      // );
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
      <pointLight position={[10, 10, 10]} penumbra={1} color={"#ffffff"} />
      <pointLight position={[-10, 10, 10]} penumbra={1} color={"#ffffff"} />
      <pointLight position={[-10, -10, 10]} penumbra={1} color={"#ffffff"} />
      <pointLight position={[-10, -10, -10]} penumbra={1} color={"#ffffff"} />
    </>
  );
};
export default function CoverHead({ config }) {
  return (
    <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0] }}>
        <Lighting />

        <Suspense fallback={null}>
          <Model config={config} />

          <Environment files='/CoverEnv.hdr' background />
        </Suspense>
      </Canvas>{" "}
      {config.page === "contact" && (
        <div className='contact-container'>
          <span className='contact-title'>YOUTH. CULTURE. NOW</span>
          <span className='contact-desc'>
            Have a current issue you would like us to cover? Interesting in
            having Incendiary Ballons produce your next media piece?
          </span>
          <span className='contact-navs'>
            Contact Incendiary Balloons today for more information
            <a href=''>info@incendiaryballons.com</a>
            <a href=''>media@incendiaryballons.com</a>
          </span>
          <div className='form'>
            <div className='form-input-fields'>
              <input className='input-field' placeholder='Name' />
              <input className='input-field' placeholder='Subject' />
            </div>
            <textarea
              style={{ width: "100%", height: "70px" }}
              className='input-field'
              placeholder='Message'
            />

            <button className='contact-btn'>Submit</button>
          </div>
        </div>
      )}
      {config.page === "cover" && (
        <div className='header-container'>
          <button className='enter-btn'>Enter</button>
          <span className='cover-title'>Incendiary Balloons</span>
        </div>
      )}
    </div>
  );
}
