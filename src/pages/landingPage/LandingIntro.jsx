
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaLightbulb } from "react-icons/fa";

const Introduction = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    console.log("Joining waitlist with email:", email);
  };

  return (
    <div className="container mx-auto my-10 p-8 bg-gray-100 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.h1
            className="mb-4 text-3xl font-bold text-green-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join GreenBin Research Organization
          </motion.h1>
          <motion.p
            className="mb-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            GreenBin Research is dedicated to driving green innovations,
            promoting sustainability, and integrating cutting-edge research,
            including Quantum Computing, Climate Technology, and Green Technology to
            shape a greener future.
          </motion.p>
          <div className="flex mb-3">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="ml-2 px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
              onClick={handleJoinWaitlist}
            >
              Join Waitlist
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end">
          {[
            { icon: FaLeaf, text: "Sustainable Impact", sub: "Driving Change" },
            {
              icon: FaLightbulb,
              text: "Innovations",
              sub: "Eco-Tech Solutions",
            },
            {
              icon: FaUsers,
              text: "Community Growth",
              sub: "+ 10,000 Members",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-3 flex items-center p-4 rounded-lg bg-white shadow-md w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <item.icon className="text-green-600 mr-3" size={24} />
              <div>
                <span className="font-bold text-gray-800">{item.text}</span>
                <br />
                <span className="text-green-600 font-bold">{item.sub}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-10 text-center">
        <motion.h2
          className="mb-4 text-2xl font-semibold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Building a Sustainable Future Together
        </motion.h2>
        <div className="flex justify-around">
          {[
            { value: "5+", text: "Years of Green Research" },
            { value: "10K+", text: "Eco Enthusiasts" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3 }}
            >
              <h3 className="text-green-600 font-bold text-2xl">{item.value}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;

