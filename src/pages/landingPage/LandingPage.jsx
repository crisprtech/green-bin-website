import AboutUs from "./AboutUs";
import Introduction from "./LandingIntro";
import DifferentDestinations from "./Destination";
import HowWeMakeAnImpact from "./TopSuccess";
import Footer from "./Footer";
import ForeignPartners from "./Partners";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      className="mt-10 pb-10 px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Introduction Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-2"
      >
        <Introduction />
      </motion.div>

      {/* Different Destinations Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mb-3"
      >
        <DifferentDestinations />
      </motion.div>

      {/* How We Make An Impact Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mb-3"
      >
        <HowWeMakeAnImpact />
      </motion.div>

      {/* About Us Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mb-3"
      >
        <AboutUs />
      </motion.div>

      {/* Foreign Partners Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mb-3"
      >
        <ForeignPartners />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
