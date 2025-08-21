import React from "react";

import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "WiFi Payment",
    description: "Use your GCPs to pay for internet services.",
    image: "wifi.png",
  },
  {
    id: 2,
    name: "Till Number Payments",
    description: "Pay businesses directly via till numbers using GCPs.",
    image: "till.png",
  },
  {
    id: 3,
    name: "Pay Bills",
    description: "Settle your monthly bills with GCPs.",
    image: "bills.png",
  },
  {
    id: 4,
    name: "KPLC Tokens",
    description: "Purchase electricity tokens using your GCP balance.",
    image: "kplc.png",
  },
  {
    id: 5,
    name: "Water Bills",
    description: "Pay for water services with ease using GCPs.",
    image: "water.png",
  },
  {
    id: 6,
    name: "Hotel Payments",
    description: "Enjoy dining and accommodation using your GCPs.",
    image: "hotel.png",
  },
];

const GCPServices = () => {
  return (
    <div className="py-10 container mx-auto px-4">
      <motion.h2
        className="text-center text-3xl font-bold mb-8 text-green-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services Available with GCPs
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: service.id * 0.1 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={service.image}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.button
                className="bg-green-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-700 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Use GCPs
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <motion.button
          className="bg-gray-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-gray-700 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          More Services
        </motion.button>
      </div>
    </div>
  );
};

export default GCPServices;
