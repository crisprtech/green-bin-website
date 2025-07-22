import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaUsers, FaLightbulb } from "react-icons/fa";
import backgroundImage from "../../assets/lan-d.jpg"; // Adjust path as needed

const Introduction = () => {
  const [email, setEmail] = useState("");

  const handleJoinWaitlist = () => {
    console.log("Joining waitlist with email:", email);
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-end justify-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`,
      }}
    >
      {/* Overlay content */}
      <div className="container mx-auto px-6 py-10 backdrop-blur-xs rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Text Section */}
          <div>
            <motion.h1
              className="mb-4 text-4xl font-extrabold text-gray-800"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join GreenBin Research Organization
            </motion.h1>
            <motion.p
              className="mb-6 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              GreenBin Research is dedicated to driving green innovations,
              promoting sustainability, and integrating cutting-edge research,
              including Quantum Computing, Climate Technology, and Green
              Technology to shape a greener future.
            </motion.p>
            <div className="flex flex-col sm:flex-row mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                onClick={handleJoinWaitlist}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Right Icons Section */}
          <div className="flex flex-col items-end">
            {[
              {
                icon: FaLeaf,
                text: "Sustainable Impact",
                sub: "Driving Change",
              },
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
                className="mb-4 flex items-center p-4 rounded-4xl bg-white/70 shadow-xl w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <item.icon className="text-green-600 mr-3" size={24} />
                <div>
                  <span className="font-bold text-gray-800">{item.text}</span>
                  <br />
                  <span className="text-green-600 font-semibold">
                    {item.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
