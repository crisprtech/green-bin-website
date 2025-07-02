import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      {/* Banner Image */}
      <Image src="greenbin-footer.jpg" fluid className="w-100" />

      {/* Intro Section */}
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col>
              <p className="text-center text-muted">
                Join GreenBin in revolutionizing sustainability. Reduce waste, earn rewards, and support a greener future with every action you take!
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-light py-5">
        <Container>
          <Row>
            {/* About GreenBin */}
            <Col md={3}>
              <h5>GreenBin</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">About Us</a></li>
                <li><a href="#" className="text-light">Our Mission</a></li>
                <li><a href="#" className="text-light">How It Works</a></li>
                <li><a href="#" className="text-light">Contact</a></li>
              </ul>
            </Col>

            {/* Sustainability & Impact */}
            <Col md={3}>
              <h5>Sustainability</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Eco Rewards</a></li>
                <li><a href="#" className="text-light">Green Initiatives</a></li>
                <li><a href="#" className="text-light">Carbon Footprint</a></li>
                <li><a href="#" className="text-light">Circular Economy</a></li>
              </ul>
            </Col>

            {/* Community & Engagement */}
            <Col md={3}>
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">Green Ambassadors</a></li>
                <li><a href="#" className="text-light">Volunteer</a></li>
                <li><a href="#" className="text-light">Eco Challenges</a></li>
                <li><a href="#" className="text-light">Sustainability Blog</a></li>
              </ul>
            </Col>

            {/* Support & Help */}
            <Col md={3}>
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">FAQs</a></li>
                <li><a href="#" className="text-light">Help Center</a></li>
                <li><a href="#" className="text-light">Report an Issue</a></li>
                <li><a href="#" className="text-light">Terms & Privacy</a></li>
              </ul>
            </Col>
          </Row>

          {/* Footer Bottom */}
          <Row className="mt-4">
            <Col className="text-center">
              <p className="text-muted">&copy; {new Date().getFullYear()} GreenBin. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
