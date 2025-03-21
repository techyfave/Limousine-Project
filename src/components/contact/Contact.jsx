import React from "react";
import "./contact.css";
import { Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <header className="contact-header w-100 d-flex justify-content-center align-items-center custom-color text-white">
        <h1 className="fs-2">Contact</h1>
      </header>

      <main className="mx-5 contact-main">
        <Row>
          <Col sm={12} md={6}>
            <div>
              <h2 className="fs-3 fw-bold pb-4">
                LRCAR Service 24/7 Live Reservation Agents
              </h2>
              <p className="fs-6 pb-4 fw-bold pr-2">
                LRCAR Service provides 24/7 Live Reservation Agents to schedule
                your local, national, international trips, one call does it all.
                We provide elite transportation services for corporate and
                individual clients seeking a professional, safe, and reliable
                transportation experience. Our live Reservation Agents are
                available 24/7 to schedule all of your transportation needs for
                local, national, and international destinations.
              </p>
            </div>
            <div>
              <p className="mb-2">
                Nationwide <span>24/7 </span> availability
              </p>
              <p className="mb-2">Dispatch,</p>
              <p className="mb-2">LRCAR Services.</p>
              <p className="mb-5">
                <a href="">dispatch@lrcarser.com</a>
              </p>

              <p className="fw-bold fs-5 mb-2">Houston Office</p>
              <p>
                <a href="#" className="mb-2">
                  +1 610-938-1411
                </a>
              </p>
              <p className="mb-5">WA +1 610-938-1411</p>
            </div>
          </Col>

          {/* Form area  */}
          <Col sm={12} md={6}>
            <div>
              <form action="">
                <div className="mb-4">
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
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                      <br />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="lastname" className="opacity-50">
                        Last
                      </label>
                      <br />
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                    </Col>
                  </Row>
                </div>

                <div className="mb-4">
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
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                      <br />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="confirm-email" className="opacity-50">
                        Confirm Email
                      </label>
                      <br />
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                      />
                    </Col>
                  </Row>
                </div>

                <p className="fw-bold">
                  Comments{" "}
                  <span className="text-danger fs-6 fw-light"> (Required)</span>
                </p>
                <label htmlFor="comment" className="opacity-50">
                  Please let us know what's on your mind. Have a question for
                  use? Ask away.
                </label>

                <textarea
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  rows={8}
                ></textarea>
                <br />
                <span>0 of 600 max characters</span>
                <br />
                <br />
                <br />

                <p className="fw-bold">
                  What is ten + 2?{" "}
                  <span className="text-danger fs-6 fw-light"> (Required)</span>
                </p>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                />
              </form>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}

export default Contact;
