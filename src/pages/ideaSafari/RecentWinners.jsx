
const RecentAmbassadors = () => {
  const ambassadors = [
    {
      name: "Jane Mwangi",
      project: "Eco-Friendly Smart Packaging",
      country: "Germany",
      testimonial:
        "Idea Safari opened doors for me. Learning from Germany’s top green startups gave me the tools to refine my idea and secure funding!",
    },
    {
      name: "Paul Olubakaya",
      project: "Solar-Powered Irrigation System",
      country: "Netherlands",
      testimonial:
        "My journey to the Netherlands showed me how green tech can transform agriculture. Now, I’m implementing these solutions in Kenya!",
    },
    {
      name: "Fatima Hassan",
      project: "Biodegradable Fashion",
      country: "Japan",
      testimonial:
        "Idea Safari helped me explore sustainable textile production in Japan. I’m now launching my eco-friendly fashion brand!",
    },
    {
      name: "Kevin Otieno",
      project: "Recyclable Battery Technology",
      country: "Sweden",
      testimonial:
        "Sweden’s innovations in clean energy inspired my startup. Thanks to this experience, I’ve partnered with investors to scale up.",
    },
    {
      name: "Mary Mwende",
      project: "Recyclable Waste Technology",
      country: "Canada",
      testimonial:
        "Canada’s innovations in clean energy inspired my startup. Thanks to this experience, I’ve partnered with investors to scale up.",
    },
  ];

  return (
    <div className="my-10 max-w-6xl mx-auto px-4">
      <h2 className="text-center text-3xl font-bold text-green-600 mb-6">
        Recent Idea Safari Ambassadors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ambassadors.map((ambassador, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">{ambassador.name}</h3>
              <h4 className="text-lg text-gray-500 mb-2">{ambassador.project}</h4>
              <p className="text-gray-700">
                <strong>Country Visited:</strong> {ambassador.country}
              </p>
              <p className="mt-4 text-gray-600 italic">"{ambassador.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentAmbassadors;

