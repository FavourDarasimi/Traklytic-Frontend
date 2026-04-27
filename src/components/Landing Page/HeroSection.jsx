import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaCheck } from "react-icons/fa6";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative px-4 h-screen sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl  xl:max-w-[1500px] mx-auto flex items-center h-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
                Take Control of Your Money{" "}
                <span className="text-green-600">Without Stress</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Track expenses, build budgets, and grow smarter financial habits
                in one place. Tracklytic makes personal finance simple, clear,
                and achievable.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/auth/">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center gap-2 w-full sm:w-auto justify-center">
                  Get Started Free
                  <FaArrowRight size={20} />
                </button>
              </Link>
              <button className="border-2 border-gray-200 hover:border-green-600 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all bg-white hover:bg-green-50 flex items-center gap-2 w-full sm:w-auto justify-center">
                <FaPlay size={18} />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              variants={itemVariants}
              className="space-y-2 border-t border-gray-100 pt-6"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <FaCheck size={20} className="text-green-600" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaCheck size={20} className="text-green-600" />
                <span className="font-medium">Trusted by 10,000+ users</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Dashboard Mockup */}
          <motion.div
            variants={itemVariants}
            className="hidden md:block relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border border-gray-200">
              {/* Dashboard Header */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-semibold text-gray-700">
                    Monthly Overview
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Income
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    $4,250
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    Expenses
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-1">
                    $1,820
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 shadow-sm border border-green-100">
                  <div className="text-xs text-green-700 uppercase tracking-wide font-semibold">
                    Savings
                  </div>
                  <div className="text-2xl font-bold text-green-600 mt-1">
                    $2,430
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-end gap-1 h-24 justify-center">
                  {[40, 60, 45, 70, 55, 80, 50].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-green-600 rounded-t transition-all hover:opacity-80"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
