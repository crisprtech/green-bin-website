import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live validation
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.role) newErrors.role = "Please select a role";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSuccessMessage("Registration successful!");
      setFormData({ username: "", email: "", password: "", role: "" });
      setErrors({});
      setTimeout(() => setSuccessMessage(""), 3000); // Auto-hide success message
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <Container className="p-4 border rounded shadow-sm bg-white w-50">
        <h2 className="text-center mb-4">Register</h2>

        {successMessage && <Alert variant="success">{successMessage}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              isInvalid={!!errors.username}
            />
            <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Role</Form.Label>
            <Form.Select name="role" value={formData.role} onChange={handleChange} isInvalid={!!errors.role}>
              <option value="">Choose...</option>
              <option value="Innovator">Innovator</option>
              <option value="Implementing Partner">Implementing Partner</option>
              <option value="Business Enterprise">Business Enterprise</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
          </Form.Group>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
          </motion.div>
        </Form>
      </Container>
    </motion.div>
  );
};

export default RegisterPage;
