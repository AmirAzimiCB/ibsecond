import React, { useEffect } from "react";
import "./HomeImages.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export default function HomeImages() {
  const [isTop, setIsTop] = React.useState(true);
  const descRefBottom = React.useRef(null);
  const descRefTop = React.useRef(null);

  // useEffect(() => {
  //   document.getElementById("imagesContainer").scrollTop = 0;
  // }, [isTop]);

  const handleScrollClick = () => {
    console.log("clicked");
    //scroll height
    isTop
      ? descRefBottom.current.scrollIntoView({ behavior: "smooth" })
      : descRefTop.current.scrollIntoView({ behavior: "smooth" });

    setIsTop(!isTop);
  };
  return (
    <div className='imagesContainer' id='imagesContainer'>
      <img className='homeBg' src='/Images/Home-bg.png' alt='1' border='0' />
      <div className='mainContainer'>
        <div className='left-img-container'>
          <img
            className='left-img'
            src='/Images/Home-img-left.png'
            alt='1'
            border='0'
          />
          <div className='home-text-container'>
            <div className='home-desc-text'>
              <span ref={descRefTop}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                laudantium eos, excepturi repellat non vitae officia, quia vel
                dolore alias, dolor veritatis accusantium ducimus consequatur
                optio aperiam possimus cum magni.
              </span>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <span ref={descRefBottom}>
                Nottt ipsum dolor sit amet consectetur adipisicing elit. Totam
                laudantium eos, excepturi repellat non vitae officia, quia vel
                dolore alias, dolor veritatis accusantium ducimus consequatur
                optio aperiam possimus cum magni.
              </span>
            </div>
          </div>
          <div className='scroll-text' onClick={handleScrollClick}>
            {" "}
            {isTop ? (
              <AiOutlineArrowDown style={{ marginRight: ".3rem" }} />
            ) : (
              <AiOutlineArrowUp style={{ marginRight: ".3rem" }} />
            )}
            <span>{isTop ? "Scroll to read more" : "Go Back to top"}</span>
          </div>
        </div>
        <div className='right-img-container'>
          <div className='right-img-inner-upper-container'>
            <div className='right-img-inner-upper'>
              <img
                src='/Images/Home-img1.png'
                alt='1'
                border='0'
                className='home-img'
              />
              <div className='home-text-container'>
                <span style={{ fontSize: "5rem", fontWeight: 700 }}>ENTER</span>
              </div>
            </div>
            <div className='right-img-inner-upper'>
              <img
                src='/Images/Home-img2.png'
                alt='1'
                className='home-img'
                border='0'
              />
              <div className='home-text-container'>
                <span style={{ fontSize: "5rem", fontWeight: 700 }}>THE</span>
              </div>
            </div>
          </div>
          <div className='right-img-inner-lower-container'>
            <div className='right-img-inner-lower'>
              <img
                src='/Images/Home-img3.png'
                className='home-img'
                alt='1'
                border='0'
              />
              <div className='home-text-container'>
                <span style={{ fontSize: "5rem", fontWeight: 700 }}>
                  GALLERY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
