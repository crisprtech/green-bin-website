import React from "react";
import { FaRecycle, FaLeaf, FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import business from "../../assets/green_field.jpeg";
const HowWeMakeImpact = () => {
  return (
    <div className="relative">
      {/* Background Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center relative flex flex-col items-center"
        style={{
          backgroundImage: `url(${business})`,
        }}
      >
        {/* Overlay gradient */}

        {/* Black container overlapping the hero (half overlap) */}
        <div className="relative z-10 w-full max-w-6xl -mt-24">
          <div className="bg-gray-900 rounded-xl shadow-xl px-8 py-12">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8 ">
              Climate Research
            </h2>

            {/* Cards inside black background */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: <FaRecycle className="text-blue-400 text-4xl mb-4" />,
                  title: "Climate Research & Technology",
                  description:
                    "Transforming waste into valuable resources while fostering environmental stewardship and growth.",
                },
                {
                  icon: <FaLeaf className="text-green-400 text-4xl mb-4" />,
                  title: "Green Ecommerce",
                  description:
                    "Promoting sustainable products and encouraging responsible consumer habits.",
                },
                {
                  icon: (
                    <FaLightbulb className="text-yellow-400 text-4xl mb-4" />
                  ),
                  title: "Carbon Finance",
                  description:
                    "Empowering communities to develop creative solutions for sustainability.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {item.icon}
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Email subscribe input */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-1/2 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Hero text BELOW the black container */}
        <div className="relative z-10 mt-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Accelerating climate adaptation globally
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HowWeMakeImpact;
