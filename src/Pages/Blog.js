import React, { useState } from "react";
import "../styles/blog.css";

import BlogPost from "../Components/Blog/BlogPost";
import Layout from "../Components/Layout";
import usePosts from "../hooks/usePosts";
import useCategories from "../hooks/useCatrgories";
import Chevron from '../assets/chevron.svg'

import Marqee from "react-fast-marquee";

const Blog = () => {
  const { posts } = usePosts();
  const { categories } = useCategories();
  const [showMore, setShowMore] = useState(false)

  console.log(posts)
  return (
    <Layout isBlack={false}>
      <div>
        <div className="main font-helvetica">
          <div className="navigation-blog">
            <div key={categories[0]?._id}>{categories[0]?.title}</div>
            <div key={categories[1]?._id}>{categories[1]?.title}</div>
            <div key={categories[2]?._id}>{categories[2]?.title}</div>
            <div key={categories[3]?._id}>{categories[3]?.title}</div>
            <div key={categories[4]?._id}>{categories[4]?.title}</div>
            <div key={categories[5]?._id}>{categories[5]?.title}</div>
            <div key={categories[6]?._id}>{categories[6]?.title}</div>
            <div key={categories[7]?._id}>{categories[7]?.title}</div>
            <div onClick={() => setShowMore(!showMore)} className="flex"><span>More</span><img src={Chevron} alt="Chevron" className="chevron rotate" /></div>
            <div className={`more-links ${showMore ? 'show' : 'hidden'}`}>
              {categories.filter((item, i) => i > 7).map((item) => (
                <div key={item._id}>{item.title}</div>
              ))}
            </div>
          </div>
          <section>
            {posts?.map((post) => (
              <BlogPost
                key={post.slug.current}
                slug={post.slug.current}
                src={post.mainImage?.asset?.url}
                heading={post.title}
                text={post.body.filter(post => post._type === "block").map((item) =>
                  item.children.map((i) => i.text.substring(0, 80))
                )}
              />
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
