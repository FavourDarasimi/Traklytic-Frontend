import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaCheck } from "react-icons/fa6";
import phone from "../../assets/phone.png";
import laptop from "../../assets/laptop.png";

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
      className="relative px-4 h-[calc(100vh-80px)] sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl  mx-auto flex items-center h-full overflow-hidden">
        <div className="grid md:grid-cols-2  items-center">
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
            className=" px-4 h-full sm:px-6 lg:px-8 bg-white hidden md:block"
          >
            <img
              src={phone}
              className="animate-bounce-soft w-[160%] max-w-none"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
