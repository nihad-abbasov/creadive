"use client";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoRocketOutline } from "react-icons/io5";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
interface Testimonial {
  id: number;
  name: string;
  thoughts: string;
  role: string;
  // companyLogo: string;
  instagramUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Calissa Group",
    thoughts:
      "Bu komanda ilə işləmək bizim rəqəmsal mövcudluğumuzu dəyişdi. Onların innovativ həlləri bizə yeni zirvələrə çatmağa kömək etdi.",
    role: "Turizm",
    // companyLogo: "/logos/calissa.svg",
    instagramUrl: "https://instagram.com/calissagroup",
  },
  {
    id: 2,
    name: "Mirror Studio",
    thoughts:
      "Fövqəladə yaradıcılıq və texniki bacarıq. Onlar gözləntilərimizdən də yüksək nəticələr əldə etdilər.",
    role: "İnteryer dizayn",
    // companyLogo: "/logos/mirror.svg",
    instagramUrl: "https://instagram.com/mirror.cgi",
  },
  {
    id: 3,
    name: "21 Couture House",
    thoughts:
      "Onların diqqətli yanaşması və brendimizi başa düşməsi rəqəmsal transformasiyamızda böyük fərq yaratdı.",
    role: "Lüks geyim",
    // companyLogo: "/logos/21couture.svg",
    instagramUrl: "https://instagram.com/21couturehouse",
  },
  {
    id: 4,
    name: "Flora Atelye",
    thoughts:
      "Hər layihəyə həm yaradıcılıq, həm də strateji düşüncə gətirən həqiqətən peşəkar komanda.",
    role: "Geyim dizaynı",
    // companyLogo: "/logos/flora.svg",
    instagramUrl: "https://instagram.com/flora.atelye",
  },
  {
    id: 5,
    name: "Wild Athletic",
    thoughts:
      "Əla xidmət və nəticələr. Onlar auditoriyamızla rezonans yaradan güclü onlayn mövcudluq yaratmağımıza kömək etdilər.",
    role: "İdman geyimləri",
    // companyLogo: "/logos/wild.svg",
    instagramUrl: "https://instagram.com/wildathleticc",
  },
  {
    id: 6,
    name: "Buketchim",
    thoughts:
      "Sosial media reklamları ilə satışlarımız əhəmiyyətli dərəcədə artdı. Peşəkar yanaşmaları və effektiv strategiyaları sayəsində gözəl nəticələr əldə etdik.",
    role: "Gül buketləri satışı",
    // companyLogo: "/logos/wild.svg",
    instagramUrl: "https://instagram.com/buketchim",
  },
];

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    id: 1,
    title: "Vebsayt hazırlama",
    description: "Müasir və responsive vebsaytların hazırlanması",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "UX/UI dizayn",
    description: "İstifadəçi təcrübəsini təkmilləşdirən dizayn həlləri",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Rəqəmsal marketinq",
    description: "Effektiv rəqəmsal marketinq strategiyaları",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Sosial Media Marketinqi",
    description: "Sosial media platformalarında effektiv marketinq",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Məzmun yaratma",
    description: "Keyfiyyətli və cəlbedici məzmun yaradılması",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Qrafik dizayn",
    description: "Profesional qrafik dizayn həlləri",
    icon: ({ className }) => (
      <svg
        className={className}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

interface StatItem {
  id: number;
  end: number;
  label: string;
  suffix: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    end: 100,
    label: "Tamamlanmış layihə",
    suffix: "+",
  },
  {
    id: 2,
    end: 50,
    label: "Məmnun müştəri",
    suffix: "+",
  },
  {
    id: 3,
    end: 5,
    label: "İl təcrübə",
    suffix: "+",
  },
  {
    id: 4,
    end: 24,
    label: "Müştəri dəstəyi",
    suffix: "/7",
  },
];

const processSteps = [
  {
    id: 1,
    title: "Ehtiyaclarınızın Analizi",
    description:
      "Layihənizin məqsədlərini və hədəflərini dəqiq başa düşmək üçün ətraflı müzakirə",
  },
  {
    id: 2,
    title: "Strategiya və Planlaşdırma",
    description: "Layihəniz üçün ən uyğun həlləri və yanaşmaları müəyyən etmək",
  },
  {
    id: 3,
    title: "İcra və İnkişaf",
    description:
      "Peşəkar komandamız tərəfindən layihənin keyfiyyətli şəkildə həyata keçirilməsi",
  },
  {
    id: 4,
    title: "Nəticələrin Analizi",
    description:
      "Layihənin effektivliyini qiymətləndirmək və təkmilləşdirmək üçün monitorinq",
  },
];

// interface BlogPost {
//   id: number;
//   title: string;
//   excerpt: string;
//   image: string;
//   slug: string;
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Veb Dizaynın Əsas Prinsipləri",
//     excerpt: "Müasir veb dizaynın əsas prinsipləri və trendləri haqqında",
//     image: "/blog/web-design.jpg",
//     slug: "web-design-principles",
//   },
//   {
//     id: 2,
//     title: "SEO Optimizasiyası",
//     excerpt:
//       "Veb saytınızın axtarış sistemlərində daha yaxşı görünməsi üçün tövsiyələr",
//     image: "/blog/seo.jpg",
//     slug: "seo-optimization",
//   },
//   {
//     id: 3,
//     title: "Rəqəmsal Marketinq Strategiyaları",
//     excerpt: "Biznesiniz üçün effektiv rəqəmsal marketinq strategiyaları",
//     image: "/blog/digital-marketing.jpg",
//     slug: "digital-marketing-strategies",
//   },
// ];

// PRICING DATA

const pricingCategories = [
  {
    id: "smm",
    name: "SMM",
    description: "Sosial media idarəçiliyi üçün paketlərimiz.",
    packages: [
      {
        id: "roket",
        name: "ROKET paket",
        price: "349 AZN",
        features: [
          "12 statik post",
          "2 reels/motion video",
          "6 hekayə dizaynı",
        ],
      },
      {
        id: "kosmos",
        name: "KOSMOS paket",
        price: "699 AZN",
        features: [
          "16 statik post",
          "15 hekayə dizaynı",
          "2 Motion video",
          "2 Reels video",
          "Xüsusi günlərə aid postların hazırlanması",
          "Highlights bölməsinin hazırlanması",
          "Targeting (Reklam)",
        ],
        popular: true,
      },
      {
        id: "ulduz",
        name: "ULDUZ paket",
        price: "999 AZN",
        features: [
          "Loqo hazırlanması",
          "1 profesional video çəkiliş",
          "30 hekayə dizaynı",
          "Hər ay 1 giveaway/yarişma postu hazırlamaq",
          "Targeting (Reklam)",
          "Sosial media hesablarının idarə edilməsi",
          "Tiktok üzərindən reklam",
        ],
      },
    ],
    notIncluded: [
      "Vergi",
      "Reklam büdcəsi/xərcləri",
      "Giveaway hədiyyələrinin xərcləri",
    ],
  },
  {
    id: "website",
    name: "Vebsayt",
    description: "Vebsayt hazırlanması üçün paketlərimiz.",
    packages: [
      {
        id: "landing",
        name: "Açılış Səhifəsi",
        price: "500 AZN",
        features: [
          "1 səhifəlik vebsayt",
          "Mobil uyğun dizayn",
          "Əsas SEO optimizasiya",
          "Sürətli yüklənmə",
        ],
      },
      {
        id: "business",
        name: "Biznes Vebsayt",
        price: "800 AZN",
        features: [
          "5 səhifəyə qədər",
          "Mobil və masaüstü uyğunluq",
          "SEO optimizasiya",
          "Admin panel",
          "Əlaqə forması",
        ],
        popular: true,
      },
      {
        id: "ecommerce",
        name: "E-ticarət",
        price: "1500 AZN",
        features: [
          "10+ səhifə",
          "Onlayn satış sistemi",
          "Ödəniş inteqrasiyası",
          "Admin panel",
          "SEO və sürət optimizasiyası",
        ],
      },
    ],
    notIncluded: [
      "Əlavə dil dəstəyi",
      "Əlavə illik hostinq və domen haqqı",
      "Məzmunun (text və şəkil) hazırlanması",
      "SEO-nun tam audit və ya davamlı xidməti",
      "Saytın davamlı texniki dəstəyi",
    ],
  },
  {
    id: "design",
    name: "Dizayn",
    description: "Qrafik və brendinq dizayn xidmətləri.",
    packages: [
      {
        id: "logo",
        name: "Loqo Dizaynı",
        price: "150 AZN",
        features: [
          "3 fərqli konsept",
          "2 dəfə düzəliş imkanı",
          "Final fayllar (PNG, SVG, JPG)",
          "Rəng və şrift təlimatı",
        ],
      },
      {
        id: "branding",
        name: "Brendinq Paketi",
        price: "400 AZN",
        features: [
          "Loqo dizaynı",
          "Vizit kart dizaynı",
          "Sosial media şablonları",
          "Brend kitabçası",
        ],
      },
      {
        id: "social",
        name: "Post və Story Dizaynı",
        price: "70 AZN",
        features: [
          "3 post dizaynı",
          "1 story dizaynı",
          "Brend rənglərinə uyğun",
          "Yüksək keyfiyyətli fayllar (JPG/PNG)",
          "2 dəfə dəyişmə imkanı",
        ],
      },
    ],
    notIncluded: [
      "Çap xərcləri",
      "Stock şəkil və ya font lisenziyaları",
      "Əlavə konsept və ya düzəlişlər",
      "Animasiya və ya motion dizayn (paketdə yoxdursa)",
      "Brend strategiyası və ya konsultasiya",
      "Sosial media idarəçiliyi",
      "Faylların əlavə formatlarda hazırlanması",
    ],
  },
];

interface Partner {
  name: string;
  logoUrl: string;
  partnerInstagram: string;
}

const partners: Partner[] = [
  {
    name: "21 Couture house",
    logoUrl: "/images/partnerLogos/21ch-logo.png",
    partnerInstagram: "https://www.instagram.com/21couturehouse",
  },
  {
    name: "Buketchim",
    logoUrl: "/images/partnerLogos/buketchim-logo.png",
    partnerInstagram: "https://www.instagram.com/buketchim",
  },
  {
    name: "Wild Athletics",
    logoUrl: "/images/partnerLogos/wildathletics-logo.png",
    partnerInstagram: "https://www.instagram.com/wildathleticc",
  },
  {
    name: "Calissa Group",
    logoUrl: "/images/partnerLogos/calissa-logo.png",
    partnerInstagram: "https://www.instagram.com/calissagroup",
  },
  {
    name: "Mirror Studio",
    logoUrl: "/images/partnerLogos/mirror-logo.png",
    partnerInstagram: "https://www.instagram.com/mirror.cgi",
  },
];

// Add Checkmark SVG icon
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className || "w-5 h-5 text-green-500"}
  >
    <polyline points="4 11 8 15 16 6" />
  </svg>
);

// Add InfoIcon SVG
const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className || "w-6 h-6 text-red-500"}
  >
    <circle
      cx="10"
      cy="10"
      r="9"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="#FEE2E2"
    />
    <line
      x1="10"
      y1="7"
      x2="10"
      y2="11"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="10" cy="14" r="1" fill="currentColor" />
  </svg>
);

const Homepage = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [activePricingTab, setActivePricingTab] = useState(
    pricingCategories[0].id
  );

  return (
    <section>
      {/* Hero Section */}
      <div className="relative min-h-auto md:min-h-[93vh] flex items-center">
        {/* Background Image with Overlay */}
        {/* <div className="absolute inset-0 z-0">
          <Image
            src="/hero2.jpg"
            alt="Hero Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/90 to-black/50" />
        </div> */}

        {/* Content */}
        <div className="relative z-10 w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
              >
                Biznesinizi{" "}
                <span className="bg-gradient-to-l from-[#15B6B0] to-[#20C943] bg-clip-text text-transparent font-bold drop-shadow-[0_0_30px_rgba(22,182,176,0.8)]">
                  Creadive
                </span>{" "}
                ilə <br />
                gücləndirin
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
              >
                Biz innovativ dizayn, vebsayt və marketinq həlləri ilə{" "}
                <span className="bg-gradient-to-l from-[#15B6B0] to-[#20C943] bg-clip-text text-transparent font-bold">
                  brendlərin
                </span>{" "}
                inkişafına kömək edirik.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-max mx-auto"
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <IoRocketOutline className="w-5 h-5" />
                  Layihənizə başlayaq
                </Link>
                <Link
                  id="home-portfolio-link"
                  href="/portfolio"
                  aria-label="Portfolio"
                  // data-gtm-id="home-portfolio-link"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Portfoliomuza bax
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-0 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              Creadive nələr təklif edir?
            </h2>
            {/* <p className="text-base text-white/80 max-w-2xl mx-auto">
              Biznesiniz üçün ən yaxşı həllər
            </p> */}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See all services button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-6"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Bütün Xidmətlər</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Son İşlərimiz
            </h2>
            <p className="text-base text-gray-600">
              Uğurla tamamladığımız layihələrdən nümunələr
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Creadive Agentliyi
              </h3>
              <p className="text-gray-600">
                Hər bir layihəyə fərdi və peşəkar yanaşma tətbiq edirik
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Bütün işlərimizi görün
            </Link>
          </div>
        </div>
      </div> */}

      {/* Statistics Section */}
      <div className="px-4 pb-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-blue-600 to-black py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-white mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  ) : (
                    "0"
                  )}
                </div>
                <div className="text-xl font-normal text-white">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 w-full max-w-full overflow-hidden"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Tərəfdaşlarımız
            </h2>
            {/* <p className="text-base text-white/80">
              Bizə etibar edən və uğurla işlədiyimiz brendlər
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full"
          >
            {/* overflow-hidden */}
            <div className="partners-marquee-container">
              <div className="partners-marquee py-6">
                {/* First set of logos */}
                {partners.map((partner: Partner, index: number) => (
                  <div key={`first-${index}`} className="partner-item">
                    <Link
                      href={partner.partnerInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-lg p-2"
                    >
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="h-16 md:h-16 object-contain transition-all duration-300"
                      />
                    </Link>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {partners.map((partner: Partner, index: number) => (
                  <div key={`second-${index}`} className="partner-item">
                    <Link
                      href={partner.partnerInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-lg p-2"
                    >
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="h-16 md:h-16 object-contain transition-all duration-300"
                      />
                    </Link>
                  </div>
                ))}
                {/* Third set for better coverage with fewer partners */}
                {partners.map((partner: Partner, index: number) => (
                  <div key={`third-${index}`} className="partner-item">
                    <Link
                      href={partner.partnerInstagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-lg p-2"
                    >
                      <Image
                        src={partner.logoUrl}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="h-16 md:h-16 object-contain transition-all duration-300"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
        // bg-gradient-to-b from-gray-50 to-white
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Qiymətlərimizlə tanış olmaq istəyirsiniz?
            </h2>
            {/* <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Xidmətlərimiz üçün ən uyğun paketləri seçin və biznesinizi növbəti səviyyəyə qaldırın
            </p> */}
          </motion.div>

          {/* Enhanced Tabs with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-1 md:gap-2 mb-12 relative"
          >
            <div className="bg-white backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200">
              {pricingCategories.map((cat, index) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActivePricingTab(cat.id)}
                  className={`relative px-4 md:px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activePricingTab === cat.id
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.name}
                  {activePricingTab === cat.id && (
                    <motion.div
                      layoutId="pricing-tab-underline"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl shadow-lg"
                      style={{ zIndex: -1 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Tab Content */}
          <div className="">
            {pricingCategories.map((cat) => (
              <div
                key={cat.id}
                className={activePricingTab === cat.id ? "" : "hidden"}
              >
                {cat.packages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cat.packages.map((pkg, index) => {
                      const isPopular = pkg.popular;
                      return (
                        <motion.div
                          key={pkg.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          whileHover={{ y: -8, scale: 1.02 }}
                          className={`relative group overflow-hidden rounded-3xl ${
                            isPopular ? "md:scale-105 z-20" : "z-10"
                          }`}
                        >
                          {/* Card Background */}
                          <div
                            className={`relative h-full rounded-3xl shadow-xl transition-all duration-500 ${
                              isPopular
                                ? "bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 shadow-2xl shadow-blue-500/25"
                                : "bg-white hover:shadow-2xl hover:shadow-gray-200/50"
                            }`}
                          >
                            {/* Popular Badge */}
                            {/* {isPopular && (
                              <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="absolute -top-10 left-1/2 -translate-x-1/2 z-[60]"
                              >
                                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg border-2 border-white">
                                  ⭐ Ən Populyar
                                </div>
                              </motion.div>
                            )} */}

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                            {/* Card Content */}
                            <div className="relative p-8 h-full flex flex-col">
                              {/* Package Icon */}
                              <div
                                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                                  isPopular
                                    ? "bg-white/20 text-white"
                                    : "bg-gradient-to-br from-blue-50 to-emerald-50 text-blue-600"
                                }`}
                              >
                                <svg
                                  className="w-8 h-8"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                  />
                                </svg>
                              </div>

                              {/* Package Name */}
                              <h3
                                className={`text-2xl font-bold mb-1 ${
                                  isPopular ? "text-white" : "text-gray-900"
                                }`}
                              >
                                {pkg.name}
                              </h3>

                              {/* Price */}
                              <div className="mb-6">
                                <div
                                  className={`text-5xl font-extrabold mb-1 ${
                                    isPopular
                                      ? "text-white"
                                      : "bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent"
                                  }`}
                                >
                                  {pkg.price}
                                </div>
                                {cat.id === "website" &&
                                  pkg.name === "E-ticarət" && (
                                    <span
                                      className={`text-sm font-medium ${
                                        isPopular
                                          ? "text-white/80"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      -dən başlayaraq
                                    </span>
                                  )}
                              </div>

                              {/* Features List */}
                              <ul className="mb-8 flex-1 space-y-3">
                                {pkg.features.map((feature, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      duration: 0.4,
                                      delay: 0.6 + i * 0.1,
                                    }}
                                    className="flex items-start gap-3"
                                  >
                                    <div
                                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                        isPopular
                                          ? "bg-white/20 text-white"
                                          : "bg-green-100 text-green-600"
                                      }`}
                                    >
                                      <CheckIcon className="w-3 h-3" />
                                    </div>
                                    <span
                                      className={`text-sm leading-relaxed ${
                                        isPopular
                                          ? "text-white/90"
                                          : "text-gray-700"
                                      }`}
                                    >
                                      {feature}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>

                              {/* CTA Button */}
                              <motion.a
                                href={`https://wa.me/994105319987?text=${encodeURIComponent(
                                  `Salam! Mən sizin saytınızdan ${cat.name} kateqoriyasından ${pkg.name} sifariş etmək istəyirəm.\nQiymət: ${pkg.price}\nZəhmət olmasa, mənimlə əlaqə saxlayın.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 px-6 rounded-2xl font-semibold text-center transition-all duration-300 shadow-lg ${
                                  isPopular
                                    ? "bg-white text-blue-600 hover:bg-gray-50 hover:shadow-xl"
                                    : "bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 hover:shadow-xl"
                                }`}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className="flex items-center justify-center gap-2">
                                  <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                  </svg>
                                  Sifariş et
                                </span>
                              </motion.a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12 text-lg">
                    Tezliklə əlavə olunacaq.
                  </div>
                )}

                {/* Enhanced Not Included Section */}
                {["smm", "website", "design"].includes(cat.id) &&
                  cat.notIncluded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-12 max-w-2xl mx-auto"
                    >
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                              <InfoIcon className="w-6 h-6 text-red-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-lg mb-3 text-gray-900">
                              QİYMƏTLƏRƏ DAXİL DEYİL
                            </h4>
                            <ul className="space-y-2">
                              {cat.notIncluded.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.4,
                                    delay: 1 + idx * 0.1,
                                  }}
                                  className="flex items-center gap-2 text-sm text-gray-900"
                                >
                                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full flex-shrink-0"></div>
                                  {item}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Niyə məhz Creadive?
            </h2>
            {/* <p className="text-base text-white/80">
              Bizi fərqləndirən xüsusiyyətlər
            </p> */}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                icon: "🎯",
                title: "Peşəkar Yanaşma",
                description:
                  "Hər bir layihəyə fərdi və peşəkar yanaşma tətbiq edirik",
              },
              {
                icon: "⚡",
                title: "Sürətli İcra",
                description:
                  "Layihələri vaxtında və keyfiyyətlə təhvil veririk",
              },
              {
                icon: "💡",
                title: "İnnovativ Həllər",
                description:
                  "Ən son texnologiyalardan istifadə edərək innovativ həllər təklif edirik",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-4xl mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Blog Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Blog
            </h2>
            <p className="text-base text-gray-600">
              Son xəbərlər və məqalələr
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Ətraflı oxu →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Process Steps Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              İş Prosesimizi Bilmək İstəyirsiniz?
            </h2>
            {/* <p className="text-base text-white/80">
              Layihələrimizi necə həyata keçirirdiyimizə baxın
            </p> */}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-black rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.id}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[65.5%] w-[80%] h-0.5 bg-blue-600" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Texnologiyalar
            </h2>
            <p className="text-base text-gray-600">
              İstifadə etdiyimiz müasir texnologiyalar
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", logo: "/images/tech/react.svg" },
              { name: "Next.js", logo: "/images/tech/nextjs.svg" },
              { name: "TypeScript", logo: "/images/tech/typescript.svg" },
              { name: "Node.js", logo: "/images/tech/nodejs.svg" },
              { name: "Tailwind CSS", logo: "/images/tech/tailwind.svg" },
              { name: "MongoDB", logo: "/images/tech/mongodb.svg" }
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-center p-4">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Creadive haqqında nə deyirlər?
            </h2>
            {/* <p className="text-base text-white/80">
              Bizə etibar edən müştərilərimizin təəssüratları
            </p> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full"
          >
            <Swiper
              // effect={"coverflow"}
              // grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              speed={5000}
              loopAdditionalSlides={1}
              loopPreventsSliding={true}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation, EffectCards]}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white px-8 py-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <motion.svg
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.5,
                              delay: 0.5,
                              type: "spring",
                              stiffness: 200,
                            }}
                            className="w-5 h-5 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </motion.svg>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          className="text-sm text-gray-900"
                        >
                          {testimonial.role}
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="relative"
                    >
                      <motion.svg
                        initial={{ scale: 0, rotate: -10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="absolute -top-2 -left-2 w-8 h-8 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </motion.svg>
                      <p className="text-gray-900 text-sm italic relative pl-6">
                        {testimonial.thoughts}
                      </p>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-t from-slate-950 to-blue-600 rounded-2xl py-16 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left mb-8 md:mb-0"
            >
              <h2 className="text-3xl font-bold text-white mb-2">
                Layihənizi müzakirə edək
              </h2>
              <p className="text-white text-base font-light">
                Bizimlə əlaqə saxlayın və layihənizi həyata keçirək
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="https://wa.me/994105319987"
                target="_blank"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors w-full md:w-max"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Bizə yazın
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Homepage;
