import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const RecentAmbassadors = () => {
  const ambassadors = [
    {
      name: "Jane Mwangi",
      project: "Eco-Friendly Smart Packaging",
      country: "Germany",
      testimonial:
        "Idea Safari opened doors for me. Learning from Germany’s top green startups gave me the tools to refine my idea and secure funding!",
    },
    {
      name: "Paul Olubakaya",
      project: "Solar-Powered Irrigation System",
      country: "Netherlands",
      testimonial:
        "My journey to the Netherlands showed me how green tech can transform agriculture. Now, I’m implementing these solutions in Kenya!",
    },
    {
      name: "Fatima Hassan",
      project: "Biodegradable Fashion",
      country: "Japan",
      testimonial:
        "Idea Safari helped me explore sustainable textile production in Japan. I’m now launching my eco-friendly fashion brand!",
    },
    {
      name: "Kevin Otieno",
      project: "Recyclable Battery Technology",
      country: "Sweden",
      testimonial:
        "Sweden’s innovations in clean energy inspired my startup. Thanks to this experience, I’ve partnered with investors to scale up.",
    },
    {
      name: "Mary Mwende",
      project: "Recyclable Waste Technology",
      country: "Canada",
      testimonial:
        "Canada’s innovations in clean energy inspired my startup. Thanks to this experience, I’ve partnered with investors to scale up.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Recent Idea Safari Ambassadors</h2>
      <Row className="g-4">
        {ambassadors.map((ambassador, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-primary">{ambassador.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {ambassador.project}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Country Visited:</strong> {ambassador.country}
                </Card.Text>
                <Card.Text className="fst-italic">{ambassador.testimonial}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecentAmbassadors;
