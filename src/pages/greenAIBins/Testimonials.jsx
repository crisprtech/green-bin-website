import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      project: "EcoSort",
      feedback: "This bin has changed my recycling habits!",
    },
    {
      name: "Jane Smith",
      project: "GreenPoints",
      feedback: "I love earning points for being eco-friendly!",
    },
    {
      name: "Carlos Mendes",
      project: "RecycleHub",
      feedback: "A game-changer for waste management in my neighborhood!",
    },
    {
      name: "Fatima Khalid",
      project: "Waste2Wealth",
      feedback: "GreenBin makes recycling fun and rewarding!",
    },
    {
      name: "Liam O'Connor",
      project: "SmartBin",
      feedback: "I never knew recycling could be this easy!",
    },
  ];

  return (
    <div className="my-20 container mx-auto">
      <h2 className="text-center mb-8 text-green-600 text-3xl font-bold">
        What Our Users Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2 lg:w-1/3"
          >
            <h3 className="font-bold text-blue-600 text-xl">
              {testimonial.name}
            </h3>
            <h4 className="text-gray-500 mb-4">{testimonial.project}</h4>
            <p className="italic text-gray-700">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
