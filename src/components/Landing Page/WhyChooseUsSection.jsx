import React from "react";
import { motion } from "framer-motion";
import { MousePointerClick, Clock3, PiggyBank } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: "Easy to Use",
      description:
        "Intuitive interface designed for everyone, regardless of financial expertise",
      icon: MousePointerClick,
    },
    {
      title: "Saves Time",
      description:
        "Automate expense tracking and stop managing spreadsheets manually",
      icon: Clock3,
    },
    {
      title: "Helps You Save More",
      description:
        "Identify spending patterns and unlock your savings potential",
      icon: PiggyBank,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16 space-y-2 sm:space-y-3 md:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl  font-semibold text-gray-900">
            Why Choose Tracklytic
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            The complete solution for personal finance management
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8  place-items-stretch">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="transition-all border border-gray-300 rounded-lg p-5 lg:p-8 hover:scale-105 duration-300 w-full"
            >
              <reason.icon className="text-green-600 w-10 sm:w-12 h-10 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
