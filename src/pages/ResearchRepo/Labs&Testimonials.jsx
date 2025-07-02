import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

// Research Labs Data
const researchLabs = [
  {
    name: "Nairobi AI & Sustainability Lab",
    location: "Nairobi",
    researchFocus: "AI for Climate Solutions",
    squads: ["GreenTech Innovators", "Eco AI Squad"],
    totalAttended: 120,
  },
  {
    name: "Mombasa Marine Innovation Lab",
    location: "Mombasa",
    researchFocus: "Ocean Cleanup Technologies",
    squads: ["Blue Warriors", "Coastal Savers"],
    totalAttended: 95,
  },
  {
    name: "Kisumu AgriTech Lab",
    location: "Kisumu",
    researchFocus: "Sustainable Agriculture",
    squads: ["AgriFutures", "Green Harvesters"],
    totalAttended: 80,
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Dr. Jane Mwangi",
    location: "Nairobi AI Lab",
    image: "jane.jpg",
    feedback: "This lab has transformed brains into powerhouses of innovation!",
  },
  {
    name: "Eng. David Kimani",
    location: "Mombasa Marine Lab",
    image: "david.jpg",
    feedback: "We've pioneered new marine cleanup techniques right here!",
  },
  {
    name: "Prof. Alice Oduor",
    location: "Kisumu AgriTech Lab",
    image: "alice.jpg",
    feedback: "Revolutionizing sustainable farming—one innovation at a time!",
  },
];

// Screen Component
const Screen = ({ title, content }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
    <Container className="py-5">
      <h2 className="text-center mb-4">{title}</h2>
      {content}
    </Container>
  </motion.div>
);

// Research Labs Screen
const ResearchLabsScreen = () => (
  <Screen
    title="Squad Research Labs Across the Country"
    content={
      <Row>
        {researchLabs.map((lab, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4 shadow-sm">
              <Card.Body>
                <Card.Title>{lab.name}</Card.Title>
                <Card.Subtitle className="text-muted">{lab.location}</Card.Subtitle>
                <Card.Text>
                  <strong>Research Focus:</strong> {lab.researchFocus} <br />
                  <strong>Approved Squads:</strong> {lab.squads.join(", ")} <br />
                  <strong>Total Attended:</strong> {lab.totalAttended}
                </Card.Text>
                <Button variant="primary">View Lab</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    }
  />
);

// Testimonials Screen
const TestimonialsScreen = () => (
  <Screen
    title="Squad Leaders' Testimonials"
    content={
      <Row>
        {testimonials.map((leader, index) => (
          <Col md={4} key={index}>
            <Card className="text-center mb-4 shadow-sm">
              <Card.Img variant="top" src={leader.image} alt={leader.name} className="rounded-circle mt-3" style={{ width: "100px", height: "100px", margin: "0 auto" }} />
              <Card.Body>
                <Card.Title>{leader.name}</Card.Title>
                <Card.Subtitle className="text-muted">{leader.location}</Card.Subtitle>
                <Card.Text>"{leader.feedback}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    }
  />
);

// Main Component
const ResearchLabsAndTestimonials = () => (
  <>
    <ResearchLabsScreen />
    <TestimonialsScreen />
  </>
);

export default ResearchLabsAndTestimonials;
