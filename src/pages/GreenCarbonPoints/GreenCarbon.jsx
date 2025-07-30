import React from "react";
import Dashboard from "./Dashboard";
import OnboardingProcess from "./Investments";
import RedeemGCP from "./InvestGCPs";
import Leaderboard from "./Leaderboard";
import { motion } from "framer-motion";

const GreenCarbonPoints = () => {
  return (
    <motion.div
      className="redeem-gcps text-white p-6 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="rounded-xl p-4"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Dashboard />
      </motion.div>

      <motion.div
        className=" rounded-xl p-4 "
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <OnboardingProcess />
      </motion.div>

      <motion.div
        className="rounded-xl p-4 "
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <RedeemGCP />
      </motion.div>

      <motion.div
        className="rounded-xl p-4 "
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
