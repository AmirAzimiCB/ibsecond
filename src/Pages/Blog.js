import React from "react";
import "../styles/blog.css";

import BlogPost from "../Components/Blog/BlogPost";
import Layout from "../Components/Layout";
import usePosts from "../hooks/usePosts";
import useCategories from "../hooks/useCatrgories";

import Marqee from "react-fast-marquee";

const Blog = () => {
  const { posts } = usePosts();
  const { categories } = useCategories();

  return (
    <Layout isBlack={true}>
      <div>
        <div className="main">
          <Marqee gradient={false} spped={40}>
            {categories.map((item) => (
              <li key={item._id}>{item.title}</li>
            ))}
          </Marqee>
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
                text={post.body.map((item) =>
                  item.children.map((i) => i.text.substring(0, 80))
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
