import React from "react";
import { motion } from "framer-motion";

const Bootcamps = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen container mx-auto  px-4">
      <motion.div
        className=" bg-white shadow-sm rounded-lg p-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-green-700 mb-6 text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          GreenBin Workshops & Climate Bootcamps
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-4 text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us for hands-on learning experiences designed to empower
          individuals and communities in sustainable practices.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mb-4"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Workshops
        </motion.h2>
        <motion.div
          className="space-y-4 mb-8"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            {
              title: "Composting Basics",
              description:
                "Learn how to turn organic waste into nutrient-rich compost for your garden.",
            },
            {
              title: "Sustainable Gardening",
              description:
                "Discover techniques for growing your own food while protecting the environment.",
            },
            {
              title: "Renewable Energy Solutions",
              description:
                "Explore solar, wind, and other renewable energy sources for your home.",
            },
          ].map((workshop, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <h3 className="font-bold text-lg text-green-700">
                {workshop.title}
              </h3>
              <p className="text-gray-600">{workshop.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mb-4"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Climate Bootcamps
        </motion.h2>
        <motion.div
          className="space-y-4"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          {[
            {
              title: "Climate Action Leadership",
              description:
                "Develop leadership skills to drive climate action in your community.",
            },
            {
              title: "Eco-Entrepreneurship",
              description:
                "Learn how to start and grow a sustainable business that addresses climate change.",
            },
            {
              title: "Advocacy and Policy Change",
              description:
                "Understand how to advocate for policies that promote environmental sustainability.",
            },
          ].map((bootcamp, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <h3 className="font-bold text-lg text-green-700">
                {bootcamp.title}
              </h3>
              <p className="text-gray-600">{bootcamp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="bg-green-600 mt-5 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Sign Up for Upcoming Events
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bootcamps;
