import React from "react";

const ResearchLabsHero = () => {
  return (
    <div className="relative flex items-center max-w-6xl mx-auto text-center text-white  h-screen">
      <div className="absolute inset-0  opacity-50"></div>{" "}
      {/* Dark overlay for better contrast */}
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
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-5 py-3 shadow-lg transition duration-300"
          >
            Explore Labs
          </a>
          <a
            href="#join-research"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg px-5 py-3 transition duration-300"
          >
            Join a Lab
          </a>
        </div>
      </div>
      {/* Quick Highlights Section */}
      <div className="mt-5 flex justify-around w-full max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-3xl font-bold">20+</h2>
          <p className="text-lg">Research Labs Across Counties</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">100+</h2>
          <p className="text-lg">Innovations Developed</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-lg">Experts & Researchers</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchLabsHero;
