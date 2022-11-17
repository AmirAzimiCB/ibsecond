import React from "react";
import CoverHead from "../Components/3dModels/CoverHead";
const CONFIG = {
  position: [-1.3, -9.3, -2],
  scale: [6, 6, 6],
  rotation: [0, 0.6, 0],
  onlyHead: true,
  page: "contact",
};
export default function Contact() {
  return <CoverHead config={CONFIG} />;
}
