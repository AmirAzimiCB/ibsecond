import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,
  useGLTF,
  OrbitControls,
  Lightformer,
} from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import { Vector3 } from "three";
const target = new Vector3(0, 0, 0);

const Model = ({ config }) => {
  const gltf = useGLTF("/Models/3D-HEAD.glb");
  const { camera } = useThree();
  console.log(gltf);
  const ref = useRef();

  document.addEventListener("mousemove", (e) => {
    if (ref.current) {
      target.set(
        (e.clientX - window.innerWidth / (config.onlyHead ? 4 : 2)) * 0.004,
        (e.clientY - window.innerHeight / 4) * -0.004,
        camera.position.z + 1
      );
      //lerp look at

      ref.current.children[1].children[0].children[0].children[0].children[0].lookAt(
        target
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
export default function CoverHead({ config }) {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 0] }}>
        {/* Lights*/}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} penumbra={1} color={"#ffffff"} />
        <pointLight position={[-10, 10, 10]} penumbra={1} color={"#ffffff"} />
        <pointLight position={[-10, -10, 10]} penumbra={1} color={"#ffffff"} />
        <pointLight position={[-10, -10, -10]} penumbra={1} color={"#ffffff"} />
        <Suspense fallback={null}>
          <Model config={config} />
          <Lightformer
            form='rect' // circle | ring | rect (optional, default = rect)
            intensity={1} // power level (optional = 1)
            color='white' // (optional = white)
            scale={[10, 5]} // Scale it any way you prefer (optional = [1, 1])
            target={[0, 0, 0]} // Target position (optional = undefined)
          />
          <Environment files='/CoverEnv.hdr' background encoding={"sRGB"} />
        </Suspense>
      </Canvas>{" "}
    </div>
  );
}
