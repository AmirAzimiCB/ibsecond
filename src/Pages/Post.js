import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";

import Layout from "../Components/Layout";
import useSinglePost from "../hooks/useSinglePost";
import "../styles/post.css";

const Post = () => {
  const { slug } = useParams();

  const { post, loading } = useSinglePost(slug);

  return (
    <Layout isBlack={true}>
      <div className="container">
        {loading && <div>Loading...</div>}
        <img loading="lazy" src={post?.mainImage.asset.url} alt={""} />
        <h1>{post?.title}</h1>
        <PortableText value={post?.body} />
      </div>
    </Layout>
  );
};

export default Post;
