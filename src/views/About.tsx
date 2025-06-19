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

  return (
    <div className="py-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">
          Haqqımızda
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Creadive — rəqəmsal dünyada brendinizi inkişaf etdirmək üçün etibarlı tərəfdaş
        </p>

        {/* Mission, Vision & Values Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900 via-blue-800 to-black p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h3>
                <p className="text-gray-200 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section id="team_section" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Komandamız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center mb-6">{member.bio}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 transition-colors duration-200"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq_section" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tez-tez soruşulan suallar
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="mb-4 bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <IoIosArrowUp
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${openFaqId === faq.id ? "transform rotate-180" : ""
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaqId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="text-xl font-semibold">
              Bizimlə əməkdaşlıq etmək istəyirsiniz?
            </span>
            <br />
            <Link href="/contact" className="underline text-lg font-bold hover:text-blue-100 transition-colors duration-300">
              Əlaqə saxlayın
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
