import React, { useState, useEffect } from "react";

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
      {isOverlayVisible && <div className="overlay"></div>}
      <article className="contact-content">
        <section>
          <h2>Contact us</h2>
          <p>
            Let's get this conversation started. Fill out the form below, and we
            will reply to you as soon as we can.
          </p>
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
