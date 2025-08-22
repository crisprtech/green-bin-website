import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaLightbulb,
  FaUsers,
  FaCoins,
  FaGlobeAfrica,
  FaHandshake,
} from "react-icons/fa";
import background from "../../assets/partners.png"; // Import the image
import ImpactPerformance from './GreenImpact'
const Introduction = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    alert("Thank you for joining the waitlist!");
    setEmail("");
  };

  return (
    <div
      className="relative overflow-hidden  container mx-auto px-4 md:px-10 bg-cover  items-end bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 z-10">
        {/* Left Main Section */}
        <div className="w-full md:w-2/3">
          
<motion.h1
  className="mb-4 text-2xl md:text-5xl font-extrabold text-gray-800"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  Join <span className="text-[#44b027]">Green</span><span className="text-[#1e88e5]">Bin</span> Global Company
</motion.h1>
          <motion.p
            className="mb-6 text-lg md:text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            “GreenBin operates as a digital climate intelligence platform
            providing decentralized MRV services and verified grassroots data to
            support Kenya’s carbon registry ecosystem. We collaborate with
            counties, ministries, and registries to streamline project
            validation, improve community-level climate action visibility, and
            ensure climate finance accountability.”
          </motion.p>

          <motion.ul
            className="mb-6 text-gray-700 list-disc pl-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <li>Onboard your startup and access carbon markets</li>
            <li>Earn, trade, and stake carbon credits digitally</li>
            <li>Join global sustainability projects via Idea Safari</li>
            <li>Co-govern climate tech through the GreenBin DAO</li>
          </motion.ul>

          {/* Waitlist Section with Animation */}
          <motion.div
            className="flex flex-col sm:flex-row mb-4"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Final state
            transition={{ duration: 0.5, ease: "easeInOut" }} // Ease in and out
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mt-2 sm:mt-0 sm:ml-2 px-6 py-3 bg-[#44b027] text-white font-bold rounded-lg hover:bg-green-700 transition"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </button>
          </motion.div>
        </div>

        {/* Right Icon Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
          {[
            {
              icon: FaLeaf,
              text: "Sustainable Impact",
              sub: "Driving Change through Innovation",
            },
            {
              icon: FaCoins,
              text: "Carbon Digital Credits",
              sub: "Trade, Stake, and Earn",
            },
            {
              icon: FaGlobeAfrica,
              text: "Idea Safari",
              sub: "Global Climate Tech Exposure",
            },
            {
              icon: FaHandshake,
              text: "DAO Participation",
              sub: "Co-Govern Climate Decisions",
            },
            {
              icon: FaUsers,
              text: "Community Growth",
              sub: "+10,000 Members",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 flex items-center p-4 rounded-3xl bg-white/70 shadow-lg w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <item.icon className="text-[#44b027] mr-4" size={28} />
              <div>
                <span className="font-bold text-gray-800 text-lg">
                  {item.text}
                </span>
                <br />
                <span className="text-[#44b027] font-semibold text-sm">
                  {item.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ImpactPerformance />
    </div>
  );
};

export default Introduction;
