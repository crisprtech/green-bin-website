import React, { useEffect } from "react";
import { motion } from "framer-motion";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tik-tok.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
const Footer = () => {
  useEffect(() => {
    // Add fade-in-up animation to footer elements on load
    const footerElements = document.querySelectorAll(".footer-element");
    footerElements.forEach((element) => {
      element.classList.add("animate__animated", "animate__fadeInUp");
    });
  }, []);

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      {/* Footer Section */}
      <footer className="bg-white text-black py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About GreenBin */}
          <div className="footer-element">
            <h5 className="font-bold text-xl mb-4 flex items-center">
              GreenBin
            </h5>
            <p className="text-gray-600 mb-4">Nairobi, Kenya</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Sustainability & Impact */}
          <div className="footer-element">
            <h5 className="font-bold text-xl mb-4 flex items-center">
              Sustainability
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500">
                  Eco Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Green Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Carbon Footprint
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Circular Economy
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Engagement */}
          <div className="footer-element">
            <h5 className="font-bold text-xl mb-4 flex items-center">
              Community
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500">
                  Green Ambassadors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Eco Challenges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Sustainability Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div className="footer-element">
            <h5 className="font-bold text-xl mb-4 flex items-center">
              Support
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Subscribe Section */}
        <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row items-center justify-between footer-element">
          <div className="mb-4 md:mb-0">
            <h5 className="font-bold text-xl">Subscribe to our newsletter</h5>
            <p className="text-gray-600">
              Get the latest news, articles, and resources.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-100 text-black px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
        {/* Social Links */}
        {/* Social Links */}
        <div className="max-w-7xl mx-auto mt-8 flex justify-center space-x-4 footer-element">
          <a href="#" className="text-black hover:text-green-500">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:text-green-500">
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:text-green-500">
            <img src={instagram} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:text-green-500">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="text-black hover:text-green-500">
            <img src={tiktok} alt="Tiktok" className="w-6 h-6" />
          </a>
        </div>{" "}
        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-8 text-center footer-element">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} GreenBin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
