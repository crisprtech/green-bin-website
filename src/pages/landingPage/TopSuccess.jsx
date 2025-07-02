import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HowWeMakeAnImpact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">How GreenBin Foundation Makes an Impact</h1>
      <p>
        Together, we can transform waste into opportunity. Through sustainable waste management, 
        eco-friendly commerce, and innovative recycling initiatives, we empower communities to protect 
        the environment while creating economic value. Join us in making a lasting impact!
      </p>
      <div className="d-flex justify-content-center mb-4">
        <Button variant="success" className="mr-3">Get Involved</Button>
        <Button variant="outline-success">Learn More</Button>
      </div>
      <Row>
        <Col md={3} className="text-center">
          <img src="https://via.placeholder.com/100" alt="Recycling Programs" className="mb-3" />
          <h5>Recycling Programs</h5>
          <p>
            We facilitate community-driven recycling initiatives, ensuring waste is transformed into 
            valuable resources that benefit both people and the planet.
          </p>
        </Col>
        <Col md={3} className="text-center">
          <img src="https://via.placeholder.com/100" alt="Eco-Friendly Products" className="mb-3" />
          <h5>Eco-Friendly Products</h5>
          <p>
            By promoting sustainable products, we encourage responsible consumer habits and reduce 
            environmental pollution.
          </p>
        </Col>
        <Col md={3} className="text-center">
          <img src="https://via.placeholder.com/100" alt="Green Education" className="mb-3" />
          <h5>Green Education</h5>
          <p>
            We educate individuals on sustainable practices, empowering them to take action for a 
            cleaner, greener future.
          </p>
        </Col>
        <Col md={3} className="text-center">
          <img src="https://via.placeholder.com/100" alt="Carbon Offsetting" className="mb-3" />
          <h5>Carbon Offsetting</h5>
          <p>
            Our programs help communities and businesses reduce their carbon footprint through 
            reforestation and innovative offsetting strategies.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={4}>
          <h2 className="mb-4">Volunteer With Us</h2>
          <p>
            Be part of the movement! Join our team and help educate communities, organize cleanup 
            events, and drive impactful change in sustainability.
          </p>
        </Col>
        <Col md={4}>
          <h2 className="mb-4">Turn Waste into Wealth</h2>
          <p>
            We empower individuals to turn recyclable waste into a source of income by connecting 
            them with eco-conscious buyers and organizations.
          </p>
        </Col>
        <Col md={4}>
          <h2 className="mb-4">Support Green Commerce</h2>
          <p>
            By purchasing and promoting eco-friendly products, you contribute to a circular economy 
            that benefits the environment and local communities.
          </p>
        </Col>
      </Row>
      <div className="text-center mt-5">
        <h2>Every piece of waste we recycle is a step toward a cleaner planet.</h2>
      </div>
    </Container>
  );
};

export default HowWeMakeAnImpact;
