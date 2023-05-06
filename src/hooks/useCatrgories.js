import { useState, useEffect } from "react";
import client from "../lib/clinet";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category'] | order(slug.current asc) {
          title,
          slug {
            current
          },
          _id
        }`
      )
      .then((data) => {
        // console.log("data", data);
        setCategories(data);
      });
  }, []);

  return {
    categories,
    setCategories,
  };
};

export default useCategories;
