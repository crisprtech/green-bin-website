import React from "react";
import { Container, Row, Col, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  
  return (
    <Container className="mt-4">
      {/* Introduction Section */}
      <Row className="mb-4">
        <Col>
          <Card className="shadow-sm p-4 text-center">
            <h2>🌿 Welcome to Green Carbon Points (GCPs)!</h2>
            <p>
              Green Carbon Points (GCPs) empower individuals to participate in the
              green circular economy. Earn GCPs by recycling, using renewable
              energy, and supporting eco-friendly initiatives. Redeem GCPs for
              sustainable products, donate to green causes, or exchange them for
              exclusive rewards!
            </p>
          </Card>
        </Col>
      </Row>

      {/* Green Bin & Circular Economy */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <h4>♻️ The Role of Green Bin</h4>
            <p>
              Green Bin is at the heart of the green circular economy. It allows
              users to recycle waste efficiently, reducing environmental
              pollution while earning valuable GCPs. Get started by depositing
              recyclables and watching your impact grow!
            </p>
            <Button variant="success">Learn More</Button>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <h4>🌍 Circular Economy Model</h4>
            <p>
              GCPs promote a circular economy where waste is minimized, and
              resources are reused. Earn EcoPerks as you contribute to
              sustainability and become a part of the green movement!
            </p>
            <Button variant="primary">Join the Movement</Button>
          </Card>
        </Col>
      </Row>

      {/* How to Earn & Redeem GCPs */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <h4>💰 How to Earn GCPs</h4>
            <ul>
              <li>Recycle waste at Green Bin stations</li>
              <li>Use solar energy or eco-friendly transport</li>
              <li>Participate in community clean-up drives</li>
              <li>Engage in carbon offset programs</li>
            </ul>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm p-4">
            <h4>🎁 How to Use GCPs</h4>
            <ul>
              <li>Buy eco-friendly products & services</li>
              <li>Donate to environmental initiatives</li>
              <li>Exchange GCPs for exclusive EcoPerks</li>
              <li>Invest in green projects</li>
            </ul>
          </Card>
        </Col>
      </Row>

      
    </Container>
  );
};

export default Dashboard;
