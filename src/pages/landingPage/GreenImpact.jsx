
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUsers, FaHandshake, FaCheckCircle, FaLightbulb, FaUserFriends, FaFlask } from "react-icons/fa";

const metrics = [
  { id: 1, label: "Projects Onboarded", value: 150, icon: <FaProjectDiagram className="text-green-600 text-4xl mb-2" /> },
  { id: 2, label: "Users in the App", value: 5000, icon: <FaUsers className="text-blue-600 text-4xl mb-2" /> },
  { id: 3, label: "Startups and Partnerships Onboarded", value: 50, icon: <FaHandshake className="text-purple-600 text-4xl mb-2" /> },
  { id: 4, label: "Projects Verified", value: 120, icon: <FaCheckCircle className="text-yellow-600 text-4xl mb-2" /> },
  { id: 5, label: "Idea Safari Impacted Startups/Squads", value: 30, icon: <FaLightbulb className="text-orange-600 text-4xl mb-2" /> },
  { id: 6, label: "Users Impacted", value: 10000, icon: <FaUserFriends className="text-red-600 text-4xl mb-2" /> },
  { id: 7, label: "Research Labs Onboarded in Counties", value: 10, icon: <FaFlask className="text-teal-600 text-4xl mb-2" /> },
];

const ImpactPerformance = () => {
  const [countedValues, setCountedValues] = useState(
    metrics.map(metric => ({ ...metric, displayedValue: 0 }))
  );

  useEffect(() => {
    const timers = countedValues.map((metric, index) => {
      const targetValue = metric.value;
      let currentValue = 0;

      return setTimeout(() => {
        const interval = setInterval(() => {
          if (currentValue < targetValue) {
            currentValue++;
            setCountedValues(prevValues => {
              const newValues = [...prevValues];
              newValues[index].displayedValue = currentValue;
              return newValues;
            });
          } else {
            clearInterval(interval);
          }
        }, 50); // Adjust the speed of counting here
      }, index * 1000); // Delay start for each metric
    });

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="py-10 px-4 ">
      <h2 className="text-center text-3xl font-bold mb-8 text-[#44b027]">
        GreenBin Impact Performance
      </h2>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {countedValues.map((metric) => (
          <motion.div
            key={metric.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-64 mb-4 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: metric.id * 0.1 }}
          >
            {metric.icon}
            <h3 className="text-2xl font-semibold text-gray-800">{metric.displayedValue.toLocaleString()}</h3>
            <p className="text-gray-600 text-center">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ImpactPerformance;

