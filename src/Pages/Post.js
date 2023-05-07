import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import getYouTubeId from "get-youtube-id";
import imageUrlBuilder from "@sanity/image-url";
import "./BlogAll.scss";
import "../styles/post.css";
import "./BlogDetails.scss";
import YouTube from "react-youtube";
import BlogNav from "../Components/Blog/BlogNav";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import sanityClient from "@sanity/client";
import { urlFor } from "../lib/client";
import moment from "moment/moment";
import { useState } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { PropagateLoader } from "react-spinners";

const client = sanityClient({
  projectId: "gwaghe3o",
  dataset: "post",
  useCdn: true,
  apiVersion: "2021-10-21",
  // other configuration options
});

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
        let category = postResponse[0].categorySlug;
        const categoryQuery = `*[_type == "category" && slug.current == $category] {
          _id
        }`;
        const categoryResult = await client.fetch(categoryQuery, {
          category,
        });
        const categoryId = categoryResult[0]._id;
        console.log(categoryId);

        // Fetch posts with the specified category ID
        const relatedPostsQuery = `*[_type == "post" && references(categories, $categoryId) && slug.current != $slug ] {
          _id,
          title,
          body,
          slug,
          "categorySlug": categories->slug.current,
          categories -> {title},
          excerpt,
          author -> {name, image},
          mainImage,
          _createdAt
        }`;
        const relatedPostsResponse = await client.fetch(relatedPostsQuery, {
          categoryId,
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

  console.log("post", post);
  console.log("related", relatedPosts);

  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node;
        const id = getYouTubeId(url);

        return <YouTube iframeClassName={"iframe"} videoId={id} />;
      },
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      image: (props) => {
        const { node } = props;
        const builder = imageUrlBuilder(client);
        const src = builder.image(node.asset._ref).url();
        return <img src={src} alt={node.alt} />;
      },
    },
  };
  // console.log(post.title);
  return (
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
          <div className="details">
            <section className="grid_left_side">
              <div className="grid_right_side_header">
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
                  <div className="blog_information">
                    <div className="blog_top">
                      <h4>{moment(post._createdAt).format("MMMM Do YYYY")}</h4>
                      <p onClick={() => navigate(`/${post?.categorySlug}`)}>
                        {post?.categorySlug}
                      </p>
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
                  <div>
                    <BlockContent
                      blocks={post?.body}
                      serializers={serializers}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid_right_side">
              <div className="grid_right_side_title">
                <h3>MORE LIKE THIS</h3>
                <hr />
              </div>
              <div className="grid_content">
                {relatedPosts.map((data) => (
                  <div key={data._id} className="right_side_container">
                    <div className="right_side_data">
                      <Link to={`/blog/${data?.categorySlug}`}>
                        <p className="card">{data?.categories?.title}</p>
                      </Link>
                      <h4 className="title_related">{data?.title}</h4>
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
