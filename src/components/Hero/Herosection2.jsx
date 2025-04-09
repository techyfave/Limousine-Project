import React from "react";
import "./herosection.css";
import { Row, Col } from "react-bootstrap";
import Buttons from "../button/Buttons";

function Herosection2() {
  return (
    <div>
      <div className="hero-box bg-black px-4 position-relative">
        <p className="fs-4 text-center text-gold">
          <span className="text-white fs-5">/</span> Effortless Travel Solutions
        </p>

        <div className=" mt-4 text-white">
          <Row>
            <Col sm={12} md={6}>
              <div className="w-100 mt-5">
                <h2 className="text-white text-center fs-3 pb-3">
                  Streamlined Travel for Business Travelers
                </h2>
                <div className="text-black fs-5 bg-secondary py-4 px-3 hero1">
                <p className="fs-5 p-3 hero1">
                  {" "}
                  &nbsp; Traveling for business can be stressful and
                  unpredictable. With Prince Executive Transport LLC, you can
                  leave the worries behind. Our airport pickup and drop-off
                  services are meticulously planned to ensure a smooth
                  experience. Our vehicles are equipped with advanced tracking
                  technology, providing you with real-time updates and peace of
                  mind.
                  </p>
                  <ul className="fs-5 pt-4">
                    <li>
                      24/7 Professional Support: Our dedicated Dispatch Agents
                      are available around the clock to assist you with your
                      travel needs. Whether adjusting your schedule or handling
                      special requests, we’re here to help.
                    </li>
                    <li className="pt-3">
                      Efficient Luggage Handling: Our trained chauffeurs will
                      assist you with your luggage right at the baggage claim,
                      ensuring a seamless transition from the airport to your
                      destination.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className="w-100 text-white mt-5">
                <h2 className="text-white text-center fs-3 pb-3">
                  Stay Connected While You Travel
                </h2>
                <div className="fs-5 bg-primary py-4 px-3 hero1">
                  <p className="fs-5 p-3 hero1">
                  {" "}

                  &nbsp; Our fleet of luxury SUVs and sedans comes equipped with
                  high-speed broadband Wi-Fi, allowing you to stay connected and
                  productive during your journey. Whether you're managing work,
                  making calls, or relaxing before your next meeting, we provide
                  a “Mobile Office Environment.”
                  </p>
                  <ul className="fs-5 pt-5">
                    <li>
                      Comfort & Productivity: Enjoy the plush interiors of our
                      vehicles without compromising your work. Our comfortable
                      seating and amenities make it easy for you to focus or
                      unwind.
                    </li>
                    <li className="pt-3">
                      Expertise in Transportation: With extensive experience in
                      providing transportation, Prine Executive Transport caters
                      to all your corporate travel needs, from airport pickups
                      to business meetings and event transportation.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="w-100 hero-section2-foot mb-2">
          <div className="w-100 image-blur py-5 text-white">
            <h2 className="text-center">
              When you travel with Prince Executive Transport, you never travel
              alone.
            </h2>
            <p className="text-center fs-6 px-4 py-3 hero1 ">
              We guarantee that you will be satisfied with our professional and
              reliable transportation services. Your journey begins with us,
              ensuring comfort, safety, and efficiency every step of the way.
            </p>

            <div className="d-flex justify-content-center pt-4">
              <Buttons
                text="Reserve a Ride Today"
                linkTo="/reservation"
                btnStyle="btn-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection2;
