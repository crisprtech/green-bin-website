import React from "react";

const DifferentDestinations = () => {
  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <h2 className="text-center text-3xl font-bold mb-4">
        Green Impact Areas
      </h2>
      <p className="text-center text-lg text-gray-700 mb-8">
        Discover how GreenBin Foundation is driving sustainable innovations
        across different sectors to create a greener future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-sm rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="students.jpg"
            className="w-full h-48 object-cover"
            alt="Students"
          />
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Eco Scholars</h5>
            <p className="text-gray-600 mb-4">
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
        <div className="bg-white shadow-sm rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="entrepreneurs.jpg"
            className="w-full h-48 object-cover"
            alt="Entrepreneurs"
          />
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Eco Entrepreneurs</h5>
            <p className="text-gray-600 mb-4">
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
        <div className="bg-white shadow-sm rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="innovators.jpg"
            className="w-full h-48 object-cover"
            alt="Innovators"
          />
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">
              Sustainable Innovators
            </h5>
            <p className="text-gray-600 mb-4">
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
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-500 transition"
        >
          Explore More Green Initiatives
        </a>
      </div>
    </div>
  );
};

export default DifferentDestinations;
