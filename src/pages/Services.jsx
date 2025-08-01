import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Landmark,
  Bitcoin,
  Globe,
  Lightbulb,
  GraduationCap,
  Gamepad2,
  FlaskConical,
  Users,
  Banknote,
  CalendarDays,
} from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Carbon Registry & Market Access",
    description:
      "Register your business in GreenBin’s verified carbon registry. Access local and global carbon markets through a transparent digital system.",
  },
  {
    icon: Landmark,
    title: "GreenBin DAO Participation",
    description:
      "Join the decentralized GreenBin DAO to propose, vote, and govern community climate decisions. Your voice matters in shaping a green economy.",
  },
  {
    icon: Bitcoin,
    title: "GreenBin Digital Currency & Trading",
    description:
      "Trade carbon credits using GreenBin Tokens in a secure, blockchain-backed marketplace. Tokenize your green assets and offset emissions easily.",
  },
  {
    icon: Globe,
    title: "Idea Safari – Global Innovation Exchange",
    description:
      "Top applicants travel abroad, learn from cutting-edge climate ecosystems, and return to implement impactful ideas locally.",
  },
  {
    icon: GraduationCap,
    title: "Innovation Learning & Scholarships",
    description:
      "Access advanced learning in climate intelligence, AI, quantum computing, and waste-to-energy solutions through fellowships and scholarships.",
  },
  {
    icon: Gamepad2,
    title: "Climate Games & Green Engagement",
    description:
      "Play to impact: Engage in gamified climate challenges, earn GreenBin tokens, and compete globally to accelerate awareness and solutions.",
  },
  {
    icon: FlaskConical,
    title: "Research Labs & Ecosystem",
    description:
      "Join or start a GreenBin research lab focused on quantum computing, bio-verified markets, waste upcycling, or climate tech R&D.",
  },
  {
    icon: Users,
    title: "Community Growth & DAO Ecosystem",
    description:
      "With 10,000+ engaged members, GreenBin supports communities to co-create climate policy, innovation pathways, and funding pipelines.",
  },
  {
    icon: Banknote,
    title: "Green Finance, Bonds & DeFi",
    description:
      "Access green bonds, DeFi staking, and tokenized carbon assets to finance and scale your climate initiatives.",
  },
  {
    icon: CalendarDays,
    title: "Events, Bootcamps & Fellowships",
    description:
      "Join our hackathons, bootcamps, research fellowships, and community events designed to incubate the next generation of green leaders.",
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="text-center px-6 py-12">
        <h1 className="text-5xl font-extrabold text-green-700">
          Our Services at GreenBin
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-gray-700 text-lg">
          GreenBin Research is building the infrastructure for a carbon-neutral
          future— through innovation, decentralized governance, education, and
          inclusive finance.
        </p>
      </div>

      {/* Services Grid */}
      <div className=" px-6 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-green-600 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <service.icon className="text-green-600" size={32} />
              <h3 className="text-xl font-bold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20 px-4">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Ready to Be Part of the GreenBin Ecosystem?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you're a startup, student, government agency, or climate
          activist— there’s a GreenBin pathway waiting for you.
        </p>
        <a
          href="/authentication/LoginPage"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Get Started Now
        </a>
      </div>
    </div>
  );
};

export default OurServices;
