import React from 'react'
import './VirtualGalleryLoader.css'

function VirtualGalleryLoader() {
  return (
    <div className='loader-container'>
      <div className="loader" />
      <p>Loading Gallery</p>
    </div>
  );
}

export default VirtualGalleryLoader