import React, { useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styles from "./HeroSection.module.css";
import logoImage from "../assets/logo.png";


const HeroSection = () => {
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!window.VANTA || !window.VANTA.NET) return;

    const vantaEffect = window.VANTA.NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.0,
      minWidth: 100.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x808080,
      backgroundColor: 0x000000,
      points: 15.0,
      maxDistance: 24.0,
      spacing: 16.0,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup effect on unmount
    };
  }, []);

  return (
    <div>
      <div className={`${styles.heroContainer} container-fluid`}>
      <Navbar expand="lg" variant="dark" className="navbar-dark">
        <Container>
          <Navbar.Brand className={styles.navbarBrand}>
            <img
              src={logoImage} 
              alt="TXS Logo"
              className={styles.logoImage}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className={`mx-2 ${styles.navLink}`} >ABOUT US</Nav.Link>
              <Nav.Link href="#" className={`mx-2 ${styles.navLink}`}>OUR CLIENTS</Nav.Link>
              <Nav.Link href="#" className={`mx-2 ${styles.navLink}`}>SERVICES</Nav.Link>
              <Nav.Link href="#" className={`mx-2 ${styles.navLink}`}>PROJECTS</Nav.Link>
              <Nav.Link href="#" className={`mx-2 ${styles.navLink}`}>CONTACT US</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div ref={vantaRef} className={`${styles.heroContent} d-flex flex-column justify-content-start align-items-start`}>
        <div className={styles.heroText}>
          <h1 className={`${styles.heroTitle} display-4 fw-bold`}>Your Digital Success Partner</h1>
          <p className={`${styles.heroDescription} lead`}>
            Our Software House Embarks On A Mission To Create{" "}
            <span className={styles.highlight}>Digital Excellence</span> And{" "}
            <span className={styles.highlight}>Technical Expertise</span> With A Blend
            Of Creativity To Sculpt Admirable Software Solutions. We Aim To Empower
            Businesses With Top Tier Applications That Enhance Efficiency.
          </p>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.heroStatValue}>+50</div>
          <p className={styles.heroStatLabel}>Successful Projects</p>
          <div className={styles.heroStatValue}>+20</div>
          <p className={styles.heroStatLabel}>Happy Clients</p>
        </div>
      </div>
    </div>
      <div className={`${styles.techXServeBox} text-center`}>
        <h1 className={`${styles.heroTitleLarge}`}>TECHXSERVE</h1>
      </div>
    </div>
    
  );
};

export default HeroSection;
