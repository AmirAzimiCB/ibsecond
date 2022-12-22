import { useState, useEffect } from "react";

import client from "../lib/clinet";

const useCatrgoires = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == 'category']{
          title
        }`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return {
    categories,
    setCategories,
  };
};

export default useCatrgoires;
