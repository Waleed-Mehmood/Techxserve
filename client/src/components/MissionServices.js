// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import styles from "./MissionServices.module.css";
// import contentImg from "../assets/content-marketing.jpeg";
// import socialMediaImg from "../assets/social-media-marketing.jpeg";
// import softwareDevImg from "../assets/software-development.jpeg";
// import { Link } from "react-router-dom";
// import Slider from "react-slick"; 
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// const services = [
//   {
//     title: "Software Development",
//     image: softwareDevImg,
//     description:
//       "TechXserve specializes in innovative software development services, offering tailored solutions that address the unique needs of businesses. We create high-quality, scalable, and efficient software to optimize operations and drive growth",
//   },
//   {
//     title: "Bespoke Software",
//     image: contentImg,
//     description:
//       "At TechXserve, we specialize in Bespoke Software Development—custom solutions designed to meet your business's unique needs. Unlike off-the-shelf software, bespoke solutions are crafted to align with your workflows, goals, and industry challenges.",
//   },
//   {
//     title: "Social Media Marketing",
//     image: socialMediaImg,
//     description:
//       "TechXserve specializes in social media marketing, enhancing brand presence across platforms with tailored strategies. We help businesses grow by creating engaging content and building strong customer connections",
//   },
// ];

// const MissionServices = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3, 
//     slidesToScroll: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <Container fluid className={styles.missionSection}>
//       <div className={styles.halfCircle}></div>
//       <div className={styles.missionSectionDiv2}>
//         <div className={styles.missionContent}>
//           <h2 className={styles.missionTitle}>Our Mission</h2>
//           <p className={styles.missionDescription}>
//             It is a well-established and{" "}
//             <span className={styles.highlight}>Superlative Software House</span>
//             . It is where innovation meets excellence in the world of
//             technology. Techxserve is a dynamic and enterprising software
//             development company which consists of an ambitious team of skilled
//             and experienced professionals who are committed to{" "}
//             <span className={styles.highlight}>
//               Deliver Beyond Expectations
//             </span>{" "}
//             and to{" "}
//             <span className={styles.highlight}>Client's Satisfaction</span>.
//             Techxserve is providing a wide range of services with the
//             determination of supremacy.
//           </p>
//         </div>
//         <div className={styles.serviceSection}>
//           <h2 className={styles.servicesTitle}>Our Services</h2>
//           <Slider {...settings}>
//             {services.map((service, index) => (
//               <div key={index} className={styles.serviceSlide}>
//                 <Card className={`${styles.serviceCard} my-2`}>
//                   <div className={styles.cardImageWrapper}>
//                     <Card.Img
//                       variant="top"
//                       src={service.image}
//                       className={styles.cardImage}
//                     />
//                     <div className={styles.imageTitleOverlay}>
//                       <h3 className={styles.imageTitle}>{service.title}</h3>
//                     </div>
//                   </div>
//                   <Card.Body className={styles.cardBody}>
//                     <Card.Title className={styles.cardTitle}>
//                       {service.title}
//                     </Card.Title>
//                     <div className={styles.headingLine}></div>
//                     <Card.Text className={styles.cardText}>
//                       {service.description}
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//       <div className={styles.halfCircleBottom}></div>
//     </Container>
//   );
// };

// export default MissionServices;


import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import styles from "./MissionServices.module.css";
import contentImg from "../assets/content-marketing.jpeg";
import socialMediaImg from "../assets/social-media-marketing.jpeg";
import softwareDevImg from "../assets/software-development.jpeg";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Software Development",
    image: softwareDevImg,
    description:
      "TechXserve specializes in innovative software development services, offering tailored solutions that address the unique needs of businesses. We create high-quality, scalable, and efficient software to optimize operations and drive growth",
  },
  {
    title: "Bespoke Software",
    image: contentImg,
    description:
      "At TechXserve, we specialize in Bespoke Software Development—custom solutions designed to meet your business's unique needs. Unlike off-the-shelf software, bespoke solutions are crafted to align with your workflows, goals, and industry challenges.",
  },
  {
    title: "Social Media Marketing",
    image: socialMediaImg,
    description:
      "TechXserve specializes in social media marketing, enhancing brand presence across platforms with tailored strategies. We help businesses grow by creating engaging content and building strong customer connections",
  },
];

const MissionServices = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);  // State to track the expanded service

  const toggleDescription = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if the same service is clicked
    } else {
      setExpandedIndex(index); // Expand the clicked service
    }
  };

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
                    <Card.Text
                      className={`${styles.cardText} ${
                        expandedIndex === index ? styles.expanded : ""
                      }`}
                      onClick={() => toggleDescription(index)}
                    >
                      {service.description}
                      {expandedIndex !== index && " ..."}
                    </Card.Text>
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
