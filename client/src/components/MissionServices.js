import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./MissionServices.module.css";
import contentImg from "../assets/content-marketing.jpeg";
import socialMediaImg from "../assets/social-media-marketing.jpeg";
import softwareDevImg from "../assets/software-development.jpeg";
import { Link } from "react-router-dom";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Software Development",
    image: softwareDevImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Content Marketing",
    image: contentImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Social Media Marketing",
    image: socialMediaImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const MissionServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Container fluid className={styles.missionSection}>
      <div className={styles.halfCircle}></div>
      <div className={styles.missionSectionDiv2}>
        <div className={styles.missionContent}>
          <h2 className={styles.missionTitle}>Our Mission</h2>
          <p className={styles.missionDescription}>
            It is a well-established and{" "}
            <span className={styles.highlight}>Superlative Software House</span>
            . It is where innovation meets excellence in the world of
            technology. Techxserve is a dynamic and enterprising software
            development company which consists of an ambitious team of skilled
            and experienced professionals who are committed to{" "}
            <span className={styles.highlight}>
              Deliver Beyond Expectations
            </span>{" "}
            and to{" "}
            <span className={styles.highlight}>Client's Satisfaction</span>.
            Techxserve is providing a wide range of services with the
            determination of supremacy.
          </p>
        </div>
        <div className={styles.serviceSection}>
          <h2 className={styles.servicesTitle}>Our Services</h2>
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceSlide}>
                <Card className={`${styles.serviceCard} my-2`}>
                  <div className={styles.cardImageWrapper}>
                    <Card.Img
                      variant="top"
                      src={service.image}
                      className={styles.cardImage}
                    />
                    <div className={styles.imageTitleOverlay}>
                      <h3 className={styles.imageTitle}>{service.title}</h3>
                    </div>
                  </div>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>
                      {service.title}
                    </Card.Title>
                    <div className={styles.headingLine}></div>
                    <Card.Text className={styles.cardText}>
                      {service.description}
                    </Card.Text>
                    <Link variant="link" className={styles.readMore}>
                      Read More ➜
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className={styles.halfCircleBottom}></div>
    </Container>
  );
};

export default MissionServices;
