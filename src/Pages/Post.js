import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../lib/clinet";

import { PortableText } from "@portabletext/react";

import "../styles/post.css";

const Post = () => {
  const { slug } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
            body, 
            mainImage{
              asset -> {
                _id,
                url
              },
              alt
            }
        }`
      )
      .then((data) => {
        setLoading(true);
        setPost(data[0]);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  return (
    <div className="container">
      {loading && <div>Loading</div>}
      <img src={post?.mainImage.asset.url} alt={""} />
      <h1>{post?.title}</h1>
      <PortableText value={post?.body} />
    </div>
  );
};

export default Post;
