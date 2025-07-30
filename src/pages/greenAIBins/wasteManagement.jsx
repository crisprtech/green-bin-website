import HeroSection from "./HeroSection";
import HowItWorks from "./BinsPrinciple";
import ProductListing from "./Bins";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const SmartAIBins = () => {
  return (
    <motion.div
      className="smart-ai-bins text-gray-100 p-6 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="shadow-2xl rounded-lg p-6 bg-gray-800 border border-green-500"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        className="mt-6 shadow-2xl rounded-lg p-6 bg-gray-900 border border-blue-500"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        className="mt-6 shadow-2xl rounded-lg p-6 bg-gray-800 border border-purple-500"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <ProductListing />
      </motion.div>

      <motion.div
        className="mt-6 shadow-2xl rounded-lg p-6 bg-gray-900 border border-yellow-500"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <Testimonials />
      </motion.div>
    </motion.div>
  );
};

export default SmartAIBins;
