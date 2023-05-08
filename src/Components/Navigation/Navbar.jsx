import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "./Navbar.css";
import useStore from "../../store/ZustandStore";
import VideoLoader from "../VideoLoader/VideoLoader";
import useCatrgoires from "../../hooks/useCatrgories";
import { useNavigate, Link, useLocation } from "react-router-dom";

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
    <NavbarWhite navLinksRef={navLinksRef} show={show} setShow={setShow} />
  );
}

const NavbarWhite = ({ navLinksRef, show, setShow }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [navigateTo, setNavigateTo] = useState(null);

  const handleClick = (link) => {
    setNavigateTo(link);
    setShow(false);
    if (window.innerWidth < 768) {
      navigate(link);
    } else {
      useStore.setState({ showVideo: true });
    }
  };
  console.log(location.pathname);
  return (
    <>
      <div style={{ position: "relative" }}>
        <Link to="/home">
          <img src="/Icons/FinalLogo.jpg" alt="logo" className="logo-icon" />
        </Link>
        <div className={`navbar-container `}>
          <ul>
            <li onClick={() => handleClick("/home")}>Home</li>
            <li onClick={() => handleClick("/manifesto")}>Manifesto</li>
            <li onClick={() => handleClick("/founder")}>Founder & CEO</li>
            <li onClick={() => handleClick("/protestresources")}>
              Protest Resources
            </li>
            <li onClick={() => handleClick("/contact")}>Contact</li>
            <li onClick={() => handleClick("/blog")}>Blog</li>
          </ul>
          {show ? (
            <div className="nav-icon" onClick={() => setShow(!show)}>
              <HiOutlineX fontSize={35} />
            </div>
          ) : (
            <div className="nav-icon" onClick={() => setShow(!show)}>
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
  const navigate = useNavigate();
  const location = useLocation();

  const [navigateTo, setNavigateTo] = useState(null);
  const handleClick = (link) => {
    setNavigateTo(link);
    setShow(false);

    if (window.innerWidth < 768) {
      navigate(link);
    } else {
      useStore.setState({ showVideo: true });
    }
  };
  console.log(location.pathname);

  return (
    <>
      <div style={{ position: "relative" }}>
        <Link to="/home">
          <img src="/Icons/FinalLogo.jpg" alt="logo" className="logo-icon" />
        </Link>

        <div className="navbar-container">
          <ul>
            <li onClick={() => handleClick("/home")}>Home</li>
            <li onClick={() => handleClick("/manifesto")}>Manifesto</li>
            <li onClick={() => handleClick("/founder")}>Founder & CEO</li>
            <li onClick={() => handleClick("/protestresources")}>
              Protest Resources
            </li>
            <li>Zine</li>
            <li onClick={() => handleClick("/contact")}>Contact</li>
            <li onClick={() => handleClick("/blog")}>Blog</li>
          </ul>
          {show ? (
            <div className="nav-icon" onClick={() => setShow(!show)}>
              <HiOutlineX color="black" fontSize={35} />
            </div>
          ) : (
            <div className="nav-icon" onClick={() => setShow(!show)}>
              <HiOutlineMenu color="black" fontSize={35} />
            </div>
          )}
        </div>
      </div>
      {navigateTo && <VideoLoader Navigateto={navigateTo} />}
    </>
  );
};
