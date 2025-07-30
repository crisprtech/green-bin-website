import React from "react";
import students from "../../assets/offsetters.jpg";
import business from "../../assets/business.jpg";
import office from "../../assets/startups.jpg";

const DifferentDestinations = () => {
  return (
    <div className="my-12">
      <h2 className="text-center text-3xl font-bold mb-4">
        Green Impact Areas
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Discover how GreenBin Foundation is driving sustainable innovations
        across different sectors to create a greener future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Eco Scholars */}
        <div
          className="relative bg-cover bg-center bg-no-repeat shadow-sm rounded-2xl overflow-hidden transition-transform transform hover:scale-105 min-h-[40vh] flex items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${students})`,
          }}
        >
          <button className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded">
            200 Joined
          </button>
          <div className="p-6">
            <h5 className="text-lg font-semibold mb-2">Eco Scholars</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Empowering students with research resources and
              sustainability-focused learning materials.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-green-500 transition"
            >
              Join the Movement
            </a>
          </div>
        </div>

        {/* Eco Entrepreneurs */}
        <div
          className="relative bg-cover bg-center bg-no-repeat shadow-sm rounded-2xl overflow-hidden transition-transform transform hover:scale-105 min-h-[40vh] flex items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${business})`,
          }}
        >
          <button className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded">
            500 Joined
          </button>
          <div className="p-6">
            <h5 className="text-lg font-semibold mb-2">Eco Entrepreneurs</h5>
            <p className="text-gray-600 mb-4 text-sm">
              Supporting green startups with insights, funding opportunities,
              and networking.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-green-500 transition"
            >
              Get Involved
            </a>
          </div>
        </div>

        {/* Sustainable Innovators */}
        <div
          className="relative bg-cover bg-center bg-no-repeat shadow-sm rounded-2xl overflow-hidden transition-transform transform hover:scale-105 min-h-[40vh] flex items-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${office})`,
          }}
        >
          <button className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold py-1 px-2 rounded">
            250 Joined
          </button>
          <div className="p-6">
            <h5 className="text-lg font-semibold mb-2">
              Sustainable Innovators
            </h5>
            <p className="text-gray-600 mb-4 text-sm">
              Encouraging groundbreaking ideas that contribute to environmental
              conservation and eco-tech advancements.
            </p>
            <a
              href="#"
              className="inline-block bg-green-600 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-green-500 transition"
            >
              Be a Changemaker
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentDestinations;
