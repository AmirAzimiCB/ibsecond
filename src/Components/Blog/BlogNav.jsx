import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

const BlogNav = ({ setFilter, isLight }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <section className="blogNav" style={{ zIndex: 10000 }}>
      <div className={`__block padded_container ${showDrawer ? "active" : ""}`}>
        <div className="blogNavBar_container">
          <Link to="/home">
            <img src="/Icons/FinalLogo.jpg" alt="Incendiary Balloons" />
          </Link>
          <div
            className="drawer_control"
            onClick={() => setShowDrawer(!showDrawer)}
          >
            {showDrawer ? (
              <HiOutlineX className="blognav-icon" />
            ) : (
              <HiOutlineMenu
                className={`blognav-icon ${isLight ? "text-white" : ""}`}
              />
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
