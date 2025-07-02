import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const donationCategories = [
  { id: '1', name: 'Tree Planting', impact: '1000 points = 1 tree planted', pointsRequired: 1000 },
  { id: '2', name: 'Waste Management', impact: '2000 points = 1 community clean-up', pointsRequired: 2000 },
  { id: '3', name: 'Community Support', impact: '4500 points = support for 1 individual', pointsRequired: 4500 },
  { id: '4', name: 'Fight Hunger Strike', impact: '5000 points = support for 10 individuals', pointsRequired: 5000 },
  { id: '5', name: 'Education Support', impact: '15000 points = school supplies for 5 children', pointsRequired: 15000 },
  { id: '6', name: 'Health Initiatives', impact: '8000 points = medical aid for 5 individuals', pointsRequired: 8000 },
];

const InvestmentDonation = () => {
  const [userType, setUserType] = useState('');
  const [donationCategory, setDonationCategory] = useState('');
  const [points, setPoints] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User Type: ${userType}, Donation Category: ${donationCategory}, Points: ${points}`);
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Donate with GCPs</h2>
      <Row>
        {donationCategories.map((category) => (
          <Col md={6} lg={4} key={category.id} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.impact}</Card.Text>
                <Button variant="success">Donate</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-3">
        <Button variant="secondary">Show More</Button>
      </div>

      <Form onSubmit={handleSubmit} className="mt-4 p-4 border rounded bg-light">
        <h4 className="text-center">Make a Donation</h4>
        <Form.Group className="mb-3">
          <Form.Label>Join as:</Form.Label>
          <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)} required>
            <option value="">Select...</option>
            <option value="implementingPartner">Implementing Partner</option>
            <option value="ecoGreenBusiness">EcoGreenBusiness Enterprise</option>
            <option value="innovator">Innovator</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Donation Category:</Form.Label>
          <Form.Select value={donationCategory} onChange={(e) => setDonationCategory(e.target.value)} required>
            <option value="">Select...</option>
            {donationCategories.map((category) => (
              <option key={category.id} value={category.name}>{category.name} ({category.impact})</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points to Donate:</Form.Label>
          <Form.Control
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            min="0"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">Donate</Button>
      </Form>
    </Container>
  );
};

export default InvestmentDonation;
