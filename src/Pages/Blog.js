import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import BlogNav from "../Components/Blog/BlogNav";
import "./BlogAll.scss";
import BlogPost from "../Components/Blog/BlogPost";
import usePosts from "../hooks/usePosts";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import useStore from "../store/ZustandStore";
import { Helmet } from "react-helmet-async";
import Modal from "react-modal";
import BlogShow from "../Components/Blog/BlogShow";
import BlogPopup from "./Blogpopup";
import sanityClient from "@sanity/client";
import { urlFor } from "../lib/client";
import moment from "moment/moment";
import { PropagateLoader } from "react-spinners";

const client = sanityClient({
  projectId: "gwaghe3o",
  dataset: "post",
  useCdn: true,
  apiVersion: "2021-10-21",
  // other configuration options
});

const Blog = () => {
  const blogCategory = useStore((state) => state.blogCategory);
  // const { filteredPosts } = usePosts(blogCategory);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts from Sanity
    const fetchPosts = async () => {
      try {
        // Define your Sanity query here to retrieve the necessary fields
        const query = `*[_type == "post"] {
          _id,
          title,
          slug,
          "categorySlug": categories->slug.current,
          categories -> {_id,title},
          excerpt,
          author -> {name,image},
          mainImage,
          _createdAt 
        }`;

        const response = await client.fetch(query);
        setPosts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [blogCategory]);

  console.log(posts);

  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className=" blog-nav-fixed">
        <BlogNav />

        {loading ? (
          <div className="fixed_loader">
            <PropagateLoader className="loader_blog" color="#36d7b7" />
          </div>
        ) : (
          <div className="blog_top">
            <section className="blog">
              <div className="blog_header">
                <h1>From the blog</h1>
                <p>Learn from our experts.</p>
                <hr />
              </div>
              <div className="blog_showCase">
                {posts?.map((post) => (
                  <div key={post._id} className="blog_showCase_items">
                    <div className="blog_image">
                      <img
                        src={urlFor(post?.mainImage?.asset._ref)}
                        alt={post?.title}
                        className="blog_img"
                      />
                    </div>
                    <div className="blog_information">
                      <div className="blog_top">
                        <h4>
                          {moment(post._createdAt).format("MMMM Do YYYY")}
                        </h4>
                        <p onClick={() => navigate(`/${post?.categorySlug}`)}>
                          {post?.categories?.title}
                        </p>
                      </div>
                      <div className="blog_content">
                        <Link to={`/blog/details/${post?.slug.current}`}>
                          <h3 className="title">{post?.title}</h3>
                        </Link>
                        <p className="excerpt">{post?.excerpt}</p>
                        <div className="blog_author">
                          <img
                            src={"/Images/founder3.png"}
                            alt="authors_image"
                          />
                          <div className="infoBar">
                            <h3>{post?.author?.name}</h3>
                            <p>Author</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
