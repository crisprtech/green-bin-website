
import React from 'react';
import { Image } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      {/* Banner Image */}
      <Image src="greenbin-footer.jpg" fluid className="w-full h-64 object-cover" />

      {/* Intro Section */}
      <div className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 text-lg">
            Join GreenBin in revolutionizing sustainability. Reduce waste, earn rewards, and support a greener future with every action you take!
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-green-800 text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About GreenBin */}
          <div>
            <h5 className="font-bold text-xl mb-4">GreenBin</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">About Us</a></li>
              <li><a href="#" className="hover:text-green-300">Our Mission</a></li>
              <li><a href="#" className="hover:text-green-300">How It Works</a></li>
              <li><a href="#" className="hover:text-green-300">Contact</a></li>
            </ul>
          </div>

          {/* Sustainability & Impact */}
          <div>
            <h5 className="font-bold text-xl mb-4">Sustainability</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Eco Rewards</a></li>
              <li><a href="#" className="hover:text-green-300">Green Initiatives</a></li>
              <li><a href="#" className="hover:text-green-300">Carbon Footprint</a></li>
              <li><a href="#" className="hover:text-green-300">Circular Economy</a></li>
            </ul>
          </div>

          {/* Community & Engagement */}
          <div>
            <h5 className="font-bold text-xl mb-4">Community</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">Green Ambassadors</a></li>
              <li><a href="#" className="hover:text-green-300">Volunteer</a></li>
              <li><a href="#" className="hover:text-green-300">Eco Challenges</a></li>
              <li><a href="#" className="hover:text-green-300">Sustainability Blog</a></li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h5 className="font-bold text-xl mb-4">Support</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-300">FAQs</a></li>
              <li><a href="#" className="hover:text-green-300">Help Center</a></li>
              <li><a href="#" className="hover:text-green-300">Report an Issue</a></li>
              <li><a href="#" className="hover:text-green-300">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} GreenBin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

