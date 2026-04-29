import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaChartPie,
  FaBell,
  FaLock,
  FaCamera,
} from "react-icons/fa6";

export default function LandingPageFeatures() {
  const features = [
    {
      icon: FaChartLine,
      title: "Expense Tracking",
      description: "Categorize and monitor every transaction automatically",
    },
    {
      icon: FaChartPie,
      title: "Smart Budgets",
      description: "Set budgets and get real-time alerts when you overspend",
    },
    {
      icon: FaChartLine,
      title: "Reports & Analytics",
      description: "Visualize spending patterns with detailed reports",
    },
    {
      icon: FaCamera,
      title: "Receipt Scanner",
      description: "Scan receipts with AI-powered OCR technology",
    },
    {
      icon: FaBell,
      title: "Bill Reminders",
      description: "Never miss a payment with smart notifications",
    },
    {
      icon: FaLock,
      title: "Secure & Private",
      description: "Bank-level encryption for all your financial data",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="features"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-12 sm:mb-14 md:mb-16 space-y-3 sm:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl  font-semibold text-gray-900">
            Features for Smart Money Management
          </h2>
          <div className="border-t-4 border-green-600 w-[15%] sm:w-[12%] md:w-[10%]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 place-items-center">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group hover:bg-green-600 bg-white border border-gray-200 rounded-lg p-5 sm:p-6 md:p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center w-full"
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 border border-gray-300 rounded-sm flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                  <Icon className="text-black w-5 sm:w-6 h-5 sm:h-6 group-hover:text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-white text-center">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
