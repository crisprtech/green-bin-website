import HeroSection from "./HeroSection";
import HowItWorks from "./BinsPrinciple";
import ProductListing from "./Bins";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

const SmartAIBins = () => {
  return (
    <motion.div
            initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="mt-20"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
                initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <ProductListing />
      </motion.div>

      <motion.div
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
