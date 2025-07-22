import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Introduction Section */}
      <div className="mb-8">
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            🌿 Welcome to Green Carbon Points (GCPs)!
          </h2>
          <p className="text-gray-700">
            Green Carbon Points (GCPs) empower individuals to participate in the
            green circular economy. Earn GCPs by recycling, using renewable
            energy, and supporting eco-friendly initiatives. Redeem GCPs for
            sustainable products, donate to green causes, or exchange them for
            exclusive rewards!
          </p>
        </div>
      </div>

      {/* Green Bin & Circular Economy */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">
            ♻️ The Role of Green Bin
          </h4>
          <p className="text-gray-700 mb-4">
            Green Bin is at the heart of the green circular economy. It allows
            users to recycle waste efficiently, reducing environmental pollution
            while earning valuable GCPs. Get started by depositing recyclables
            and watching your impact grow!
          </p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">
            🌍 Circular Economy Model
          </h4>
          <p className="text-gray-700 mb-4">
            GCPs promote a circular economy where waste is minimized, and
            resources are reused. Earn EcoPerks as you contribute to
            sustainability and become a part of the green movement!
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Join the Movement
          </button>
        </div>
      </div>

      {/* How to Earn & Redeem GCPs */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">💰 How to Earn GCPs</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Recycle waste at Green Bin stations</li>
            <li>Use solar energy or eco-friendly transport</li>
            <li>Participate in community clean-up drives</li>
            <li>Engage in carbon offset programs</li>
          </ul>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">🎁 How to Use GCPs</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Buy eco-friendly products & services</li>
            <li>Donate to environmental initiatives</li>
            <li>Exchange GCPs for exclusive EcoPerks</li>
            <li>Invest in green projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
