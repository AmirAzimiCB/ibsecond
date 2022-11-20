import React from "react";
import Icon from "../Components/3dModels/Icon";

export default function About() {
  return (
    <>
      <div
        style={{ position: "relative", overflow: "hidden" }}
        className='container'
      >
        <img
          style={{ height: "100vh", width: "100%", overflow: "hidden" }}
          src={"/Images/background.png"}
          alt='background'
        />
        <Icon />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
        className='about-text-container'
      >
        <div className='about-image'>
          <img
            style={{ height: "100vh", width: "100%", overflow: "hidden" }}
            src={"/Images/background.png"}
            alt='about image'
          />
        </div>

        <div
          style={{
            width: "45%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 5%",
          }}
          className='about-text'
        >
          <h1
            style={{
              textAlign: "center",
            }}
          >
            About
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, nunc nisl aliquam nisl, quis
            aliquam nisl nunc vel nunc. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, nunc nisl aliquam nisl, quis
            aliquam nisl nunc vel nunc. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, nunc nisl aliquam nisl, quis
            aliquam nisl nunc vel nunc. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi facilisi. Nulla facilisi.
            Nulla facilisi. Nulla facilisi. Nulla
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            condimentum, nisl ut aliquam lacinia, nunc nisl aliquam nisl, quis
            aliquam nisl nunc vel nunc. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
            facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          </p>
        </div>
      </div>
    </>
  );
}
