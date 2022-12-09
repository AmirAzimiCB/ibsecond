import React from "react";
import "../blog.css";

import BlogPost from "../Components/Blog/BlogPost";

const categories = [
  {
    id: 0,
    name: "Home",
  },
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Contact",
  },
  {
    id: 3,
    name: "cover",
  },
  {
    id: 4,
    name: "Founder",
  },
  {
    id: 5,
    name: "protestRoute",
  },
];

const POST = [
  {
    id: 0,
    img:
      "https://images.unsplash.com/photo-1654794376599-72916d23c87c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    heading: "Where does it come from?",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
  },
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1667210621904-bb7cfa4b42bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    heading: "Where does it come from?",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1667156553958-7aec7752bd91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    heading: "Where does it come from?",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1666808954654-c00afc5008a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    heading: "Where does it come from?",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
  },
  {
    id: 4,
    img:
      "https://images.unsplash.com/photo-1666979228782-7a431bbdf368?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    heading: "Where does it come from?",
    text:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, ",
  },
];

const Blog = () => {
  return (
    <div className="container">
      <div className="main">
        <nav>
          {categories.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </nav>

        <div>
          {POST.map((item) => (
            <BlogPost
              key={item.id}
              src={item.img}
              heading={item.heading}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
