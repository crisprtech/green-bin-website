import React from "react";

const HeroSection = () => {
  return (
    <div
      className=" container mx-auto bg-cover bg-center flex flex-col justify-center items-center text-black text-center px-6"
      style={{ backgroundImage: "url(path/to/background-image.jpg)" }}
    >
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Transforming Ideas into Green Startups
        </h1>
        <p className="text-lg mb-6">
          Join the Idea Safari initiative and take your innovation to the global
          stage. Gain skills, mentorship, and funding to turn your vision into a
          reality.
        </p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
