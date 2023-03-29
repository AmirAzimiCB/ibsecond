import { useEffect, useState } from "react";
import client from "../lib/clinet";

const usePosts = (category) => {
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
  const filteredPosts = category ? posts.filter(post => post.categories?.title === category) : posts  
  return {
    filteredPosts,
    posts,
  };
};

export default usePosts;
