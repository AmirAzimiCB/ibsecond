import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div style={{zIndex:99999999999}} className='contact-container'>
      <span className='contact-title'>YOUTH. CULTURE. NOW</span>
      <span className='contact-desc'>
        Have a current issue you would like us to cover? Interested in having
        Incendiary Balloons produce your next media piece?
      </span>
      <span className='contact-navs'>
        Contact Incendiary Balloons today for more information
        <a href=''>contact@incendiaryballoons.com</a>
      </span>
      <div className='form'>
        <div className='form-input-fields'>
          <input className='input-field' />
          <input className='input-field' placeholder='Subject' />
        </div>
        <textarea
          style={{ width: "100%", height: "70px" }}
          className='input-field'
          placeholder='Message'
        />

        <button className='contact-btn'>Submit</button>
      </div>
    </div>
  );
}
