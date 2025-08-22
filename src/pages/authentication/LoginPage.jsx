
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import loginImage from "../../assets/startups.jpg"; // Replace with actual path to your image

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.role) newErrors.role = "Please select a role";
    if (!formData.agree) newErrors.agree = "You must agree to the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setFormData({ email: "", password: "", role: "", agree: false });
        setErrors({});
        setLoading(false);
        navigate("/"); // Navigate to home after processing
      }, 3000); // Simulate processing for 3 seconds
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Login Form Section */}
        <div className="p-8 w-full">
          <h2 className="text-center text-2xl font-bold text-[#44b027] mb-6">
            Login
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            By signing in, you can mint and trade carbon credits with various
            parties, including innovators, squads, and companies. Join us in
            making a positive impact!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-gray-700 font-semibold mb-2 block">
                Offsetter category
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`border-gray-300 rounded-md h-10 shadow-sm focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out w-full ${
                  errors.role ? "border-red-500" : ""
                }`}
              >
                <option value="">Select a role</option>
                <option value="innovator">Innovator</option>
                <option value="business_enterprise">Business Enterprise</option>
                <option value="implementing_partner">Implementing Partner</option>
              </select>
              {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
            </div>

            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border-gray-300 rounded-md h-10 shadow-sm focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="text-gray-700 mb-2 block font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`border-gray-300 rounded-md h-10 shadow-sm focus:ring-2 focus:ring-green-500 transition duration-150 ease-in-out w-full ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700 font-semibold">
                I agree to the terms and conditions
              </label>
              {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
            </div>

            <button
              type="submit"
              className={`w-full bg-[#44b027] hover:bg-green-700 text-white font-semibold rounded-xl py-2 shadow-md transition duration-200 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Processing..." : "Login"}
            </button>
          </form>
          <div className="text-center mt-4">
            <a href="/forgot-password" className="text-[#44b027] hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;

