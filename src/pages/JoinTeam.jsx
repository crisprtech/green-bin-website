// components/JoinOurTeam.jsx
import { motion } from "framer-motion";
import teamImg from "../../src/assets/partners.png"; // adjust path based on your structure

const benefits = [
  "Competitive salaries",
  "30 days of paid vacation",
  "Benefits for you and your family",
  "Flexible work hours",
  "Annual team retreats",
  "A great work environment",
];

export default function JoinOurTeam() {
  return (
    <section className="bg-white text-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={teamImg}
            alt="Join our team"
            className="rounded-2xl shadow-xs w-full"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#1E293B] rounded-4xl p-8 shadow-xs"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Join our team
          </h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in accusamus quisquam.
          </p>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-3">
                <svg
                  className="w-6 h-6 text-green-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-200">{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-md text-white font-medium"
          >
            See our job postings
          </a>
        </motion.div>
      </div>
    </section>
  );
}
