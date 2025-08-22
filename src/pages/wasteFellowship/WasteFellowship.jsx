import React from "react";
import { motion } from "framer-motion";

const fellowshipIntro = {
  title: "GreenBin Waste Management Fellowship",
  description:
    "Join the GreenBin Fellowship and be part of a movement to clean cities, build your environmental profile, and earn rewards! Our program empowers squads to take action, gain visibility, and become GreenBin ambassadors. Participate in waste management projects, receive civic education, and contribute to a cleaner planet.",
  image: "fellowship.png",
};

const projects = [
  {
    name: "Nairobi CBD Cleanup Station",
    location: "Nairobi",
    type: "Street Sweeping",
    squads: 5,
  },
  {
    name: "Mombasa Beach Restoration",
    location: "Mombasa",
    type: "Plastic Collection",
    squads: 8,
  },
  {
    name: "Kisumu Market Waste Control",
    location: "Kisumu",
    type: "Waste Sorting",
    squads: 4,
  },
];

const completedProjects = [
  {
    name: "Kibera Slum Cleanup",
    location: "Nairobi",
    status: "Approved by Nairobi County",
  },
  {
    name: "Dandora Waste Geimo Clean",
    location: "Nairobi",
    status: "Community Recognized",
  },
  {
    name: "Eldoret River Purification",
    location: "Eldoret",
    status: "Government Certified",
  },
];

const testimonials = [
  {
    name: "John M.",
    feedback:
      "GreenBin transformed our city! We cleaned over 20 streets and got recognized by the government!",
  },
  {
    name: "Sarah K.",
    feedback:
      "As a squad leader, this has been a game-changer. Great experience and rewarding!",
  },
  {
    name: "Governor Wanjiru",
    feedback:
      "This initiative has greatly contributed to environmental conservation in our county.",
  },
];

const Screen = ({ title, content }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className=" container mx-auto"
  >
    <h2 className="text-center text-3xl font-bold text-green-600 mb-6">
      {title}
    </h2>
    <div className="py-6">{content}</div>
  </motion.div>
);

const FellowshipIntro = () => (
  <Screen
    title={fellowshipIntro.title}
    content={
      <div className="flex flex-col md:flex-row items-center">
        <motion.img
          src={fellowshipIntro.image}
          alt="Fellowship"
          className="w-full md:w-1/2 rounded-lg  mb-6 md:mb-0"
        />
        <div className="md:w-1/2 md:pl-6">
          <p className="text-lg text-gray-700 mb-4">
            {fellowshipIntro.description}
          </p>
          <a
            href="#"
            className="inline-block bg-green-600 text-white font-semibold  px-6 py-3 hover:bg-green-700 transition duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    }
  />
);

const ProjectsScreen = () => (
  <Screen
    title="Upcoming Waste Management Projects"
    content={
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-lg p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">
              Location: {project.location} <br />
              Type: {project.type} <br />
              Squads: {project.squads}
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-orange-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    }
  />
);

const CompletedProjectsScreen = () => (
  <Screen
    title="Recently Completed Projects"
    content={
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {completedProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-600">Location: {project.location}</p>
            <p className="text-gray-600">Status: {project.status}</p>
          </div>
        ))}
      </div>
    }
  />
);

const TestimonialsScreen = () => (
  <Screen
    title="Testimonials from Participants"
    content={
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    }
  />
);

export {
  FellowshipIntro,
  ProjectsScreen,
  CompletedProjectsScreen,
  TestimonialsScreen,
};
