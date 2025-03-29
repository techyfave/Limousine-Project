import React from "react";

function Head({ text, styling, textStyle, bgOverlay, bgImg }) {
  return (
    <div className={styling}>
      <div className={bgImg}>
        <div className={bgOverlay}>
          <h2 className={textStyle}>{text} </h2>
        </div>
      </div>
    </div>
  );
}

export default Head;
