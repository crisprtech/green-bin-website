import React from "react";
import EducationalPlatform from "./Educational";
import HeroScreen from "./Intro";
import { motion } from "framer-motion";

const ResearchRepository = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroScreen />
      </motion.div>

      <motion.div
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
