
import React from 'react';
import { Link } from "react-router-dom";

import './faqs.css';

export default function Faqspage() {
  return (
    <>
      <div className="main-container d-flex justify-content-between flex-column flex-lg-row">
        <div className="content-section m-1 mt-5">
          <div className="faq-item">
            <h3 className="text1 fw-bold">Is Wifi available in all Vehicles?</h3>
            <p className="text2">
              Yes, every vehicle in our fleet is equipped with dedicated <br />
              broadband WiFi for seamless connectivity.
            </p>
          </div>

          <div className="faq-item mt-5">
            <h3 className="text1 fw-bold">Can I make last-minute itinerary changes?</h3>
            <h5 className="text2">
              Absolutely. Our service includes real-time updates, and we’re <br />
              flexible to adapt to sudden schedule changes.
            </h5>
          </div>

          <div className="faq-item mt-5">
            <h3 className="text1 fw-bold">What areas do you operate in?</h3>
            <p className="text2">
              Our transportation services are available across major cities and <br />
              business hubs. <br />
              Contact us for more details on specific coverage.
            </p>
          </div>

          <div className="faq-item mt-5">
            <h3 className="text1 fw-bold">How can I book the service?</h3>
            <p className="text2">
              Simply fill out our <Link to="/reservation">reservation form</Link> or book via phone or text and <br />
              our team will assist you with scheduling your trip.
            </p>
          </div>
        </div>

        <div className="image-section text-center mt-5">
          <img 
            src="public/Img/escaladecar.png" 
            alt="escalade car" 
            className="rounded crop-img responsive-img img-fluid" style={{ width: "600px"}}
          />
          <h2 className="schedule-travel">Schedule Your Travel Today</h2>
          <button className="reservation-btn border-0 p-2 text-white rounded fs-4">
            Make A Reservation
          </button>
        </div>
      </div>

      <div className="next-step-container border m-3 mt-5 text-center">
        <h2 className="next-step fw-bold mb-4">
          Take the Next Step Towards Effortless Travel
        </h2>
        <h4 className=" mb-4">
          Ready to experience a new standard in executive transportation? 
          Schedule your first ride with us today.
        </h4>
        <button className="reservation-btn border-0 p-2 text-white rounded fs-4">
          Make A Reservation
        </button>
      </div>
    </>
  );
}