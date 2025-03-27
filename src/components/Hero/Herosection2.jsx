import React from "react";
import "./herosection.css";

function Herosection2() {
  return (
    <div>
      <div className=" d-flex hero-box">
        <div className="w-100 hero-box-1">
          <div className="w-100 image-overlay px-4">
            <h2>
              Airport Pickup & Dropoff <br /> Made Simple
            </h2>
            <p>
              For Business travelers, airport experiences can be stressful and
              unpredictable… Prince Executive Transport takes the stress away.
              All pick up’s are closely monitored with a 24/7 professional
              Dispatch’s Agents who are dedicated to helping you with your trip.
              Our drivers meet you at baggage claim to assist with luggage.
              Prince Executive Transport has extensive experience operating with
              private airports.
            </p>
          </div>
        </div>
        <div className="w-100 hero-box-2 px-4">
          <h2>
            Vehicles Equipped with <br /> Broadband Wi-Fi
          </h2>
          <p>
            Our fleet of SUV’s and Sedans are equipped with dedicated broadband
            Wi-Fi for robust internet service for clients wishing to work during
            their trip. This allows clients to ride in a “Mobile Office
            Environment”. Prince Executive Transport has in depth experience in
            providing seamless transportation for passengers requiring
            assistance in completing multiple business apointments.
          </p>
        </div>
      </div>

      <div className="w-100 hero-section2-foot mb-2">
        <div className="w-100 image-blur py-5">
          <h2 className="d-flex justify-content-center">
            When you travel with Prince Executive Transport, you never travel
            alone.
          </h2>
          <p className="d-flex justify-content-center ">
            We guarantee you will be satisfied with our professional and
            reliable transport services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Herosection2;
