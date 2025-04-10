import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ourprojects.css";
import { GrView } from "react-icons/gr";
import tradxsell from "../assets/projects/tradxsell.com_.png";
import accobees from "../assets/projects/accobees.com_.png";
import teskha from "../assets/projects/teskha.com_ (1).png";
import bezzkonn from "../assets/projects/bizzkonn.com_.png";
import lunacare from "../assets/projects/lunacarepk.com_.png";
import ansab from "../assets/projects/ansabgull94.wixstudio.com_my-site.png";
import bonita from "../assets/projects/bonitanails.shop_.png";
import xephra from "../assets/projects/xephra.vercel.app_.png";
import alrahid from "../assets/projects/alrahid.png";
import sixthledger from "../assets/projects/sixthledger.PNG";

const projects = [
  {
    id: 1,
    title: "Tradxsell",
    description:
      "TradXSell is a secure online marketplace that connects buyers and sellers for seamless transactions of high-quality products",
    longDescription:
      "TradXSell is an advanced B2B online marketplace designed to bridge the gap between businesses by providing a secure, efficient, and user-friendly platform for buying and selling high-quality products. Our platform caters to a wide range of industries, enabling businesses to connect, engage, and conduct transactions with ease. Whether you're a manufacturer, wholesaler, retailer, or distributor, TradXSell offers the perfect environment for growing your business and expanding your reach. <br /><br /> With a strong emphasis on reliability and trust, TradXSell ensures that each transaction is secure, offering robust tools to verify products, suppliers, and buyers. Our platform is designed to streamline the procurement and sales process, making it easier for businesses to find the products they need and negotiate the best deals. We provide an extensive catalog of products across various categories, from raw materials to finished goods, allowing businesses to source products in bulk at competitive prices.<br /><br /> TradXSell’s advanced search and filtering tools ensure that businesses can quickly locate the products they require, saving time and resources. Our platform also supports flexible payment options, secure logistics management, and integrated communication channels that make business dealings smooth and efficient. Additionally, TradXSell provides valuable analytics and insights to help businesses make informed decisions and track their growth.<br ></br>At TradXSell, we aim to empower businesses by providing them with the tools they need to succeed in a competitive global market. Our platform fosters long-term partnerships, enhances supply chain management, and ensures a seamless connection between businesses, helping them achieve their goals and drive success.",
    image: tradxsell,
    client: "Tradxsell",
    duration: "6 months",
    technologies: ["Node", "Express", "React", "Bootstrap", "MongoDb"],
    link: "https://tradxsell.com/",
  },
  {
    id: 2,
    title: "Xephra",
    description:
      "Xephra is a gaming tournament platform where players register, compete in events, and earn pool prizes based on their rankings",
    longDescription:
      "Xephra is a premier gaming tournament platform designed to bring gamers together for competitive events with real stakes. Whether you're a casual player or a professional competitor, Xephra offers a space to showcase your skills, participate in a variety of tournaments, and win exciting pool prizes. Players register on the platform, choose from a wide range of gaming events, and compete for a chance to claim the top spot on the leaderboard.<br></br> What sets Xephra apart is the seamless integration of registration and payment options, allowing users to easily enter tournaments and gain access to multiple prize pools. The platform hosts regular events, ranging from beginner-friendly competitions to high-stakes professional tournaments, ensuring there’s something for everyone.<br></br> With real-time rankings and updates, players can track their performance and progress through the tournament, making it not only a chance to win but also a journey of skill development.<br></br> Xephra’s commitment to providing an engaging, competitive environment ensures that each player can enjoy a thrilling and rewarding gaming experience. Whether you're aiming to secure your place at the top or simply have fun with others, Xephra offers a dynamic community and an exciting path to gaming success.",
    image: xephra,
    client: "Xephra",
    duration: "3 months",
    technologies: ["React", "Node", "Express", "Mongodb"],
    link: "https://xephra.vercel.app/",
  },

  {
    id: 3,
    title: "Teskha",
    description:
      "Teskha Technologies drives innovation in education with cutting-edge solutions, empowering institutions for digital transformation.",
    longDescription:
      "Teskha Technologies is dedicated to transforming education through innovative technology, providing cutting-edge solutions that empower schools, institutions, and educators worldwide. With a strong commitment to digital transformation, we offer advanced educational tools, AI-driven learning platforms, and customized software to enhance accessibility, engagement, and efficiency in education.<br ></br> Our approach is highly personalized, ensuring that each institution receives tailored solutions that address its unique challenges, from cloud-based learning management systems to interactive student engagement tools and automated administrative processes.<br></br> Backed by a team of global experts in education technology and digital transformation, we bring together the best practices and latest advancements to help institutions seamlessly integrate technology into their learning environments.<br></br> Our mission extends beyond technology—we strive to create an inclusive and future-ready educational ecosystem where institutions can overcome barriers, educators can harness powerful teaching tools, and students can benefit from an enriched learning experience. By continuously innovating and adapting to the evolving needs of the education sector, Teskha Technologies is committed to shaping the future of learning, ensuring sustainability, efficiency, and growth in an increasingly digital world.",
    image: teskha,
    client: "Teskha",
    duration: "1 months",
    technologies: ["React", "Node", "Express", "Mongodb"],
    link: "https://teskha.com/",
  },
  {
    id: 4,
    title: "Bizzkonn",
    description:
      "BIZZKONN empowers businesses with innovative solutions to drive growth, enhance efficiency, and achieve long-term success globally",
    longDescription:
      "BIZZKONN is a progressive organization committed to providing cutting-edge services and solutions that empower businesses to achieve their full potential. With a strong focus on innovation, we help companies worldwide navigate the complexities of a dynamic business environment by fostering growth, optimizing operational efficiency, and ensuring long-term success. Our expertise spans multiple industries, enabling us to deliver tailored strategies that enhance productivity, streamline processes, and drive sustainable expansion.<br></br> At BIZZKONN, we believe in building strong, long-lasting partnerships with our clients, offering them the tools, insights, and support needed to stay competitive in an ever-evolving global market. Whether through advanced technology solutions, strategic business consulting, or operational enhancements, we are dedicated to transforming challenges into opportunities and propelling businesses toward a future of excellence.",
    image: bezzkonn,
    client: "Bezzkonn",
    duration: "2 months",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://bizzkonn.com/",
  },
  {
    id: 5,
    title: "Lunacarepk",
    description:
      "Luna Care is an organic clothing brand creating soft, sustainable, and timeless apparel for little ones with comfort, quality, and eco-consciousness at its core.",
    longDescription:
      "Luna Care is a thoughtfully crafted organic clothing brand, born from the shared vision of three childhood friends who are passionate about sustainable living and creating timeless, high-quality apparel for little ones. Our collections are designed with a minimalist approach, focusing on comfort, durability, and style, making each piece perfect for your Luna’s delicate skin.<br></br> From rompers to co-ord sets, every item in our boutique is carefully handpicked to ensure it meets our strict standards for both style and sustainability.<br></br> At Luna Care, we believe in providing clothing that is not only adorable and practical but also kind to the planet. Our journey began with a dream to create a brand that embodies love, care, and responsibility—clothing that can be cherished, worn, and passed down for generations. With a focus on organic materials, ethical production, and sustainable practices, Luna Care is more than just a clothing line—it’s a commitment to a better future for your little ones and the Earth they will inherit.",
    image: lunacare,
    client: "Luna Care",
    duration: "1 months",
    technologies: ["Shopify"],
    link: "https://lunacarepk.com/",
  },
  {
    id: 6,
    title: "RS",
    description:
      "RS is an online clothing store offering a curated collection of stylish, high-quality apparel for every occasion",
    longDescription:
      "RS is a premier online clothing store dedicated to offering a sophisticated and diverse range of fashion-forward apparel for men and women. With a focus on quality, style, and affordability, we bring the latest trends and timeless wardrobe staples directly to your doorstep. Our collection is thoughtfully curated to cater to a variety of tastes, whether you're looking for everyday essentials, elegant pieces for special occasions, or bold statements that make you stand out. At AnsabGul, we prioritize both comfort and style, ensuring that every piece is crafted with care and designed to offer versatility and lasting wear. We strive to create a seamless shopping experience, providing our customers with top-notch service, fast shipping, and clothing that elevates their personal style.",
    image: ansab,
    client: "RS",
    duration: "1 months",
    technologies: ["Shopify"],
    link: "https://ansabgull94.wixstudio.com/my-site",
  },
  {
    id: 7,
    title: "Bonitanails",
    description:
      "Bonita is a premium nail care brand offering luxurious nail services and products designed to inspire confidence, creativity, and elegance.",
    longDescription:
      "Bonita is a premium nail care service dedicated to providing top-quality manicures, nail art, and advanced nail treatments. We offer a range of services, including classic manicures, intricate designs, and luxurious hand care treatments, all designed to help you express your individuality. Our skilled professionals use high-end products to ensure lasting results, offering a relaxing, indulgent experience for every client. Whether you're looking for a quick refresh or an elaborate nail design, Bonita has you covered with stylish, elegant, and customizable nail care solutions",
    image: bonita,
    client: "Bonitanails",
    duration: "1 months",
    technologies: ["React", "Node", "Express", "Mongodb"],
    link: "https://bonitanails.shop/",
  },
  {
    id: 8,
    title: "Accobee",
    description:
      "Accobee simplifies business financial management with expert bookkeeping, tax services, and innovative software solutions",
    longDescription:
      "At Accobee Accountants and Bookkeepers, we are driven by a mission to empower businesses by offering top-notch services that meet the unique financial needs of each client. Our aim is to simplify complex financial computations, reduce intricacies, and maintain the highest ethical standards to provide transparency in every aspect of business accounting. This enables businesses to make informed decisions with confidence.<br></br>We serve as a trusted partner for business owners in the UK and Pakistan, offering in-depth insights to ensure long-term sustainability and consistent growth, even amidst market shifts. Our core goal is to be a dependable ally, helping businesses not just survive but thrive in an ever-evolving landscape.<br></br>Our vision is to make professional financial management accessible to businesses of all sizes, particularly small-scale businesses. We are committed to delivering high-quality, affordable services that are easy to understand. We aim to foster financial literacy, promote financial growth, and ensure compliance with regulatory tax authorities, allowing our clients to focus on their core business activities while we take care of the paperwork.<br></br>In addition, we offer special discounts for women-owned businesses to help them succeed, reflecting our dedication to supporting diverse entrepreneurial ventures. Partnering with Accobee means choosing a path of financial clarity, compliance, and growth, all backed by a reliable team that is as committed to your success as you are",
    image: accobees,
    client: "Accobee",
    duration: "1 months",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "https://accobees.com/",
  },
  {
    id: 9,
    title: "Alrahid",
    description:
      "The company  builds modular containers and pre-fabricated buildings, sustainable and cost-effective solutions for the residential and commercial sectors",
    longDescription:
      "The company specializes in designing and constructing modular containers and pre-fabricated buildings, offering innovative and cost-effective solutions for both residential and commercial industries. Their expertise lies in creating sustainable, durable, and efficient structures tailored to meet the specific needs of their clients. By utilizing modular design principles, the company ensures flexibility in construction, allowing for faster delivery times, reduced costs, and minimal environmental impact.<br></br>In the residential sector, the company provides high-quality, customizable modular homes that are both eco-friendly and affordable. These homes are designed to offer modern living spaces with energy-efficient features, ensuring comfort and sustainability. With various design options available, clients can choose layouts and finishes that suit their style and requirements, while also benefiting from the reduced construction time and lower costs associated with modular building techniques.<br></br>For the commercial sector, the company offers pre-fabricated buildings that can be used for a wide range of applications, including office spaces, retail outlets, warehouses, and more. These buildings are built with the same attention to detail and commitment to sustainability, offering businesses a practical and efficient solution for expanding their operations. The modular nature of these structures means that they can be easily adapted or expanded as the business grows, providing long-term flexibility.<br></br>In addition to residential and commercial buildings, the company also provides specialized solutions for various industries that require temporary or portable structures, such as construction sites, event spaces, and emergency housing. These pre-fabricated buildings are designed for easy transport and quick assembly, making them ideal for short-term or mobile uses.<br></br>The company places a strong emphasis on sustainability, using environmentally friendly materials and construction practices. Their modular designs minimize waste and energy consumption, making them a greener alternative to traditional construction methods. Furthermore, their buildings are designed to meet or exceed industry standards for energy efficiency and environmental performance, contributing to the reduction of the overall carbon footprint.",
    image: alrahid,
    client: "Al Rahid",
    duration: "2 months",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    link: "Alrahid.com",
  },
  {
    id: 10,
    title: "Sixth Ledger",
    description:
      "Sixth Ledger is a financial company that offers services such as bookkeeping, payroll management, budgeting, forecasting, and year-end financial statements.",
    longDescription:
      "At Sixth Ledger, we combine expertise and advanced tools like QuickBooks and Xero to deliver comprehensive financial services. From accurate bookkeeping and custom Excel solutions to efficient payroll management, our team ensures every aspect of your business’s financial needs is handled with precision.<br></br>With professional services like budgeting and forecasting, year-end financial statements, and strategic competitor analysis, we empower startups and established enterprises alike to thrive in a competitive market.<br></br>Led by a team of experienced ACCA Affiliates in Pakistan, we prioritize accuracy, compliance, and efficiency. Partner with us for tailored financial solutions, ensuring clarity and success every step of the way.",
    image: sixthledger,
    client: "Sixth Ledger",
    duration: "1 month",
    technologies: ["React", "Node", "Express", "Mongodb"],
    link: "https://sixthledger.com/",
  },
];

const OurProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center servicesTitle-text pb-4 pt-4">Latest Projects</h2>
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

export default OurProjects;
