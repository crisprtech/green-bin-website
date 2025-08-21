import React from "react";
import { motion } from "framer-motion";

// Sample logos for demonstration purposes
const logos = {
  "Eco-Plastic Recycling App": "path/to/logo1.png",
  "Solar-Powered IoT Waste Bins": "path/to/logo2.png",
  "Green Transport Initiative": "path/to/logo3.png",
  "AgroTech for Small Farmers": "path/to/logo4.png",
};

const PreviousStartups = () => {
  const projects = [
    {
      name: "Eco-Plastic Recycling App",
      company: "Eco Innovations Ltd.",
      description:
        "A mobile platform that incentivizes users to recycle plastic waste by earning points redeemable for eco-friendly rewards.",
    },
    {
      name: "Solar-Powered IoT Waste Bins",
      company: "Smart Waste Solutions",
      description:
        "Smart waste bins powered by solar energy, equipped with sensors to optimize waste collection and reduce pollution in urban areas.",
    },
    {
      name: "Green Transport Initiative",
      company: "Eco Mobility Inc.",
      description:
        "An electric bike-sharing system aimed at reducing carbon emissions in urban areas through sustainable transportation.",
    },
    {
      name: "AgroTech for Small Farmers",
      company: "AgriConnect",
      description:
        "A digital marketplace connecting small-scale farmers with sustainable agricultural resources and buyers.",
    },
  ];

  return (
    <div className="p-6  container mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
        Previous Idea Safari Startups
      </h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-5 bg-white rounded-lg shadow-lg border-l-4 border-green-500 flex items-start transition-transform duration-300"
          >
            <img
              src={logos[project.name]}
              alt={`${project.company} logo`}
              className="h-14 w-14 mr-4 rounded-full shadow-sm"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <h4 className="text-md font-medium text-gray-700 mb-1">
                {project.company}
              </h4>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreviousStartups;
