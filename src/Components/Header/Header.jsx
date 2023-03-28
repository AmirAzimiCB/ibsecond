import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  
  return (
    <>
     <Link to='/home'>
      <button className='enter-btn'>
        ENTER THE VOID
      </button>
     </Link>
     <Link to='/home'>
      <div className='header-container'>
        <span className='cover-title'>Incendiary Balloons</span>
      </div>
     </Link>
    </>
  );
}
