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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Powerful Features for Smart Money Management
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to take control of your finances is built right
            in
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
                className="group bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <Icon className="text-green-600 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
