
import React from "react";
import { FaRecycle, FaLeaf, FaLightbulb, FaTree, FaHandsHelping } from "react-icons/fa"; // Importing updated icons
import business from "../../assets/business.jpg";
import { motion } from "framer-motion"; // Import framer-motion for animations

const HowWeMakeAnImpact = () => {
  return (
    <div className="my-12 container mx-auto ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-sm p-8 shadow-xs mb-8"
      >
        <p className="text-center text-black text-lg mb-8">
          Together, we can transform waste into opportunity. Through sustainable
          waste management, eco-friendly commerce, and innovative recycling
          initiatives, we empower communities to protect the environment while
          creating economic value. Join us in making a lasting impact!
        </p>

        <div className="flex justify-center mb-8">
          <button className="bg-orange-300 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-500 transition mr-3">
            Get Involved
          </button>
          <button className="border border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Learn More
          </button>
        </div>
      </motion.div>

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
              icon: <FaRecycle className="text-blue-600 text-4xl mb-2" />,
              title: "Climate Research & Technology",
              description:
                "Our community-driven recycling initiatives transform waste into valuable resources, fostering environmental stewardship and economic growth.",
            },
            {
              icon: <FaLeaf className="text-green-500 text-4xl mb-2" />,
              title: "Green Ecommerce in GreenBin App",
              description:
                "We promote sustainable products, encouraging responsible consumer habits that significantly reduce environmental pollution.",
            },
            {
              icon: <FaLightbulb className="text-yellow-500 text-4xl mb-2" />,
              title: "Decentralised Carbon Finance ",
              description:
                "Our programs empower communities to develop creative solutions for environmental challenges, enhancing sustainability practices.",
            },
            {
              icon: <FaHandsHelping className="text-orange-600 text-4xl mb-2" />,
              title: "Community Sensitization Fellowship",
              description:
                "We implement effective strategies that foster community involvement in waste management and recycling efforts, promoting a cleaner environment.",
            },
          ].map((program, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 flex"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.1 }} // Delay for staggered effect
            >

              <div className="mr-4 self-start">
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

