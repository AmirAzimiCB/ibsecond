import React, { useEffect, useState } from "react";
import "../blog.css";

import BlogPost from "../Components/Blog/BlogPost";
import client from "../lib/clinet";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
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
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="main">
        <h2 className="latest">
          The <br />
          Latest
        </h2>
        <div>
          {posts.map((post) => (
            <BlogPost
              key={post.slug.current}
              slug={post.slug.current}
              src={post.mainImage.asset.url}
              heading={post.title}
              // text={post.body[0].children[0].text}
              text={post.body.map((item) =>
                item.children.map((i) => i.text.substring(0, 80))
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
