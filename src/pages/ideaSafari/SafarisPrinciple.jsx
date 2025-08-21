const HowItWorks = () => {
  const steps = [
    {
      title: "Submit Your Idea",
      description:
        "Describe your innovative vision and how it contributes to sustainability, green technology, or eco-friendly solutions.",
    },
    {
      title: "Selection & Invitation",
      description:
        "Our expert panel reviews applications and selects high-potential innovators to embark on an exclusive learning journey abroad.",
    },
    {
      title: "Global Exposure & Training",
      description:
        "Winners travel internationally to learn from industry leaders, attend workshops, and experience real-world applications of their ideas.",
    },
    {
      title: "Mentorship & Funding",
      description:
        "Upon return, participants receive tailored mentorship, access to incubators, and financial grants to refine and launch their startups.",
    },
    {
      title: "Demo Day & Implementation",
      description:
        "Innovators pitch their projects to potential investors, partners, and stakeholders, gaining critical support for large-scale impact.",
    },
  ];

  return (
    <div className="my-10 px-4 container mx-auto">
      <h2 className="text-center text-3xl font-bold text-green-600 mb-8">
        How Idea Safari Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-6"
          >
            <h3 className="text-xl font-semibold text-green-500 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-700">{step.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm text-gray-500">Step {index + 1}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
