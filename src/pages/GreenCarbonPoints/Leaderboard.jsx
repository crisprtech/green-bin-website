import React from "react";
import {
  FaLeaf,
  FaTree,
  FaRecycle,
  FaSolarPanel,
  FaSeedling,
  FaGlobe,
} from "react-icons/fa";

const LeaderBoard = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Get Access to GreenBin Assets & Green Bonds
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Invest in the future of sustainability. Access digital carbon assets,
          participate in decentralized climate finance, and support high-impact
          green bonds through the GreenBin ecosystem.
        </p>
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition">
          Request Access Now
        </button>
      </div>

      {/* Assets Section */}
      <div className=" mb-20">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          🪙 Digital Assets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Carbon Credit Tokens (CCT)",
              icon: <FaLeaf className="text-green-500" />,
            },
            {
              name: "DAO Participation Tokens (GPT)",
              icon: <FaGlobe className="text-green-500" />,
            },
            {
              name: "Project Revenue Sharing Units",
              icon: <FaRecycle className="text-green-500" />,
            },
            {
              name: "NFT Project Certifications",
              icon: <FaSeedling className="text-green-500" />,
            },
            {
              name: "Idea Safari Travel Credits",
              icon: <FaTree className="text-green-500" />,
            },
            {
              name: "Climate Game Rewards",
              icon: <FaSolarPanel className="text-green-500" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-3 text-xl">
                {item.icon}
                <span className="ml-3 font-semibold">{item.name}</span>
              </div>
              <p className="text-sm text-gray-600">
                Access this asset via DAO engagement, token purchases, project
                participation, or performance-based rewards.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Green Bonds Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-green-700 mb-6">
          💚 Green Bonds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Reforestation Bonds",
            "Waste Management Bonds",
            "Renewable Energy Microgrid Bonds",
            "Community Compost Bonds",
            "Biochar Deployment Bonds",
            "Climate Education Bonds",
            "Smart Bin Infrastructure Bonds",
          ].map((bond, i) => (
            <div
              key={i}
              className="p-5 bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-green-800">{bond}</h4>
              <p className="text-sm text-gray-600 mt-2">
                Funded via carbon-backed mechanisms, these bonds enable
                scalable, verifiable environmental impact.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          Want to onboard your startup or project?
        </h3>
        <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
          Join GreenBin Now
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
