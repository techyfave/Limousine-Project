import React from "react";
import "./contact.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="hero1">
      <main className=" bg-light px-4 contact-main ">
        <Row>
          <Col sm={12} md={6}>
            <div className="">
              <p className="fs-4 text-gold">
                <span className="text-info fs-4">/</span> Connect with us
              </p>
              <h2 className=" pb-3">Get in Touch</h2>
              <p className="fs-5 pr-2 pb-3">
                Prince Executive Transport is here to provide you with the best
                limousine service experience! Whether you have questions about
                our fleet, need assistance with booking, or want to discuss a
                special event, our dedicated team is ready to help.
              </p>
            </div>
            <div>
              <h4>
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;&nbsp;Contact Us
              </h4>
              <span className="mb-2 fs-5 px-5">
                Our friendly team is ready to assist you.
              </span>
              <p className="mb-4 fs-5 px-5 ">
                Email:{" "}
                <a
                  href="mailto:estinedadjuster@gmail.com"
                  className="text-primary"
                >
                  destinedadjuster@gmail.com
                </a>
              </p>

              <h4>
                <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Office Location
              </h4>
              <span className="px-5 fs-5">Visit Us at Our Office</span>
              <br />
              <span className="px-5 fs-5">9626, S. Kirkwood Road, Suite B</span>
              <p className="px-5 fs-5">Houston, Texas. 77099</p>

              <h4>
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;&nbsp;Phone Support
              </h4>
              <p className="px-5 fs-5">
                Available Monday to Friday, 8 AM to 5 PM:
              </p>
              <p>
                <a
                  href="tel:+1 610 938 1411"
                  className="text-primary px-5 fs-5"
                >
                  +1 610 938 1411
                </a>
              </p>
            </div>
          </Col>

          {/* Form area  */}
          <Col sm={12} md={6}>
            <div className="bg-secondary p-4 form">
              <h4>Elevate your Journey</h4>
              <p className="fs-5">
                You can reach out to us anytime at{" "}
                <a
                  href="mailto:estinedadjuster@gmail.com"
                  className="text-primary"
                >
                  destinedadjuster@gmail.com
                </a>
              </p>
              <form action="">
                <div>
                  <p className="fw-bold">
                    Name{" "}
                    <span className="text-danger fs-6 fw-light">
                      (Required)
                    </span>
                  </p>
                  <Row>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="firstname" className="opacity-50">
                        First
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="lastname" className="opacity-50">
                        Last
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <p className="fw-bold">
                    Email{" "}
                    <span className="text-danger fs-6 fw-light">
                      (Required)
                    </span>
                  </p>
                  <Row>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="email" className="opacity-50">
                        Enter Email
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="confirm-email" className="opacity-50">
                        Confirm Email
                      </label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                    </Col>
                  </Row>
                </div>

                <div>
                  <p className="fw-bold">
                    Comments{" "}
                    <span className="text-danger fs-6 fw-light">
                      {" "}
                      (Required)
                    </span>
                  </p>
                  <label htmlFor="comment" className="opacity-50">
                    Please let us know what's on your mind. Have a question for
                    use? Ask away.
                  </label>

                  <textarea
                    className="form-control resize"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    rows={8}
                  ></textarea>
                  <span>0 of 600 max characters</span>

                  <p className="fw-bold">
                    What is ten + 2?{" "}
                    <span className="text-danger fs-6 fw-light">
                      {" "}
                      (Required)
                    </span>
                  </p>
                  <input
                    type="text"
                    className="form-control mb-3"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />

                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default Contact;
