import React from "react";

const HeroSection = () => {
  return (
    <div className="hero-section text-center  bg-white container mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="path/to/3d-bin-image.png"
            alt="Smart AI Bin"
            className="img-fluid rounded shadow-lg w-full"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-black">
            The Future of Waste Management
          </h1>
          <h2 className="text-lg text-gray-600 mb-3">
            AI-driven waste sorting for a cleaner, greener planet
          </h2>

          <p className="text-lg text-black mb-6">
            Our <strong>Smart AI IoT Bin</strong> uses cutting-edge{" "}
            <strong>machine learning</strong> and{" "}
            <strong>sensor technology</strong> to automatically sort waste,
            reducing landfill overflow and boosting recycling efficiency.
          </p>

          <div className="flex justify-center gap-3">
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition">
              Shop Now
            </button>
            <button className="border border-green-500 text-green-500 font-bold py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
