import React from "react";
import Dashboard from "./Dashboard";
import InvestmentDonation from "./Investments";
import RedeemGCP from "./InvestGCPs";
import Leaderboard from "./Leaderboard";
import { motion } from "framer-motion";

const GreenCarbonPoints = () => {
  return (
    <motion.div
      className="redeem-gcps bg-gray-900 text-white p-6 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="shadow-lg rounded-xl p-4 bg-gradient-to-r from-green-500 to-teal-500"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Dashboard />
      </motion.div>

      <motion.div
        className="mt-6 shadow-lg rounded-xl p-4 bg-gradient-to-r from-blue-500 to-indigo-500"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <InvestmentDonation />
      </motion.div>

      <motion.div
        className="mt-6 shadow-lg rounded-xl p-4 bg-gradient-to-r from-purple-500 to-pink-500"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <RedeemGCP />
      </motion.div>

      <motion.div
        className="mt-6 shadow-lg rounded-xl p-4 bg-gradient-to-r from-orange-500 to-red-500"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
      >
        <Leaderboard />
      </motion.div>
    </motion.div>
  );
};

export default GreenCarbonPoints;
