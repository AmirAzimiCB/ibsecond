import React from "react";
import { Helmet } from "react-helmet-async";
import HomePage from "../Components/HomeImages/HomeImages.jsx";
import Layout from "../Components/Layout";

export default function Home() {
  return (
    <>
       <Helmet>
        <title>
          Home
        </title>
      </Helmet>
    <Layout>
      <HomePage />
    </Layout>
    </>
  );
}
