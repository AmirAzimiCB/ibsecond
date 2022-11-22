import React from "react";
import CoverHead from "../Components/3dModels/CoverHead";
const CONFIG = {
  position: [-0.16, -1.58, -0.4],
  scale: [1, 1, 1],
  rotation: [0, 0.6, 0],
  onlyHead: true,
  page: "contact",
};
export default function Contact() {
  return <CoverHead config={CONFIG} />;
}
