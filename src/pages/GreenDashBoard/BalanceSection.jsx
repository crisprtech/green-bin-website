import { Button, Row, Col, Card } from 'react-bootstrap';

const Header = () => {
  return (
    <Row className="align-items-center mb-3">
      <Col>
        <h2>Good afternoon, Anzhelika!</h2>
      </Col>
      <Col className="text-end">
        <Button variant="primary">Start New Course</Button>
      </Col>
      <Row className="mt-3">
        <Col md={4}><Card className="p-3 text-center">500 Hours Spent</Card></Col>
        <Col md={4}><Card className="p-3 text-center">21 Completed Tests</Card></Col>
        <Col md={4}><Card className="p-3 text-center">43 Total Points</Card></Col>
      </Row>
    </Row>
  );
};

export default Header;
