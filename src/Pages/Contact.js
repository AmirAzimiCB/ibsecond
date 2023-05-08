import React from "react";
import { Helmet } from "react-helmet-async";
import CoverHead from "../Components/3dModels/CoverHead";

import Layout from "../Components/Layout";

const CONFIG = {
  position: window.innerWidth < 756 ? [0, -1.58, -0.4] : [-0.16, -1.58, -0.4],
  scale: [1, 1, 1],
  rotation: window.innerWidth < 756 ? [0, 0, 0] : [0, 0.6, 0],
  onlyHead: true,
  page: "contact",
};
export default function Contact() {
  return (
    <Layout>
       <Helmet>
        <title>
          Contact
        </title>
      </Helmet>
      <CoverHead config={CONFIG} />
    </Layout>
  );
}
