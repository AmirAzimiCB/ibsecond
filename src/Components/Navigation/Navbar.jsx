import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import "./Navbar.css";
export default function Navbar() {
  const [currentRoute, setCurrentRoute] = useState(
    window.location.pathname.toLowerCase()
  );

  const [show, setShow] = useState(false);
  const navLinksRef = useRef(null);
  useEffect(() => {
    if (show) {
      gsap.to(navLinksRef.current, {
        duration: 1,
        x: window.innerWidth > 768 ? -880 : -250,
        y: 0,
      });
    } else {
      gsap.to(navLinksRef.current, { duration: 1, x: 0, y: 0 });
    }
  }, [show]);
  return (
    <>
      {currentRoute !== "/" ? (
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
                <a href='/about' className='link'>
                  About
                </a>
              </li>
              <li>
                {" "}
                <a href='/founder' className='link'>
                  Founder & CEO
                </a>
              </li>
              <li>
                <a href='/protestresources' className='link'>
                  Protest Resource
                </a>
              </li>
              <li>Liminal Space</li>
              <li>
                <a href='/contact' className='link'>
                  Contact
                </a>
              </li>
              <li>
                <a href='/blog' className='link'>
                  Blog
                </a>
              </li>
            </ul>
            {show ? (
              <div className='nav-icon' onClick={() => setShow(!show)}>
                <HiOutlineX  fontSize={35} />
              </div>
            ) : (
              <div className='nav-icon' onClick={() => setShow(!show)}>
                <HiOutlineMenu fontSize={35} />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
