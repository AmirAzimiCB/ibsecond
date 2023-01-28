import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import BlockContent from '@sanity/block-content-to-react'
import getYouTubeId from "get-youtube-id"
import client from '../lib/clinet'
import imageUrlBuilder from '@sanity/image-url';

import Layout from "../Components/Layout";
import useSinglePost from "../hooks/useSinglePost";
import "../styles/post.css";
import YouTube from "react-youtube";
import BlogNav from "../Components/Blog/BlogNav";

const Post = () => {
  const { slug } = useParams();
  const { post, loading } = useSinglePost(slug);

  const serializers = {
    types: {
      youtube: ({ node }) => {
        const { url } = node
        const id = getYouTubeId(url)

        return (<YouTube iframeClassName={"iframe"} videoId={id} />)
      },
      code: (props) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
      image: props => {
        const { node } = props;
        const builder = imageUrlBuilder(client);
        const src = builder.image(node.asset._ref).url();
        return <img src={src} alt={node.alt} />
      }
    }
  }

  return (
    <>
      <BlogNav />
      <div className="container font-helvetica text-center blog-post__container">
        {loading && <div>Loading...</div>}
        {post?.mainImage && <img loading="lazy" src={post?.mainImage?.asset?.url} alt={""} />}
        <h1>{post?.title}</h1>
        <BlockContent blocks={post?.body} serializers={serializers} />
      </div>
    </>
  );
};

export default Post;
