import { Card, ListGroup } from 'react-bootstrap';

const SchedulePanel = () => {
  return (
    <Card className="p-3">
      <h5>Schedule</h5>
      <ListGroup>
        <ListGroup.Item>9:00 AM - Learn User Flow</ListGroup.Item>
        <ListGroup.Item>12:00 PM - Identify User Pains</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default SchedulePanel;
