import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Easy to Use",
      description:
        "Intuitive interface designed for everyone, regardless of financial expertise",
    },
    {
      title: "Saves Time",
      description:
        "Automate expense tracking and stop managing spreadsheets manually",
    },
    {
      title: "Helps You Save More",
      description:
        "Identify spending patterns and unlock your savings potential",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Tracklytic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The complete solution for personal finance management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-10 shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="text-5xl font-bold text-green-100 mb-4">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
