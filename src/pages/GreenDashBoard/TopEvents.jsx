import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaBullhorn,
  FaGlobeAfrica,
  FaLeaf,
} from "react-icons/fa";

const newsData = [
  {
    title: "GreenBin Partners with UNEP for Nairobi Green Forum",
    date: "July 18, 2025",
    type: "Event",
    description:
      "We’re excited to announce our partnership with UNEP to co-host Africa’s leading green innovation summit in Nairobi.",
    icon: <FaGlobeAfrica size={20} className="text-green-600" />,
  },
  {
    title: "New DAO Proposal: Carbon Credit Staking Pools",
    date: "July 15, 2025",
    type: "Announcement",
    description:
      "Members can now review and vote on the newly proposed staking mechanism for digital carbon credits on the DAO portal.",
    icon: <FaBullhorn size={20} className="text-green-600" />,
  },
  {
    title: "Upcoming Idea Safari Cohort Open",
    date: "July 10, 2025",
    type: "Program Launch",
    description:
      "Applications are now open for innovators to apply for the Idea Safari — gain global exposure and funding for climate solutions.",
    icon: <FaCalendarAlt size={20} className="text-green-600" />,
  },
  {
    title: "GreenBin Launches GreenBond Tokens for SMEs",
    date: "July 5, 2025",
    type: "Finance",
    description:
      "We're tokenizing green bonds to help climate-focused SMEs access blockchain-based capital across Africa.",
    icon: <FaLeaf size={20} className="text-green-600" />,
  },
];

const GreenBinNewsEvents = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          GreenBin News & Events
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Stay up to date with GreenBin’s impact, events, DAO proposals, and
          green innovation across the world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {newsData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-green-50/30 border border-green-100 rounded-xl shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="flex items-center mb-4">
              {item.icon}
              <span className="ml-2 text-sm font-medium text-green-700">
                {item.type}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-3">{item.description}</p>
            <p className="text-sm text-gray-400">{item.date}</p>
          </motion.div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-700 text-lg font-medium mb-2">
          Have an event or announcement?
        </p>
        <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
          Submit Your Update
        </button>
      </div>
    </div>
  );
};

export default GreenBinNewsEvents;
