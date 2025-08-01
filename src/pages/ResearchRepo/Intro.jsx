import React from "react";
import { motion } from "framer-motion"; // Adding animations

const HeroScreen = () => {
  return (
    <div className="relative mt-20 justify-center text-center text-white  h-screen">
      <div className="relative z-10 p-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-3"
        >
          Learn & Innovate for a Greener Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className="text-lg mb-4"
        >
          Access expert-led courses, research materials, and hands-on projects
          to drive sustainability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex justify-center gap-4"
        >
          <a
            href="#course-catalog"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-5 py-3 shadow-md transition duration-300"
          >
            Start Learning
          </a>
          <a
            href="#about"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg px-5 py-3 transition duration-300"
          >
            Explore More
          </a>
        </motion.div>
      </div>

      {/* Additional Section for Quick Info */}
      <div className="mt-5 flex items-center justify-around w-full max-w-4xl">
        <div className="text-center p-4 bg-green-600 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold">10,000+</h2>
          <p>Active Learners</p>
        </div>
        <div className="text-center p-4 bg-blue-600 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold">50+</h2>
          <p>Sustainability Courses</p>
        </div>
        <div className="text-center p-4 bg-orange-600 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold">100+</h2>
          <p>Industry Experts</p>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen;
