
import React from "react";
import { motion } from "framer-motion";
import {
  FaWifi,
  FaBolt,
  FaUtensils,
  FaMoneyBillWave,
  FaTachometerAlt,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Pay for WiFi",
    icon: <FaWifi size={40} />,
    description:
      "Use your GCPs to enjoy seamless internet access at partnered hotspots.",
  },
  {
    id: 2,
    name: "Pay Utility Bills",
    icon: <FaBolt size={40} />,
    description:
      "Settle your electricity, water, and other essential bills effortlessly.",
  },
  {
    id: 3,
    name: "Restaurant Payments",
    icon: <FaUtensils size={40} />,
    description: "Dine at top restaurants and pay with GCPs hassle-free!",
  },
  {
    id: 4,
    name: "Till & Paybill Payments",
    icon: <FaMoneyBillWave size={40} />,
    description:
      "Make instant payments to businesses using their till or paybill numbers.",
  },
  {
    id: 5,
    name: "Transport Services",
    icon: <FaTachometerAlt size={40} />,
    description: "Ride eco-friendly and pay using your Green Carbon Points.",
  },
];

const GCPServicesIntro = () => {
  return (
    <div className="text-center container mx-auto mt-18 py-10 px-4">
      <motion.h1
        className="mb-4 text-3xl font-bold text-green-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Unlock Endless Possibilities with Your GCPs! 🌱💳
      </motion.h1>

      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Convert your eco-friendly efforts into real-world benefits! Use your
        Green Carbon Points to pay for everyday services effortlessly.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="text-green-600 mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
            <p className="text-gray-500">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="mt-6 bg-green-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-green-700 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Start Using GCPs Now
      </motion.button>
    </div>
  );
};

export default GCPServicesIntro;

