import React from "react";
import BlogNav from "../Components/Blog/BlogNav";
import { Helmet } from "react-helmet-async";
import "./Environmentalism.scss";
import ReactPlayer from "react-player";

const Environmentalism = () => {
  return (
    <>
      <Helmet>
        <title>Environmentalism</title>
      </Helmet>
      <BlogNav />
      <section className="Environmentalism_container">
        {/* <div ></div> */}
        <div className="Environment_video">
          <ReactPlayer
            url="https://vimeo.com/432771981"
            // controls
            style={{
              width: "1300px",
              height: "auto",
            }}
            // width={1256}
          />
        </div>
      </section>
    </>
  );
};

export default Environmentalism;
