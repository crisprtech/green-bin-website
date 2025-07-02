import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h1 className="mb-4">About GreenBin Foundation</h1>
          <p>
            GreenBin Foundation is a pioneering force in sustainable innovation, dedicated to transforming waste into wealth and fostering eco-friendly commerce. 
            Through cutting-edge technology, strategic partnerships, and community-driven initiatives, we empower individuals and businesses to embrace sustainability 
            and contribute to a healthier planet.
          </p>
          <p>
            Our mission is to revolutionize waste management, promote a green economy, and equip communities with the resources needed to drive impactful environmental change. 
            By incentivizing sustainable practices and leveraging innovation, we are shaping a cleaner, greener, and more sustainable future for generations to come.
          </p>
        </Col>
        <Col md={6}>
          <Image src="greenbin-about.jpg" fluid />
        </Col>
      </Row>

      {/* Vision and Mission */}
      <Row className="mt-5">
        <Col md={6}>
          <h2 className="mb-3">Our Vision</h2>
          <p>
            To be a global catalyst for sustainable innovation, empowering communities to transform waste into wealth, 
            drive eco-friendly commerce, and create lasting environmental impact through technology and collaboration.
          </p>
        </Col>
        <Col md={6}>
          <h2 className="mb-3">Our Mission</h2>
          <p>
           To research, develop, and scale inclusive green solutions that empower individuals, institutions, and governments to act on climate, economy, and equity.
          </p>
        </Col>
      </Row>

      {/* Core Values */}
      <Row className="mt-5">
        <Col>
          <h2 className="mb-3 text-center">Our Core Values</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <h4>1. Sustainability</h4>
          <p>We prioritize eco-friendly solutions that ensure long-term environmental and economic benefits.</p>
        </Col>
        <Col md={4}>
          <h4>2. Innovation</h4>
          <p>We harness technology and creative thinking to develop cutting-edge waste management solutions.</p>
        </Col>
        <Col md={4}>
          <h4>3. Empowerment</h4>
          <p>We equip individuals and communities with the tools and knowledge to take meaningful action for the planet.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <h4>4. Collaboration</h4>
          <p>We believe in the power of partnerships to drive impactful environmental change.</p>
        </Col>
        <Col md={4}>
          <h4>5. Integrity</h4>
          <p>We are committed to transparency, accountability, and ethical sustainability practices.</p>
        </Col>
        <Col md={4}>
          <h4>6. Circular Economy</h4>
          <p>We champion waste-to-resource initiatives, promoting a sustainable and regenerative economy.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
