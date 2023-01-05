import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";
import useStore from "../../store/ZustandStore";
import VideoLoader from "../VideoLoader/VideoLoader";

export default function Navbar({ isBlack }) {
  const [show, setShow] = useState(false);

  const navLinksRef = useRef(null);

  useEffect(() => {
    if (show) {
      gsap.to(navLinksRef.current, {
        duration: 1,
        x: window.innerWidth > 768 ? -880 : -300,
        y: 0,
      });
    } else {
      gsap.to(navLinksRef.current, { duration: 1, x: 0, y: 0 });
    }
  }, [show]);

  if (isBlack)
    return (
      <NavbarBlack navLinksRef={navLinksRef} show={show} setShow={setShow} />
    );
  return (
    <NavbatWhite navLinksRef={navLinksRef} show={show} setShow={setShow} />
  );
}

const NavbatWhite = ({ navLinksRef, show, setShow }) => {
  const [navigateTo, setNavigateTo] = useState(null);
  const handleClick = (link) => {
    setNavigateTo(link);
    setShow(false);
    useStore.setState({ showVideo: true });
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <a href='/' className='link'>
          <img src='/Icons/LogoWhite.png' alt='logo' className='logo-icon' />
        </a>
        <div className={`navbar-container `}>
          <ul ref={navLinksRef} className='nav-link'>
            <li onClick={() => handleClick("/home")}>Home</li>
            <li onClick={() => handleClick("/manifesto")}>Manifesto</li>
            <li onClick={() => handleClick("/founder")}>Founder & CEO</li>
            <li onClick={() => handleClick("/protestresources")}>
              Protest Resource
            </li>
            <li>Zine</li>
            <li onClick={() => handleClick("/contact")}>Contact</li>
            <li onClick={() => handleClick("/blog")}>Blog</li>
          </ul>
          {show ? (
            <div className='nav-icon' onClick={() => setShow(!show)}>
              <HiOutlineX fontSize={35} />
            </div>
          ) : (
            <div className='nav-icon' onClick={() => setShow(!show)}>
              <HiOutlineMenu fontSize={35} />
            </div>
          )}
        </div>
      </div>
      {navigateTo && <VideoLoader Navigateto={navigateTo} />}
    </>
  );
};

export const NavbarBlack = ({ navLinksRef, show, setShow }) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <a href='/' className='link'>
          <img src='/Icons/dark-logo.png' alt='logo' className='logo-icon' />
        </a>

        <div className='navbar-container'>
          <ul ref={navLinksRef} className='nav-link'>
            <li>
              <a href='/home' className='link'>
                Home
              </a>
            </li>
            <li>
              <a href='/manifesto' className='link'>
                Manifesto
              </a>
            </li>
            <li>
              <a href='/founder' className='link'>
                Founder & CEO
              </a>
            </li>
            <li>
              <a href='/protestresources' className='link'>
                Protest Resource
              </a>
            </li>
            <li>
              <a href='/' className='link'>
                Blog
              </a>
            </li>
            <li>
              <a href='/contact' className='link'>
                Contact
              </a>
            </li>
          </ul>
          {show ? (
            <div className='nav-icon' onClick={() => setShow(!show)}>
              <HiOutlineX color='black' fontSize={35} />
            </div>
          ) : (
            <div className='nav-icon' onClick={() => setShow(!show)}>
              <HiOutlineMenu color='black' fontSize={35} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
