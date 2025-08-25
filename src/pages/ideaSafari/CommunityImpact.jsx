
import React from "react";
import { motion } from "framer-motion";

const LatestProjects = () => {
  const projects = [
    {
      title: "Fix-It Clinic: Free Bike Repairs",
      date: "March 15, 2025",
      location: "Nairobi",
      description:
        "Our team provided free bike repairs to the community, ensuring safe and reliable transportation for all. We repaired over 50 bikes during the event.",
      metrics: "Beneficiaries: 100+ (reported by Nairobi Area Governor)",
      image: "path_to_bike_repair_event.jpg",
    },
    {
      title: "Health Check-Up Camp",
      date: "April 10, 2025",
      location: "Nairobi",
      description:
        "We conducted free medical examinations for over 200 community members, providing essential health services and consultations.",
      metrics: "Beneficiaries: 200+ (reported by Nairobi Area Governor)",
      image: "path_to_health_check_event.jpg",
    },
    {
      title: "Waste Management Awareness Drive",
      date: "May 5, 2025",
      location: "Nairobi",
      description:
        "An educational event focused on waste management practices, where we engaged with over 150 participants on sustainable waste disposal methods.",
      metrics: "Beneficiaries: 150+ (reported by Nairobi Area Governor)",
      image: "path_to_waste_management_event.jpg",
    },
    {
      title: "Cultural Exchange Program",
      date: "June 20, 2025",
      location: "Nairobi",
      description:
        "A vibrant cultural exchange program that brought together diverse communities to share traditions, food, and experiences.",
      metrics: "Beneficiaries: 300+ (reported by Nairobi Area Governor)",
      image: "path_to_cultural_exchange_event.jpg",
    },
  ];

  return (
    <div className="p-10 container mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#44b027] mb-6">
        Latest Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }} // staggered animation
            whileHover={{ scale: 1.05 }} // scale effect on hover
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#44b027]">
                {project.title}
              </h3>
              <p className="text-gray-500">
                {project.date} | {project.location}
              </p>
              <p className="mt-2 text-gray-700">{project.description}</p>
              <p className="mt-2 font-bold">{project.metrics}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestProjects;

