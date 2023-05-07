// import React, { useEffect, useState } from "react";
// import "../styles/blog.css";
// import BlogNav from "../Components/Blog/BlogNav";
// import "./BlogAll.scss";
// import { Link } from "react-router-dom";
// import useStore from "../store/ZustandStore";
// import { Helmet } from "react-helmet-async";
// import Modal from "react-modal";
// import BlogShow from "../Components/Blog/BlogShow";
// import BlogPopup from "./Blogpopup";
// import sanityClient from "@sanity/client";
// import { urlFor } from "../lib/client";
// import moment from "moment/moment";

// const client = sanityClient({
//   projectId: "gwaghe3o",
//   dataset: "post",
//   useCdn: true,
//   apiVersion: "2021-10-21",
//   // other configuration options
// });

// const BlogDetails = () => {
//   const blogCategory = useStore((state) => state.blogCategory);
//   // const { filteredPosts } = usePosts(blogCategory);
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch posts from Sanity
//     const fetchPosts = async () => {
//       try {
//         // Define your Sanity query here to retrieve the necessary fields
//         const query = `*[_type == "post"] {
//           _id,
//           title,
//           slug,
//           categories -> {title},
//           excerpt,
//           author -> {name,image},
//           mainImage,
//           _createdAt
//         }`;

//         const response = await client.fetch(query);
//         setPosts(response);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [blogCategory]);

//   console.log(posts);

//   return (
//     <>
//       <Helmet>
//         <title>Blog</title>
//       </Helmet>
//       <div className=" blog-nav-fixed">
//         <BlogNav />
//         {loading ? (
//           <>Loading...</>
//         ) : (
//           <div className="blog_top">
//             <section className="blog">
//               <div className="blog_header">
//                 <h1>From the blog</h1>
//                 <p>Learn from our experts.</p>
//               </div>
//               <div className="blog_showCase">
//                 {posts?.map((post) => (
//                   <div key={post._id} className="blog_showCase_items">
//                     <img
//                       src={urlFor(post?.mainImage?.asset._ref)}
//                       alt={post?.title}
//                       className="blog_image"
//                     />
//                     <div className="blog_information">
//                       <div className="blog_top">
//                         <h4>
//                           {moment(post._createdAt).format("MMMM Do YYYY")}
//                         </h4>
//                         <p>{post?.categories?.title}</p>
//                       </div>
//                       <div className="blog_content">
//                         <Link to={`/blog/${post?.slug.current}`}>
//                           <h3 className="title">{post?.title}</h3>
//                         </Link>
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Nostrum error quae harum vero! Aliquid
//                           voluptates nihil harum placeat, id veritatis quod
//                           perspiciatis a necessitatibus accusantium, amet
//                           cupiditate itaque corrupti porro. Lorem ipsum dolor
//                           sit amet consectetur adipisicing elit. Fuga, cum
//                           ratione itaque odit veniam possimus? Sed rem tempore
//                           omnis maiores nisi optio consequuntur, qui eos
//                           temporibus unde neque? In, quisquam.
//                         </p>
//                         <div className="blog_author">
//                           <img
//                             src={"/Images/founder3.png"}
//                             alt="authors_image"
//                           />
//                           <div className="infoBar">
//                             <h3>{post?.author?.name}</h3>
//                             <p>Author</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default BlogDetails;
