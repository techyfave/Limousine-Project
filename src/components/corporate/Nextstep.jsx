import React from "react";
import "./corporate.css";
import { Link } from "react-router-dom";

function Nextstep({ text, parText }) {
  return (
    <div className="bg-light mx-4 my-5 py-5 px-4 rounded">
      <h2 className="fs-3 text-center">{text}</h2>
      <p className="text-center fs-5 pt-3">{parText}</p>
      <div className="pt-3 d-flex justify-content-center">
        <p className="btn-bg fs-5 d-inline">
          <Link
            to="/reservation"
            className="text-decoration-none text-white text-center"
          >
            Make Reservation
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Nextstep;
