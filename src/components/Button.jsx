import React from 'react'
import "./button.css"

function Button({ btnStyle, text}) {

  return (
    <div>
      <button className={btnStyle}>{text}</button>
    </div>
  )
}

export default Button;
