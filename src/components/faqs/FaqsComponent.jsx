import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./faqs.css";
import Buttons from "../button/Buttons";
import Nextstep from "../corporate/Nextstep";

export default function Faqspage() {
  return (
    <>
      <div className="w-100 px-5 pt-5 mt-3">
        <p className="fs-4 text-gold pb-3">
          <span className="text-primary fs-4">/</span> Frequently Asked
          Questions
        </p>
        <Row>
          <Col>
            <div className="">
              <div className="">
                <h3 className="border-bottom border-top border-primary py-2 d-inline-block bor">
                  Is Wifi available in all Vehicles?
                </h3>
                <p className="">
                  Yes, every vehicle in our fleet is equipped with dedicated{" "}
                  <br />
                  broadband WiFi for seamless connectivity.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="border-bottom border-top border-primary py-2 d-inline-block bor">
                  Can I make last-minute itinerary changes?
                </h3>
                <p className="">
                  Absolutely. Our service includes real-time updates, and we’re{" "}
                  <br />
                  flexible to adapt to sudden schedule changes.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="border-bottom border-top border-primary py-2 d-inline-block bor">
                  What areas do you operate in?
                </h3>
                <p className="text2">
                  Our transportation services are available across major cities
                  and <br />
                  business hubs. <br />
                  Contact us for more details on specific coverage.
                </p>
              </div>

              <div className="mt-3">
                <h3 className="border-bottom border-top border-primary py-2 d-inline-block bor">
                  How can I book the service?
                </h3>
                <p className="">
                  Simply fill out our{" "}
                  <Link to="/reservation">reservation form</Link> or book via
                  phone or text and <br />
                  our team will assist you with scheduling your trip.
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="w-100">
              <img
                src="/Img/escaladecar.png"
                alt="escalade car"
                className="w-100"
              />
              <h3 className="text-center my-4">Schedule Your Journey Today</h3>

              <div className="d-flex justify-content-center">
                <Buttons
                  text="Make Reservation"
                  linkTo="/reservation"
                  btnStyle="btn-bg"
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* <div className="next-step-container border m-3 mt-5 text-center">
        <h2 className="next-step fw-bold mb-4">
          Take the Next Step Towards Effortless Travel
        </h2>
        <h4 className=" mb-4">
          Ready to experience a new standard in executive transportation?
          Schedule your first ride with us today.
        </h4>

        <div className="d-flex justify-content-center">
          <Link to="/reservation">
            <button type="button" className="btn btn-info px-3 py-2 fs-5 mt-3">
              Make Reservation
            </button>
          </Link>
        </div>
      </div> */}

        <Nextstep
          text="Take the Next Step Towards Effortless Travel"
          parText=" Ready to experience a new standard in executive transportation?
          Schedule your first ride with us today."
        />
      </div>
    </>
  );
}
