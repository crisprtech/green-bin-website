import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaBolt,
  FaUtensils,
  FaMoneyBillWave,
  FaTachometerAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Pay for WiFi",
    icon: <FaWifi size={40} />,
    description:
      "Use your GCPs to enjoy seamless internet access at partnered hotspots.",
  },
  {
    id: 2,
    name: "Pay Utility Bills",
    icon: <FaBolt size={40} />,
    description:
      "Settle your electricity, water, and other essential bills effortlessly.",
  },
  {
    id: 3,
    name: "Restaurant Payments",
    icon: <FaUtensils size={40} />,
    description: "Dine at top restaurants and pay with GCPs hassle-free!",
  },
  {
    id: 4,
    name: "Till & Paybill Payments",
    icon: <FaMoneyBillWave size={40} />,
    description:
      "Make instant payments to businesses using their till or paybill numbers.",
  },
  {
    id: 5,
    name: "Transport Services",
    icon: <FaTachometerAlt size={40} />,
    description: "Ride eco-friendly and pay using your Green Carbon Points.",
  },
];

const GCPServicesIntro = () => {
  return (
    <Container className="text-center py-5">
      <motion.h1
        className="mb-4 fw-bold text-success"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Unlock Endless Possibilities with Your GCPs! 🌱💳
      </motion.h1>

      <motion.p
        className="text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Convert your eco-friendly efforts into real-world benefits! Use your
        Green Carbon Points to pay for everyday services effortlessly.
      </motion.p>

      <Row className="mt-4">
        {services.map((service) => (
          <Col key={service.id} md={4} className="mb-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card className="shadow-lg border-0 p-3">
                <div className="text-success mb-3">{service.icon}</div>
                <Card.Title className="fw-bold">{service.name}</Card.Title>
                <Card.Text className="text-muted">
                  {service.description}
                </Card.Text>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <Button variant="success" className="mt-4 px-4 py-2 fw-bold" size="lg">
        Start Using GCPs Now
      </Button>
    </Container>
  );
};

export default GCPServicesIntro;
