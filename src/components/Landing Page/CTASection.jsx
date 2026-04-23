import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Start Managing Your Money Smarter Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600"
        >
          Join thousands of users who have taken control of their finances with
          Tracklytic
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/auth/">
            <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center gap-2">
              Get Started Free
              <FaArrowRight size={20} />
            </button>
          </Link>
        </motion.div>

        <div className="flex justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <FaCheck size={20} className="text-green-600" />
            <span className="font-medium">No credit card</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck size={20} className="text-green-600" />
            <span className="font-medium">Free forever</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
