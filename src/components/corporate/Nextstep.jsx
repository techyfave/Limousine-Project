import React from "react";
import "./corporate.css";
import Buttons from "../button/Buttons";

function Nextstep({ text, parText }) {
  return (
    <div className="bg-primary my-5 py-5 px-4 rounded">
      <h2 className="fs-3 text-center text-white">{text}</h2>
      <p className="text-center fs-5 pt-3 text-white">{parText}</p>
      <div className="pt-3 d-flex justify-content-center">
        <Buttons text="Book A Ride" linkTo="/reservation" btnStyle="btn-bg" />
      </div>
    </div>
  );
}

export default Nextstep;
