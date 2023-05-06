import React, { useEffect } from "react";
import "../styles/blog.css";
import BlogNav from "../Components/Blog/BlogNav";
import BlogPost from "../Components/Blog/BlogPost";
import usePosts from "../hooks/usePosts";
import { Link, useNavigate, useParams } from "react-router-dom";
import useStore from "../store/ZustandStore";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useSinglePost from "../hooks/useSinglePost";

const BlogFilter = () => {
  const location = useLocation();
  let vars;
  const [state, setState] = useState(false);
  const { post } = useSinglePost(location.pathname);
  const blogCategory = useStore((state) => state.blogCategory);
  const { filteredPosts } = usePosts(blogCategory);
  // console.log(filteredPosts[0]?.categories?.title)
  const value = filteredPosts[0]?.categories?.title;
  const params = useParams();
  for (var i = 0; i < filteredPosts.length; i++) {
    if (params.category === filteredPosts[i]) {
      setState(true);
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    // console.log(locationParam);
    // navigate();
    // window.location.reload();
  }, [location.pathname, navigate]);
  console.log(filteredPosts);
  useEffect(() => {}, [blogCategory]);
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="blog-page">
        <BlogNav />
        <div className="main font-helvetica blog-posts-container">
          <h5 className="blog-list-section__title">{blogCategory}</h5>
          {filteredPosts.length !== 0 ? (
            <section>
              {filteredPosts
                .filter((post) => post?.categories?.title === params.category)
                .map((post) => (
                  <BlogPost
                    key={post.slug.current}
                    slug={`/blog/${post.slug.current}`}
                    src={post.mainImage?.asset?.url}
                    heading={post.title}
                    post={post}
                  />
                ))}
              {filteredPosts.every(
                (post) => post.categories.title !== params.category
              ) && (
                <>
                  <h5 className="blog-list-section__title">
                    {location.pathname.slice(1, location.pathname.length)}
                  </h5>
                  <div>
                    No articles from{" "}
                    <strong>
                      {blogCategory ||
                        location.pathname.slice(1, location.pathname.length)}
                    </strong>{" "}
                    have been published yet. Please choose another category.
                  </div>
                </>
              )}
            </section>
          ) : (
            <div>
              No articles from{" "}
              <strong>
                {blogCategory ||
                  location.pathname.slice(1, location.pathname.length)}
              </strong>{" "}
              have been published yet. Please choose another category.
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogFilter;
