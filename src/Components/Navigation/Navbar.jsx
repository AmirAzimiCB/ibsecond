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
        <>
          <img src='/Icons/earings.png' alt='logo' className='logo-icon' />
          <div className='navbar-container'>
            <ul ref={navLinksRef} className='nav-link'>
              <li>
                <a href='/' className='link'>
                  Home
                </a>
              </li>
              <li>
                <a href='/about' className='link'>
                  About
                </a>
              </li>
              <li>Founder & CEO</li>
              <li>Protest Resource</li>
              <li>Limited Space</li>
              <li>
                <a href='/contact' className='link'>
                  Contact
                </a>
              </li>
            </ul>
            {show ? (
              <div className='nav-icon' onClick={() => setShow(!show)}>
                <HiOutlineX color='#fff' fontSize={35} />
              </div>
            ) : (
              <div className='nav-icon' onClick={() => setShow(!show)}>
                <HiOutlineMenu fontSize={35} />
              </div>
            )}
          </div>
        </>
      ) : null}
    </>
  );
}
