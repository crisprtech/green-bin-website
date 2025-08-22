import React from "react";
import { motion } from "framer-motion";

const CarbonMarketExplorer = () => {
  return (
    <div className="bg-gray-900 container mx-auto text-white mb-20 border rounded-xl">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
          <motion.h1
            className="text-5xl font-bold text-black mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Explore the Carbon Markets
          </motion.h1>
          <motion.p
            className="text-xl text-black mb-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how you can make a difference in the fight against climate
            change.
          </motion.p>
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-bold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>

      {/* Carbon Footprint Visualization */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Carbon footprint visualization */}
          <h2 className="text-3xl font-bold mb-4">Your Carbon Footprint</h2>
          <p className="text-gray-400 mb-4">
            Understand your impact and find ways to reduce your emissions. Our
            interactive tools will help you visualize your carbon footprint and
            identify opportunities to make a difference.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Analyze Your Footprint
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Carbon footprint visualization image */}
          <img
            src="carbon-footprint-visualization.jpg"
            alt="Carbon Footprint Visualization"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Carbon Offset Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row-reverse items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Carbon offset programs */}
          <h2 className="text-3xl font-bold mb-4">
            Carbon Offset Opportunities
          </h2>
          <p className="text-gray-400 mb-4">
            Explore a variety of carbon offset programs that allow you to
            support sustainable initiatives and reduce your environmental
            impact. From tree planting to renewable energy projects, find the
            right fit for your goals and budget.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Learn More
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Carbon offset opportunities image */}
          <img
            src="carbon-offset-opportunities.jpg"
            alt="Carbon Offset Opportunities"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Carbon Market Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Carbon market information */}
          <h2 className="text-3xl font-bold mb-4">Carbon Market Overview</h2>
          <p className="text-gray-400 mb-4">
            Dive into the world of carbon markets and understand the dynamics
            that shape this evolving landscape. Learn about carbon pricing,
            trading mechanisms, and the different types of carbon credits
            available to individuals and businesses.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Explore the Market
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Carbon market overview image */}
          <img
            src="carbon-market-overview.jpg"
            alt="Carbon Market Overview"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      {/* Educational Resources */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row-reverse items-center justify-between">
        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Educational resources */}
          <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
          <p className="text-gray-400 mb-4">
            Expand your knowledge on carbon markets and sustainability with our
            curated collection of articles, guides, and educational materials.
            Empower yourself to make informed decisions and contribute to a
            greener future.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Start Learning
          </button>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Educational resources image */}
          <img
            src="educational-resources.jpg"
            alt="Educational Resources"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CarbonMarketExplorer;
