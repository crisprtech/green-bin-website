import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import students from "../../assets/offsetters.jpg";
import business from "../../assets/business.jpg";
import office from "../../assets/startups.jpg";

const DifferentDestinations = () => {
  return (
    <div className="my-12 container mx-auto ">
      <h2 className="text-center text-3xl font-bold mb-4">
        Join Green Circular Economy Registry
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Discover how GreenBin Global is driving sustainable innovations across
        different sectors to create a greener future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Eco Scholars */}
        <motion.div
          className="relative bg-cover bg-center bg-no-repeat shadow-sm rounded-3xl overflow-hidden transition-transform transform hover:scale-105 min-h-[40vh] flex items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1.4), rgba(255, 255, 255, 0)), url(${students})`,
          }}
          initial={{ opacity: 0, y: 20 }} // Initial state for card animation
          animate={{ opacity: 1, y: 0 }} // Final state for card animation
          transition={{ duration: 0.5, ease: "easeInOut" }} // Ease in and out
        >
          <motion.button
            className="absolute top-5 left-5 bg-orange-400 text-white text-sm font-bold py-1 px-2 rounded"
            animate={{
              y: [0, -10, 0], // Bouncing effect
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            200 Joined
          </motion.button>
          <div className="p-6">
            <h5 className="text-lg font-semibold mb-2">Eco Scholars</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Empowering students with research resources and
              sustainability-focused learning materials.
            </p>
            <a
              href="#"
              className="inline-block bg-[#44b027] text-white font-semibold py-2 px-4 rounded-2xl hover:bg-green-500 transition"
            >
              Join the Movement
            </a>
          </div>
        </motion.div>

        {/* Eco Entrepreneurs */}
        <motion.div
          className="relative bg-cover bg-center bg-no-repeat shadow-sm rounded-3xl overflow-hidden transition-transform transform hover:scale-105 min-h-[40vh] flex items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1.4), rgba(255, 255, 255, 0)), url(${business})`,
          }}
          initial={{ opacity: 0, y: 20 }} // Initial state for card animation
          animate={{ opacity: 1, y: 0 }} // Final state for card animation
          transition={{ duration: 0.5, ease: "easeInOut" }} // Ease in and out
        >
          <motion.button
            className="absolute top-5 left-5 bg-orange-400 text-white text-sm  font-bold py-1 px-2 rounded"
            animate={{
              y: [0, -10, 0], // Bouncing effect
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            500 Joined
          </motion.button>
          <div className="p-6">
            <h5 className="text-lg font-semibold mb-2">Startups & Companies</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Supporting green startups with insights, funding opportunities,
              and networking.
            </p>
            <a
              href="#"
              className="inline-block bg-[#44b027] text-white font-semibold py-2 px-4 rounded-2xl hover:bg-green-500 transition"
            >
              Get Involved
            </a>
          </div>
        </motion.div>

        {/* Sustainable Innovators */}
        <motion.div
          className="relative bg-cover bg-center bg-no-repeat shadow-xs rounded-3xl overflow-hidden transition-transform transform hover:scale-105 min-h-[40vh] flex items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 1.6), rgba(255, 255, 255, 0)), url(${office})`,
          }}
          initial={{ opacity: 0, y: 20 }} // Initial state for card animation
          animate={{ opacity: 1, y: 0 }} // Final state for card animation
          transition={{ duration: 0.5, ease: "easeInOut" }} // Ease in and out
        >
          <motion.button
            className="absolute top-5 left-5 bg-orange-400 text-white text-sm font-bold py-1 px-2 rounded"
            animate={{
              y: [0, -10, 0], // Bouncing effect
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            298 Joined
          </motion.button>
          <div className="p-6">
            <h5 className="text-lg font-semibold mb-2">
              Sustainable Innovators
            </h5>
            <p className="text-gray-600 mb-4 text-sm">
              Encouraging groundbreaking ideas that contribute to environmental
              conservation and eco-tech advancements.
            </p>
            <a
              href="#"
              className="inline-block bg-[#44b027] text-white font-semibold py-2 px-4 rounded-2xl hover:bg-green-500 transition"
            >
              Be a Changemaker
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DifferentDestinations;
