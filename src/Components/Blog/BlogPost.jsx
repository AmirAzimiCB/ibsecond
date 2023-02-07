import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const BlogPost = ({ src, slug, heading, body }) => {
  return (
    <article className='blog-post'>
      <article>
        <img src={src} alt={heading} />
      </article>
      <article className='blog-post-text'>
        <Link to={slug}>
          <h2>{heading}</h2>
        </Link>
      </article>
    </article>
  );
};

export default BlogPost;
