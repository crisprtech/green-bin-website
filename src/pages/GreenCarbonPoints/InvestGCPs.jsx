import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const RedeemGCP = () => {
  const rewards = [
    {
      name: "Solar Charger",
      type: "Eco-Friendly Device",
      price: "5,000 GCPs",
      offer: "Limited Time 5% Off!",
      image: "path/to/solar-charger.png",
    },
    {
      name: "Reusable Smart Bottle",
      type: "Eco-Friendly Gadget",
      price: "3,200 GCPs",
      image: "path/to/smart-bottle.png",
    },
    {
      name: "Green Subscription (1 Year)",
      type: "Green Service",
      price: "10,000 GCPs",
      offer: "Bonus 500 GCPs!",
      image: "path/to/green-subscription.png",
    },
    {
      name: "Tree Planting Sponsorship",
      type: "Donation Initiative",
      price: "1,500 GCPs",
      image: "path/to/tree-planting.png",
    },
    {
      name: "EcoSmart Bin Mini",
      type: "Smart Bin",
      price: "12,500 GCPs",
      option: "Lease or Buy",
      image: "path/to/mini-bin.png",
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center text-success fw-bold mb-4">
        Redeem Your EcoPerks
      </h2>
      <Row>
        {rewards.map((reward, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={reward.image} alt={reward.name} />
              <Card.Body>
                <Card.Title className="fw-bold">{reward.name}</Card.Title>
                <Card.Text>
                  <Badge bg="info" className="me-2">
                    {reward.type}
                  </Badge>
                  {reward.option && (
                    <Badge bg="secondary">{reward.option}</Badge>
                  )}
                </Card.Text>
                <Card.Text className="text-success fw-bold">
                  💰 {reward.price}
                </Card.Text>
                {reward.offer && (
                  <p className="text-danger fw-bold">🔥 {reward.offer}</p>
                )}
                <Button variant="success" className="w-100">
                  Redeem Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RedeemGCP;
