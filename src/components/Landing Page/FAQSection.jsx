import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    question: "What is Tracklytic?",
    answer:
      "Tracklytic is a comprehensive personal finance application that helps you track expenses, set smart budgets, scan receipts, and achieve your financial goals with ease.",
  },
  {
    question: "How does the receipt scanner work?",
    answer:
      "Our receipt scanner uses advanced AI-powered OCR technology to extract transaction details like amount, date, and merchant automatically, saving you from manual data entry.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Yes, absolute security is our priority. We use bank-level encryption to protect all your financial data and ensure your privacy is never compromised.",
  },
  {
    question: "Can I connect my bank accounts directly?",
    answer:
      "Currently, we support manual entry and AI receipt scanning for accurate tracking. Direct bank connections are on our roadmap and will be rolling out soon.",
  },
  {
    question: "Is Tracklytic free to use?",
    answer:
      "Tracklytic offers a generous free tier with essential features to get you started. We also have premium plans for advanced analytics, unlimited receipt scans, and priority support.",
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-gray-200 p-4 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-900 pr-4">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-gray-500 flex-shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12 space-y-4"
        >
          <h2 className="text-4xl md:text-4xl font-semibold text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="border-t-4 border-green-600 w-[10%]" />
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
