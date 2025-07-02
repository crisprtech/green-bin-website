import AboutUs from './AboutUs';
import Introduction from './LandingIntro';
import DifferentDestinations from './Destination';
import HowWeMakeAnImpact from './TopSuccess';
import Footer from './Footer';
import ForeignPartners from './Partners';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div 
      className="smart-ai-bins min-h-screen bg-gradient-to-r from-green-100 to-green-300 p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Introduction />
      </motion.div>

      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <DifferentDestinations />
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <HowWeMakeAnImpact />
      </motion.div>

      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <AboutUs />
      </motion.div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <ForeignPartners />
      </motion.div>

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
