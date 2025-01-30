import React from "react";
import styles from "./Projects.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";

const Projects = () => {
  return (
    <Container fluid className={styles.projectsSection}>
      <Row className={styles.logoRow}>
        <Col xs={12} className={styles.logoContainer}>
          <div className={styles.logoTrack}>
            {Array(15) // Duplicate the list 10 times for smooth scrolling
              .fill([Logo1, Logo2, Logo3])
              .flat()
              .map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  className={styles.logo}
                />
              ))}
          </div>
        </Col>
      </Row>

      {/* 50+ Projects Section */}
      <Row className={styles.headingRow}>
        <Col xl={6}>
          <Row>
            <Col xl={6} className={styles.headingContainer}>
              <h1 className={styles.heading}>
                <span className={styles.highlightedText}>50+</span> Projects
              </h1>
            </Col>
            <Col xl={6} className={styles.headingContainer}>
              <Card className={styles.projectCard}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Project Name
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua. Ut Enim Ad Minim Veniam.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12} className={`${styles.headingContainer} my-2`}>
              <Card className={styles.projectCard}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Project Name
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua. Ut Enim Ad Minim Veniam.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xl={4}>
          <Row className={styles.projectRow}>
            <Col xl={12} sm={12} className=" my-2">
              <Card className={styles.projectCard}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Project Name
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua. Ut Enim Ad Minim Veniam.Lorem Ipsum Dolor Sit Amet,
                    Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor
                    Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad
                    Minim Veniam.Lorem Ipsum Dolor Sit Amet, Consectetur
                    Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore
                    Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam.Lorem Ipsum
                    Dolor Sit Amet, Consectetur Adipiscing Elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col xl={2}>
          <Row className={styles.projectRow}>
            <Col xl={12} sm={12}>
              <Card className={styles.projectCard}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    Project Name
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                    Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                    Aliqua. Ut Enim Ad Minim Veniam.Lorem Ipsum Dolor Sit Amet,
                    Consectetur Adipiscing Elit, Sed Do Eiusmod.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
