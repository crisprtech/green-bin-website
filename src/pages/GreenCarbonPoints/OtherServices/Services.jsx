import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card} from "react-bootstrap";

const services = [
  { id: 1, name: "WiFi Payment", description: "Use your GCPs to pay for internet services.", image: "wifi.png" },
  { id: 2, name: "Till Number Payments", description: "Pay businesses directly via till numbers using GCPs.", image: "till.png" },
  { id: 3, name: "Pay Bills", description: "Settle your monthly bills with GCPs.", image: "bills.png" },
  { id: 4, name: "KPLC Tokens", description: "Purchase electricity tokens using your GCP balance.", image: "kplc.png" },
  { id: 5, name: "Water Bills", description: "Pay for water services with ease using GCPs.", image: "water.png" },
  { id: 6, name: "Hotel Payments", description: "Enjoy dining and accommodation using your GCPs.", image: "hotel.png" }
];

const GCPServices = () => {
  return (
    <Container className="py-4">
      <motion.h2
        className="text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services Available with GCPs
      </motion.h2>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id} className="mb-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: service.id * 0.1 }}
            >
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={service.image} alt={service.name} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Use GCPs
                  </motion.button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <motion.button
          className="btn btn-secondary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          More Services
        </motion.button>
      </div>
    </Container>
  );
};

export default GCPServices;
