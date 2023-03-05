import React from "react";
import "./Header.css";
export default function Header() {
  const handleClick = () => {
    //navigate to another page
    window.location.href = "/home";
  };
  return (
    <>
      <button className='enter-btn' onClick={handleClick} style={{ zIndex: 100 }}>
        ENTER THE VOID
      </button>
      <div className='header-container'>
        <span className='cover-title'>Incendiary Balloons</span>
      </div>
    </>
  );
}
