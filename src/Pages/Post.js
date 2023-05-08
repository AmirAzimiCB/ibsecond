import { useParams, useNavigate, Link } from "react-router-dom";
import getYouTubeId from "get-youtube-id";
import imageUrlBuilder from "@sanity/image-url";
import "./BlogAll.scss";
import "../styles/post.css";
import "./BlogDetails.scss";
import YouTube from "react-youtube";
import BlogNav from "../Components/Blog/BlogNav";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import { urlFor } from "../lib/client";
import moment from "moment/moment";
import BlockContent from "@sanity/block-content-to-react";
import { PropagateLoader } from "react-spinners";

const client = sanityClient({
  projectId: "gwaghe3o",
  dataset: "post",
  useCdn: true,
  apiVersion: "2021-10-21",
  // other configuration options
});

const serializers = {
  types: {
    block: ({ node, children }) => {
      const { style } = node;
      switch (style) {
        case "h1":
          return <h1>{children}</h1>;
        case "centered":
          return <div style={{ textAlign: "center" }}>{children}</div>;
        default:
          return <p>{children}</p>;
      }
    },
    span: ({ node, children }) => {
      const { marks } = node;
      let content = children;
      marks.forEach((mark) => {
        switch (mark) {
          case "em":
            content = <em>{content}</em>;
            break;
          case "red":
            content = <span style={{ color: "red" }}>{content}</span>;
            break;
          case "blue":
            content = <span style={{ color: "blue" }}>{content}</span>;
            break;
          default:
            break;
        }
      });
      return <>{content}</>;
    },
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
    code: ({ node }) => (
      <pre data-language={node.language}>
        <code>{node.code}</code>
      </pre>
    ),
    image: ({ node }) => {
      const { asset, alt } = node;
      const builder = imageUrlBuilder(client);
      const imageUrl = builder.image(asset._ref).url();
      return <img src={imageUrl} alt={alt} />;
    },
    link: ({ node, children }) => {
      const { href } = node;
      return <a href={href}>{children}</a>;
    },
  },
};

const Post = () => {
  const { categorySlug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  console.log(categorySlug);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postQuery = `*[_type == "post" && slug.current == $slug] {
          _id,
          title,
          body,
          slug,
          "categorySlug": categories->slug.current,
          categories[]->{title, slug},
          excerpt,
          author->{name, image},
          mainImage,
          _createdAt
        }`;

        const postResponse = await client.fetch(postQuery, {
          slug: categorySlug,
        });

        // Fetch category ID based on the slug
        // let category = postResponse[0].categorySlug;
        // const categoryQuery = `*[_type == "category" && slug.current == $category] {
        //   _id
        // }`;
        // const categoryResult = await client.fetch(categoryQuery, {
        //   category,
        // });
        // const categoryId = categoryResult[0]._id;
        // console.log(categoryId);

        // Fetch posts with the specified category ID
        const relatedPostsQuery = `*[_type == "post" && slug.current != $slug] | order(_createdAt asc)   [0...3] 
  {  
      _id,
      title,
      body,
      slug,
      "categorySlug": categories->slug.current,
      categories->{title},
      excerpt,
      author->{name, image},
      mainImage,
      _createdAt
    }`;

        const relatedPostsResponse = await client.fetch(relatedPostsQuery, {
          slug: categorySlug,
        });

        setRelatedPosts(relatedPostsResponse);
        setPost(postResponse[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, [categorySlug]);

  // ...

  // console.log("post", post);
  // console.log("related", relatedPosts);

  // console.log(post);
  return (
    <>
      <Helmet>
        <title>Blog | {categorySlug}</title>
      </Helmet>
      <div
        className={`blog-nav-fixed ${
          categorySlug === "five-dollar-forests" ? "active" : ""
        }`}
      >
        <BlogNav />
        {isLoading ? (
          <div className="fixed_loader">
            <PropagateLoader className="loader_blog" color="#36d7b7" />
          </div>
        ) : (
          <div className={`details`}>
            <section className="grid_left_side">
              <div
                className={`grid_right_side_header black ${
                  categorySlug === "five-dollar-forests" ? "active" : ""
                } `}
              >
                <div className="grid_top_header">
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
                  <h1>Back</h1>
                </div>
              </div>
              <div className="grid_blog_showCase">
                <div className="grid_blog_showCase_items">
                  <div className="blog_image">
                    <img
                      src={urlFor(post?.mainImage?.asset._ref)}
                      alt={post?.title}
                      className="blog_img"
                    />
                  </div>
                  <div className={`blog_information `}>
                    <div className="blog_top">
                      <h4>{moment(post._createdAt).format("MMMM Do YYYY")}</h4>
                      <Link to={`/${post?.categorySlug}`}>
                        <p className="badge_top">{post?.categorySlug}</p>
                      </Link>
                    </div>
                    <div className="blog_content">
                      {/* <Link to={`/blog/${post?.slug.current}`}> */}
                      <h3 className="title">{post?.title}</h3>
                      {/* </Link> */}
                      {/* <div className="blog_author">
                        <img src={"/Images/founder3.png"} alt="authors_image" />
                        <div className="infoBar">
                          <h3>{post?.author?.name}</h3>
                          <p>Author</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div
                    className={`black ${
                      categorySlug === "five-dollar-forests" ? "active" : ""
                    }`}
                  >
                    <BlockContent
                      blocks={post?.body}
                      serializers={serializers}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              className={`grid_right_side black ${
                categorySlug === "five-dollar-forests" ? "active" : ""
              }`}
            >
              <div className="grid_right_side_title">
                <h3>RELATED POSTS</h3> <hr />
              </div>
              <div
                className={`grid_content ${
                  categorySlug === "five-dollar-forests" ? "active" : ""
                } `}
              >
                {relatedPosts.map((data) => (
                  <div key={data._id} className="right_side_container">
                    <div className="right_side_data">
                      <Link to={`/blog/${data?.categorySlug}`}>
                        <p className="card">{data?.categories?.title}</p>
                      </Link>
                      <Link to={`/blog/details/${data?.slug.current}`}>
                        <h4 className="title_related">{data?.title}</h4>
                      </Link>
                      <span>{data?.author?.name}</span>
                      <p>{moment(data?._createdAt).format("MMMM Do YYYY")}</p>
                    </div>
                    <img
                      className="right_side_img"
                      src={urlFor(data?.mainImage?.asset?._ref)}
                      alt={data?.title}
                    />
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

export default Post;
