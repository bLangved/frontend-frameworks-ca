import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [validationMessage, setValidationMessage] = useState("");
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.subject ||
      !formData.email ||
      !formData.body
    ) {
      setValidationMessage("Please fill in all the fields.");
      setIsOverlayVisible(true);
      return;
    }
    if (!validateEmail(formData.email)) {
      setValidationMessage("Please enter a valid email address.");
      setIsOverlayVisible(true);
      return;
    }

    console.log("Form data:", formData);
    setValidationMessage("Form was successfully submitted!");
    setFormData({
      fullName: "",
      subject: "",
      email: "",
      body: "",
    });
    setIsOverlayVisible(true);
  };

  const handleClose = () => {
    setValidationMessage("");
    setIsOverlayVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOverlayVisible && !event.target.closest(".form-alert")) {
        handleClose();
      }
    };

    if (isOverlayVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOverlayVisible]);

  return (
    <>
      {isOverlayVisible && <div className="form-alert"></div>}
      <article className="contact-content">
        <header>
          <h1 className="heading">Contact us</h1>
          <p>
            Let's get this conversation started! You can contact us in different
            ways. Here's what we offer:
          </p>
        </header>
        <section className="contact-info-section">
          <section>
            <header>
              <h2>Customer service</h2>
              <FontAwesomeIcon icon={faPhoneVolume} size="xl" />
            </header>
            <p>
              You are welcome to contact us by phone. We will answer as soon as
              we are available.
            </p>
            <dl>
              <h3>By phone</h3>
              <dt>Number:</dt>
              <dd>+00 00 00 00 00</dd>
            </dl>
            <dl>
              <h3>Opening hours:</h3>
              <dt>Monday - Friday:</dt>
              <dd>09.00 - 12.00 & 13.00 - 16.00</dd>
              <dt>Saturday - Sunday:</dt>
              <dd>Closed</dd>
            </dl>
          </section>
          <section>
            <header>
              <h2>Contact form</h2>
              <FontAwesomeIcon icon={faRectangleList} size="xl" />
            </header>
            <p>
              Fill out the form below, and we will reply to you as soon as we
              can. We aim to respond within 24 hours.
            </p>
            <p>
              We recommend checking out our <Link to="*">FAQ section</Link>{" "}
              before contacting us. Many of our customers find what they are
              looking for there!
            </p>
          </section>
        </section>
        <section>
          <h2></h2>
        </section>
        <form onSubmit={handleSubmit} aria-labelledby="contact-form">
          <fieldset>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter you name"
              aria-required="true"
            />
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter a subject"
              aria-required="true"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter a valid email address"
              aria-required="true"
            />
            <label htmlFor="body">Message:</label>
            <textarea
              id="body"
              name="body"
              rows={7}
              value={formData.body}
              onChange={handleChange}
              placeholder="Enter your message"
              aria-required="true"
            ></textarea>
          </fieldset>
          <button type="submit">Submit</button>
          {validationMessage && (
            <div className="form-alert">
              <p role="alert">{validationMessage}</p>
              <button onClick={handleClose}>Close window</button>
            </div>
          )}
        </form>
      </article>
    </>
  );
}

export default Contact;
