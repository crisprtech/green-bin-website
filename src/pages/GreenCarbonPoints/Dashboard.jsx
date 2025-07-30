import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaGlobeAfrica,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import carbonImg from "../../assets/business.jpg"; // Replace with your own image

const Dashboard = () => {
  return (
    <div className="bg-white pt-20 pb-16 px-4 md:px-8 lg:px-16 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GreenBin Carbon Registration System
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Onboard your business or project into the GreenBin Carbon Registry — a
          gateway to transparent carbon credit issuance, trading, and tracking
          powered by blockchain and green finance protocols.
        </motion.p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            { icon: FaGlobeAfrica, title: "Global Marketplace" },
            { icon: FaLeaf, title: "Verified Green Credits" },
            { icon: FaHandshake, title: "DAO Participation" },
            { icon: FaChartLine, title: "Carbon Asset Bonds" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              <feature.icon className="text-green-600" size={22} />
              <span className="text-gray-800 font-medium">{feature.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
            Get Registered Now
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={carbonImg}
          alt="GreenBin Carbon Registration"
          className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[400px]"
        />
      </motion.div>
    </div>
  );
};

export default Dashboard;
