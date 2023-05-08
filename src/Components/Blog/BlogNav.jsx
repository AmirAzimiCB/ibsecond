import React, { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Drawer from "./Drawer";
import { Link, useLocation } from "react-router-dom";

const BlogNav = ({ setFilter, isLight }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const nav = useLocation();
  useEffect(() => {
    console.log(nav.pathname);
  }, [nav.pathname]);
  return (
    <section className="blogNav" style={{ zIndex: 100000000 }}>
      <div className={`__block padded_container ${showDrawer ? "active" : ""}`}>
        <div className="blogNavBar_container">
          {/* <Link to={`${nav.pathname === "/home" ? "/Home" : "/home"}`}> */}
          <a href="/home">
            <img src="/Icons/FinalLogo.jpg" alt="Incendiary Balloons" />
          </a>
          {/* </Link> */}
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
