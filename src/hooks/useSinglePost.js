import { useState, useEffect } from "react";
import client from "../lib/clinet";

const useSinglePost = (slug) => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == "${slug}"]{
          title,
          body,
          categories[]->{
            title
          },
          slug,
          mainImage {
            asset->{
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

  // console.log(post);
  return {
    post,
    loading,
  };
};

export default useSinglePost;
