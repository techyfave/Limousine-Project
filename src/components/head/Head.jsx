import React from "react";

function Head({ text, styling, textStyle, bgOverlay }) {
  return (
    <div className={styling}>
      <div className={bgOverlay}>
        <h2 className={textStyle}>{text} </h2>
      </div>
    </div>
  );
}

export default Head;
