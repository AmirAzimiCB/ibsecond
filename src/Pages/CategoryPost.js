import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import getYouTubeId from "get-youtube-id";
import imageUrlBuilder from "@sanity/image-url";
import "./BlogAll.scss";
import "../styles/post.css";
import ClipLoader from "react-spinners/ClipLoader";

import YouTube from "react-youtube";
import BlogNav from "../Components/Blog/BlogNav";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import sanityClient from "@sanity/client";
import { urlFor } from "../lib/client";
import moment from "moment/moment";
import { useState, CSSProperties } from "react";
import { PropagateLoader } from "react-spinners";

const client = sanityClient({
  projectId: "gwaghe3o",
  dataset: "post",
  useCdn: true,
  apiVersion: "2021-10-21",
  // other configuration options
});

const CategoryPost = () => {
  const { categorySlug } = useParams();
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();
  let [color, setColor] = useState("#ffffff");
  console.log(categorySlug);
  const tolowerCase = categorySlug.toLowerCase();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch category ID based on the slug
        const categoryQuery = `*[_type == "category" && slug.current == $tolowerCase] {
            _id
          }`;
        const categoryResult = await client.fetch(categoryQuery, {
          tolowerCase,
        });

        if (categoryResult.length === 0) {
          setRelatedPosts([]);
          setLoading(false);
          return;
        }

        const categoryId = categoryResult[0]._id;

        // Fetch posts with the specified category ID
        const postQuery = `*[_type == "post" && references(categories, $categoryId)] {
            _id,
            title,
            slug,
            "categorySlug": categories->slug.current,
            categories -> {title},
            excerpt,
            author -> {name, image},
            mainImage,
            _createdAt
          }`;
        const response = await client.fetch(postQuery, { categoryId });
        setRelatedPosts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [categorySlug, tolowerCase]);

  // console.log("rela", relatedPosts);

  return (
    <>
      <>
        <Helmet>
          <title>Blog | {categorySlug}</title>
        </Helmet>
        <div className=" blog-nav-fixed">
          <BlogNav />
          {isLoading ? (
            <div className="fixed_loader">
              <PropagateLoader className="loader_blog" color="#36d7b7" />
            </div>
          ) : (
            <div className="blog_top">
              <section className="blog">
                <div className="blog_header ">
                  <div className="top_header">
                    <svg
                      onClick={() => navigate("/blog")}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    <h1>
                      Posts related to{" "}
                      {relatedPosts[0]?.categories?.title || categorySlug}
                    </h1>
                  </div>
                </div>
                <div className="blog_showCase">
                  {relatedPosts.length ? (
                    relatedPosts?.map((post) => (
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
                            <p
                              onClick={() => navigate(`/${post?.categorySlug}`)}
                            >
                              {post?.categories?.title}
                            </p>
                          </div>
                          <div className="blog_content">
                            <Link to={`/blog/details/${post?.slug.current}`}>
                              <h3 className="title">{post?.title}</h3>
                            </Link>
                            <p>
                              <p>{post?.excerpt}</p>
                            </p>
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
                    ))
                  ) : (
                    <>
                      <div className="blog_showCase_items">
                        No posts for this category exists
                      </div>
                    </>
                  )}
                </div>
              </section>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default CategoryPost;
