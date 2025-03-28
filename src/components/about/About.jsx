import React from "react";
import "./about.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
              <p className="px-3 fs-4 py-3">
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
              <p className="fs-4 px-5">
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
              <p className="fs-4 px-5">
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
              <p className="fs-4 px-5">
                Our values are centered around integrity, quality, and
                innovation, ensuring we consistently deliver exceptional service
                and experiences.
              </p>
            </div>

            <div className="pt-5 d-flex justify-content-center">
              <p className="btn-bg fs-5 d-inline">
                <Link className="text-decoration-none text-white text-center">
                  Contact Us for a Free Quote
                </Link>
              </p>
            </div>
          </Col>

          <Col sm={12} md={6} lg={6}>
            <div className="image-parent border-rounded">
              <img
                src="/public/img/about-limo.jpg"
                alt=""
                className="w-100 hero1-image"
              />
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default About;
