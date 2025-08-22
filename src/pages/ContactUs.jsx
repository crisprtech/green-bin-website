import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className=" pb-16 px-4 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-[#44b027]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact GreenBin Company
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Whether you're a climate innovator, potential donor, partner, or
          curious about our projects—get in touch. Let’s drive sustainability
          together.
        </motion.p>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg border-green-700 rounded-3xl p-6 border">
          <h2 className="text-2xl font-semibold text-[#44b027] mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Your Message..."
              rows={5}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#44b027] text-white font-bold rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-6">
          <div className="bg-green-100 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Our Contact Details
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-600" />
                +254 712 345 678
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-600" />
                support@greenbin.org
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-green-600" />
                GreenBin Headquarters, Nairobi, Kenya
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="GreenBin HQ"
              className="w-full h-64 border-0"
              src="https://maps.google.com/maps?q=nairobi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Social Media */}
          <div className="flex gap-5 items-center mt-6">
            <a
              href="#"
              className="text-green-600 hover:text-green-800 transition"
              aria-label="Facebook"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 transition"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 transition"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 transition"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 pb-20 text-gray-600 text-sm">
        GreenBin Global Company © {new Date().getFullYear()} — All rights
        reserved.
      </div>
    </div>
  );
};

export default ContactUs;
