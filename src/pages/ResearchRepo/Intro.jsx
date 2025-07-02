import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'; // Adding animations
import './Hero.css';

const HeroScreen = () => {
    return (
        <Container fluid className="hero">
            <div className="overlay"></div> {/* Semi-transparent overlay for readability */}
            <div className="hero-content text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1 }}
                >
                    Learn & Innovate for a Greener Future
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1.5 }}
                >
                    Access expert-led courses, research materials, and hands-on projects to drive sustainability.
                </motion.p>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 1.5 }}
                >
                    <Button variant="primary" href="#course-catalog" size="lg">Start Learning</Button>
                    <Button variant="outline-light" href="#about" size="lg" className="ml-3">Explore More</Button>
                </motion.div>
            </div>

            {/* Additional Section for Quick Info */}
            <div className="hero-footer">
                <div className="stat-box">
                    <h2>10,000+</h2>
                    <p>Active Learners</p>
                </div>
                <div className="stat-box">
                    <h2>50+</h2>
                    <p>Sustainability Courses</p>
                </div>
                <div className="stat-box">
                    <h2>100+</h2>
                    <p>Industry Experts</p>
                </div>
            </div>
        </Container>
    );
};

export default HeroScreen;
