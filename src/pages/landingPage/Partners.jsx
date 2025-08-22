
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
// Import CEO images
import ceoLars from "../../assets/peterson.jpeg"; // Replace with actual path
import ceoSophia from "../../assets/sophia.jpeg"; // Replace with actual path
import ceoMohammed from "../../assets/mohammed.jpeg"; // Replace with actual path
import watson from "../../assets/watson.jpeg"; // Replace with actual path

const ForeignPartners = () => {
  const partners = [
    {
      company: "EcoInnovate Ltd",
      ceo: "Dr. Lars Petersen",
      country: "Denmark",
      testimonial:
        "Partnering with GreenBin Global has been an enriching experience. Together, we are advancing sustainable waste management solutions across Africa.",
      image: ceoLars,
    },
    {
      company: "GreenFuture Tech",
      ceo: "Sophia Martinez",
      country: "Canada",
      testimonial:
        "GreenBin’s commitment to environmental innovation aligns perfectly with our mission. We look forward to scaling eco-friendly technology together.",
      image: ceoSophia,
    },
    {
      company: "SolarGreen Energy",
      ceo: "Mohammed Al-Farsi",
      country: "UAE",
      testimonial:
        "Working with GreenBin has been revolutionary! Their grassroots approach complements our solar energy projects, creating real impact.",
      image: ceoMohammed,
    },
    {
      company: "BioCycle Solutions",
      ceo: "Derrick Watson",
      country: "United Kingdom",
      testimonial:
        "GreenBin Foundation is a visionary partner in circular economy initiatives. We are proud to support their sustainability projects.",
      image: watson,
    },
  ];

  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-3xl font-bold text-center text-[#44b027] mb-6">
        Our Foreign Partners
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-3xl overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }} // Initial state for card animation
            whileInView={{ opacity: 1, y: 0 }} // Animate to final state when in view
            transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
            viewport={{ once: true }} // Only animate once when in view
          >
            <div className="relative">
              <img
                src={partner.image}
                alt={partner.ceo}
                className="w-full h-48 object-cover rounded-3xl"
              />
              <motion.button
                className="absolute top-5 left-4 bg-[#44b027] text-white text-xs font-bold py-1 px-2 rounded"
                animate={{
                  y: [0, -10, 0], // Bouncing effect
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                {partner.country}
              </motion.button>
            </div>
            <div className="p-3">
              <h3 className="text-lg font-semibold text-[#44b027]">
                {partner.company}
              </h3>
              <h4 className="text-sm text-gray-500 mb-2">CEO: {partner.ceo}</h4>
              <p className="text-xs text-gray-700">
                <strong>Country:</strong> {partner.country}
              </p>
              <p className="mt-4 text-gray-600 italic border-l-4 border-green-500 pl-4 text-xs">
                "{partner.testimonial}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForeignPartners;

