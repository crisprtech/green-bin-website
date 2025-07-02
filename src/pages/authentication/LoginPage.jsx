import { useState } from 'react';
import { Form, Button, Container,  Spinner } from 'react-bootstrap';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.role) newErrors.role = 'Please select a role';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormData({ email: '', password: '', role: '' });
        setErrors({});
        setLoading(false);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formRole">
          <Form.Label>Select Role</Form.Label>
          <Form.Select name="role" value={formData.role} onChange={handleChange} isInvalid={!!errors.role}>
            <option value="">Choose...</option>
            <option value="innovator">Innovator</option>
            <option value="business_enterprise">Business Enterprise</option>
            <option value="implementing_partner">Implementing Partner</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formEmail">
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

        <Form.Group className="mb-3" controlId="formPassword">
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

        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
        </Button>
      </Form>
      <div className="text-center mt-3">
        <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
      </div>
    </Container>
  );
};

export default LoginPage;
