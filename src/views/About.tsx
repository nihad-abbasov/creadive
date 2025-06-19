"use client";

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import "swiper/css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Nihad Abbasov",
    role: "Founder & CEO",
    image: "/images/team/nihad.jpg",
    bio: "10+ illik proqramlaşdırma təcrübəsi ilə texnologiya və biznes sahəsində geniş biliklərə malikdir.",
    social: {
      linkedin: "https://www.linkedin.com/in/nihad-abbasov-dev/",
      instagram: "https://www.instagram.com/weristnihad/",
    },
  },
  {
    name: "Ənvər Nağıyev",
    role: "Rəqəmsal Marketinq Mütəxəssisi",
    image: "/images/team/enver.jpeg",
    bio: "5+ illik təcrübə ilə rəqəmsal marketinq strategiyaları və sosial media kampaniyalarının idarə edilməsi. Ən yaxşı nəticələri əldə etmək üçün müxtəlif marketinq texnikalarını və proqram tətbiqlərini tətbiq edir.",
    social: {
      linkedin: "https://www.linkedin.com/in/enver-nagiyev-digital",
      instagram: "https://www.instagram.com/enver_nagiyeff",
    },
  },
  {
    name: "Cavid Məmmədli",
    role: "Creative Dizayner",
    image: "/images/team/javid.jpg",
    bio: "10+ illik təcrübə ilə kreativ dizayn və grafik dizayn sahəsində geniş biliklərə malikdir. Ən yaxşı nəticələri əldə etmək üçün müxtəlif dizayn texnikalarını və proqram tətbiqlərini tətbiq edir.",
    social: {
      linkedin: "https://www.linkedin.com/in/",
      instagram: "https://www.instagram.com/javid.mammadli__",
    },
  },
  // {
  //   name: "Fuad Şahbazov",
  //   role: "UX/UI Dizayner",
  //   image: "/images/team/fuad.jpg",
  //   bio: "10+ illik təcrübə ilə kreativ dizayn və grafik dizayn sahəsində geniş biliklərə malikdir. Ən yaxşı nəticələri əldə etmək üçün müxtəlif dizayn texnikalarını və proqram tətbiqlərini tətbiq edir.",
  //   social: {
  //     linkedin: "https://www.linkedin.com/in/fuad-shahbazov-048702159/",
  //     instagram: "https://www.instagram.com/fuadd.012",
  //   },
  // },
];

const sections = [
  {
    title: "Biz kimik?",
    content:
      "Salam! Biz Creadive Agency ailəsiyik. Bakının ürəyində yaranmış komandamızla kreativ həllərin arxasındakı gülər üzlərik. Bilirik ki, hər brendin öz hekayəsi var və biz bu hekayələri rəqəmsal dünyada ən gözəl şəkildə çatdırmağa can atırıq.",
  },
  {
    title: "Missiyamız",
    content:
      "Biz inanırıq ki, hər brendin öz unique səsi var - bizim işimiz bu səsi rəqəmsal dünyada eşitdirməkdir! Müştərilərimizlə əl-ələ verib, onların məqsədlərini öz məqsədimiz kimi qəbul edir və bu yolda var gücümüzlə çalışırıq.",
  },
  {
    title: "Vizyonumuz",
    content:
      "Böyük xəyallarımız var! Azərbaycan brendlərinin kreativlik və innovasiyada dünya səviyyəsində söz sahibi olduğu bir gələcək təsəvvür edirik. Amma bu sadəcə bir xəyal deyil - biz hər gün bu məqsədə doğru addımlayırıq.",
  },
  {
    title: "Dəyərlərimiz",
    content:
      "Peşəkarlıq, innovasiya, etibarlılıq və müştəri məmnuniyyəti bizim əsas dəyərlərimizdir. Biz müştərilərimizin məqsədlərini öz məqsədimiz kimi qəbul edir və bu yolda var gücümüzlə çalışırıq.",
  },
];

const faqs = [
  {
    id: 1,
    question: "Creadive nə üçün yaradılıb?",
    answer:
      "Creadive, bizneslərin rəqəmsal dünyada uğur qazanmasına kömək etmək üçün yaradılıb. Biz, müştərilərimizə innovativ və effektiv həllər təklif edirik.",
  },
  {
    id: 2,
    question: "Hansı xidmətləri təklif edirsiniz?",
    answer:
      "Biz veb sayt yaradılması, UI/UX dizayn, rəqəmsal marketinq, SEO optimallaşdırma, qrafik dizayn, SMM və tarqetinq kimi xidmətlər təklif edirik.",
  },
  {
    id: 3,
    question: "Layihələr nə qədər vaxt aparır?",
    answer:
      "Layihələrin müddəti onun mürəkkəbliyindən və tələblərdən asılı olaraq dəyişir. Hər layihə üçün fərdi təklif hazırlayırıq.",
  },
  {
    id: 4,
    question: "Ödəniş şərtləri necədir?",
    answer:
      "Layihələrin əksəriyyətində 50% avans, 50% isə layihənin tamamlanmasından sonra ödəniş sistemi tətbiq edirik.",
  },
];

export default function About() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  // Animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const teamCardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="py-16 min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Haqqımızda
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Creadive — rəqəmsal dünyada brendinizi inkişaf etdirmək üçün
            etibarlı tərəfdaş
          </motion.p>
        </motion.div>

        {/* Mission, Vision & Values Section */}
        <motion.section className="mb-20" variants={containerVariants}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-blue-900 via-blue-800 to-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {section.title}
                </motion.h3>
                <p className="text-gray-200 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          id="team_section"
          className="mb-20"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Komandamız
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={teamCardVariants}
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className="relative w-32 h-32 mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-center text-gray-900 mb-2"
                  whileHover={{ color: "#2563eb" }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-gray-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center mb-6">{member.bio}</p>
                <motion.div
                  className="flex justify-center space-x-4 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {member.social.linkedin && (
                    <motion.a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.social.instagram && (
                    <motion.a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaInstagram className="w-5 h-5" />
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          id="faq_section"
          className="mb-20"
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Tez-tez soruşulan suallar
          </motion.h2>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <motion.button
                  onClick={() =>
                    setOpenFaqId(openFaqId === faq.id ? null : faq.id)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ backgroundColor: "#f9fafb" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaqId === faq.id ? 0 : 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IoIosArrowUp className="w-5 h-5 text-gray-500" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openFaqId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-6 py-4 text-gray-600"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section className="text-center" variants={itemVariants}>
          <motion.div
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="text-xl font-semibold block"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              Bizimlə əməkdaşlıq etmək istəyirsiniz?
            </motion.span>
            <motion.div className="mt-2">
              <Link
                href="/contact"
                className="underline text-lg font-bold hover:text-blue-100 transition-colors duration-300"
              >
                Əlaqə saxlayın
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  );
}
