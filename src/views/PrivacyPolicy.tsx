"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("privacyPolicy");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const sections = [
    {
      key: "introduction",
      title: t("sections.introduction.title"),
      content: t("sections.introduction.content"),
    },
    {
      key: "dataCollection",
      title: t("sections.dataCollection.title"),
      content: t("sections.dataCollection.content"),
      items: [
        t("sections.dataCollection.items.0"),
        t("sections.dataCollection.items.1"),
        t("sections.dataCollection.items.2"),
        t("sections.dataCollection.items.3"),
        t("sections.dataCollection.items.4"),
        t("sections.dataCollection.items.5"),
      ],
    },
    {
      key: "purpose",
      title: t("sections.purpose.title"),
      content: t("sections.purpose.content"),
      items: [
        t("sections.purpose.items.0"),
        t("sections.purpose.items.1"),
        t("sections.purpose.items.2"),
        t("sections.purpose.items.3"),
        t("sections.purpose.items.4"),
      ],
    },
    {
      key: "dataSharing",
      title: t("sections.dataSharing.title"),
      content: t("sections.dataSharing.content"),
      items: [
        t("sections.dataSharing.items.0"),
        t("sections.dataSharing.items.1"),
        t("sections.dataSharing.items.2"),
      ],
    },
    {
      key: "userRights",
      title: t("sections.userRights.title"),
      content: t("sections.userRights.content"),
      items: [
        t("sections.userRights.items.0"),
        t("sections.userRights.items.1"),
        t("sections.userRights.items.2"),
        t("sections.userRights.items.3"),
        t("sections.userRights.items.4"),
        t("sections.userRights.items.5"),
        t("sections.userRights.items.6"),
        t("sections.userRights.items.7"),
      ],
    },
    {
      key: "dataSecurity",
      title: t("sections.dataSecurity.title"),
      content: t("sections.dataSecurity.content"),
      items: [
        t("sections.dataSecurity.items.0"),
        t("sections.dataSecurity.items.1"),
        t("sections.dataSecurity.items.2"),
        t("sections.dataSecurity.items.3"),
      ],
    },
    {
      key: "dataRetention",
      title: t("sections.dataRetention.title"),
      content: t("sections.dataRetention.content"),
    },
    {
      key: "cookies",
      title: t("sections.cookies.title"),
      content: t("sections.cookies.content"),
      items: [
        t("sections.cookies.items.0"),
        t("sections.cookies.items.1"),
        t("sections.cookies.items.2"),
      ],
    },
    {
      key: "children",
      title: t("sections.children.title"),
      content: t("sections.children.content"),
    },
    {
      key: "changes",
      title: t("sections.changes.title"),
      content: t("sections.changes.content"),
    },
    {
      key: "contact",
      title: t("sections.contact.title"),
      content: t("sections.contact.content"),
    },
  ];

  return (
    <motion.div
      className="py-16 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold !text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("title")}
          </motion.h1>
          <motion.p
            className="text-lg text-white/80 max-w-2xl mx-auto mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t("lastUpdated")}
          </motion.p>
          <motion.p
            className="text-sm text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {t("effectiveDate")}
          </motion.p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-black/50 p-4 md:p-8 rounded-2xl shadow-lg mb-8"
        >
          <p className="text-gray-200 leading-relaxed text-lg">
            {sections[0].content}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.slice(1).map((section) => (
            <motion.section
              key={section.key}
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-black/50 p-4 md:p-8 rounded-2xl shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold !text-white mb-4">
                {section.title}
              </h2>
              <p className="text-gray-200 leading-relaxed mb-4">
                {section.content}
              </p>
              {section.items && (
                <ul className="list-disc list-inside space-y-2 text-gray-200 ml-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.section>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center text-white/60 text-sm"
        >
          <p>{t("footerNote")}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
