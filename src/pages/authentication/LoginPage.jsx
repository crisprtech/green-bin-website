
import { useState } from 'react';
import { Form, Button, Container, Spinner } from 'react-bootstrap';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '', role: '', agree: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
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
    if (!formData.agree) newErrors.agree = 'You must agree to the terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormData({ email: '', password: '', role: '', agree: false });
        setErrors({});
        setLoading(false);
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-center text-2xl font-bold text-green-600 mb-6">Login</h2>
        <p className="text-gray-700 text-sm mb-4">
          By signing in, you can mint and trade carbon credits with various parties, including innovators, squads, and companies. Join us in making a positive impact!
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formRole">
            <Form.Label className="text-gray-700">Select Role</Form.Label>
            <Form.Select 
              name="role" 
              value={formData.role} 
              onChange={handleChange} 
              isInvalid={!!errors.role} 
              className="border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">Choose...</option>
              <option value="innovator">Innovator</option>
              <option value="business_enterprise">Business Enterprise</option>
              <option value="implementing_partner">Implementing Partner</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label className="text-gray-700">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
              className="border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label className="text-gray-700">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              isInvalid={!!errors.password}
              className="border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formAgree">
            <Form.Check 
              type="checkbox" 
              name="agree" 
              label="I agree to the terms and conditions" 
              checked={formData.agree} 
              onChange={handleChange} 
              isInvalid={!!errors.agree} 
            />
            <Form.Control.Feedback type="invalid">{errors.agree}</Form.Control.Feedback>
          </Form.Group>

          <Button 
            variant="primary" 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg py-2" 
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : 'Login'}
          </Button>
        </Form>
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-green-600 hover:underline">Forgot Password?</a>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;

