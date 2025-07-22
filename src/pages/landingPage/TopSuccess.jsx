
import React from 'react';

const HowWeMakeAnImpact = () => {
  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      <h1 className="text-center text-4xl font-bold mb-6">How GreenBin Foundation Makes an Impact</h1>
      <p className="text-center text-lg text-gray-700 mb-8">
        Together, we can transform waste into opportunity. Through sustainable waste management, 
        eco-friendly commerce, and innovative recycling initiatives, we empower communities to protect 
        the environment while creating economic value. Join us in making a lasting impact!
      </p>
      <div className="flex justify-center mb-8">
        <button className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-500 transition mr-3">Get Involved</button>
        <button className="border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition">Learn More</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/100" alt="Recycling Programs" className="mb-3 mx-auto" />
          <h5 className="text-xl font-semibold mb-2">Recycling Programs</h5>
          <p className="text-gray-600">
            We facilitate community-driven recycling initiatives, ensuring waste is transformed into 
            valuable resources that benefit both people and the planet.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/100" alt="Eco-Friendly Products" className="mb-3 mx-auto" />
          <h5 className="text-xl font-semibold mb-2">Eco-Friendly Products</h5>
          <p className="text-gray-600">
            By promoting sustainable products, we encourage responsible consumer habits and reduce 
            environmental pollution.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/100" alt="Green Education" className="mb-3 mx-auto" />
          <h5 className="text-xl font-semibold mb-2">Green Education</h5>
          <p className="text-gray-600">
            We educate individuals on sustainable practices, empowering them to take action for a 
            cleaner, greener future.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
          <img src="https://via.placeholder.com/100" alt="Carbon Offsetting" className="mb-3 mx-auto" />
          <h5 className="text-xl font-semibold mb-2">Carbon Offsetting</h5>
          <p className="text-gray-600">
            Our programs help communities and businesses reduce their carbon footprint through 
            reforestation and innovative offsetting strategies.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Volunteer With Us</h2>
          <p className="text-gray-600">
            Be part of the movement! Join our team and help educate communities, organize cleanup 
            events, and drive impactful change in sustainability.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Turn Waste into Wealth</h2>
          <p className="text-gray-600">
            We empower individuals to turn recyclable waste into a source of income by connecting 
            them with eco-conscious buyers and organizations.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Support Green Commerce</h2>
          <p className="text-gray-600">
            By purchasing and promoting eco-friendly products, you contribute to a circular economy 
            that benefits the environment and local communities.
          </p>
        </div>
      </div>
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">Every piece of waste we recycle is a step toward a cleaner planet.</h2>
      </div>
    </div>
  );
};

export default HowWeMakeAnImpact;

