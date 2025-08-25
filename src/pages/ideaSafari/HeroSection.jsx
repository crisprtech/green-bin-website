


import React from "react";
import { FaMapMarkerAlt, FaClock, FaBuilding } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center bg-cover bg-center text-black text-center px-6"
         style={{ backgroundImage: "url(path/to/background-image.jpg)" }}>
      
      {/* Flex Container for Image and Initial Content */}
      <div className="relative z-10 max-w-2xl md:w-1/2 p-6">
        <h1 className="text-4xl font-bold mb-4">
          Transforming Ideas into Green Startups
        </h1>
        <p className="text-lg mb-6">
          Join the Idea Safari initiative and take your innovation to the global stage. Gain skills, mentorship, and funding to turn your vision into a reality.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Eligibility Criteria</h2>
        <p className="text-lg mb-6">
          Open to individuals, schools, startups, companies, NGOs, businesses, etc. Align your project with one of our climate research modules.
        </p>

        <h3 className="text-xl font-semibold mb-2">Climate Research Modules</h3>
        <p className="text-lg mb-4">
          Climate System Science, Climate Change Impacts, Climate Adaptation, Climate Mitigation, Climate Finance and Policies, Climate Innovation and Technology.
        </p>

        <h3 className="text-xl font-semibold mb-2">Work Levels</h3>
        <p className="text-lg mb-4">
          Specify the type of work level you want to leverage in the labs: Testing Ideas, Prototyping, Learning, Advanced Research.
        </p>

        {/* Image Section */}
        <div className="relative z-10 md:w-1/2">
          <img 
            src="path/to/your/image.jpg" 
            alt="Hero Image" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Additional Information Below Flexed Component */}
      <div className="w-full md:w-1/2 p-6">
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Lab Location</h3>
        </div>
        <p className="text-lg mb-6">
          Indicate which lab based on location you wish to use for your project.
        </p>

        <div className="flex items-center mb-4">
          <FaClock className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Workshop Period</h3>
        </div>
        <p className="text-lg mb-6">
          Specify the desired period for workshops to enhance your project.
        </p>

        <div className="flex items-center mb-4">
          <FaBuilding className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Affiliated Embassies</h3>
        </div>
        <p className="text-lg mb-6">
          Link your project with affiliated embassies under GreenBin that have partnered with us.
        </p>

        <button className="bg-[#1E293B] hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

