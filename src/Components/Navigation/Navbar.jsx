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
        x: window.innerWidth > 768 ? -880 : -300,
        y: 0,
      });
    } else {
      gsap.to(navLinksRef.current, { duration: 1, x: 0, y: 0 });
    }
  }, [show]);

  switch (currentRoute) {
    case "/":
      return null;
    case "/blog/:slug":
      return (
        <>
          <div style={{ position: "relative" }}>
            <a href='/' className='link'>
              <img
                src='/Icons/FinalLogo.jpg'
                alt='logo'
                className='logo-icon'
              />
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
                    Liminal Space
                  </a>
                </li>
                <li>
                  <a href='/contact' className='link'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='/blog' className={`link`}>
                    Blog
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
    case "/blog":
      return (
        <>
          <div style={{ position: "relative" }}>
            <a href='/' className='link'>
              <img
                src='/Icons/FinalLogo.jpg'
                alt='logo'
                className='logo-icon'
              />
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
    default:
      return (
        <>
          <div style={{ position: "relative" }}>
            <a href='/' className='link'>
              <img
                src='/Icons/FinalLogo.jpg'
                alt='logo'
                className='logo-icon'
              />
            </a>
            <div className={`navbar-container `}>
              <ul ref={navLinksRef} className='nav-link'>
                <li>
                  <a href='/home' className='white-link'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/manifesto' className='white-link'>
                    Manifesto
                  </a>
                </li>
                <li>
                  <a href='/founder' className='white-link'>
                    Founder & CEO
                  </a>
                </li>
                <li>
                  <a href='/protestresources' className='white-link'>
                    Protest Resource
                  </a>
                </li>
                <li>Zine</li>
                <li>
                  <a href='/contact' className='white-link'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='/blog' className={`white-link`}>
                    Blog
                  </a>
                </li>
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
        </>
      );
  }
}
