
import React from "react";

const ForeignPartners = () => {
  const partners = [
    {
      company: "EcoInnovate Ltd",
      ceo: "Dr. Lars Petersen",
      country: "Denmark",
      testimonial:
        "Partnering with GreenBin Foundation has been an enriching experience. Together, we are advancing sustainable waste management solutions across Africa.",
    },
    {
      company: "GreenFuture Tech",
      ceo: "Sophia Martinez",
      country: "Canada",
      testimonial:
        "GreenBin’s commitment to environmental innovation aligns perfectly with our mission. We look forward to scaling eco-friendly technology together.",
    },
    {
      company: "SolarGreen Energy",
      ceo: "Mohammed Al-Farsi",
      country: "UAE",
      testimonial:
        "Working with GreenBin has been revolutionary! Their grassroots approach complements our solar energy projects, creating real impact.",
    },
    {
      company: "BioCycle Solutions",
      ceo: "Emily Watson",
      country: "United Kingdom",
      testimonial:
        "GreenBin Foundation is a visionary partner in circular economy initiatives. We are proud to support their sustainability projects.",
    },
  ];

  return (
    <div className="my-10 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Our Foreign Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-600">{partner.company}</h3>
              <h4 className="text-md text-gray-500 mb-2">CEO: {partner.ceo}</h4>
              <p className="text-sm text-gray-700">
                <strong>Country:</strong> {partner.country}
              </p>
              <p className="mt-4 text-gray-600 italic border-l-4 border-green-500 pl-4">
                "{partner.testimonial}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeignPartners;

