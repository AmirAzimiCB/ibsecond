import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import useCategories from "../../hooks/useCatrgories";
import useStore from "../../store/ZustandStore";
import VideoLoader from "../VideoLoader/VideoLoader";

const Drawer = ({ showDrawer, setFilter, setShowDrawer }) => {
  const navigate = useNavigate();
  const [navigateTo, setNavigateTo] = useState(null);
  const { categories } = useCategories();
  const changeCategory = (category) => {
    setShowDrawer(false);
    if (category === "All") {
      setFilter("");
    } else {
      setFilter(category);
    }
  };
  const handleClick = (link) => {
    setNavigateTo(link);
    // setShow(false);
    if (window.innerWidth < 768) {
      navigate(link);
    } else {
      useStore.setState({ showVideo: true });
      setShowDrawer(false);
    }
  };
  return (
    <>
      <div className={`drawer ${showDrawer ? "show" : "hide"}`}>
        <section className='center-content h-full w-full nav-wrapper'>
          <ul className='drawer-nav-links flex-1'>
            <li onClick={() => handleClick("/home")}>
              <h4>01</h4>
              <div className='flex pointer justify-between items-center'>
                <h2 className='font-cloister-black'>Home</h2>

                <FiArrowUpRight className='icon' />
              </div>
            </li>
            <li onClick={() => handleClick("/manifesto")}>
              <h4>02</h4>
              <div className='flex pointer justify-between items-center'>
                <h2 className='font-cloister-black'>Manifesto</h2>

                <FiArrowUpRight className='icon' />
              </div>
            </li>
            <li onClick={() => handleClick("/founder")}>
              <h4>03</h4>
              <div className='flex pointer justify-between items-center'>
                <h2 className='font-cloister-black'>Founder & CEO</h2>

                <FiArrowUpRight className='icon' />
              </div>
            </li>
            <li onClick={() => handleClick("/protestresources")}>
              <h4>04</h4>
              <div className='flex pointer justify-between items-center'>
                <h2 className='font-cloister-black'>Protest Resources</h2>

                <FiArrowUpRight className='icon' />
              </div>
            </li>
            <li onClick={() => handleClick("/contact")}>
              <h4>05</h4>
              <div className='flex pointer justify-between items-center'>
                <h2 className='font-cloister-black'>Contact</h2>

                <FiArrowUpRight className='icon' />
              </div>
            </li>
            <li onClick={() => handleClick("/blog")}>
              <h4>05</h4>
              <div className='flex pointer justify-between items-center'>
                <h2 className='font-cloister-black'>Blog</h2>

                <FiArrowUpRight className='icon' />
              </div>
            </li>
          </ul>

          <ul className='flex-2'>
            <div className='flex justify-between items-center border-b-1 mb-2'>
              <Link to='/blog'>
                <h2 className='font-cloister-black'>News</h2>
              </Link>
              <FiArrowUpRight className='icon' />
            </div>
            <div className='flex'>
              <article className='category-grid bg-white'>
                {categories.map((category) => (
                 <Link to={category.title}>
                  <p
                    onClick={()=> changeCategory(category.title)}
                    key={category._id}
                  >
                    {category.title}
                  </p>
                   </Link>
                ))}
                <p onClick={() => changeCategory("All")}>All</p>
              </article>
            </div>
          </ul>
        </section>
      </div>
      {navigateTo && <VideoLoader Navigateto={navigateTo} />}
    </>
  );
};

export default Drawer;
