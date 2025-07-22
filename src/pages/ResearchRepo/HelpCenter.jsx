
import React, { useState } from "react";
import { motion } from "framer-motion";

// FAQ Data
const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      { question: "How do I register for the foundation?", answer: "You can register by signing up on our website or mobile app." },
      { question: "Who can join the research labs?", answer: "Anyone passionate about innovation and sustainability can apply." },
    ],
  },
  {
    title: "Research Labs",
    faqs: [
      { question: "Where are the research labs located?", answer: "We have labs in Nairobi, Mombasa, Kisumu, and more." },
      { question: "Can I bring my own project to the lab?", answer: "Yes! We encourage innovation within our labs." },
    ],
  },
  {
    title: "Squads & Innovation Programs",
    faqs: [
      { question: "How do squads work?", answer: "Squads are collaborative teams working on research and sustainability projects." },
      { question: "Are there mentorship programs?", answer: "Yes! We provide mentors to help squads grow their innovations." },
    ],
  },
  {
    title: "Green Carbon Points (GCPs) & Rewards",
    faqs: [
      { question: "How do I earn GCPs?", answer: "You earn GCPs by participating in activities like research, waste management, and innovation. The GCPs later earns you EcoPerks." },
      { question: "How do I withdraw GCPs?", answer: "You can withdraw GCPs through the GreenBin App, bank transfers within the App too, or donate them to eco-friendly projects." },
    ],
  },
  {
    title: "Technical Support",
    faqs: [
      { question: "I forgot my password, what do I do?", answer: "Click 'Forgot Password' on the login page to reset it." },
      { question: "The app is not working correctly, who can I contact?", answer: "You can reach out to our support team through the contact form below." },
    ],
  },
];

// Help Center Component
const HelpCenter = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent! Our team will get back to you soon.`);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
      <div className="container mx-auto py-5">
        <h2 className="text-center mb-4 text-3xl font-bold text-primary">Help Center</h2>

        <div className="mx-auto max-w-3xl">
          {/* FAQ Section */}
          <div className="bg-white shadow-md rounded-lg p-5">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-green-600">{category.title}</h3>
                <div className="border-l-2 border-gray-200 pl-4">
                  {category.faqs.map((faq, index) => (
                    <div key={index} className="mb-2">
                      <h4 className="font-medium text-gray-700">{faq.question}</h4>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Form */}
        <div className="mx-auto max-w-3xl mt-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-center text-xl font-semibold text-green-600 mb-3">Still need help? Contact Support</h4>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpCenter;

