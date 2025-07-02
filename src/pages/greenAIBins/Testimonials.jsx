import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      project: "EcoSort",
      feedback: "This bin has changed my recycling habits!",
    },
    {
      name: "Jane Smith",
      project: "GreenPoints",
      feedback: "I love earning points for being eco-friendly!",
    },
    {
      name: "Carlos Mendes",
      project: "RecycleHub",
      feedback: "A game-changer for waste management in my neighborhood!",
    },
    {
      name: "Fatima Khalid",
      project: "Waste2Wealth",
      feedback: "GreenBin makes recycling fun and rewarding!",
    },
    {
      name: "Liam O'Connor",
      project: "SmartBin",
      feedback: "I never knew recycling could be this easy!",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 text-success">What Our Users Say</h2>
      <Row className="g-4">
        {testimonials.map((testimonial, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-bold text-primary">{testimonial.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-secondary">{testimonial.project}</Card.Subtitle>
                <Card.Text className="fst-italic text-muted">
                  "{testimonial.feedback}"
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
