import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const ProductListing = () => {
  const bins = [
    {
      name: "GreenBin AI Mini",
      type: "Basic",
      price: "9,900 GCPs",
      option: "Lease or Buy",
      offer: "10% Off for Early Buyers!",
      image: "path/to/mini-image.png"
    },
    {
      name: "GreenBin AI Standard",
      type: "Standard",
      price: "19,500 GCPs",
      option: "Lease or Buy",
      image: "path/to/standard-image.png"
    },
    {
      name: "GreenBin AI Premium",
      type: "Premium",
      price: "29,900 GCPs",
      option: "Lease or Buy",
      image: "path/to/premium-image.png"
    },
    {
      name: "EcoSmart Bin Pro",
      type: "Premium",
      price: "32,500 GCPs",
      option: "Full Purchase Only",
      image: "path/to/pro-image.png"
    },
    {
      name: "Solar AI Bin",
      type: "Standard",
      price: "22,000 GCPs",
      option: "Lease or Buy",
      image: "path/to/solar-image.png"
    },
    {
      name: "Smart Recycle Bin",
      type: "Basic",
      price: "12,000 GCPs",
      option: "Lease or Buy",
      image: "path/to/recycle-image.png"
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center text-success fw-bold mb-4">Explore Our Smart AI Bins</h2>
      <Row>
        {bins.map((bin, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={bin.image} alt={bin.name} />
              <Card.Body>
                <Card.Title className="fw-bold">{bin.name}</Card.Title>
                <Card.Text>
                  <Badge bg="info" className="me-2">{bin.type} Package</Badge>
                  <Badge bg="secondary">{bin.option}</Badge>
                </Card.Text>
                <Card.Text className="text-success fw-bold">💰 {bin.price}</Card.Text>
                {bin.offer && <p className="text-danger fw-bold">🔥 {bin.offer}</p>}
                <Button variant="success" className="w-100">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListing;
