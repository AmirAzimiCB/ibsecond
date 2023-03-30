import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import BlogNav from "../Components/Blog/BlogNav";
import BlogPost from "../Components/Blog/BlogPost";
import usePosts from "../hooks/usePosts";
import { Link } from "react-router-dom";
import useStore from "../store/ZustandStore";
import { Helmet } from "react-helmet-async";
import Modal from "react-modal";
import BlogShow from "../Components/Blog/BlogShow";
import BlogPopup from "./Blogpopup";


const Blog = () => {
  const blogCategory = useStore((state) => state.blogCategory)
  const { filteredPosts } = usePosts(blogCategory)
  const [showPopup, setShowPopup] = useState(false);
  const styling={
    backgroundColor:'BLACK',':hover':{backgroundColor:'yellow'}, cursor: "pointer",
  }

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  }
  useEffect(() => {
  }, [blogCategory])
  return (
    <>
    <Helmet>
        <title>
          Blog
        </title>
      </Helmet>
         <div className="blog-page">
      <BlogNav />
      <div className="main font-helvetica blog-posts-container">
        {
          filteredPosts.length ? (
            <>
              <section className="blog-header flex pb-10">
                <article className="flex-1">
                  <img className="spacing-0" src={filteredPosts[0]?.mainImage?.asset?.url} alt={filteredPosts[0?.title]} />
                </article>
                <article className="flex-1 bg-black text-white p-8 flex items-center">
                  
                  <button style={styling} onClick={handleOpenPopup}><h2 className="text-white">
                      {filteredPosts[0]?.title}
                    </h2></button>
                    <Modal
        isOpen={showPopup}
        onRequestClose={handleClosePopup}
      >
        <button style={{color:'black',fontSize:20}} onClick={handleClosePopup}>CLose</button>
        <BlogPopup src={filteredPosts[0]?.mainImage?.asset?.url}
        category={filteredPosts[0]?.title}
        slug={filteredPosts[0].slug.current}
        />
      </Modal>
                  
                </article>
              </section>
              <section>
                <h5 className="blog-list-section__title">The Latest</h5>
                {filteredPosts?.map((post, i) => i > 0 && (
                  <BlogPost
                    key={post.slug.current}
                    slug={post.slug.current}
                    src={post.mainImage?.asset?.url}
                    heading={post.title}
                    post={post}
                  />
                ))}
              </section>
            </>
          ) : (
            <div>No Posts Found, please choose another category</div>
          )
        }
      </div>
    </div>
    </>
  );
};

export default Blog;
