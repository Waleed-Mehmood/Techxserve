import React from "react";
import styles from "./Projects.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Logo1 from "../assets/logos/accobee.png";
import Logo2 from "../assets/logos/Bizzkonn.png";
import Logo3 from "../assets/logos/bonita.png";
import Logo4 from "../assets/logos/luna-care.avif";
// import Logo5 from "../assets/logos/techxserve.png";
import Logo6 from "../assets/logos/teskha.png";
import Logo7 from "../assets/logos/tradxsell.png";
import Logo8 from "../assets/logos/xephra.png";

const Projects = () => {
  return (
    <Container fluid className={styles.projectsSection}>
      <Row className={styles.logoRow}>
        <Col xs={12} className={styles.logoContainer}>
          <div className={styles.logoTrack}>
            {Array(50) // Duplicate the list 10 times for smooth scrolling
              .fill([Logo1, Logo2, Logo3, Logo4, Logo6, Logo7, Logo8])
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
                  Tradxsell
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                  TradXSell is a secure online marketplace that connects buyers and sellers for seamless transactions of high-quality products
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={12} className={`${styles.headingContainer} my-2`}>
              <Card className={styles.projectCard}>
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                  Sixth Ledger
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                  Sixth Ledger is a financial services company that helps businesses efficiently manage their financial needs. The company offers services such as bookkeeping, payroll management, budgeting, forecasting, and year-end financial statements.
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
                    Xephra
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                  Xephra is an innovative gaming tournament platform designed to bring competitive gamers together in a thrilling and rewarding environment. Players can register for exciting gaming events by signing up and making a payment, gaining access to various tournaments across different games. In each tournament, participants compete to rank high and win a share of the prize pool, adding an extra layer of excitement and motivation. Xephra creates a seamless, user-friendly experience for gamers to challenge others and earn rewards in a dynamic gaming community.
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
                    Teskha
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                  Teskha Technologies revolutionizes education with cutting-edge solutions, empowering institutions to enhance learning and streamline operations. Our mission is to drive innovation by making education more accessible and future-ready.
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
