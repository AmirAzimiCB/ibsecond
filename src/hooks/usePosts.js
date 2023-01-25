import { useEffect, useState } from "react";
import client from "../lib/clinet";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          body,
          categories -> {title},
          mainImage{
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return {
    posts,
    setPosts,
  };
};

export default usePosts;
