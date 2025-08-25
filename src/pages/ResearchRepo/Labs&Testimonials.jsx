import React from "react";
import { motion } from "framer-motion";
import Footer from "../landingPage/Footer";
// Research Labs Data
const researchLabs = [
  {
    name: "Nairobi AI & Sustainability Lab",
    location: "Nairobi",
    researchFocus: "AI for Climate Solutions",
    squads: ["GreenTech Innovators", "Eco AI Squad"],
    totalAttended: 120,
  },
  {
    name: "Mombasa Marine Innovation Lab",
    location: "Mombasa",
    researchFocus: "Ocean Cleanup Technologies",
    squads: ["Blue Warriors", "Coastal Savers"],
    totalAttended: 95,
  },
  {
    name: "Kisumu AgriTech Lab",
    location: "Kisumu",
    researchFocus: "Sustainable Agriculture",
    squads: ["AgriFutures", "Green Harvesters"],
    totalAttended: 80,
  },
];

// Testimonials Data
const testimonials = [
  {
    name: "Dr. Jane Mwangi",
    location: "Nairobi AI Lab",
    image: "jane.jpg",
    feedback: "This lab has transformed brains into powerhouses of innovation!",
  },
  {
    name: "Eng. David Kimani",
    location: "Mombasa Marine Lab",
    image: "david.jpg",
    feedback: "We've pioneered new marine cleanup techniques right here!",
  },
  {
    name: "Prof. Alice Oduor",
    location: "Kisumu AgriTech Lab",
    image: "alice.jpg",
    feedback: "Revolutionizing sustainable farming—one innovation at a time!",
  },
];

// Screen Component
const Screen = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="py-10 bg-white">
      <h2 className="text-center text-3xl font-bold text-[#44b027] mb-6">
        {title}
      </h2>
      <div className="p-10">{content}</div>
    </div>
  </motion.div>
);

// Research Labs Screen
const ResearchLabsScreen = () => (
  <Screen
    title="Squad Research Labs Across the Country"
    content={
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
        {researchLabs.map((lab, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5"
          >
            <h3 className="text-xl font-semibold">{lab.name}</h3>
            <h4 className="text-gray-500">{lab.location}</h4>
            <p className="mt-3">
              <strong>Research Focus:</strong> {lab.researchFocus} <br />
              <strong>Approved Squads:</strong> {lab.squads.join(", ")} <br />
              <strong>Total Attended:</strong> {lab.totalAttended}
            </p>
            <a
              href="#"
              className="mt-4 block w-full text-center border border-2 border-[#44b027] text-[#44b027] font-semibold rounded-md x-4 py-2 hover:bg-[#44b027] hover:text-white transition duration-300"
            >
              Visit Climate Lab
            </a>
          </div>
        ))}
      </div>
    }
  />
);

// Testimonials Screen
const TestimonialsScreen = () => (
  <Screen
    title="Squad Leaders' Testimonials"
    content={
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((leader, index) => (
          <div
            key={index}
            className="bg-white text-center rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5"
          >
            <img
              src={leader.image}
              alt={leader.name}
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="font-semibold">{leader.name}</h3>
            <h4 className="text-gray-500">{leader.location}</h4>
            <p className="mt-2 italic">"{leader.feedback}"</p>
          </div>
        ))}
      </div>
    }
  />
);

// Main Component
const ResearchLabsAndTestimonials = () => (
  <div>
    <ResearchLabsScreen />
    <TestimonialsScreen />
    <Footer />
  </div>
);

export default ResearchLabsAndTestimonials;
