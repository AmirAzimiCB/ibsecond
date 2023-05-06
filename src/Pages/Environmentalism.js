import React from "react";
import BlogNav from "../Components/Blog/BlogNav";
import { Helmet } from "react-helmet-async";
import "./Environmentalism.scss";
const Environmentalism = () => {
  return (
    <>
      <Helmet>
        <title>Environmentalism</title>
      </Helmet>
      <BlogNav />
      <section className="Environmentalism_container"></section>
    </>
  );
};

export default Environmentalism;
