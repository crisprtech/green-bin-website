const DropdownItem = ({ to, children, icon: Icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-white-50 hover:text-green-700 transition-colors duration-150 space-x-2"
    >
      {Icon && <Icon className="w-4 h-4 text-green-500" />}
      <span>{children}</span>
    </Link>
  );
};

import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/partners.png";
const categories = [
  {
    name: "Engineering",
    blogs: [
      {
        title: "Green Structural Designs for Carbon Efficiency",
        description: "How modern civil engineering is shaping green cities.",
        author: "John Doe",
        timestamp: "2023-05-01",
        readMore: "/blog/green-structural-designs",
      },
      {
        title: "Solar Thermal Systems in Low-Cost Housing",
        description: "Affordable engineering for low-emission homes.",
        author: "Jane Smith",
        timestamp: "2023-04-15",
        readMore: "/blog/solar-thermal-systems",
      },
      {
        title: "Bio-Concrete for Waste Absorption",
        description: "Innovative concrete that heals and reduces emissions.",
        author: "Michael Johnson",
        timestamp: "2023-03-20",
        readMore: "/blog/bio-concrete",
      },
    ],
  },
  {
    name: "Computer Science",
    blogs: [
      {
        title: "AI Models for Predicting Climate Trends",
        description: "Using ML to forecast global sustainability patterns.",
        author: "Emily Brown",
        timestamp: "2023-06-10",
        readMore: "/blog/ai-climate-models",
      },
      {
        title: "Blockchain & Carbon Credit Tracking",
        description:
          "Decentralized ledgers for transparency in carbon markets.",
        author: "David Lee",
        timestamp: "2023-05-25",
        readMore: "/blog/blockchain-carbon-credits",
      },
      {
        title: "GreenBin's DAO Voting System",
        description:
          "Engineering fairness and security for environmental DAOs.",
        author: "Sarah Kim",
        timestamp: "2023-04-30",
        readMore: "/blog/greenbin-dao",
      },
    ],
  },
  {
    name: "Climate Science / Technology",
    blogs: [
      {
        title: "Carbon Farming in Semi-Arid Zones",
        description: "Science-backed farming for carbon capture.",
        author: "Alex Nguyen",
        timestamp: "2023-07-01",
        readMore: "/blog/carbon-farming",
      },
      {
        title: "Geoengineering: A Necessary Evil?",
        description: "Exploring controversial climate modification methods.",
        author: "Olivia Patel",
        timestamp: "2023-06-20",
        readMore: "/blog/geoengineering",
      },
      {
        title: "Carbon Sensors and Field Robotics",
        description: "Next-gen tools for tracking ecological restoration.",
        author: "Liam Gonzalez",
        timestamp: "2023-05-12",
        readMore: "/blog/carbon-sensors",
      },
    ],
  },
  {
    name: "Waste Management",
    blogs: [
      {
        title: "Smart Bins with IoT",
        description: "Revolutionizing waste collection with tech.",
        author: "Isabella Morales",
        timestamp: "2023-07-15",
        readMore: "/blog/smart-bins",
      },
      {
        title: "Turning Organic Waste to Fuel",
        description: "GreenBin's approach to circular waste economy.",
        author: "Ethan Flores",
        timestamp: "2023-06-30",
        readMore: "/blog/organic-waste-to-fuel",
      },
      {
        title: "Zero-Waste Cities Blueprint",
        description: "Urban planning for complete material reuse.",
        author: "Sophia Ramirez",
        timestamp: "2023-05-28",
        readMore: "/blog/zero-waste-cities",
      },
    ],
  },
  {
    name: "Carbon Credits",
    blogs: [
      {
        title: "Understanding Carbon Tokens",
        description: "A beginner's guide to GreenBin's digital carbon economy.",
        author: "Daniel Hernandez",
        timestamp: "2023-07-20",
        readMore: "/blog/carbon-tokens",
      },
      {
        title: "How to Earn GreenBin Credits as a Startup",
        description:
          "Onboarding, verification, and earning through innovation.",
        author: "Mia Vega",
        timestamp: "2023-06-12",
        readMore: "/blog/earn-greenbin-credits",
      },
      {
        title: "Offsetting for SMEs Made Easy",
        description:
          "Carbon credits simplified for micro and small businesses.",
        author: "Lucas Diaz",
        timestamp: "2023-05-22",
        readMore: "/blog/sme-carbon-offsetting",
      },
    ],
  },
  {
    name: "Green Finance (DeFi)",
    blogs: [
      {
        title: "DeFi Tools for Nature-Based Solutions",
        description:
          "Financing ecosystems restoration through smart contracts.",
        author: "Ava Sanchez",
        timestamp: "2023-07-25",
        readMore: "/blog/defi-nature-solutions",
      },
      {
        title: "GreenBond Token Use Cases",
        description: "Real-world finance meets regenerative economics.",
        author: "Noah Gutierrez",
        timestamp: "2023-06-18",
        readMore: "/blog/greenbound-token",
      },
      {
        title: "Green Staking Mechanisms Explained",
        description: "How GreenBin uses staking to drive climate impact.",
        author: "Isabella Garcia",
        timestamp: "2023-05-31",
        readMore: "/blog/green-staking",
      },
    ],
  },
  {
    name: "High Tech / Innovation",
    blogs: [
      {
        title: "Quantum Computing in Sustainability Modeling",
        description: "Future of climate scenario planning using qubits.",
        author: "Liam Ramirez",
        timestamp: "2023-07-30",
        readMore: "/blog/quantum-computing-sustainability",
      },
      {
        title: "Drones for Forest Carbon Measurement",
        description: "Scaling MRV using affordable tech.",
        author: "Sophia Moreno",
        timestamp: "2023-06-25",
        readMore: "/blog/drones-forest-carbon",
      },
      {
        title: "Augmented Reality for Green Education",
        description: "Immersive tools for awareness and learning.",
        author: "Mateo Jimenez",
        timestamp: "2023-06-01",
        readMore: "/blog/ar-green-education",
      },
    ],
  },
  {
    name: "Genetic Diversity (Bio-Verified Markets)",
    blogs: [
      {
        title: "Plant Genomics and Carbon Storage",
        description: "Biology-driven MRV systems in carbon markets.",
        author: "Emilia Castillo",
        timestamp: "2023-08-01",
        readMore: "/blog/plant-genomics-carbon",
      },
      {
        title: "Bio-Verified Farming Explained",
        description: "GreenBin's bio-certification approach for farms.",
        author: "Lucas Ortiz",
        timestamp: "2023-07-10",
        readMore: "/blog/bio-verified-farming",
      },
      {
        title: "Why Biodiversity is the New Gold",
        description: "The case for monetizing conservation efforts.",
        author: "Ava Reyes",
        timestamp: "2023-06-22",
        readMore: "/blog/biodiversity-new-gold",
      },
    ],
  },
];

const BlogScreen = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-90">
        <img
          src={logo}
          alt="GreenBin Blog Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 items-center  w-full bg-gradient-to-t from-white via-white/70 to-transparent py-10 px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-2">
            GreenBin Knowledge Hub
          </h1>
          <p className="text-gray-700 max-w-2xl">
            Explore deep-dive articles, technical blogs, and climate finance
            insights curated by GreenBin researchers and contributors.
          </p>
        </div>
      </div>

      {/* Blog Categories */}
      <div className="py-16 px-6 md:px-12 ">
        {categories.map((cat, index) => (
          <div key={index} className="mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
              {cat.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {cat.blogs.map((blog, i) => (
                <motion.div
                  key={i}
                  className="p-5 bg-green-50 border border-green-100 rounded-xl hover:shadow-md transition"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600">{blog.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-gray-500 text-sm">
                      {blog.author} | {blog.timestamp}
                    </p>
                    <a
                      href={blog.readMore}
                      className="text-green-600 font-medium hover:text-green-700"
                    >
                      Read more
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogScreen;
