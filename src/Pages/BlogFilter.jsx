import React, { useEffect } from "react";
import "../styles/blog.css";
import BlogNav from "../Components/Blog/BlogNav";
import BlogPost from "../Components/Blog/BlogPost";
import usePosts from "../hooks/usePosts";
import { Link, useParams } from "react-router-dom";
import useStore from "../store/ZustandStore";
import { Helmet } from "react-helmet-async";
import { useState } from "react";


const BlogFilter = () => {
  let vars
  const [state,setState]=useState(false)
  const blogCategory = useStore((state) => state.blogCategory)
  const { filteredPosts } = usePosts(blogCategory)
  // console.log(filteredPosts[0]?.categories?.title)
  const value=filteredPosts[0]?.categories?.title
  const params=useParams()
  for(var i=0;i<filteredPosts.length;i++){
    if(params.category===filteredPosts[i]){
      setState(true)
    }
  }
  useEffect(() => {
}, [blogCategory])
  return (
    <>
    <Helmet>
        <title>
          Blog
        </title>
      </Helmet>
         <div className="blog-page">
      <BlogNav />
      <div className="main font-helvetica blog-posts-container">
        {
          filteredPosts.length ? (
            <>
              
              <section>
                <h5 className="blog-list-section__title">Result Blogs</h5>
                
                {filteredPosts?.map((post) => (
                post?.categories?.title===params.category?(                     
                        <BlogPost 
                        key={post.slug.current}
                        slug={post.slug.current}
                        src={post.mainImage?.asset?.url}
                        heading={post.title}
                        post={post}
                        />  
                        )
                        :
                        (
                         null
                        )
                      )  )
                        }
              <h1>{state?null:(<div>No More Blogs Found, please choose another category</div>)}</h1>
              </section>
            </>
          ) : (
            <div>No Posts Found, please choose another category</div>
          )
        }
      </div>
    </div>
    </>
  );
};

export default BlogFilter;
