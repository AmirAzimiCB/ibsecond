import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./blog.scss";
import BlogShow from "./BlogShow";
import Modal from "react-modal";
const BlogPost = ({ src, slug, heading, body, post }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <article className="blog-post">
      <article>
        <img src={src} alt={heading} />
      </article>
      <article className="blog-post-text">
        <Link to={slug}>
          <h2>{heading}</h2>
        </Link>
      </article>
    </article>
  );
};

export default BlogPost;
