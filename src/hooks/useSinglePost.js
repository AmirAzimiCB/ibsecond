import { useState, useEffect } from "react";
import client from "../lib/clinet";

const useSinglePost = (slug) => {
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

  return {
    post,
    loading,
  };
};

export default useSinglePost;
