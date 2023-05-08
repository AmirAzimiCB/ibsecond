import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import VideoLoader from "../VideoLoader/VideoLoader";
import sanityClient from "@sanity/client";

import "./blog.scss";
import { useEffect } from "react";
import useStore from "../../store/ZustandStore";

const client = sanityClient({
  projectId: "gwaghe3o",
  dataset: "post",
  useCdn: true,
  apiVersion: "2021-10-21",
  // other configuration options
});

const Drawer = ({ showDrawer, setFilter, setShowDrawer = () => {} }) => {
  const navigate = useNavigate();
  const [navigateTo, setNavigateTo] = useState(null);
  const setBlogCategory = useStore((state) => state.setBlogCategory);
  const changeCategory = (category) => {
    setShowDrawer(false);
    if (category === "All") {
      setBlogCategory("");
    } else {
      setBlogCategory(category);
    }
  };
  const handleClick = (link) => {
    setNavigateTo(link);
    setShowDrawer(false);
    if (window.innerWidth < 768) {
      navigate(link);
    } else {
      useStore.setState({ showVideo: true });
      setShowDrawer(false);
    }
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from Sanity
    const fetchPosts = async () => {
      try {
        // Define your Sanity query here to retrieve the necessary fields
        const query = `*[_type == 'category'] | order(slug.current asc) {
          title,
          slug {
            current
          },
          _id
        }`;

        const response = await client.fetch(query);
        setCategories(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  // console.log(categories);

  const navData = [
    {
      id: "01",
      title: "Home",
      icon: <FiArrowUpRight />,
      handleClick: "/home",
    },
    {
      id: "02",
      title: "Manifesto",
      icon: <FiArrowUpRight />,
      handleClick: "/manifesto",
    },
    {
      id: "03",
      title: "Founder & CEO",
      icon: <FiArrowUpRight />,
      handleClick: "/founder",
    },
    {
      id: "04",
      title: "Protest Resources",
      icon: <FiArrowUpRight />,
      handleClick: "/protestresources",
    },
    {
      id: "05",
      title: "Contact",
      icon: <FiArrowUpRight />,
      handleClick: "/contact",
    },
    {
      id: "06",
      title: "Blog",
      icon: <FiArrowUpRight />,
      handleClick: "/blog",
    },
  ];
  return (
    <>
      <div className={`NavDrawer ${showDrawer ? "show" : "hide"}`}>
        {!navigateTo && (
          <section className="NavDrawer__flex__content">
            {/* left side */}
            <ul className="NavDrawer_ul">
              {navData.map((data) => (
                <li
                  className="NavDrawer_li"
                  key={data.id}
                  onClick={() => {
                    handleClick(data.handleClick);
                  }}
                >
                  <h4 className="divider_id">{data.id}</h4>
                  <hr />
                  <div className="NavDrawer_flex">
                    <h2
                      // style={{ fontFamily: "CloisterBlack" }}
                      className="font-cloister-black"
                    >
                      {data.title}
                    </h2>
                    {data.icon}
                  </div>
                </li>
              ))}
            </ul>
            {/* right side */}
            <ul className="NavDrawer_right_side">
              <div className="NavDrawer_news_category">
                <div className="NavDrawer_news_category_div">
                  <h2
                    onClick={() => handleClick("/blog")}
                    style={{ fontFamily: "CloisterBlack" }}
                    className="font-cloister-black"
                  >
                    News
                  </h2>
                  <FiArrowUpRight />
                </div>
                <hr />
              </div>

              <p onClick={() => handleClick("/blog")} className="DrawerReset">
                All
              </p>
              <div className="right_side_links">
                {loading ? (
                  <>Loading...</>
                ) : (
                  <article className="right_side_blog_links">
                    {categories.map((category) => (
                      <Link
                        className="blog_links"
                        to={`/${category.slug.current}`}
                        key={category._id}
                        onClick={() => setShowDrawer(false)}
                      >
                        <p onClick={() => changeCategory(category.title)}>
                          {category.title}
                        </p>
                      </Link>
                    ))}
                  </article>
                )}
              </div>
            </ul>
          </section>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -100,
        }}
      >
        {navigateTo && <VideoLoader Navigateto={navigateTo} />}
      </div>
    </>
  );
};

export default Drawer;
