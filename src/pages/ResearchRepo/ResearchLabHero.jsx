import React from "react";

const ResearchLabsHero = () => {
  return (
    <div className="relative mb-30  flex flex-col items-center justify-center text-center text-white">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url('path/to/your/background-image.jpg')",
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Squad Labs: Innovate, Research, Create
        </h1>
        <p className="mt-3 mb-4 text-lg text-black">
          Hands-on experience for researchers & innovators. Attend workshops,
          develop ideas, and drive sustainable solutions in county-based labs.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#labs-network"
            className="bg-[#44b027] hover:bg-[#44b027] text-white font-semibold rounded-lg px-5 py-3 shadow-lg transition duration-300"
          >
            Explore Labs
          </a>
          <a
            href="#join-research"
            className="border-2 border-[#44b027]  text-[#44b027] hover:bg-[#44b027] hover:text-white  font-semibold rounded-lg px-5 py-3 transition duration-300"
          >
            Join a Lab
          </a>
        </div>
      </div>

      {/* Quick Highlights Section */}
      <div className="mt-10 flex justify-around w-full max-w-4xl mx-auto text-center relative z-10">
        <div>
          <h2 className="text-3xl font-bold text-black">20+</h2>
          <p className="text-lg text-black">Research Labs Across Counties</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">100+</h2>
          <p className="text-lg text-black">Innovations Developed</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black">500+</h2>
          <p className="text-lg text-black">Experts & Researchers</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchLabsHero;
