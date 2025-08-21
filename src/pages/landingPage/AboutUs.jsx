import React from "react";
import about from "../../assets/about.jpg";
import collaborationImg from "../../assets/green-technology.png";
import sustainabilityImg from "../../assets/sustainable-growth.png"; // Replace with actual path
import innovationImg from "../../assets/innovation.png"; // Replace with actual path
import empowermentImg from "../../assets/green-power.png"; // Replace with actual path
import integrityImg from "../../assets/planet-earth.png"; // Replace with actual path
import circularEconomyImg from "../../assets/circular-economy.png"; // Replace with actual path
const AboutUs = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      {/* Who We Are Section */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-green-600 uppercase tracking-wide">
          Who We Are
        </h2>
      </div>
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">
            About GreenBin Global Company
          </h1>
          <p className="mb-4">
            GreenBin Global Company is a pioneering force in climate research and technology, sustainable
            innovation, dedicated to transforming waste into wealth and
            fostering eco-friendly commerce. Through cutting-edge technology,
            strategic partnerships, and community-driven initiatives, we empower
            individuals and businesses to embrace sustainability and contribute
            to a healthier planet.
          </p>
          <p>
            Our mission is to revolutionize waste management, promote a green
            economy, and equip communities with the resources needed to drive
            impactful environmental change. By incentivizing sustainable
            practices and leveraging innovation, we are shaping a cleaner,
            greener, and more sustainable future for generations to come.
          </p>
          <div className="mt-4">
            <a
              href="/more-info"
              className="text-green-600 font-semibold hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <img
            src={about}
            alt="GreenBin Foundation"
            className="w-full h-80 rounded-2xl shadow-lg"
          />
        </div>
      </div>
      {/* Vision and Mission */}
      <div className="flex flex-col md:flex-row mt-5">
        <div className="md:w-1/2 mb-5 md:mb-0">
          <h2 className="text-2xl font-semibold mb-3 border-b-2 border-green-600 pb-2">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To be a global catalyst for sustainable innovation, empowering
            communities to transform waste into wealth, drive eco-friendly
            commerce, and create lasting environmental impact through technology
            and collaboration.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3 border-b-2 border-green-600 pb-2">
            Our Mission
          </h2>
          <p className="text-gray-700">
            To research, develop, and scale inclusive green solutions that
            empower individuals, institutions, and governments to act on
            climate, economy, and equity.
          </p>
        </div>
      </div>
      {/* Core Values */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center mb-5">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Sustainability",
              description:
                "We prioritize eco-friendly solutions that ensure long-term environmental and economic benefits.",
              icon: sustainabilityImg,
            },
            {
              title: "Innovation",
              description:
                "We harness technology and creative thinking to develop cutting-edge waste management solutions.",
              icon: innovationImg,
            },
            {
              title: "Empowerment",
              description:
                "We equip individuals and communities with the tools and knowledge to take meaningful action for the planet.",
              icon: empowermentImg,
            },
            {
              title: "Collaboration",
              description:
                "We believe in the power of partnerships to drive impactful environmental change.",
              icon: collaborationImg,
            },
            {
              title: "Integrity",
              description:
                "We are committed to transparency, accountability, and ethical sustainability practices.",
              icon: integrityImg,
            },
            {
              title: "Circular Economy",
              description:
                "We champion waste-to-resource initiatives, promoting a sustainable and regenerative economy.",
              icon: circularEconomyImg,
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-5 bg-white rounded-3xl shadow-sm text-center"
            >
              <img
                src={value.icon}
                alt={value.title}
                className="w-16 h-16 mb-2 mx-auto"
              />
              <h4 className="font-bold text-lg">
                {index + 1}. {value.title}
              </h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default AboutUs;
