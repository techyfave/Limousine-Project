import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

function Buttons({ btnStyle, text, linkTo }) {
  return (
    <Link to={linkTo}>
      <div className="fs-5">
        <button className={btnStyle}>{text}</button>
      </div>
    </Link>
  );
}

export default Buttons;
