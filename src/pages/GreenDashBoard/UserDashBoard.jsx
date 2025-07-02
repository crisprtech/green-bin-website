import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import SchedulePanel from './components/SchedulePanel';

const Dashboard = () => {
  return (
    <Container fluid className="dashboard-container">
      <Row>
        {/* Sidebar */}
        <Col xs={12} md={3} lg={2} className="sidebar">
          <Sidebar />
        </Col>

        {/* Main Content */}
        <Col xs={12} md={9} lg={10} className="main-content">
          <Header />
          <Row className="mt-3">
            {/* Assignments & Recommendations */}
            <Col md={8}>
              <MainContent />
            </Col>

            {/* Schedule Panel */}
            <Col md={4}>
              <SchedulePanel />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
