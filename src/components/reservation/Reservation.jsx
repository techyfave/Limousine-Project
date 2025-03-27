import React from "react";
import { Row, Col } from "react-bootstrap";
import "./reservation.css";

function Reservation() {
  return (
    <div>
      <main className="mx-4 reservation-main">
        <p>
          When you travel with LRCAR Service, you never travel alone. We
          guarantee you will be satisfied with our professional and reliable
          transport services. Make a reservation by using the form below or
          &nbsp;
          <a href=""> contact us</a> at 610-938-1411
        </p>

        <div>
          <form action="">
            <p>
              Name <span>(Required)</span>
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
                  Phone <span>(Required)</span>
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
                  Email <span>(Required)</span>
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
                  Pick-up Date <span>(Required)</span>
                </p>
                <input type="date" class="form-control" required></input>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <p>
                  Pick-up Time <span>(Required)</span>
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
                  Pick-up Location <span>(Required)</span>
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
                  Drop-off Location <span>(Required)</span>
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
                  Passengers <span>(Required)</span>
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
                  Service Type <span>(Required)</span>
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
              What is ten + 2? <span>(Required)</span>
            </p>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              required
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Reservation;
