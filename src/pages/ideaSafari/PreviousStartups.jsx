import React from "react";
import { motion } from "framer-motion";

const PreviousStartups = () => {
  const projects = [
    {
      name: "Eco-Plastic Recycling App",
      description:
        "A mobile platform that incentivizes users to recycle plastic waste by earning points redeemable for eco-friendly rewards.",
    },
    {
      name: "Solar-Powered IoT Waste Bins",
      description:
        "Smart waste bins powered by solar energy, equipped with sensors to optimize waste collection and reduce pollution in urban areas.",
    },
    {
      name: "Green Transport Initiative",
      description:
        "An electric bike-sharing system aimed at reducing carbon emissions in urban areas through sustainable transportation.",
    },
    {
      name: "AgroTech for Small Farmers",
      description:
        "A digital marketplace connecting small-scale farmers with sustainable agricultural resources and buyers.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
        Previous Idea Safari Startups
      </h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {project.name}
            </h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreviousStartups;
