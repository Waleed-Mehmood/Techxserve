import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Error sending the message. Try again.");
    }
  };

  return (
    <Container fluid className={styles.contactSection}>
      <h2 className={styles.title}>Contact Us</h2>
      <Row className="justify-content-center" style={{ padding: "0 20px" }}>
        <Col xs={12} md={5} className={styles.leftSection}>
          <h3 className={styles.subtitle}>Ready to Start Your Project?</h3>
          <p className={styles.description}>Let’s make your vision a reality.</p>
          <div className={styles.contactInfo}>
            <p><FaPhoneAlt /> +92 339 0018363</p>
            <p><FaMapMarkerAlt /> DHA phase 2</p>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/techxserve/" target="_blank" rel="noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.linkedin.com/company/techxserve/" target="_blank" rel="noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </Col>

        <Col xs={12} md={5} className={styles.rightSection}>
          <div className={styles.contactFormPad}>
            <h4 className={styles.formTitle}>Become a Partner</h4>
            <Form action="https://formsubmit.co/techxserve@gmail.com" method="POST">
              <Form.Group>
                <span className={styles.inputLabel}>What’s your name?*</span>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </Form.Group>
              <Form.Group>
                <span className={styles.inputLabel}>What’s your Phone number?*</span>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </Form.Group>
              <Form.Group>
                <span className={styles.inputLabel}>What’s your email?*</span>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </Form.Group>
              <Form.Group>
                <span className={styles.inputLabel}>Describe your interest</span>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  required
                />
              </Form.Group>
              <button type="submit" className={styles.submitBtn}>Submit</button>
            </Form>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
