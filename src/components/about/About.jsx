import React from "react";
import "./about.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Buttons from "../button/Buttons";

function About() {
  return (
    <div>
      <main className="mx-4 main-about">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <div>
              <p className="fs-4 text-gold">
                <span className="text-info fs-4">/</span> Luxury Travel
              </p>
              <h2 className="px-3">
                Experience the <br /> Prestige of Royal Road
              </h2>
              <p className="px-3 fs-5 py-4">
                At Prince Executive Transport, we are dedicated to redefining
                luxury travel. With a commitment to excellence and an unwavering
                focus on customer satisfaction, we ensure that every journey is
                not just a ride but an unforgettable experience.
              </p>

              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gold float-start pt-4"
                  size="2x"
                />
              </p>
              <p className="fs-5 px-5 pt-4">
                Our mission is to provide unparalleled luxury transportation
                that ensures every journey is seamless, safe, and memorable
              </p>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gold float-start pt-4"
                  size="2x"
                />
              </p>
              <p className="fs-5 px-5 pt-2">
                Our vision is to set the standard in the transportation industry
                by consistently delivering exceptional quality, safety, and
                comfort.
              </p>
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-gold float-start pt-4"
                  size="2x"
                />
              </p>
              <p className="fs-5 px-5 pt-2">
                Our values are centered around integrity, quality, and
                innovation, ensuring we consistently deliver exceptional service
                and experiences.
              </p>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className="image-parent border-rounded">
              <img
                src="/Img/black suburban.jpg"
                alt=""
                className="w-100 hero1-image"
              />
            </div>
          </Col>
        </Row>
        <div className="pt-5 mt-2 d-flex justify-content-center">
          <Buttons
            text="View Our Services"
            linkTo="/services"
            btnStyle="btn-bg"
          />
        </div>
      </main>
    </div>
  );
}

export default About;
