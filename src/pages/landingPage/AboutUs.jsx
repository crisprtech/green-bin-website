import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About GreenBin Foundation</h1>
          <p className="mb-4">
            GreenBin Foundation is a pioneering force in sustainable innovation,
            dedicated to transforming waste into wealth and fostering
            eco-friendly commerce. Through cutting-edge technology, strategic
            partnerships, and community-driven initiatives, we empower
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
        </div>
        <div className="md:w-1/2 mt-5 md:mt-0">
          <img
            src="greenbin-about.jpg"
            alt="GreenBin Foundation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Vision and Mission */}
      <div className="flex flex-col md:flex-row mt-5">
        <div className="md:w-1/2 mb-5 md:mb-0">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            To be a global catalyst for sustainable innovation, empowering
            communities to transform waste into wealth, drive eco-friendly
            commerce, and create lasting environmental impact through technology
            and collaboration.
          </p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
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
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-lg">1. Sustainability</h4>
            <p>
              We prioritize eco-friendly solutions that ensure long-term
              environmental and economic benefits.
            </p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-lg">2. Innovation</h4>
            <p>
              We harness technology and creative thinking to develop
              cutting-edge waste management solutions.
            </p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-lg">3. Empowerment</h4>
            <p>
              We equip individuals and communities with the tools and knowledge
              to take meaningful action for the planet.
            </p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-lg">4. Collaboration</h4>
            <p>
              We believe in the power of partnerships to drive impactful
              environmental change.
            </p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-lg">5. Integrity</h4>
            <p>
              We are committed to transparency, accountability, and ethical
              sustainability practices.
            </p>
          </div>
          <div className="p-5 bg-white rounded-lg shadow-md">
            <h4 className="font-bold text-lg">6. Circular Economy</h4>
            <p>
              We champion waste-to-resource initiatives, promoting a sustainable
              and regenerative economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
