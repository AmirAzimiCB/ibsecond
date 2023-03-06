import React, { useState } from "react";
import HomePage from "../Components/HomeImages/HomeImages.jsx";
import Layout from "../Components/Layout";
import VirtualGallery from "../Components/VirtualGallery/VirtualGallery.jsx";
import VirtualGalleryLoader from "../Components/VirtualGallery/VirtualGalleryLoader";
import NavigationInstructions from "../Components/VirtualGallery/NavigationInstructions";

export default function Home() {
  const [openGallery, setOpenGallery] = useState(false);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);

  return (
    <Layout>
      <HomePage setOpenGallery={setOpenGallery} setIsGalleryLoading={setIsGalleryLoading} />
      {isGalleryLoading && <VirtualGalleryLoader />}
      {openGallery && <VirtualGallery setOpenGallery={setOpenGallery} setIsGalleryLoading={setIsGalleryLoading} />}
      {openGallery && <NavigationInstructions/>}
    </Layout>
  );
}
