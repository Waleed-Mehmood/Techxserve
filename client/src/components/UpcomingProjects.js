import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UpcomingProjects.css";
import { GrView } from "react-icons/gr";
import tradxsell from "../assets/projects/tradxsell.com_.png";
import spherex from "../assets/projects/spherex.png";
import ehr from "../assets/projects/ehr.png";
import bezzkonn from "../assets/projects/bizzkonn.com_.png";
import lunacare from "../assets/projects/lunacarepk.com_.png";
import ansab from "../assets/projects/ansabgull94.wixstudio.com_my-site.png";
import bonita from "../assets/projects/bonitanails.shop_.png";
import xephra from "../assets/projects/xephra.vercel.app_.png";
import alrahid from "../assets/projects/alrahid.png";

const projects = [
  {
    id: 1,
    title: "EHR",
    description:
      "Creating a hassle free, paper less software for doctors which allows quick access to patient history, saved on excel at the back end for easy data management.",
    
    image: ehr,
    client: "EHR",
    duration: "6 months",
    technologies: ["Node", "Express", "React", "Bootstrap", "MongoDb"],
    link: "",
  },
  {
    id: 2,
    title: "Sphere X",
    description:
      "HR, inventory and acocunts management software making information easily accessible to the higher ups.",

    image: spherex,
    client: "Sphere X",
    duration: "6 months",
    technologies: ["React", "Node", "Express", "Mongodb"],
    link: "",
  },
];

const UpcomingProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center servicesTitle-text pb-4 pt-4">Upcoming Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <img src={project.image} alt="project" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <Button
                  style={{ backgroundColor: "#8b0101", border: "none" }}
                  onClick={() => handleShowModal(project)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        fullscreen // Makes it full width & height
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <div className="d-flex justify-content-center mb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid rounded mb-3 w-100 h-50 object-fit-cover"
                />
              </div>
              <div className="text-center mt-4 mb-4">
                <Button
                  style={{ backgroundColor: "#8b0101", border: "none" }}
                  onClick={() => window.open(selectedProject.link, "_blank")}
                >
                  <GrView /> View Project
                </Button>
              </div>
              <div>
                <p>
                  <strong>Description:</strong>{" "}
                  <div
                    className="ps-3"
                    dangerouslySetInnerHTML={{
                      __html: selectedProject.longDescription,
                    }}
                  />
                </p>
                <p>
                  <strong>Client:</strong> {selectedProject.client}
                </p>
                <p>
                  <strong>Duration:</strong> {selectedProject.duration}
                </p>
                <p>
                  <strong>Technologies:</strong>{" "}
                  {selectedProject.technologies.join(", ")}
                </p>
              </div>
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UpcomingProjects;
