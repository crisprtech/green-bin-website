import React from "react";
import { motion } from "framer-motion";
import {
  Bitcoin,
  CreditCard,
  Wallet,
  Phone,
  Banknote,
  Mail,
} from "lucide-react";

const paymentMethods = [
  {
    icon: Phone,
    title: "M-Pesa (Kenya)",
    details: "Paybill: 404040 | Account: GREENBIN",
  },
  {
    icon: CreditCard,
    title: "Debit / Credit Card",
    details: "Secure card processing via Stripe gateway.",
  },
  {
    icon: Wallet,
    title: "PayPal",
    details: "donate@greenbin.org",
  },
  {
    icon: Bitcoin,
    title: "Bitcoin (BTC)",
    details: "Wallet: bc1q4s...09k3x (view QR)",
  },
  {
    icon: Bitcoin,
    title: "Ethereum (ETH)",
    details: "0xabc...456def (ERC20 Network)",
  },
  {
    icon: Bitcoin,
    title: "USDT (Tether)",
    details: "USDT Wallet: 0xusdtgreenbin (ERC20/BEP20)",
  },
];

const DonatePage = () => {
  return (
    <div className="bg-white min-h-screen mt-10">
      {/* Hero Section */}
      <div className="relative  pt-24 pb-12 px-6 text-center">
        <motion.h1
          className="text-5xl font-extrabold text-green-700"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Support GreenBin’s Climate Mission
        </motion.h1>
        <motion.p
          className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Every donation powers carbon research, DAO governance, climate
          education, and green innovations across Africa and beyond.
        </motion.p>
      </div>

      {/* Payment Methods */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={index}
            className="bg-white border-l-4 border-green-600 shadow-md rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4 mb-3">
              <method.icon className="text-green-600" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">
                {method.title}
              </h3>
            </div>
            <p className="text-gray-600">{method.details}</p>
          </motion.div>
        ))}
      </div>

      {/* Impact Testimonial */}
      <div className="max-w-4xl mx-auto mt-12 bg-green-100 px-6 py-10 rounded-xl shadow-inner">
        <p className="text-xl italic text-green-900 text-center font-medium">
          “Your support directly contributes to our carbon marketplace, DAO
          onboarding, GreenBin scholarships, and technology transfer programs
          like Idea Safari. Let’s innovate for a sustainable future.”
        </p>
      </div>

      {/* Contact Info */}
      <div className="mt-16 text-center px-6">
        <h2 className="text-2xl font-bold text-green-700">Need Assistance?</h2>
        <p className="text-gray-700 mt-2">
          Reach out via{" "}
          <a
            href="mailto:support@greenbin.org"
            className="text-green-600 underline"
          >
            support@greenbin.org
          </a>{" "}
          or join our{" "}
          <a href="/contact" className="text-green-600 underline">
            community support
          </a>{" "}
          space.
        </p>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-16 pb-16">
        <a
          href="/"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default DonatePage;
