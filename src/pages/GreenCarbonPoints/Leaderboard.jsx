import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const topWinners = [
  {
    id: 1,
    name: 'Alex Greenfield',
    project: 'Eco-Friendly Housing',
    image: 'https://via.placeholder.com/100',
    ecoperks: '150,000',
    badges: ['4x Slayer', '10x Incubator', '5x Recycler'],
  },
  {
    id: 2,
    name: 'Samantha Rivers',
    project: 'Sustainable Agriculture',
    image: 'https://via.placeholder.com/100',
    ecoperks: '130,000',
    badges: ['3x Guardian', '8x Pioneer', '6x Innovator'],
  },
  {
    id: 3,
    name: 'Jordan Lake',
    project: 'Plastic Waste Management',
    image: 'https://via.placeholder.com/100',
    ecoperks: '120,500',
    badges: ['5x Trailblazer', '7x Visionary', '4x Sustainer'],
  },
  {
    id: 4,
    name: 'Mia Forrest',
    project: 'Green Energy Solutions',
    image: 'https://via.placeholder.com/100',
    ecoperks: '110,250',
    badges: ['6x Protector', '9x Advocate', '3x Innovator'],
  },
];

const Leaderboard = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🏆 EcoPerks Leaderboard</h2>
      <Row>
        {topWinners.map((winner) => (
          <Col md={6} key={winner.id} className="mb-4">
            <Card>
              <Card.Body className="d-flex align-items-center">
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="rounded-circle me-3"
                  width="80"
                  height="80"
                />
                <div>
                  <Card.Title>{winner.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{winner.project}</Card.Subtitle>
                  <p className="mb-1">🌿 EcoPerks: <strong>{winner.ecoperks}</strong></p>
                  <p className="mb-0">🏅 Badges: {winner.badges.join(', ')}</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3">
        <Button variant="success">Show More</Button>
      </div>
    </Container>
  );
};

export default Leaderboard;
