import React, { useState } from 'react';
import { Container, Row, Col, Button, Tab, Nav } from 'react-bootstrap';
import '../../cssFiles/Educational.css'; // Add your CSS file for styling

// Define courses before using it
const courses = [
    {
        title: "AI in Waste Management",
        image: "ai-waste-management.jpg",
        progress: 70,
        category: "climate"
    },
    {
        title: "Renewable Energy Fundamentals",
        image: "renewable-energy.jpg",
        progress: 50,
        category: "green-tech"
    },
    {
        title: "Sustainable Agriculture Practices",
        image: "sustainable-agriculture.jpg",
        progress: 60,
        category: "climate"
    },
    {
        title: "Circular Economy Principles",
        image: "circular-economy.jpg",
        progress: 40,
        category: "recycling"
    },
    {
        title: "Green Building Techniques",
        image: "green-building.jpg",
        progress: 80,
        category: "green-tech"
    },
    {
        title: "Waste to Energy Technologies",
        image: "waste-to-energy.jpg",
        progress: 30,
        category: "recycling"
    },
    {
        title: "Environmental Policy and Management",
        image: "environmental-policy.jpg",
        progress: 55,
        category: "business-policy"
    },
    {
        title: "Carbon Footprint Reduction Strategies",
        image: "carbon-footprint.jpg",
        progress: 75,
        category: "climate"
    },
];

const EducationalPlatform = () => {
    const [filteredCourses, setFilteredCourses] = useState(courses);

    const filterCourses = (category) => {
        const filtered = category === 'all' ? courses : courses.filter(course => course.category === category);
        setFilteredCourses(filtered);
    };

    return (
        <Container>
          
            <section id="learning-tracks" className="learning-tracks">
                <h2>Learning Tracks</h2>
                <Tab.Container defaultActiveKey="all">
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="all" onClick={() => filterCourses('all')}>All Courses</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="climate" onClick={() => filterCourses('climate')}>Climate Science</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="recycling" onClick={() => filterCourses('recycling')}>Recycling</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="green-tech" onClick={() => filterCourses('green-tech')}>Green Tech</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="business-policy" onClick={() => filterCourses('business-policy')}>Business & Policy</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="all">
                            {/* All courses will be shown in the main section */}
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </section>
            {/* Featured Courses Section */}
            <section id="featured-courses" className="featured-courses">
                <h2>Featured Courses</h2>
                <Row>
                    {filteredCourses.map((course, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <div className="course-card">
                                <img src={course.image} alt={course.title} className="img-fluid" />
                                <h3>{course.title}</h3>
                                <div className="progress-bar">
                                    <div className="progress" style={{ width: `${course.progress}%` }}></div>
                                </div>
                                <Button variant="success">Enroll</Button>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Learning Tracks Section */}
           
        </Container>
    );
};

export default EducationalPlatform;
