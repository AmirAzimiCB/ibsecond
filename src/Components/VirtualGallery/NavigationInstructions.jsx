import React from 'react'
import './NavigationInstructions.css'

function NavigationInstructions() {
  return (
    <div className='navigation-instructions'>
      <div className="instructions keyboard-instructions">
        <img src="./Icons/arrows.png" alt="keyboard-instructions" />
        <h4>Use arrow keys to move around</h4>
      </div>
      <div className="instructions mouse-instructions">
        <img src="./Icons/mouse.png" alt="mouse-instructions" />
        <h4>Move your mouse to look around</h4>
      </div>

    </div>
  );
}

export default NavigationInstructions