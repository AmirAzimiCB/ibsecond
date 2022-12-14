import React from "react";
import "./Header.css";

export default function Header() {
  const handleClick = () => {
    //navigate to another page
    window.location.href = "/home";
  };
  return (
    <div className='header-container'>
      <button className='enter-btn' onClick={handleClick}>
        ENTER THE VOID
      </button>

      <span className='cover-title'>Incendiary Balloons</span>
    </div>
  );
}
