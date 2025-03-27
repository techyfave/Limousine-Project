import React from "react";

function Head({ text, styling }) {
  return (
    <div>
      <h2 className={styling}>{text} </h2>
    </div>
  );
}

export default Head;
