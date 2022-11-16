import React from "react";
import CoverHead from "../Components/3dModels/CoverHead";

const CONFIG = {
  position: [0, -6, -2],
  scale: [4, 4, 4],
  rotation: [0, 0, 0],
  onlyHead: false,
};

export default function Cover() {
  return <CoverHead config={CONFIG} />;
}
