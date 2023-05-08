import React from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../Components/Layout";
import ProtestComponent from "../Components/ProtestResources/ProtestComponent";

function ProtestResources() {
  return (
    <Layout>
       <Helmet>
        <title>
          ProtestResources
        </title>
      </Helmet>
      <div>
        <ProtestComponent />
      </div>
    </Layout>
  );
}

export default ProtestResources;
