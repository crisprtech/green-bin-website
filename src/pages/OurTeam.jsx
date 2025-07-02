import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dave Orach",
    title: "Chief Executive Officer (CEO)",
    message: "Leading GreenBin Foundation towards a sustainable future, empowering communities with eco-friendly solutions.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Sophia Martinez",
    title: "Chief Technology Officer (CTO)",
    message: "Driving innovative technology for sustainability and carbon footprint reduction.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "James Kimani",
    title: "Chief Financial Officer (CFO)",
    message: "Ensuring financial sustainability for GreenBin Foundation’s global impact.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Dr. Emily Carter",
    title: "Head of Research & Development",
    message: "Advancing scientific research to develop innovative eco-green initiatives.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Mark Thompson",
    title: "Global Outreach Director",
    message: "Building international partnerships to expand our environmental mission.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    "name": "ZenetraLabs Limited",
    "title": "IT Team Department",
    "message": "Responsible for the IT framework, including the ERP system and the GreenBin app, ensuring seamless technology integration to drive our environmental mission forward.",
    "image": "https://via.placeholder.com/150" // Replace with actual image
  },
  {
    "name": "Ava Sinclair",
    "title": "Marketing Analyst",
    "message": "Crafting data-driven marketing strategies to elevate GreenBin’s visibility, engage communities, and drive global adoption of our eco-friendly initiatives.",
    "image": "https://via.placeholder.com/150" // Replace with actual image
  }
  
  
];

const OurTeam = () => {
  return (
    <Container fluid className="py-5">
      {/* Introduction Section */}
      <Row className="mb-5">
        <Col lg={10} className="mx-auto text-center">
          <h2 className="text-primary fw-bold">Meet Our Team</h2>
          <p className="mt-3">
            The GreenBin Foundation is committed to environmental sustainability, innovation, and community-driven solutions. Our dedicated team consists of
            professionals from diverse backgrounds who share a passion for making the world greener. From technology to finance, research to global outreach,
            our team is driven by the common goal of transforming the way we manage waste and carbon emissions.
          </p>
        </Col>
      </Row>

      {/* Team Members Section */}
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Card className="shadow-sm text-center">
                <Card.Img variant="top" src={member.image} className="rounded-circle w-50 mx-auto mt-3" />
                <Card.Body>
                  <Card.Title className="fw-bold">{member.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{member.title}</Card.Subtitle>
                  <Card.Text className="mt-2">{member.message}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurTeam;
