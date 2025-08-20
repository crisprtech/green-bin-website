import React from "react";
import ceoLars from "../assets/peterson.jpeg"; // Replace with actual path
import ceoSophia from "../assets/sophia.jpeg"; // Replace with actual path
import ceoMohammed from "../assets/mohammed.jpeg"; // Replace with actual path
import watson from "../assets/watson.jpeg"; // Replace with actual path
import { motion } from "framer-motion";
import JoinOurTeam from "./JoinTeam";
const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mr David Orach",
      title: "Chief Executive Officer (CEO)",
      country: "Kenya",
      testimonial:
        "Leading GreenBin Global Company towards a sustainable future, empowering communities with eco-friendly solutions.",
      image: watson,
    },
    {
      name: "Mr Derrick Ingosi",
      title: "Director Green Programs and Research",
      country: "Kenya",
      testimonial:
        "Driving innovative technology for sustainability and carbon footprint reduction.",
      image: ceoMohammed,
    },
    {
      name: "Ms Sharon Akinyi",
      title: "Chief Financial Officer (CFO)",
      country: "United Kingdom",
      testimonial:
        "Ensuring financial sustainability for GreenBin Foundation’s global impact.",
      image: ceoSophia,
    },
    {
      name: "Ms Phiorna Malanga",
      title: "Chief Operations Officer",
      country: "United States",
      testimonial:
        "Advancing scientific research to develop innovative eco-green initiatives.",
      image: ceoLars,
    },
    {
      name: "Mr Eliakim Dennis",
      title: "Chief Marketing Officer",
      country: "Kenya",
      testimonial:
        "Overseeing the daily operations of the organization and making sure regulatory moats and taken into action",
      image: watson,
    },
  ];

  return (
    <div className="my-10 max-w-7xl mx-auto px-4 mt-30 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Meet Our Team
      </h2>
      <p className="text-lg text-gray-700 mb-10">
        At GreenBin Foundation, our team is dedicated to creating sustainable
        solutions for waste management and environmental conservation.
        Comprising experts from various fields, we work collaboratively to
        innovate and implement strategies that empower communities and protect
        our planet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-8xl gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
            animate={{ opacity: 1, y: 0 }} // Animate to visible
            transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered delay
            className="bg-white shadow-lg rounded-3xl overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-58 rounded-3xl object-cover"
              />
              <motion.button
                className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold py-1 px-2 rounded"
                animate={{ y: ["0%", "-10%", "0%"] }} // Bouncing effect
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {member.country}
              </motion.button>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-green-600">
                {member.name}
              </h3>
              <h4 className="text-sm text-gray-500 mb-2">{member.title}</h4>
              <p className="mt-4 text-gray-600 italic border-l-4 border-green-500 pl-4 text-xs">
                "{member.testimonial}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10">
        <JoinOurTeam />
      </div>
    </div>
  );
};
export default OurTeam;
