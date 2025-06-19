"use client";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
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

// interface Partner {
//   id: number;
//   name: string;
//   logo: string;
// }

// const partners: Partner[] = [
//   {
//     id: 1,
//     name: "Partner 1",
//     logo: "/partners/partner1.png",
//   },
//   {
//     id: 2,
//     name: "Partner 2",
//     logo: "/partners/partner2.png",
//   },
//   {
//     id: 3,
//     name: "Partner 3",
//     logo: "/partners/partner3.png",
//   },
//   {
//     id: 4,
//     name: "Partner 4",
//     logo: "/partners/partner4.png",
//   },
// ];

// PRICING DATA
const pricingCategories = [
  {
    id: 'smm',
    name: 'SMM Paketləri',
    description: 'Sosial media idarəçiliyi üçün paketlərimiz.',
    packages: [
      {
        id: 'roket',
        name: 'ROKET paket',
        price: '349 AZN',
        features: [
          '12 statik post',
          '2 reels/motion video',
          '6 hekayə dizaynı',
        ],
      },
      {
        id: 'kosmos',
        name: 'KOSMOS paket',
        price: '699 AZN',
        features: [
          '16 statik post',
          '15 hekayə dizaynı',
          '2 Motion video',
          '2 Reels video',
          'Xüsusi günlərə aid postların hazırlanması',
          'Highlights bölməsinin hazırlanması',
          'Targeting (1 kampaniya daxilində 10 post)',
        ],
        popular: true,
      },
      {
        id: 'ulduz',
        name: 'ULDUZ paket',
        price: '999 AZN',
        features: [
          'Loqo hazırlanması',
          '1 profesional video çəkiliş',
          '30 hekayə dizaynı',
          'Hər ay 1 giveaway/yarişma postu hazırlamaq',
          'Targeting (1 kampaniya daxilində 15 post)',
          'Sosial media hesablarının idarə edilməsi',
          'Tiktok üzərindən reklam',
        ],
      },
    ],
    notIncluded: [
      'Vergi',
      'Reklam büdcəsi/xərcləri',
      'Giveaway hədiyyələrinin xərcləri',
    ],
  },
  {
    id: 'website',
    name: 'Vebsayt Paketləri',
    description: 'Vebsayt hazırlanması üçün paketlərimiz.',
    packages: [
      {
        id: 'landing',
        name: 'Landing Page',
        price: '600 AZN',
        features: [
          '1 səhifəlik vebsayt',
          'Mobil uyğun dizayn',
          'Əsas SEO optimizasiya',
          'Sürətli yüklənmə',
        ],
      },
      {
        id: 'business',
        name: 'Biznes Vebsayt',
        price: '900 AZN',
        features: [
          '5 səhifəyə qədər',
          'Mobil və masaüstü uyğunluq',
          'SEO optimizasiya',
          'Admin panel',
          'Əlaqə forması',
        ],
        popular: true,
      },
      {
        id: 'ecommerce',
        name: 'E-ticarət',
        price: '2000 AZN',
        features: [
          '10+ səhifə',
          'Onlayn satış sistemi',
          'Ödəniş inteqrasiyası',
          'Admin panel',
          'SEO və sürət optimizasiyası',
        ],
      },
    ],
    notIncluded: [
      'Əlavə dil dəstəyi',
      'Əlavə illik hostinq və domen haqqı',
      'Məzmunun (text və şəkil) hazırlanması',
      'SEO-nun tam audit və ya davamlı xidməti',
      'Saytın davamlı texniki dəstəyi',
    ],
  },
  {
    id: 'design',
    name: 'Dizayn Paketləri',
    description: 'Qrafik və brendinq dizayn xidmətləri.',
    packages: [
      {
        id: 'logo',
        name: 'Logo Dizaynı',
        price: '150 AZN',
        features: [
          '3 fərqli konsept',
          '2 dəfə düzəliş imkanı',
          'Final fayllar (PNG, SVG, JPG)',
          'Rəng və şrift təlimatı',
        ],
      },
      {
        id: 'branding',
        name: 'Brendinq Paketi',
        price: '400 AZN',
        features: [
          'Logo dizaynı',
          'Vizit kart dizaynı',
          'Sosial media şablonları',
          'Brend kitabçası',
        ],
      },
      {
        id: 'social',
        name: 'Sosial Media Dizayn Paketi',
        price: '70 AZN',
        features: [
          '3 post dizaynı',
          '1 story dizaynı',
          'Brend rənglərinə uyğun',
          'Yüksək keyfiyyətli fayllar (JPG/PNG)',
          '2 dəfə dəyişmə imkanı',
        ],
      },
    ],
    notIncluded: [
      'Çap xərcləri',
      'Stock şəkil və ya font lisenziyaları',
      'Əlavə konsept və ya düzəlişlər',
      'Animasiya və ya motion dizayn (paketdə yoxdursa)',
      'Brend strategiyası və ya konsultasiya',
      'Sosial media idarəçiliyi',
      'Faylların əlavə formatlarda hazırlanması',
    ],
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
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="#FEE2E2" />
    <line x1="10" y1="7" x2="10" y2="11" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="10" cy="14" r="1" fill="currentColor" />
  </svg>
);

const Homepage = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [activePricingTab, setActivePricingTab] = useState(pricingCategories[0].id);

  return (
    <section>
      {/* Hero Section */}
      <div className="relative min-h-auto md:min-h-[93vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero2.jpg"
            alt="Hero Background"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/90 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Biznesinizi{" "}
                <span className="bg-gradient-to-l from-[#15B6B0] to-[#20C943] bg-clip-text text-transparent font-bold">
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
                inkişafına kömək edən kreativ rəqəmsal agentlikik.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-max mx-auto"
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Bizimlə əlaqə
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors"
                >
                  İşlərimiz
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Xidmətlərimiz
            </h2>
            <p className="text-xl text-gray-600">
              Biznesiniz üçün ən yaxşı həlləri təklif edirik
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 via-blue-100 via-50% to-blue-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Son İşlərimiz
            </h2>
            <p className="text-xl text-gray-600">
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

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Qiymət Paketləri</h2>
            <p className="text-xl text-gray-600">Xidmətlərimiz üçün ən uyğun paketləri seçin</p>
          </div>
          {/* Tabs with animated underline */}
          <div className="flex justify-center gap-2 md:gap-4 mb-10 relative">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActivePricingTab(cat.id)}
                className={`relative px-2 md:px-6 py-2 rounded-full font-semibold transition-colors duration-200`}
              >
                {cat.name}
                {activePricingTab === cat.id && (
                  <motion.div
                    layoutId="pricing-tab-underline"
                    className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-green-400"
                    style={{ zIndex: 1 }}
                  />
                )}
              </button>
            ))}
          </div>
          {/* Tab Content */}
          <div className="">
            {pricingCategories.map((cat) => (
              <div key={cat.id} className={activePricingTab === cat.id ? '' : 'hidden'}>
                {cat.packages.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cat.packages.map((pkg) => {
                      const isPopular = pkg.popular;
                      return (
                        <div
                          key={pkg.id}
                          className={`relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-8 rounded-xl shadow-sm transition-all flex flex-col items-center border-2 ${isPopular ? 'border-blue-600 scale-105 shadow-lg z-10' : 'border-transparent'} hover:scale-[1.01] hover:shadow-xl duration-200`}
                        >
                          {isPopular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-20">Ən Populyar</span>
                          )}
                          <h3 className="text-2xl font-bold text-blue-700 mb-2">{pkg.name}</h3>
                          <div className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent flex flex-col items-center">{pkg.price}{cat.id === 'website' && pkg.name === "E-ticarət" && <span className="text-sm text-gray-500 font-normal">-dən başlayaraq</span>}</div>
                          <ul className="mb-6 text-gray-700 text-left w-full max-w-xs mx-auto space-y-2">
                            {pkg.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={`https://wa.me/994105319987?text=${encodeURIComponent(`Salam! Mən sizin saytınızdan ${cat.name} kateqoriyasından ${pkg.name} sifariş etmək istəyirəm.\nQiymət: ${pkg.price}\nZəhmət olmasa, mənimlə əlaqə saxlayın.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-700 hover:to-green-500 hover:scale-105 transition-all duration-200 shadow-md flex items-center justify-center"
                          >
                            Sifariş et
                          </a>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12 text-lg">Tezliklə əlavə olunacaq.</div>
                )}
                {['smm', 'website', 'design'].includes(cat.id) && cat.notIncluded && (
                  <div className={`mt-10 max-w-xl mx-auto flex items-start gap-4 bg-red-100 border-red-300 border rounded-xl shadow-sm p-5`}>
                    <div className="pt-1">
                      <InfoIcon className={`w-7 h-7 text-red-500`} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-bold text-base mb-2 text-red-800`}>QİYMƏTLƏRƏ DAXİL DEYİL</div>
                      <ul className={`list-disc list-inside space-y-1 text-sm pl-2 ${cat.id === 'smm' ? 'text-red-900' : 'text-yellow-900'}`}>
                        {cat.notIncluded.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Niyə Creadive?
            </h2>
            <p className="text-xl text-gray-600">
              Bizi fərqləndirən xüsusiyyətlər
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Peşəkar Yanaşma
              </h3>
              <p className="text-gray-600">
                Hər bir layihəyə fərdi və peşəkar yanaşma tətbiq edirik
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sürətli İcra
              </h3>
              <p className="text-gray-600">
                Layihələri vaxtında və keyfiyyətlə təhvil veririk
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                İnnovativ Həllər
              </h3>
              <p className="text-gray-600">
                Ən son texnologiyalardan istifadə edərək innovativ həllər təklif
                edirik
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog
            </h2>
            <p className="text-xl text-gray-600">
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
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İş Prosesimiz
            </h2>
            <p className="text-xl text-gray-600">
              Layihələrimizi necə həyata keçiririk
            </p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Texnologiyalar
            </h2>
            <p className="text-xl text-gray-600">
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

      {/* Partners Section */}
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tərəfdaşlarımız
            </h2>
            <p className="text-xl text-gray-600">
              Bizimlə əməkdaşlıq edən şirkətlər
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={60}
                  className="opacity-50 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

      {/* Contact CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tl from-slate-950 to-emerald-600 rounded-2xl py-16 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-2">
                Layihənizi müzakirə edək
              </h2>
              <p className="text-white text-base font-light">
                Bizimlə əlaqə saxlayın və layihənizi həyata keçirək
              </p>
            </div>
            <Link
              // href="/contact"
              href="https://wa.me/994105319987"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors w-full md:w-max"
            >
              Bizə yazın
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Müştərilərimizin Rəyləri
            </h2>
            <p className="text-xl text-gray-600">
              Bizə etibar edən müştərilərimizin təəssüratları
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation, EffectCards]}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <svg
                            className="w-5 h-5 text-pink-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <svg
                        className="absolute -top-2 -left-2 w-8 h-8 text-blue-100"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 text-sm italic relative pl-6">
                        {testimonial.thoughts}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
