import React from "react";

const HowItWorks = () => {
  const features = [
    {
      title: "🗑️ AI-Powered Waste Sorting",
      description:
        "Equipped with smart sensors, the bin automatically detects, sorts, and categorizes waste into recyclable and non-recyclable materials.",
    },
    {
      title: "💰 Green Carbon Points (GCP) Rewards",
      description:
        "Users earn GCPs every time they dispose of waste correctly. GCPs can be redeemed for discounts, donations, or converted into cash.",
    },
    {
      title: "📡 GPS Tracking & Remote Monitoring",
      description:
        "Each bin has an integrated GPS system, allowing remote monitoring of waste levels, location tracking, and optimized collection schedules.",
    },
    {
      title: "🗣️ Interactive Voice Assistance",
      description:
        "The bin provides voice guidance to users, ensuring they dispose of waste correctly. It can also educate users on recycling benefits.",
    },
    {
      title: "📺 Digital Advertising Screens",
      description:
        "Bins feature high-definition screens that display eco-friendly ads, educational messages, and promotions from sponsors.",
    },
    {
      title: "💳 Flexible Payment Options",
      description:
        "Users can rent a bin through a leasing plan (Basic, Standard, or Premium) or purchase it outright. Payments can be made using Green Carbon Points.",
    },
  ];

  return (
    <div className="py-20 container mx-auto">
      <h2 className="text-center text-green-600 font-bold text-3xl mb-8">
        How Smart AI Bins Work
      </h2>
      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white shadow-md rounded-lg p-6 h-full">
              <h3 className="text-blue-600 font-bold text-xl mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition">
          Get Your AI Bin Today
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
