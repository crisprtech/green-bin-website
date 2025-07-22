
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Dave Orach",
    title: "Chief Executive Officer (CEO)",
    message:
      "Leading GreenBin Research Organization towards a sustainable future, empowering communities with eco-friendly solutions.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Derrick Ingosi",
    title: "Chief Technology Officer (CTO)",
    message:
      "Driving innovative technology for sustainability and carbon footprint reduction.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Sharon Akinyi",
    title: "Chief Financial Officer (CFO)",
    message:
      "Ensuring financial sustainability for GreenBin Foundation’s global impact.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Phiorna Malanga",
    title: "Director Research & Development",
    message:
      "Advancing scientific research to develop innovative eco-green initiatives.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "Eliakim Dennis",
    title: "Director Marketing and Research",
    message:
      "Building international partnerships to expand our environmental mission.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
  {
    name: "ZenetraLabs Limited",
    title: "IT Team Department",
    message:
      "Responsible for the IT framework, including the ERP system and the GreenBin app, ensuring seamless technology integration to drive our environmental mission forward.",
    image: "https://via.placeholder.com/150", // Replace with actual image
  },
];

const OurTeam = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-green-600">Meet Our Team</h2>
        <p className="mt-4 text-lg text-gray-700">
          The GreenBin Foundation is committed to environmental sustainability, innovation, and community-driven solutions. Our dedicated team consists of professionals from diverse backgrounds who share a passion for making the world greener. From technology to finance, research to global outreach, our team is driven by the common goal of transforming the way we manage waste and carbon emissions.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-full w-32 h-32 mx-auto mt-6 border-4 border-green-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <h4 className="text-sm text-gray-500 mb-2">{member.title}</h4>
                <p className="text-gray-600">{member.message}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

