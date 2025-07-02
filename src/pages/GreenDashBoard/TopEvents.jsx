import { Card, ListGroup, Badge } from 'react-bootstrap';

const MainContent = () => {
  return (
    <>
      <Card className="p-3">
        <h5>Your Assignments</h5>
        <ListGroup>
          <ListGroup.Item>
            Colour Theory <Badge bg="success">Completed</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            Composition <Badge bg="success">Completed</Badge>
          </ListGroup.Item>
          <ListGroup.Item>
            UX Writing <Badge bg="warning">In Progress</Badge>
          </ListGroup.Item>
        </ListGroup>
      </Card>

      <Card className="p-3 mt-3">
        <h5>Top Picks for You</h5>
        <ListGroup>
          <ListGroup.Item>How to create first CV - 2 hrs</ListGroup.Item>
          <ListGroup.Item>Design Argumentation - 3 hrs</ListGroup.Item>
          <ListGroup.Item>UX Writing Challenges - 24 hrs</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default MainContent;
