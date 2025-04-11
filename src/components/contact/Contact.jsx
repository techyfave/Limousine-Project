import React, { useState } from "react";
import "./contact.css";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { db } from "../../firebase/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    message: "",
    captcha: "",
  });

  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== formData.confirmEmail) {
      setModal({ show: true, message: "Emails do not match..", type: "error" });
      return;
    }

    if (formData.captcha !== "12") {
      setModal({
        show: true,
        message: "incorrect captcha answer, try again.",
        type: "error",
      });
      return;
    }

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, "contacts"), {
        ...formData,
        createdAt: new Date(),
      });

      // 2. Send via EmailJS
      await emailjs.send(
        "service_i5kcoks",
        "template_zu2nc28",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        "HxBTk1Vgbi3xy8FjD"
      );

      setModal({
        show: true,
        message: "Messsage sent successfully!",
        type: "success",
      });
      console.log("Modal state updated:", modal);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        message: "",
        captcha: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setModal({
        show: true,
        message: "Failed to submit your message. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="hero1">
      {modal.show && (
        <div className="modal-overlay">
          <div className={`reserve-modal ${modal.type}`}>
            <p>{modal.message}</p>
            <button
              onClick={() => setModal({ show: false, message: "", type: "" })}
              className="bg-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
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
              <div className="mb-4 fs-5 px-5 ">
                <span>Our friendly team is ready to assist you.</span>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:princeexecutivetransport@gmail.com"
                    className="text-primary"
                  >
                    princeexecutivetransport@gmail.com
                  </a>
                </p>
              </div>

              <h4>
                <FontAwesomeIcon icon={faLocationDot} /> &nbsp; Office Location
              </h4>
              <div className="px-5 fs-5">
                <span>Visit Us at Our Office</span>
                <br />
                <span>9626, S. Kirkwood Road, Suite B</span>
                <p>Houston, Texas. 77099</p>
              </div>

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
                  href="mailto:princeexecutivetransport@gmail.com"
                  className="text-primary"
                >
                  princeexecutivetransport@gmail.com
                </a>
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <p className="fw-bold">
                    Name{" "}
                    <span className="text-danger fs-6 fw-light">
                      (Required)
                    </span>
                  </p>
                  <Row>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="firstname">First</label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="lastname">Last</label>
                      <br />
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
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
                      <label htmlFor="email">Enter Email</label>
                      <br />
                      <input
                        type="email"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                      <label htmlFor="confirm-email">Confirm Email</label>
                      <br />
                      <input
                        type="email"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-lg"
                        required
                        name="confirmEmail"
                        value={formData.confirmEmail}
                        onChange={handleChange}
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
                  <label htmlFor="comment">
                    Please let us know what's on your mind. Have a question for
                    use? Ask away.
                  </label>

                  <textarea
                    className="form-control resize"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                    rows={8}
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                    required
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                  />

                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
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
