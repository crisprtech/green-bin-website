import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Your Idea",
      description:
        "Describe your innovative vision and how it contributes to sustainability, green technology, or eco-friendly solutions.",
    },
    {
      title: "Selection & Invitation",
      description:
        "Our expert panel reviews applications and selects high-potential innovators to embark on an exclusive learning journey abroad.",
    },
    {
      title: "Global Exposure & Training",
      description:
        "Winners travel internationally to learn from industry leaders, attend workshops, and experience real-world applications of their ideas.",
    },
    {
      title: "Mentorship & Funding",
      description:
        "Upon return, participants receive tailored mentorship, access to incubators, and financial grants to refine and launch their startups.",
    },
    {
      title: "Demo Day & Implementation",
      description:
        "Innovators pitch their projects to potential investors, partners, and stakeholders, gaining critical support for large-scale impact.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">How Idea Safari Works</h2>
      <Row className="g-4">
        {steps.map((step, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-primary">{step.title}</Card.Title>
                <Card.Text>{step.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorks;
