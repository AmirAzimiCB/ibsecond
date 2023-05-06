import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Drawer from "./Drawer";
import { Link, useLocation } from "react-router-dom";

import "./blog.scss";
import { useEffect } from "react";

const BlogNav = ({ setFilter, isLight }) => {
  const locationParam = useLocation();
  const [color, setColor] = useState("");
  useEffect(() => {
    if (locationParam.pathname === "/Environmentalism") {
      // console.log(locationParam);
      setColor("white");
      // window.location.reload();
    } else {
      setColor("black");
    }
  }, [locationParam.pathname]);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <section className="blog_nav_container" style={{ zIndex: 999999999 }}>
      <div className={`padded_container ${showDrawer ? "active" : ""}`}>
        <div className="blogNavBar_container">
          <Link to="/home">
            <img src="/Icons/FinalLogo.jpg" alt="Incendiary Balloons" />
          </Link>
          <div
            className="drawer_control"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            {showDrawer ? (
              <HiOutlineX style={{ color: "black" }} />
            ) : (
              <HiOutlineMenu style={{ color: color }} />
            )}
          </div>
        </div>
        <div className="drawerTab">
          <Drawer
            setFilter={setFilter}
            showDrawer={showDrawer}
            setShowDrawer={setShowDrawer}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogNav;
