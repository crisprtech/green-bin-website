import React from "react";
import {
  FaInfoCircle,
  FaLeaf,
  FaUsers,
  FaQuestionCircle,
  FaHandsHelping,
} from "react-icons/fa"; // Import relevant icons

const Footer = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl ">
      {/* Wavy Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 transform skew-y-6 -z-10 h-64"></div>

      {/* Intro Section */}
      {/* Footer Section */}
      <footer className="bg-green-700 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About GreenBin */}
          <div>
            <h5 className="font-bold text-xl mb-4 ml-18 flex items-center">
              <FaInfoCircle className="mr-2" /> GreenBin
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300 ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Sustainability & Impact */}
          <div>
            <h5 className="font-bold text-xl mb-4 ml-8 flex items-center">
              <FaLeaf className="mr-2" /> Sustainability
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300">
                  Eco Rewards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Green Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Carbon Footprint
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Circular Economy
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Engagement */}
          <div>
            <h5 className="font-bold text-xl mb-4 flex ml-16 items-center">
              <FaUsers className="mr-2" /> Community
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300">
                  Green Ambassadors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Eco Challenges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Sustainability Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h5 className="font-bold text-xl mb-4 flex ml-15 items-center">
              <FaQuestionCircle className="mr-2" /> Support
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-300">
                  Terms & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GreenBin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
