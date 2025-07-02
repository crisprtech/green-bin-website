import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ForeignPartners = () => {
  const partners = [
    {
      company: "EcoInnovate Ltd",
      ceo: "Dr. Lars Petersen",
      country: "Denmark",
      testimonial:
        "Partnering with GreenBin Foundation has been an enriching experience. Together, we are advancing sustainable waste management solutions across Africa.",
    },
    {
      company: "GreenFuture Tech",
      ceo: "Sophia Martinez",
      country: "Canada",
      testimonial:
        "GreenBin’s commitment to environmental innovation aligns perfectly with our mission. We look forward to scaling eco-friendly technology together.",
    },
    {
      company: "SolarGreen Energy",
      ceo: "Mohammed Al-Farsi",
      country: "UAE",
      testimonial:
        "Working with GreenBin has been revolutionary! Their grassroots approach complements our solar energy projects, creating real impact.",
    },
    {
      company: "BioCycle Solutions",
      ceo: "Emily Watson",
      country: "United Kingdom",
      testimonial:
        "GreenBin Foundation is a visionary partner in circular economy initiatives. We are proud to support their sustainability projects.",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Foreign Partners</h2>
      <Row className="g-4">
        {partners.map((partner, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="text-success">{partner.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  CEO: {partner.ceo}
                </Card.Subtitle>
                <Card.Text>
                  <strong>Country:</strong> {partner.country}
                </Card.Text>
                <Card.Text className="fst-italic">"{partner.testimonial}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ForeignPartners;
