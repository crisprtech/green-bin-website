import React from "react";
import {
  FaRegUser,
  FaFileAlt,
  FaCheckCircle,
  FaGlobeAfrica,
  FaLock,
} from "react-icons/fa";

const steps = [
  {
    title: "Create GreenBin Account",
    description:
      "Sign up using your email and organization details to access your GreenBin dashboard.",
    icon: <FaRegUser size={24} className="text-green-600" />,
  },
  {
    title: "Submit Business Profile",
    description:
      "Provide startup or enterprise information including sector, carbon focus area, and sustainability goals.",
    icon: <FaFileAlt size={24} className="text-green-600" />,
  },
  {
    title: "Verification & KYC",
    description:
      "GreenBin verifies your identity, KYC documents, and validates your climate impact profile.",
    icon: <FaCheckCircle size={24} className="text-green-600" />,
  },
  {
    title: "DAO Access & Carbon Wallet",
    description:
      "Gain access to GreenBin DAO, voting rights, and your digital carbon asset wallet.",
    icon: <FaGlobeAfrica size={24} className="text-green-600" />,
  },
  {
    title: "Secure & Trade",
    description:
      "Start trading carbon credits, issuing green bonds, and accessing rewards securely.",
    icon: <FaLock size={24} className="text-green-600" />,
  },
];

const OnboardingSteps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12 px-6">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Onboarding & Verification Process
        </h1>
        <p className="text-gray-700 text-lg">
          Seamlessly register your startup or organization into the GreenBin
          Carbon Registry and start accessing digital climate assets.
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="max-w-5xl mx-auto space-y-10 relative border-l-4 border-green-600 pl-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Dot and Line */}
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
          Ready to join the carbon economy?
        </h2>
        <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
          Start Your Onboarding
        </button>
      </div>
    </div>
  );
};

export default OnboardingSteps;
