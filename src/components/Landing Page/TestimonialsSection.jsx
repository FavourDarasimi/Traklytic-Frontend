import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa6";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Student",
      avatar: "SC",
      content:
        "Tracklytic helped me track my spending and save $200 every month. The app is so intuitive!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Freelancer",
      avatar: "MJ",
      content:
        "Finally a tool that makes expense tracking simple. I recommend it to all my freelance friends.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Professional",
      avatar: "ER",
      content:
        "The budget planning features are fantastic. I've never been more in control of my finances.",
      rating: 5,
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl xl:max-w-[1500px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16 space-y-2 sm:space-y-3 md:space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Loved by Users Worldwide
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            See what our users have to say about Tracklytic
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 place-items-stretch gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 rounded-2xl p-5 lg:p-8 border border-gray-200 hover:shadow-lg transition-all"
            >
              {/* Rating */}
              <div className="flex gap-0.5 sm:gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    size={14}
                    className="text-green-600 fill-green-600 sm:w-5 sm:h-5"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-600 truncate">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
