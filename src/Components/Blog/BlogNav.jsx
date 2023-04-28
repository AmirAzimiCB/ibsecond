import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

const BlogNav = ({ setFilter, isLight }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <section className="blogNav" style={{ zIndex: 10000 }}>
      <div className="__block">
        <Drawer
          setFilter={setFilter}
          showDrawer={showDrawer}
          setShowDrawer={setShowDrawer}
        />
        <div className="blognav-container">
          <Link to="/home">
            <img src="/Icons/FinalLogo.jpg" alt="Incendiary Balloons" />
          </Link>
          <div onClick={() => setShowDrawer(!showDrawer)}>
            {showDrawer ? (
              <HiOutlineX className="blognav-icon" />
            ) : (
              <HiOutlineMenu
                className={`blognav-icon ${isLight ? "text-white" : ""}`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNav;
