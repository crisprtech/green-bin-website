import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaLightbulb } from "react-icons/fa";
import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";

const Introduction = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    console.log("Joining waitlist with email:", email);
  };

  return (
    <Container className="my-5 p-5 bg-light rounded-lg shadow-lg">
      <Row>
        <Col md={6}>
          <motion.h1 
            className="mb-4 text-success" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join the Green Revolution with GreenBin Foundation
          </motion.h1>
          <motion.p 
            className="mb-4 text-muted" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
          >
            GreenBin Foundation is dedicated to driving green innovations, promoting sustainability, and integrating cutting-edge research, including Quantum Computing, to shape a greener future.
          </motion.p>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Email address"
              aria-label="Email address"
              aria-describedby="join-waitlist"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button variant="success" id="join-waitlist" onClick={handleJoinWaitlist}>
              Join Waitlist
            </Button>
          </InputGroup>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-end">
          {[{ icon: FaLeaf, text: "Sustainable Impact", sub: "Driving Change" },
            { icon: FaLightbulb, text: "Innovations", sub: "Eco-Tech Solutions" },
            { icon: FaUsers, text: "Community Growth", sub: "+ 10,000 Members" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-3 d-flex align-items-center p-3 rounded-lg bg-white shadow-sm w-75"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <item.icon className="text-success mr-3" size={24} />
              <div>
                <span className="font-weight-bold text-dark">{item.text}</span>
                <br />
                <span className="text-success font-weight-bold">{item.sub}</span>
              </div>
            </motion.div>
          ))}
        </Col>
      </Row>
      <Row className="mt-5 text-center">
        <Col>
          <motion.h2 
            className="mb-4 text-dark" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Building a Sustainable Future Together
          </motion.h2>
          <div className="d-flex justify-content-around">
            {[{ value: "5+", text: "Years of Green Research" },
              { value: "10K+", text: "Eco Enthusiasts" }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center p-4 bg-white rounded-lg shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <h3 className="text-success font-weight-bold">{item.value}</h3>
                <p className="text-muted">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;