import { useState, useEffect } from "react";

import client from "../lib/clinet";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category']{
                    title,
                    _id
                } | order(title asc)`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  console.log(categories);

  return {
    categories,
    setCategories,
  };
};

export default useCategories;
