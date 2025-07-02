import { Navbar, Nav, NavDropdown,Button, Container } from 'react-bootstrap';
import '../../cssFiles/Header.css'; // Add this to enable custom CSS for hover dropdowns

const Header = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        {/* Logo and brand name */}
        <Navbar.Brand href="/">
          <img
            src="../../assets/green.png" // Replace with your logo URL
            alt="."
            className="d-inline-block align-top"
          />{' '}
          GreenBin Foundation
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      

            <NavDropdown title="Green Carbon Points" id="smarthomes-dropdown" className="dropdown-hover">
              <NavDropdown.Item href="/GreenCarbonPoints/GreenCarbon">GCPs</NavDropdown.Item>
              <NavDropdown.Item href="/GreenCarbonPoints/OtherServices/DashBoard">Access Other Services</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Idea Safari" id="cars-dropdown" className="dropdown-hover">
              <NavDropdown.Item href="/ideaSafari/ApplyNow">Apply Now</NavDropdown.Item>
              <NavDropdown.Item href="/ideaSafari/IdeaSafari">Discover More </NavDropdown.Item>

            </NavDropdown>

            <NavDropdown title="Smart AI Bins" id="furniture-dropdown" className="dropdown-hover">
              <NavDropdown.Item href="/greenAIBins/wasteManagement">Discover GreenBins</NavDropdown.Item>
              <NavDropdown.Item href="/wasteFellowship/AboutFellowship">Join Waste Management Fellowship</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Research" id="events-dropdown" className="dropdown-hover">
              <NavDropdown.Item href="/ResearchRepo/ResearchRepo">Green Education</NavDropdown.Item>
              <NavDropdown.Item href="/ResearchRepo/Blogs">Green Blogs</NavDropdown.Item>
              <NavDropdown.Item href="/ResearchRepo/ResearchLabs">Research Labs</NavDropdown.Item>

            </NavDropdown>        

            <NavDropdown title="Support" id="support-dropdown" className="dropdown-hover">
              <NavDropdown.Item href="/ResearchRepo/HelpCenter">Help Center</NavDropdown.Item> 
              <NavDropdown.Item href="/OurTeam">Our Team</NavDropdown.Item>
            </NavDropdown>

            
          </Nav>

          {/* Right-side options: Sign In, Cart, and Language */}
          <Nav >
                   

            <Nav>
            <Button
              href="/authentication/LoginPage"
              style={{
                marginRight: '10px',
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                border: '2px solid green', // Green border
                backgroundColor: 'transparent', // No background
                color: '#28a745', // Green text color
              }}
            >
              Login 
            </Button>
            <Button
              href="/authentication/RegisterPage"
              style={{
                marginRight: '10px',
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                backgroundColor: '#28a745', // Green background
                color: 'white', // White text color
                border: 'none', // No border
              }}
            >
              Register 
            </Button>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
