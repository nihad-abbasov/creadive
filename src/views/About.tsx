"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Disclosure } from "@headlessui/react";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Elnur Hüseynov",
    role: "Baş Mühəndis",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Nihad Hüseynov",
    role: "Frontend Mühəndisi",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Camal Hüseynov",
    role: "Backend Mühəndisi",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Aynur Məmmədova",
    role: "UI/UX Dizayner",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Leyla Əliyeva",
    role: "Layihə Meneceri",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Rəşad Məmmədov",
    role: "DevOps Mühəndisi",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Səbinə Həsənova",
    role: "Digital Marketing",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Orxan Nəzərov",
    role: "Mobil Tətbiq Mühəndisi",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
  {
    name: "Günel Əhmədova",
    role: "QA Mütəxəssisi",
    image: "/images/team/nihad.jpg",
    bio: "5+ illik təcrübə ilə innovativ texnologiya həllərinin yaradılması",
    social: {
      linkedin: "#",
      github: "#",
      instagram: "#",
    },
  },
];

const sections = [
  {
    title: "Biz kimik?",
    color: "from-blue-500 to-blue-400",
    content: `Salam! Biz Creadive Agency ailəsiyik. Bakının ürəyində yaranmış komandamızla kreativ həllərin arxasındakı gülər üzlərik. Bilirik ki, hər brendin öz hekayəsi var və biz bu hekayələri rəqəmsal dünyada ən gözəl şəkildə çatdırmağa can atırıq. Təcrübəli komandamızın hər bir üzvü işinə ürəkdən bağlıdır və yaradıcılığa aşiqdir. İstər ilk addımlarını atan gənc bir startup, istərsə də illərdir bazarda olan təcrübəli bir şirkət olun - qapımız və ürəyimiz sizə həmişə açıqdır. Biz sadəcə xidmət göstərmir, brendinizin inkişaf yolunda sizinlə çiyin-çiyinə addımlayırıq.`,
  },
  {
    title: "Missiyamız",
    color: "from-green-500 to-green-400",
    content: `Biz inanırıq ki, hər brendin öz unique səsi var - bizim işimiz bu səsi rəqəmsal dünyada eşitdirməkdir! Müştərilərimizlə əl-ələ verib, onların məqsədlərini öz məqsədimiz kimi qəbul edirik və bu yolda var gücümüzlə çalışırıq. Kreativ yanaşmamız və texnoloji gücümüzlə sizin uğur hekayənizin bir parçası olmağa can atırıq. Biz nəticələri sadəcə rəqəmlərlə deyil, yaratdığımız dəyər və qurduğumuz uzunmüddətli münasibətlərlə ölçürük.`,
  },
  {
    title: "Vizyonumuz",
    color: "from-purple-500 to-pink-400",
    content: `Böyük xəyallarımız var! Azərbaycan brendlərinin kreativlik və innovasiyada dünya səviyyəsində söz sahibi olduğu bir gələcək təsəvvür edirik. Amma bu sadəcə bir xəyal deyil - biz hər gün bu məqsədə doğru addımlayırıq. Trendləri izləmək bir yana, biz trendləri yaratmaq istəyirik! İnanırıq ki, yerli brendlərimizin dünya səviyyəsində tanınması üçün bütün potensialımız var, sadəcə doğru toxunuşlar lazımdır. Bu yolda biz öz kreativ toxunuşlarımızla fərq yaratmağa hazırıq!`,
  },
];

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Layihənin müddəti nə qədərdir?",
    answer:
      "Layihənin müddəti onun mürəkkəbliyindən və tələblərindən asılı olaraq dəyişir. Ortalama bir vebsayt layihəsi 4-8 həftə çəkir.",
  },
  {
    id: 2,
    question: "Hansı ödəniş üsullarını qəbul edirsiniz?",
    answer:
      "Biz bank köçürməsi, kredit kartı və digər rəqəmsal ödəniş metodlarını qəbul edirik. Ödənişlər mərhələli şəkildə həyata keçirilir.",
  },
  {
    id: 3,
    question: "Layihə başa çatdıqdan sonra dəstək verirsinizmi?",
    answer:
      "Bəli, biz layihə təhvil verildikdən sonra texniki dəstək və təkmilləşdirmə xidmətləri təklif edirik.",
  },
];

export default function About() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen pb-24 bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a] overflow-hidden">
      {/* SVG/Pattern Background */}
      <svg
        className="absolute top-0 left-0 w-full h-64 opacity-30"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#60a5fa"
          fillOpacity="0.2"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-24 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight animate-fade-in">
          Haqqımızda
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6 animate-fade-in delay-100">
          Kreativlik, texnologiya və insan mərkəzli yanaşma ilə brendinizi
          zirvəyə daşıyırıq.
        </p>
      </div>
      {/* Section Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {section.title}
              </h2>
              <p className="text-blue-100 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Team Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Komandamız</h2>
            <p className="text-xl text-blue-100">
              Peşəkar və təcrübəli komandamızla tanış olun
            </p>
          </div>
          <div className="team-slider-container">
            <Swiper
              spaceBetween={20}
              centeredSlides={false}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="team-swiper"
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden group">
                    {/* Image Container with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Social Icons - Show on Hover */}
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4 translate-y-10 group-hover:-translate-y-2 transition-transform duration-300">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors duration-300"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-pink-400 transition-colors duration-300"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition-colors duration-300"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-blue-100 text-sm">{member.bio}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Tez-tez soruşulan suallar
            </h2>
            <p className="text-xl text-blue-100">
              Layihələrimiz və xidmətlərimiz haqqında ən çox soruşulan suallar
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="flex w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                  >
                    <span>{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 0 : 180 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <IoIosArrowUp className="h-5 w-5 text-purple-400" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                            opacity: {
                              duration: 0.2,
                              ease: "easeInOut",
                            },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: "easeInOut",
                            },
                            opacity: {
                              duration: 0.2,
                              ease: "easeInOut",
                            },
                          },
                        }}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="px-4 pb-4 pt-2 text-sm text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="relative z-10 max-w-2xl mx-auto mt-16 text-center animate-fade-in-up">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-5 rounded-2xl shadow-xl hover:scale-105 transition-transform cursor-pointer">
          <span className="text-xl font-semibold">
            Bizimlə əməkdaşlıq etmək istəyirsiniz?
          </span>
          <br />
          <a href="/contact" className="underline text-lg font-bold">
            Əlaqə saxlayın
          </a>
        </div>
      </div>
      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-fade-in-up {
          animation: fade-in 1.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-delay-0 {
          animation-delay: 0ms;
        }
        .animate-delay-100 {
          animation-delay: 100ms;
        }
        .animate-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}
