import React from "react";
import { FaRecycle, FaLeaf, FaBook, FaTree, FaTrash } from "react-icons/fa"; // Importing icons
import business from "../../assets/business.jpg";

const HowWeMakeAnImpact = () => {
  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <h1 className="text-center text-4xl font-bold mb-6">
        How GreenBin Foundation Makes an Impact
      </h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Together, we can transform waste into opportunity. Through sustainable
        waste management, eco-friendly commerce, and innovative recycling
        initiatives, we empower communities to protect the environment while
        creating economic value. Join us in making a lasting impact!
      </p>

      <div className="flex justify-center mb-8">
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 transition mr-3">
          Get Involved
        </button>
        <button className="border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition">
          Learn More
        </button>
      </div>

      <div className="flex mb-8">
        {/* Image on the left */}
        <div className="w-1/2 mr-4 flex  justify-center">
          <img
            src={business}
            alt="GreenBin Programs"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1  gap-6 w-1/2">
          <div className="bg-white shadow-lg rounded-3xl p-2 flex">
            <div className="mr-2 self-start text-green-600 text-3xl">
              <FaRecycle />
            </div>
            <div className="flex flex-col">
              <h5 className="text-md font-semibold mb-2">Recycling Programs</h5>
              <p className="text-gray-600 text-xs">
                We facilitate community-driven recycling initiatives, ensuring
                waste is transformed into valuable resources that benefit both
                people and the planet.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 flex">
            <div className="mr-4 self-start text-green-600 text-3xl">
              <FaLeaf />
            </div>
            <div className="flex flex-col">
              <h5 className="text-md font-semibold mb-2">
                Eco-Friendly Products
              </h5>
              <p className="text-gray-600 text-xs">
                By promoting sustainable products, we encourage responsible
                consumer habits and reduce environmental pollution.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 flex">
            <div className="mr-4 self-start text-green-600 text-3xl">
              <FaTree />
            </div>
            <div className="flex flex-col">
              <h5 className="text-md font-semibold mb-2">Carbon Offsetting</h5>
              <p className="text-gray-600 text-xs">
                Our programs help communities and businesses reduce their carbon
                footprint through reforestation and innovative offsetting
                strategies.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 flex">
            <div className="mr-4 self-start text-green-600 text-3xl">
              <FaTrash />
            </div>
            <div className="flex flex-col">
              <h5 className="text-md font-semibold mb-2">Waste Management</h5>
              <p className="text-gray-600 text-xs">
                We implement effective waste management strategies that minimize
                landfill waste and promote recycling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeMakeAnImpact;
