import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    category: "Waste Management",
    title: "Innovative Waste Solutions in Urban Areas",
    image: "waste-management.jpg",
    excerpt: "Discover cutting-edge waste management techniques making cities cleaner.",
  },
  {
    id: 2,
    category: "Conservation",
    title: "Protecting Our Green Spaces",
    image: "conservation.jpg",
    excerpt: "How communities are working together to preserve nature.",
  },
  {
    id: 3,
    category: "Sustainability",
    title: "Eco-Friendly Living: Simple Steps to Start",
    image: "sustainability.jpg",
    excerpt: "Practical tips on making your lifestyle more sustainable.",
  },
  {
    id: 4,
    category: "Recycling",
    title: "Revolutionizing Recycling: What's Next?",
    image: "recycling.jpg",
    excerpt: "Innovations that are changing the recycling industry.",
  },
  {
    id: 5,
    category: "Green Tech",
    title: "The Role of Technology in a Greener Future",
    image: "green-tech.jpg",
    excerpt: "Exploring green technologies driving environmental change.",
  },
  {
    id: 6,
    category: "Eco-Living",
    title: "Zero-Waste Homes: A Growing Trend",
    image: "eco-living.jpg",
    excerpt: "How people are reducing waste in their households.",
  },
];

const BlogScreen = () => {
  return (
    <Container className="py-4">
      {/* Introduction Section */}
      <motion.div
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src="blog-intro.jpg" fluid className="rounded mb-3" />
        <h2>Explore GreenBin Insights</h2>
        <p className="text-muted">
          Stay updated with the latest in waste management, sustainability, and eco-living.
        </p>
      </motion.div>

      {/* Blog List */}
      <Row>
        {blogs.map((blog, index) => (
          <Col md={4} key={blog.id} className="mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-sm">
                <Card.Img variant="top" src={blog.image} alt={blog.title} />
                <Card.Body>
                  <Card.Subtitle className="text-muted">{blog.category}</Card.Subtitle>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.excerpt}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogScreen;
