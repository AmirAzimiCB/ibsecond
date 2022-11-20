import React, { useEffect, useMemo } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

export default function About2() {
  const textureLoader = useMemo(
    () => new THREE.TextureLoader().load("/Icons/body.png"),
    []
  );
  console.log(textureLoader);

  return (
    <div style={{ height: "100vh" }}>
      <Canvas>
        <mesh>
          <planeGeometry args={[5, 5, 5]} />
          <meshBasicMaterial map={textureLoader} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
