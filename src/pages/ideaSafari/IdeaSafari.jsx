import React from 'react';
import HeroSection from './HeroSection'; // Adjust the path as needed
import HowItWorks from './SafarisPrinciple';   // Adjust the path as needed
import PreviousStartups from './PreviousStartups'; // Adjust the path as needed
import RecentAmbassadors from './RecentWinners'; // Adjust the path as needed
import { motion } from 'framer-motion';

const IdeaSafari = () => {
  return (
    <motion.div 
      className="idea-safari min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <PreviousStartups />
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <RecentAmbassadors />
      </motion.div>
    </motion.div>
  );
};

export default IdeaSafari;
