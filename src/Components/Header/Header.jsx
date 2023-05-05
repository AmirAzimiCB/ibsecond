import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const navigate=useNavigate()
  return (
    <>
     <Link to='/home'>
      <div onClick={()=>{
        navigate('/home')
      }}>
         <button className="enter-btn" >ENTER THE VOID</button>
      </div>
     </Link>
      <div className='header-container'>
        <span className='cover-title'>Incendiary Balloons</span>
      </div>
    </>
  );
}
