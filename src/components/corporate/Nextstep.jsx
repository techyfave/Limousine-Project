import React from "react";
import "./corporate.css"

function Nextstep() {
  return (
    <div className="nextstep-container mx-4 my-5 py-5 px-4 rounded">
      <h2 className="fs-3 fw-bold text-center">
        Take the Next Step Towards Effortless Travel
      </h2>
      <p className="text-center">
        Ready to experience a new standard in corporate transportation? Schedule
        your first ride with us today.
      </p>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-info px-3 py-1 fs-5 mt-3">
          Make Reservation
        </button>
      </div>
    </div>
  );
}

export default Nextstep;
