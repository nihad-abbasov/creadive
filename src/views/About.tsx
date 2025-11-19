"use client";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "@/lib/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import AboutArrowLeftIcon from "../../public/icons/about/AboutArrowLeftIcon";
import AboutArrowRightIcon from "../../public/icons/about/AboutArrowRightIcon";

// Custom styles for team slider
const teamSliderStyles = `
  .team-swiper .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #e5e7eb;
    opacity: 1;
    margin: 0 6px;
    transition: all 0.3s ease;
  }
  
  .team-swiper .swiper-pagination-bullet-active {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    transform: scale(1.2);
  }
  
  .team-swiper .swiper-button-disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

// TODO: kollektiv shekiller qoymaq - fun formada

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

// Static team member data - each member has unique information

// interface Section {
//   title: string;
//   content: string;
// }

// const sections: Section[] = [
//   {
//     title: "Biz kimik?",
//     content:
//       "Salam! Biz Creadive Agency ailəsiyik. Bakının ürəyində yaranmış komandamızla kreativ həllərin arxasındakı gülər üzlərik. Bilirik ki, hər brendin öz hekayəsi var və biz bu hekayələri rəqəmsal dünyada ən gözəl şəkildə çatdırmağa can atırıq.",
//   },
//   {
//     title: "Missiyamız",
//     content:
//       "Biz inanırıq ki, hər brendin öz unique səsi var - bizim işimiz bu səsi rəqəmsal dünyada eşitdirməkdir! Müştərilərimizlə əl-ələ verib, onların məqsədlərini öz məqsədimiz kimi qəbul edir və bu yolda var gücümüzlə çalışırıq.",
//   },
//   {
//     title: "Vizyonumuz",
//     content:
//       "Böyük xəyallarımız var! Azərbaycan brendlərinin kreativlik və innovasiyada dünya səviyyəsində söz sahibi olduğu bir gələcək təsəvvür edirik. Amma bu sadəcə bir xəyal deyil - biz hər gün bu məqsədə doğru addımlayırıq.",
//   },
//   {
//     title: "Dəyərlərimiz",
//     content:
//       "Peşəkarlıq, innovasiya, etibarlılıq və müştəri məmnuniyyəti bizim əsas dəyərlərimizdir. Biz müştərilərimizin məqsədlərini öz məqsədimiz kimi qəbul edir və bu yolda var gücümüzlə çalışırıq.",
//   },
// ];

// interface Faq {
//   id: number;
//   question: string;
//   answer: string;
// }

// const faqs: Faq[] = [
//   {
//     id: 1,
//     question: "Creadive ilə işləmək üçün minimum büdcə nə qədərdir?",
//     answer:
//       "Hər layihə fərdidir və büdcə layihənin mürəkkəbliyindən asılıdır. Kiçik brendlər üçün 500 AZN-dən başlayan paketlərimiz var. Daha dəqiq məlumat üçün bizimlə əlaqə saxlayın və layihənizi müzakirə edək.",
//   },
//   {
//     id: 2,
//     question: "Vebsayt layihəsi nə qədər vaxt aparır?",
//     answer:
//       "Sadə landing page 1-2 həftə, tam vebsayt 3-4 həftə, e-ticarət saytı isə 4-6 həftə vaxt aparır. Layihənin mürəkkəbliyi və müştərinin tələbləri vaxtı təsir edir. Hər layihə üçün dəqiq təqvim təqdim edirik.",
//   },
//   {
//     id: 3,
//     question: "Sosial media idarəçiliyi xidmətinizə nə daxildir?",
//     answer:
//       "SMM paketlərimizə post dizaynı, reels/motion video hazırlanması, hekayə dizaynı, targeting kampaniyaları, hesab idarəçiliyi və hesabatlar daxildir. Hər paket fərqli xidmətlər təklif edir.",
//   },
//   {
//     id: 4,
//     question: "Layihə tamamlandıqdan sonra dəstək verirsinizmi?",
//     answer:
//       "Bəli! Bütün layihələrimizə 1 ay pulsuz dəstək daxildir. Bundan sonra da davamlı texniki dəstək və yeniləmə xidmətləri təklif edirik. Müştərilərimizlə uzunmüddətli əməkdaşlıq edirik.",
//   },
//   {
//     id: 5,
//     question: "SEO optimizasiyası nə qədər vaxtda nəticə verir?",
//     answer:
//       "SEO uzunmüddətli strategiyadır. İlk nəticələr 2-3 ay ərzində görünə bilər, tam effekt isə 6-12 ay ərzində əldə edilir. Düzgün strategiya və davamlı işlə nəticələr təminat vericidir.",
//   },
//   {
//     id: 6,
//     question: "Layihə prosesində dəyişikliklər edə bilərəmmi?",
//     answer:
//       "Əlbəttə! Layihə prosesində 2 dəfə pulsuz dəyişiklik hüququ veririk. Əlavə dəyişikliklər üçün kiçik əlavə ödəniş tələb olunur. Müştəri məmnuniyyəti bizim üçün ən vacibdir.",
//   },
//   {
//     id: 7,
//     question: "Hansı ödəniş şərtləri tətbiq edirsiniz?",
//     answer:
//       "Standart şərtlərimiz: 50% avans, 50% layihə tamamlandıqdan sonra. Böyük layihələr üçün 3-4 hissəli ödəniş sistemi də təklif edə bilərik. Bütün ödənişlər müqavilə ilə təsdiqlənir.",
//   },
//   {
//     id: 8,
//     question: "Mövcud vebsaytımı yeniləyə bilərsinizmi?",
//     answer:
//       "Bəli! Mövcud vebsaytların yenilənməsi, redesign və funksional əlavələr xidmətlərimizə daxildir. Köhnə texnologiyalardan müasir həllərə keçid də edə bilərik.",
//   },
// ];

export default function About() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const router = useRouter();
  const t = useTranslations("about");

  const teamMembers: TeamMember[] = [
    {
      name: "Nihad Abbasov",
      role: t("team.members.nihad.role"),
      image: "/images/team/nihad.jpg",
      bio: t("team.members.nihad.bio"),
    },
    {
      name: "Ənvər Nağıyev",
      role: t("team.members.enver.role"),
      image: "/images/team/enver.jpeg",
      bio: t("team.members.enver.bio"),
    },
    {
      name: "Fəxri Nağıyev",
      role: t("team.members.fexri.role"),
      image: "/images/team/fexri.jpeg",
      bio: t("team.members.fexri.bio"),
    },
    {
      name: "Cavid Məmmədli",
      role: t("team.members.javid.role"),
      image: "/images/team/javid.jpg",
      bio: t("team.members.javid.bio"),
    },
    {
      name: "Alış Həziyev",
      role: t("team.members.alish.role"),
      image: "/images/team/alish.jpg",
      bio: t("team.members.alish.bio"),
    },
    {
      name: "Azad Məmmədov",
      role: t("team.members.azad.role"),
      image: "/images/team/azad.png",
      bio: t("team.members.azad.bio"),
    },
  ];

  // Function to get translated sections
  const getTranslatedSections = () => [
    {
      title: t("sections.whoWeAre.title"),
      content: t("sections.whoWeAre.content"),
    },
    {
      title: t("sections.mission.title"),
      content: t("sections.mission.content"),
    },
    {
      title: t("sections.vision.title"),
      content: t("sections.vision.content"),
    },
    {
      title: t("sections.values.title"),
      content: t("sections.values.content"),
    },
  ];

  // Function to get translated FAQs
  const getTranslatedFAQs = () => [
    {
      id: 1,
      question: t("faq.questions.budget.question"),
      answer: t("faq.questions.budget.answer"),
    },
    {
      id: 2,
      question: t("faq.questions.timeline.question"),
      answer: t("faq.questions.timeline.answer"),
    },
    {
      id: 3,
      question: t("faq.questions.smm.question"),
      answer: t("faq.questions.smm.answer"),
    },
    {
      id: 4,
      question: t("faq.questions.support.question"),
      answer: t("faq.questions.support.answer"),
    },
    {
      id: 5,
      question: t("faq.questions.seo.question"),
      answer: t("faq.questions.seo.answer"),
    },
    {
      id: 6,
      question: t("faq.questions.changes.question"),
      answer: t("faq.questions.changes.answer"),
    },
    {
      id: 7,
      question: t("faq.questions.payment.question"),
      answer: t("faq.questions.payment.answer"),
    },
    {
      id: 8,
      question: t("faq.questions.update.question"),
      answer: t("faq.questions.update.answer"),
    },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const teamCardVariants = {
    hidden: { opacity: 0, y: 0, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleRedirectToContact = () => {
    router.push("/contact");
  };

  return (
    <>
      <style jsx>{teamSliderStyles}</style>
      <motion.div
        className="py-16 min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold !text-white mb-2 tracking-tight"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {t("subtitle")}
            </motion.p>
          </motion.div>

          <motion.section className="mb-20" variants={containerVariants}>
            <motion.h2
              className="text-3xl font-bold text-center !text-white mb-8"
              variants={itemVariants}
            >
              {t("sections.title")}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {getTranslatedSections().map((section, index) => (
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
                    className="text-2xl font-bold !text-white mb-4"
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
              className="text-3xl font-bold text-center !text-white mb-12"
              variants={itemVariants}
            >
              {t("team.title")}
            </motion.h2>
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={15}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination-custom",
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="team-swiper"
              >
                {teamMembers.map((member) => {
                  return (
                    <SwiperSlide key={member.name}>
                      <motion.div
                        variants={teamCardVariants}
                        whileHover={{
                          transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        className="group bg-white rounded-2xl py-5 px-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative h-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                        }}
                      >
                        {/* Decorative gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={false}
                        />

                        {/* Image container with better styling */}
                        <motion.div
                          className="relative w-52 h-52 mx-auto mb-4"
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full rounded-xl object-cover relative z-10"
                          />
                          {/* Subtle glow effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                          />
                        </motion.div>

                        {/* Content with better typography hierarchy */}
                        <div className="relative z-10 text-center">
                          <motion.h3
                            className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300"
                            transition={{ duration: 0.2 }}
                          >
                            {member.name}
                          </motion.h3>

                          <motion.div
                            className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-3 py-1 rounded-md text-xs font-medium mb-3"
                            transition={{ duration: 0.2 }}
                          >
                            {member.role}
                          </motion.div>

                          <motion.p
                            className="text-gray-600 text-sm leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {member.bio}
                          </motion.p>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev-custom absolute left-4 md:-left-16 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-blue-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <AboutArrowLeftIcon />
              </button>
              <button className="swiper-button-next-custom absolute right-4 md:-right-16 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-600 hover:text-blue-600 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <AboutArrowRightIcon />
              </button>

              {/* Custom Pagination */}
              <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            id="faq_section"
            className="mb-20"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl font-bold text-center !text-white mb-12"
              variants={itemVariants}
            >
              {t("faq.title")}
            </motion.h2>
            <motion.div
              className="max-w-3xl mx-auto"
              variants={containerVariants}
            >
              {getTranslatedFAQs().map((faq) => (
                <motion.div
                  key={faq.id}
                  variants={itemVariants}
                  transition={{ duration: 0.2 }}
                  className="mb-4 bg-white rounded-2xl overflow-hidden"
                >
                  <motion.button
                    onClick={() =>
                      setOpenFaqId(openFaqId === faq.id ? null : faq.id)
                    }
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    whileHover={{ backgroundColor: "#c9fafb" }}
                  >
                    <span className="text-base font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaqId === faq.id ? 0 : 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoIosArrowUp className="w-5 h-5 text-gray-600" />
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
                          className="px-6 py-4 text-gray-700"
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
              className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-4 md:px-8 py-3 md:py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="text-lg md:text-xl font-semibold block"
                transition={{ duration: 0.2 }}
              >
                {t("cta.title")}
              </motion.span>
              <motion.div className="mt-2">
                <button
                  onClick={handleRedirectToContact}
                  aria-label="Contact via WhatsApp"
                  title={t("cta.button")}
                  className="underline text-base md:text-lg font-bold hover:text-blue-100 transition-colors duration-300"
                >
                  {t("cta.button")}
                </button>
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
}
