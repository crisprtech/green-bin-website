import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const fellowshipIntro = {
  title: "GreenBin Waste Management Fellowship",
  description:
    "Join the GreenBin Fellowship and be part of a movement to clean cities, build your environmental profile, and earn rewards! Our program empowers squads to take action, gain visibility, and become GreenBin ambassadors. Participate in waste management projects, receive civic education, and contribute to a cleaner planet.",
  image: "fellowship.png",
};

const projects = [
  {
    name: "Nairobi CBD Cleanup Station",
    location: "Nairobi",
    type: "Street Sweeping",
    squads: 5,
  },
  {
    name: "Mombasa Beach Restoration",
    location: "Mombasa",
    type: "Plastic Collection",
    squads: 8,
  },
  {
    name: "Kisumu Market Waste Control",
    location: "Kisumu",
    type: "Waste Sorting",
    squads: 4,
  },
];

const completedProjects = [
  {
    name: "Kibera Slum Cleanup",
    location: "Nairobi",
    status: "Approved by Nairobi County",
  },
  {
    name: "Dandora Waste Geimo Clean",
    location: "Nairobi",
    status: "Community Recognized",
  },
  {
    name: "Eldoret River Purification",
    location: "Eldoret",
    status: "Government Certified",
  },
];

const testimonials = [
  {
    name: "John M.",
    feedback:
      "GreenBin transformed our city! We cleaned over 20 streets and got recognized by the government!",
  },
  {
    name: "Sarah K.",
    feedback:
      "As a squad leader, this has been a game-changer. Great experience and rewarding!",
  },
  {
    name: "Governor Wanjiru",
    feedback:
      "This initiative has greatly contributed to environmental conservation in our county.",
  },
];

const Screen = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Container className="py-4">
      <h2 className="text-center mb-4">{title}</h2>
      {content}
    </Container>
  </motion.div>
);

const FellowshipIntro = () => (
  <Screen
    title={fellowshipIntro.title}
    content={
      <Row className="align-items-center">
        <Col md={6}>
          <motion.img
            src={fellowshipIntro.image}
            alt="Fellowship"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <p>{fellowshipIntro.description}</p>
          <Button variant="success">Join Now</Button>
        </Col>
      </Row>
    }
  />
);

const ProjectsScreen = () => (
  <Screen
    title="Upcoming Waste Management Projects"
    content={
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                  Location: {project.location} <br />
                  Type: {project.type} <br />
                  Squads: {project.squads}
                </Card.Text>
                <Button variant="primary">View Project</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    }
  />
);

const CompletedProjectsScreen = () => (
  <Screen
    title="Recently Completed Projects"
    content={
      <Row>
        {completedProjects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>Location: {project.location}</Card.Text>
                <Card.Text>Status: {project.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    }
  />
);

const TestimonialsScreen = () => (
  <Screen
    title="Testimonials from Participants"
    content={
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>"{testimonial.feedback}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    }
  />
);

export {
  FellowshipIntro,
  ProjectsScreen,
  CompletedProjectsScreen,
  TestimonialsScreen,
};
