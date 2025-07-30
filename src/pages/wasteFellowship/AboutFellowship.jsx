import React from "react";
import { motion } from "framer-motion";
import {
  FellowshipIntro,
  ProjectsScreen,
  CompletedProjectsScreen,
  TestimonialsScreen,
} from "./WasteFellowship";

const AboutFellowship = () => {
  return (
    <motion.div
      className="about-fellowship bg-white text-black min-h-screen p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="p-6 "
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FellowshipIntro />
      </motion.div>

      <motion.div
        className="p-6 "
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <ProjectsScreen />
      </motion.div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <CompletedProjectsScreen />
      </motion.div>

      <motion.div
        className="p-6 "
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <TestimonialsScreen />
      </motion.div>
    </motion.div>
  );
};

export default AboutFellowship;
