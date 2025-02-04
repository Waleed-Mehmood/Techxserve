import React from "react";
import styles from "./Contact.module.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container fluid className={styles.contactSection}>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.halfCircleContact}></div>
      <Row className="justify-content-center">
        <Col xs={12} md={5} className={styles.leftSection}>
          <h3 className={styles.subtitle}>Ready to Start Your Project?</h3>
          <p className={styles.description}>
            Let’s make your vision a reality. Contact us today and let’s discuss
            how we can help you innovate and grow.
          </p>
          <div className={styles.contactInfo}>
            <p className={styles.contactInfoText}>Contact Info:</p>
            <p>
              <FaPhoneAlt /> +92 339 0018363
            </p>
            <p>
              <FaMapMarkerAlt /> DHA phase 2
            </p>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/techxserve/"
              target="_blank"
            >
              <FaInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/company/techxserve/"
              target="_blank"
            >
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </Col>

        <Col xs={12} md={5} className={styles.rightSection}>
          <div className={styles.contactFormPad}>
            <h4 className={styles.formTitle}>Become a Partner</h4>
            <p className={styles.formSubtitle}>
              Break the ice! Let us help you out
            </p>

            <Form>
              <Form.Group>
                <span className={styles.inputLabel}>What’s your name?*</span>
                <Form.Control type="text" className={styles.input} required />
              </Form.Group>
              <Form.Group>
                <span className={styles.inputLabel}>
                  What’s your Phone number?*
                </span>
                <Form.Control type="text" className={styles.input} required />
              </Form.Group>
              <Form.Group>
                <span className={styles.inputLabel}>What’s your email?*</span>
                <Form.Control type="email" className={styles.input} required />
              </Form.Group>
              <Form.Group>
                <span className={styles.inputLabel}>
                  Describe your interest
                </span>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className={styles.textarea}
                />
              </Form.Group>
              <button type="submit" className={styles.submitBtn}>
                Submit
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
