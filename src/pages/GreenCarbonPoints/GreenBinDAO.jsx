import React from "react";
import { motion } from "framer-motion";

const GreenBinDAO = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex mt-10 flex-col items-center justify-center min-h-screen container mx-auto py-12 px-4">
      <motion.div
        className=" bg-white shadow-lg rounded-lg p-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-4xl font-bold text-green-700 mb-6 text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Welcome to GreenBin DAO
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-4 text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join us in revolutionizing sustainable practices through decentralized
          decision-making.
        </motion.p>
        <motion.p
          className="text-gray-600 mb-6 text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          At GreenBin, we believe in empowering our community of users and
          partners to actively participate in the direction and initiatives of
          our organization. Together, we can make impactful decisions that
          benefit the environment and promote sustainability.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mb-4"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          How It Works
        </motion.h2>
        <div className="space-y-4">
          {["Community Proposals", "Voting System", "Implementation"].map(
            (item, index) => (
              <motion.div
                key={item}
                className="bg-gray-50 p-4 rounded-lg shadow-md"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <h3 className="font-bold text-lg text-green-700">{item}</h3>
                <p className="text-gray-600">
                  {index === 0 &&
                    "Members can submit proposals for new projects, initiatives, or changes to existing practices."}
                  {index === 1 &&
                    "Each member has a vote, allowing everyone to have a say in important decisions that affect the community."}
                  {index === 2 &&
                    "Approved proposals are implemented collaboratively, ensuring transparency and accountability."}
                </p>
              </motion.div>
            ),
          )}
        </div>

        <motion.h2
          className="text-2xl font-semibold text-green-600 mt-8 mb-4"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Get Involved
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-4 text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          As a member of GreenBin DAO, you can:
        </motion.p>
        <motion.ul
          className="list-disc list-inside text-gray-600 mb-6"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <li>Participate in community discussions and decision-making.</li>
          <li>
            Submit and vote on proposals that impact our sustainability efforts.
          </li>
          <li>
            Collaborate with partners and other members to drive innovative
            solutions.
          </li>
        </motion.ul>

        <motion.div
          className="text-center"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <button className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Join Us Today
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GreenBinDAO;
