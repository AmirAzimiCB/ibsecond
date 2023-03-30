import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./blog.css";
import BlogShow from "./BlogShow";
import Modal from "react-modal";
const BlogPost = ({ src, slug, heading, body,post }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }
  return (
    <article className='blog-post'>
      <article>
        <img src={src} alt={heading} />
      </article>
      <article className='blog-post-text'>
        <button style={{cursor:'pointer'}} onClick={handleOpenPopup}><h2 >{heading}</h2></button>
        <Modal
        isOpen={showPopup}
        onRequestClose={handleClosePopup}
      >
        <button style={{color:'black',fontSize:20}} onClick={handleClosePopup}>CLose</button>
        <BlogShow props={post}/>
      </Modal>
      </article>
    </article>
  );
};

export default BlogPost;
