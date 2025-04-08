import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { db } from "../../firebase/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com"
import "./reservation.css";

function Reservation() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickup_date: "",
    pickup_hour: "",
    pickup_minute: "",
    pickup_period: "AM",
    pickup_location: "",
    dropoff_location: "",
    passengers: "",
    service_type: "Airpot pick-up/drop-off",
    captcha: "",
    comments: "",
  });


  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // CAPTCHA validation
    if (formData.captcha !== "12") {
      alert("Incorrect CAPTCHA answer.");
      return;
    }

    const pickupTime = `${formData.pickup_hour}:${formData.pickup_minute} ${formData.pickup_period}`;

    const reservationData = {
      ...formData,
      pickup_time: pickupTime,
    };

    try {
      // Save data to Firebase
      await addDoc(collection(db, "reservations"), reservationData);

      // Send email via EmailJS
      await emailjs.send(
        "service_i5kcoks",
        "template_qnabg2p",
        reservationData,
        "HxBTk1Vgbi3xy8FjD"
      );

      setModal({ show: true, message: "Reservation submitted successfully!", type: "success" });
      console.log("Modal state updated:", modal);

      setTimeout(() => {
        console.log("Modal should now be visible:", modal);
      }, 100);

      setFormData({
        name: "",
        phone: "",
        email: "",
        pickup_date: "",
        pickup_hour: "",
        pickup_minute: "",
        pickup_period: "AM",
        pickup_location: "",
        dropoff_location: "",
        passengers: "",
        service_type: "Airpot pick-up/drop-off",
        captcha: "",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setModal({ show: true, message: "Failed to submit reservation. Please try again.", type: "error" });
    }
  };

  return (
    <div>
      {modal.show && (
        <div className="modal-overlay">
        <div className={`reserve-modal ${modal.type}`}>
          <p>{modal.message}</p>
          <button onClick={() => setModal({ show: false, message: "", type: "" })} className="bg-primary">Close</button>
        </div>
        </div>
      )}
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
          <form onSubmit={handleSubmit}>
            <p>
              Name <span className="text-danger">(Required)</span>
            </p>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
              required
              name="name"
              value={formData.name} 
              onChange={handleChange}
            />

            <Row>
              <Col>
                <p>
                  Phone <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="number"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  required
                  name="phone"
                  value={formData.phone} 
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <p>
                  Email <span className="text-danger">(Required)</span>
                </p>
                <input
                  type="email"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="email"
                  value={formData.email} 
                  onChange={handleChange}
                  required
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <p>
                  Pick-up Date <span className="text-danger">(Required)</span>
                </p>
                <input 
                type="date" 
                className="form-control"
                name="pickup_date"
                value={formData.pickup_date} 
                onChange={handleChange}
                required
                />
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
                  name="pickup_hour" 
                  min="1" max="12" 
                  value={formData.pickup_hour} 
                  onChange={handleChange}
                  placeholder="HH"
                  required
                />
                <input
                  type="number"
                  className="form-control-sm m-2 pick-up-time"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-lg"
                  name="pickup_minute" 
                  min="0" 
                  max="59" 
                  value={formData.pickup_minute} 
                  onChange={handleChange}
                  placeholder="MM"
                  required
                />
                <select 
                className="form-select-sm pick-up-time"
                name="pickup_period" 
                value={formData.pickup_period} 
                onChange={handleChange} 
                required
                >
                  <option  value="AM">
                    AM
                  </option>
                  <option value="PM">PM</option>
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
                  name="pickup_location" 
                  value={formData.pickup_location} 
                  onChange={handleChange}
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
                  name="dropoff_location" 
                  value={formData.dropoff_location}
                  onChange={handleChange}
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
                  name="passengers" 
                  value={formData.passengers} 
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <p>
                  Service Type <span className="text-danger">(Required)</span>
                </p>
                <select className="form-select"
                id="validationDefault04"
                name="service_type" 
                value={formData.service_type} 
                onChange={handleChange}
                required
                >
                  <option value="Airpot pick-up/drop-off">
                    Airpot pick-up/drop-off
                  </option>
                  <option value='Corporate transportation'>
                    Corporate transportation
                    </option>
                  <option value="Global transportation">
                    Global transportation
                  </option>
                  <option value="Other">
                    Other 
                    </option>
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
              name="captcha" 
              value={formData.captcha} 
              onChange={handleChange}
              required
            />

           <button type="submit">Submit Reservation</button>
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
