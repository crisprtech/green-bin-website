import React from "react";
import { FaRecycle, FaLeaf, FaBook, FaTree, FaTrash } from "react-icons/fa"; // Importing icons
import business from "../../assets/business.jpg";
import { motion } from "framer-motion"; // Import framer-motion for animations

const HowWeMakeAnImpact = () => {
  return (
    <div className="my-12">
      <p className="text-center text-lg text-gray-700 mb-8">
        Together, we can transform waste into opportunity. Through sustainable
        waste management, eco-friendly commerce, and innovative recycling
        initiatives, we empower communities to protect the environment while
        creating economic value. Join us in making a lasting impact!
      </p>

      <div className="flex justify-center mb-8">
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 transition mr-3">
          Get Involved
        </button>
        <button className="border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition">
          Learn More
        </button>
      </div>

      <div className="flex flex-col md:flex-row mb-8">
        {/* Image on the top for smaller screens */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 mr-10 flex justify-center">
          <img
            src={business}
            alt="GreenBin Programs"
            className="rounded-4xl shadow-xs"
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 gap-6 md:w-1/2">
          {[
            {
              icon: <FaRecycle />,
              title: "Recycling Programs",
              description:
                "We facilitate community-driven recycling initiatives, ensuring waste is transformed into valuable resources that benefit both people and the planet.",
            },
            {
              icon: <FaLeaf />,
              title: "Eco-Friendly Products",
              description:
                "By promoting sustainable products, we encourage responsible consumer habits and reduce environmental pollution.",
            },
            {
              icon: <FaTree />,
              title: "Carbon Offsetting",
              description:
                "Our programs help communities and businesses reduce their carbon footprint through reforestation and innovative offsetting strategies.",
            },
            {
              icon: <FaTrash />,
              title: "Waste Management",
              description:
                "We implement effective waste management strategies that minimize landfill waste and promote recycling.",
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 flex"
              initial={{ opacity: 0, y: 20 }} // Initial state for card animation
              animate={{ opacity: 1, y: 0 }} // Final state for card animation
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
            >
              <div className="mr-4 self-start text-green-600 text-3xl">
                {program.icon}
              </div>
              <div className="flex flex-col">
                <h5 className="text-md font-semibold mb-2">{program.title}</h5>
                <p className="text-gray-600 text-xs">{program.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeMakeAnImpact;
