import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartLine, FaBars, FaXmark } from "react-icons/fa6";

export default function ModernNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <FaChartLine className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-gray-900">Tracklytic</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link to="/auth/">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-100 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-600 hover:text-gray-900 font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
            <Link to="/auth/">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all">
                Get Started
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
