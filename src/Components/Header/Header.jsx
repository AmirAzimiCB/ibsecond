import React from "react";
import "./Header.css";
import useStore from "../../store/ZustandStore";
import VideoLoader from "../VideoLoader/VideoLoader";
export default function Header() {
  const handleClick = () => {
    //navigate to another page
    useStore.setState({ showVideo: true });
  };
  return (
    <>
      <button className='enter-btn' onClick={handleClick}>
        ENTER THE VOID
      </button>
      <div className='header-container'>
        <span className='cover-title'>Incendiary Balloons</span>
      </div>
      <VideoLoader Navigateto={"/home"} />
    </>
  );
}
