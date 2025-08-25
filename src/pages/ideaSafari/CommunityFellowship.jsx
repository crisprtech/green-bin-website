import React from "react";
import {
  FaLeaf,
  FaHandsHelping,
  FaDonate,
  FaClinicMedical,
  FaTools,
  FaRecycle,
  FaGamepad,
  FaExchangeAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import LatestProjects from "./CommunityImpact.jsx";
const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center container mx-auto justify-between p-10 ">
        <motion.div
          className="flex flex-col space-y-6 md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#44b027]">
            Empowering Communities for a Sustainable Future
          </h1>
          <p className="text-lg text-gray-700">
            Join us in our mission to uplift communities through education,
            technology, and sustainable practices. Together, we can create a
            greener, more equitable world.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <FaHandsHelping className="text-[#44b027] mr-2" />
              <span>Sponsored Basic and Climate Education</span>
            </div>
            <div className="flex items-center">
              <FaDonate className="text-[#44b027] mr-2" />
              <span>
                Donation of Amenities and Talent-Based Auditions and Awards
              </span>
            </div>
            <div className="flex items-center">
              <FaClinicMedical className="text-[#44b027] mr-2" />
              <span>
                Free Programs like Fix-It Clinics under Health and Other
                Sustainable Development Goals
              </span>
            </div>
            <div className="flex items-center">
              <FaTools className="text-[#44b027] mr-2" />
              <span>Installation of Technologies</span>
            </div>
            <div className="flex items-center">
              <FaRecycle className="text-[#44b027] mr-2" />
              <span>Waste Management Initiatives</span>
            </div>
            <div className="flex items-center">
              <FaGamepad className="text-[#44b027] mr-2" />
              <span>Games and Cultural Exchange Programs</span>
            </div>
          </div>

          <button className="mt-4 px-6 py-2 bg-[#1E293B] text-white rounded-lg hover:bg-green-700 transition duration-300">
            Get Involved
          </button>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="path_to_your_image.jpg"
            alt="Community Engagement"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
      <LatestProjects />
    </div>
  );
};

export default HeroSection;
