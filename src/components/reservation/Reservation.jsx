import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./reservation.css";

function Reservation() {
  return (
    <div>
      <main className="mx-4 reservation-main">
        <p className="fs-4 text-gold">
          <span className="text-info fs-4">/</span> Book A Ride
        </p>
        <h2 className="pb-3">Reserve your Limousine Today</h2>
        <p className="fs-5">
          Booking your limousine with us is easy! Simply fill out our online
          reservation form or give us a call. Let us know your requirements and
          we’ll handle the rest.
        </p>

        <div>
          <form action="">
            <p>
              Name <span className="text-danger">(Required)</span>
            </p>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              required
            />

            <Row>
              <Col>
                <p>
                  Phone <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                />
              </Col>
              <Col>
                <p>
                  Email <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>
                  Pick-up Date <span className="text-danger">(Required)</span>
                </p>
                <input type="date" class="form-control" required></input>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <p>
                  Pick-up Time <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="number"
                  className="form-control-sm pick-up-time"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  max={12}
                  min={0}
                  placeholder="HH"
                  required
                />
                <input
                  type="number"
                  className="form-control-sm m-2 pick-up-time"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  max={59}
                  min={0}
                  placeholder="MM"
                  required
                />
                <select class="form-select-sm pick-up-time" required>
                  <option selected disabled value="">
                    AM
                  </option>
                  <option>PM</option>
                </select>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>
                  Pick-up Location <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                />
              </Col>
              <Col>
                <p>
                  Drop-off Location <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>
                  Passengers <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="number"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                />
              </Col>
              <Col>
                <p>
                  Service Type <span className="text-danger">(Required)</span>
                </p>
                <select class="form-select" id="validationDefault04" required>
                  <option selected disabled value="">
                    Airpot pick-up/drop-off
                  </option>
                  <option>Corporate transportation</option>
                  <option>Global transportation</option>
                  <option>Other </option>
                </select>
              </Col>
            </Row>

            <p>
              What is ten + 2? <span className="text-danger">(Required)</span>
            </p>
            <input
              type="text"
              className="form-control mb-5"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              required
            />
            <div className="d-grid gap-2">
              <button className=" btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Reservation;
