import React from "react";
import { Container, Row, Col,  Card, Button } from "react-bootstrap";

const HowItWorks = () => {
  const features = [
    {
      title: "🗑️ AI-Powered Waste Sorting",
      description: "Equipped with smart sensors, the bin automatically detects, sorts, and categorizes waste into recyclable and non-recyclable materials."
    },
    {
      title: "💰 Green Carbon Points (GCP) Rewards",
      description: "Users earn GCPs every time they dispose of waste correctly. GCPs can be redeemed for discounts, donations, or converted into cash."
    },
    {
      title: "📡 GPS Tracking & Remote Monitoring",
      description: "Each bin has an integrated GPS system, allowing remote monitoring of waste levels, location tracking, and optimized collection schedules."
    },
    {
      title: "🗣️ Interactive Voice Assistance",
      description: "The bin provides voice guidance to users, ensuring they dispose of waste correctly. It can also educate users on recycling benefits."
    },
    {
      title: "📺 Digital Advertising Screens",
      description: "Bins feature high-definition screens that display eco-friendly ads, educational messages, and promotions from sponsors."
    },
    {
      title: "💳 Flexible Payment Options",
      description: "Users can rent a bin through a leasing plan (Basic, Standard, or Premium) or purchase it outright. Payments can be made using Green Carbon Points."
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center text-success fw-bold mb-4">How Smart AI Bins Work</h2>
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-primary fw-bold">{feature.title}</Card.Title>
                <Card.Text className="text-muted">{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button variant="success" size="lg">Get Your AI Bin Today</Button>
      </div>
    </Container>
  );
};

export default HowItWorks;
