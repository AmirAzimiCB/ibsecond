import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import BlockContent from "@sanity/block-content-to-react";
import getYouTubeId from "get-youtube-id";
import client from "../lib/clinet";
import imageUrlBuilder from "@sanity/image-url";

import Layout from "../Components/Layout";
import useSinglePost from "../hooks/useSinglePost";
import "../styles/post.css";
import YouTube from "react-youtube";
import BlogNav from "../Components/Blog/BlogNav";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Post = () => {
  const { slug } = useParams();
  const { post, loading } = useSinglePost(slug);
  useEffect(() => {
    window.location.reload();
  }, [loading]);

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

  return (
    <>
      <Helmet>
        <title>Post</title>
      </Helmet>
      <BlogNav isLight />
      <div className="container font-helvetica blog-post__container">
        {loading && <div>Loading...</div>}
        {post?.mainImage && (
          <img loading="lazy" src={post?.mainImage?.asset?.url} alt={""} />
        )}
        <div className="post-content">
          <h1 className="post-title">{post?.title}</h1>
          <h3 className="category">{post?.categories?.title}</h3>
          <BlockContent blocks={post?.body} serializers={serializers} />
        </div>
      </div>
    </>
  );
};

export default Post;
