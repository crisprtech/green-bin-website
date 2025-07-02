import { Nav, Button } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar-container p-3 d-flex flex-column">
      <div className="text-center">
        <img src="profile.jpg" alt="User" className="rounded-circle" width="80" />
        <h5 className="mt-2">Anzhelika Voinich</h5>
        <p className="text-muted">anzhelika.voinich@gmail.com</p>
      </div>

      <Nav className="flex-column">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Lessons</Nav.Link>
        <Nav.Link href="#">Assignments</Nav.Link>
        <Nav.Link href="#">Messages</Nav.Link>
        <Nav.Link href="#">Settings</Nav.Link>
      </Nav>

      <Button variant="dark" className="mt-auto">Upgrade to Premium</Button>
    </div>
  );
};

export default Sidebar;
