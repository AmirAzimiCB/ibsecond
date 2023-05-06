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
import { urlFor } from "../lib/clinet";
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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const CategoryPost = () => {
  const { categorySlug } = useParams();
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const tolowerCase = categorySlug.toLowerCase();
  let [color, setColor] = useState("#ffffff");

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
  }, [categorySlug]);
  //   console.log("rela, relatedPosts);

  return (
    <>
      <>
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <div className=" blog-nav-fixed">
          <BlogNav />
          {isLoading ? (
            <div className="loader">
              <PropagateLoader color="#36d7b7" />
            </div>
          ) : (
            <div className="blog_top">
              <section className="blog">
                <div className="blog_header">
                  <h1>Posts related to {relatedPosts[0]?.categories?.title}</h1>
                </div>
                <div className="blog_showCase">
                  {relatedPosts.length ? (
                    relatedPosts?.map((post) => (
                      <div key={post._id} className="blog_showCase_items">
                        <img
                          src={urlFor(post?.mainImage?.asset._ref)}
                          alt={post?.title}
                          className="blog_image"
                        />
                        <div className="blog_information">
                          <div className="blog_top">
                            <h4>
                              {moment(post._createdAt).format("MMMM Do YYYY")}
                            </h4>
                            <p>{post?.categories?.title}</p>
                          </div>
                          <div className="blog_content">
                            <Link to={`/blog/details/${post?.slug.current}`}>
                              <h3 className="title">{post?.title}</h3>
                            </Link>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nostrum error quae harum vero! Aliquid
                              voluptates nihil harum placeat, id veritatis quod
                              perspiciatis a necessitatibus accusantium, amet
                              cupiditate itaque corrupti porro. Lorem ipsum
                              dolor sit amet consectetur adipisicing elit. Fuga,
                              cum ratione itaque odit veniam possimus? Sed rem
                              tempore omnis maiores nisi optio consequuntur, qui
                              eos temporibus unde neque? In, quisquam.
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