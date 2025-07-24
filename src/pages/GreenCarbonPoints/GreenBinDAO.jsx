import React from "react";
import {
  FaUsersCog,
f FaHandshake,
  FaCoins,
  FaVoteYea,
  FaFileSignature,
} from "react-icons/fa";

const steps = [
  {
    title: "Understand the DAO",
    description:
      "Explore GreenBin’s decentralized governance and how your voice helps shape climate innovation.",
    icon: <FaUsersCog size={24} className="text-green-600" />,
  },
  {
    title: "Create GreenBin Account",
    description:
      "Sign up or log in to your GreenBin account to access DAO features and your user dashboard.",
    icon: <FaFileSignature size={24} className="text-green-600" />,
  },
  {
    title: "Pay DAO Membership Fee (KES 5,000)",
    description:
      "Submit a one-time fee to unlock governance access, rewards eligibility, and DAO resource pools.",
    icon: <FaCoins size={24} className="text-green-600" />,
  },
  {
    title: "Get Verified",
    description:
      "Upload KYC documents to finalize your identity and voting rights in the DAO ecosystem.",
    icon: <FaHandshake size={24} className="text-green-600" />,
  },
  {
    title: "Join Governance & Vote",
    description:
      "Propose, vote, and co-govern carbon standards, green projects, and innovation pilots.",
    icon: <FaVoteYea size={24} className="text-green-600" />,
  },
];

const GreenBinDAO = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-16 px-6">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Welcome to the GreenBin DAO
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          The GreenBin DAO is a decentralized autonomous organization driving
          equitable climate governance. Join to co-create green standards, vote
          on projects, and share in digital carbon wealth powered by blockchain
          and community.
        </p>
      </div>

      {/* Steps to Join DAO */}
      <div className="max-w-5xl mx-auto space-y-12 relative border-l-4 border-green-600 pl-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Icon */}
            <div className="absolute -left-8 top-1">
              <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-green-800">{step.title}</h3>
            <p className="text-gray-600 mt-1">{step.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Ready to become a DAO member?
        </h2>
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
          Start DAO Onboarding (KES 5,000)
        </button>
      </div>
    </div>
  );
};

export default GreenBinDAO;
