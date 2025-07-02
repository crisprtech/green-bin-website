import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const HeroSection = () => {
  return (
    <Container fluid className="hero-section text-center py-5 bg-light">
      <Row className="align-items-center">
        {/* Left Side - Image */}
        <Col md={6} className="mb-4 mb-md-0">
          <Image 
            src="path/to/3d-bin-image.png" 
            alt="Smart AI Bin" 
            className="img-fluid rounded shadow-lg"
          />
        </Col>

        {/* Right Side - Text Content */}
        <Col md={6}>
          <h1 className="display-4 text-success fw-bold">The Future of Waste Management</h1>
          <h2 className="h5 text-muted mb-3">AI-driven waste sorting for a cleaner, greener planet</h2>
          
          <p className="lead text-dark">
            Our **Smart AI IoT Bin** uses cutting-edge **machine learning** and **sensor technology**  
            to automatically sort waste, reducing landfill overflow and boosting recycling efficiency.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Button variant="success" size="lg" className="fw-bold">
              Shop Now
            </Button>
            <Button variant="outline-success" size="lg" className="fw-bold">
              Watch Demo
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
