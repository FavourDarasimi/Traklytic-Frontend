import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export default function LandingPageSocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <motion.div whileHover={{ y: -5 }} className="space-y-2">
            <div className="text-4xl font-bold text-green-600">10,000+</div>
            <div className="text-gray-600 font-medium">Active Users</div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="space-y-2">
            <div className="text-4xl font-bold text-green-600">4.9</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="space-y-2">
            <div className="text-4xl font-bold text-green-600">$2.3M+</div>
            <div className="text-gray-600 font-medium">Tracked Annually</div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="space-y-2">
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={24}
                  className="text-green-600 fill-green-600"
                />
              ))}
            </div>
            <div className="text-gray-600 font-medium">Trusted by many</div>
          </motion.div>
        </div>

        {/* Customer Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {["Students", "Freelancers", "Professionals", "Families"].map(
            (type) => (
              <div key={type} className="text-gray-600 font-medium">
                ✓ {type}
              </div>
            ),
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
