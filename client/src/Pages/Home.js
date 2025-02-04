import { React, useRef } from "react";
import HeroSection from "../components/HeroSection";
import MissionServices from "../components/MissionServices";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import styles from "./Home.module.css";
import OurProjects from "../components/OurProjects";

const Home = () => {
  const aboutRef = useRef(null);
  const clientsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.backgroundApp}>
      <HeroSection
        scrollToSection={scrollToSection}
        refs={{ aboutRef, clientsRef, servicesRef, projectsRef, contactRef }}
      />
      <div ref={servicesRef}>
        <MissionServices />
      </div>
      <div ref={clientsRef}>
        <Projects />
      </div>
      <div ref={projectsRef}>
        <OurProjects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
