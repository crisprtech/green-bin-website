import React, { useState } from "react";
import { Container, Accordion, Card, Button, Row, Col, Form } from "react-bootstrap";
import { motion } from "framer-motion";

// FAQ Data
const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      { question: "How do I register for the foundation?", answer: "You can register by signing up on our website or mobile app." },
      { question: "Who can join the research labs?", answer: "Anyone passionate about innovation and sustainability can apply." },
    ],
  },
  {
    title: "Research Labs",
    faqs: [
      { question: "Where are the research labs located?", answer: "We have labs in Nairobi, Mombasa, Kisumu, and more." },
      { question: "Can I bring my own project to the lab?", answer: "Yes! We encourage innovation within our labs." },
    ],
  },
  {
    title: "Squads & Innovation Programs",
    faqs: [
      { question: "How do squads work?", answer: "Squads are collaborative teams working on research and sustainability projects." },
      { question: "Are there mentorship programs?", answer: "Yes! We provide mentors to help squads grow their innovations." },
    ],
  },
  {
    title: "Green Carbon Points (GCPs) & Rewards",
    faqs: [
      { question: "How do I earn GCPs?", answer: "You earn GCPs by participating in activities like research, waste management, and innovation. The GCPs later earns you EcoPerks" },
      { question: "How do I withdraw GCPs?", answer: "You can withdraw GCPs through GreenBin App, bank transfers within the App too, or donate them to eco-friendly projects." },
    ],
  },
  {
    title: "Technical Support",
    faqs: [
      { question: "I forgot my password, what do I do?", answer: "Click 'Forgot Password' on the login page to reset it." },
      { question: "The app is not working correctly, who can I contact?", answer: "You can reach out to our support team through the contact form below." },
    ],
  },
];

// Help Center Component
const HelpCenter = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Our team will get back to you soon.`);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
     <Container fluid className="py-5">
  <h2 className="text-center mb-4 text-primary fw-bold">Help Center</h2>

  <Row>
    <Col lg={10} className="mx-auto">
      <Accordion>
        {faqCategories.map((category, idx) => (
          <Accordion.Item key={idx} eventKey={String(idx)}>
            <Accordion.Header>{category.title}</Accordion.Header>
            <Accordion.Body>
              {category.faqs.map((faq, index) => (
                <Card key={index} className="mb-3 shadow-sm">
                  <Card.Body>
                    <Card.Title className="fw-semibold">{faq.question}</Card.Title>
                    <Card.Text>{faq.answer}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Col>
  </Row>

  {/* Contact Support Form */}
  <Row className="mt-5">
    <Col lg={8} className="mx-auto">
      <Card className="p-4 shadow">
        <h4 className="text-center text-success mb-3">Still need help? Contact Support</h4>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              required
            />
          </Form.Group>
          <Button type="submit" variant="success" className="w-100 fw-bold">
            Send Message
          </Button>
        </Form>
      </Card>
    </Col>
  </Row>
</Container>

    </motion.div>
  );
};

export default HelpCenter;
