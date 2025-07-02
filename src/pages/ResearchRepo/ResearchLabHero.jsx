import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './ResearchLab.css'; // Ensure this file exists for additional styling

const ResearchLabsHero = () => {
    return (
        <Container fluid className="research-hero d-flex align-items-center text-center text-white">
            <div className="overlay"></div> {/* Dark overlay for better contrast */}
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="display-4 fw-bold">Squad Labs: Innovate, Research, Create</h1>
                    <p className="lead">
                        Hands-on experience for researchers & innovators. Attend workshops, develop ideas, and drive sustainable solutions in county-based labs.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <Button variant="primary" href="#labs-network" size="lg">Explore Labs</Button>
                        <Button variant="outline-light" href="#join-research" size="lg">Join a Lab</Button>
                    </div>
                </Col>
            </Row>

            {/* Quick Highlights Section */}
            <Row className="hero-footer mt-5 text-center">
                <Col xs={12} sm={4}>
                    <h2>20+</h2>
                    <p>Research Labs Across Counties</p>
                </Col>
                <Col xs={12} sm={4}>
                    <h2>100+</h2>
                    <p>Innovations Developed</p>
                </Col>
                <Col xs={12} sm={4}>
                    <h2>500+</h2>
                    <p>Experts & Researchers</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ResearchLabsHero;
