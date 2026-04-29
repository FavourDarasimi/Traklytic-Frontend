import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export default function LandingPageSocialProof() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-100"
    >
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <motion.div whileHover={{ y: -5 }} className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
              10,000+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Active Users
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
              4.9
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Average Rating
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="space-y-1 sm:space-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">
              $2.3M+
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Tracked Annually
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="space-y-1 sm:space-y-2">
            <div className="flex items-center justify-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={16}
                  className="text-green-600 fill-green-600 sm:w-6 sm:h-6"
                />
              ))}
            </div>
            <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              Trusted by many
            </div>
          </motion.div>
        </div>

        {/* Customer Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-12"
        >
          {["Students", "Freelancers", "Professionals", "Families"].map(
            (type) => (
              <div
                key={type}
                className="text-xs sm:text-sm md:text-base text-gray-600 font-medium"
              >
                ✓ {type}
              </div>
            ),
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
