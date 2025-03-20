import React from "react";
import "./herosection.css";
import { Row, Col } from "react-bootstrap";

function Herosection2() {
  return (
    <section>
      <div className="w-100 h-100 d-flex  hero-section-2 ">
        <div className="hero-section2-box-1 p-5 text-white flex-sm-wrap ">
          <div className="image-overlay">
            <h2 className="fs-1">Airport Pickup & Dropoff Made Simple</h2>
            <p className="fs-5">
              For Business travelers, airport experiences can be stressful and
              unpredictable… LRCAR takes the stress away. All pick up’s are
              closely monitored with a 24/7 professional Dispatch’s Agents who
              are dedicated to helping you with your trip. Our drivers meet you
              at baggage claim to assist with luggage. LRCAR has extensive
              experience operating with private airports.
            </p>
          </div>
        </div>

        <div className=" bg-primary p-5 flex-sm-wrap ">
          <h2 className="fs-1">Vehicles Equipped with Broadband Wi-Fi</h2>
          <p className="fs-5">
            Our fleet of SUV’s and Sedans are equipped with dedicated broadband
            Wi-Fi for robust internet service for clients wishing to work during
            their trip. This allows clients to ride in a “Mobile Office
            Environment”. LRCAR has in depth experience in providing seamless
            transportation for passengers requiring assistance in completing
            multiple business apointments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Herosection2;
