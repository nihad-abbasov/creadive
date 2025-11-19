"use client";

import NotFoundArrowIcon from "../../public/icons/404/NotFoundArrowIcon";
import { useTranslations } from "next-intl";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";

export default function NotFoundView() {
  const t = useTranslations("notFound");

  return (
    <div className="h-screen bg-white flex items-center justify-center px-4">
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
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 mb-8 max-w-md mx-auto text-lg"
        >
          {t("description")}
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
            <NotFoundArrowIcon />
            {t("goBack")}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
