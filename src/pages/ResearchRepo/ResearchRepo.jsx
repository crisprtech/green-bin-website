import React from "react";
import EducationalPlatform from "./Educational";
import HeroScreen from "./Intro";
import { motion } from "framer-motion";

const ResearchRepository = () => {
  return (
    <motion.div
      className="research-repo bg-gradient-to-r text-white min-h-screen p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="shadow-lg rounded-xl p-6 bg-gray-500 border border-blue-500"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroScreen />
      </motion.div>

      <motion.div
        className="mt-6 shadow-lg rounded-xl p-6  border border-green-500"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <EducationalPlatform />
      </motion.div>
    </motion.div>
  );
};

export default ResearchRepository;
