import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

export default function About2() {
  const textureLoader = useMemo(
    () => new THREE.TextureLoader().load("/Icons/body.png"),
    []
  );
  console.log(textureLoader);

  return (
    <Canvas>
      <mesh>
        <planeGeometry args={[5, 5, 5]} />
        <meshBasicMaterial map={textureLoader} />
      </mesh>
    </Canvas>
  );
}
