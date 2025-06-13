"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundView() {
  return (
    <div className="min-h-[80vh] bg-white flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold text-gray-900 mb-4"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-semibold text-gray-700 mb-6"
        >
          Səhifə tapılmadı
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 mb-8 max-w-md mx-auto text-lg"
        >
          Axtardığınız səhifə mövcud deyil və ya silinib. Zəhmət olmasa başqa bir səhifəyə keçin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-black text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Ana Səhifəyə Qayıt
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 