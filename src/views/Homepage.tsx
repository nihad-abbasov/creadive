"use client";

import {
  WebIcon,
  UiuxIcon,
  DigitalIcon,
  SocialIcon,
  ContentIcon,
  GraphicIcon,
  HomeCheckIcon,
  HomeInfoIcon,
  HomeSeePortfolioIcon,
  HomeSeeAllServicesIcon,
  HomePricingCubeIcon,
  HomeWpOrderIcon,
} from "../../public/icons/homepage";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import { processSteps, ourFeatures } from "@/data/homepage";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoRocketOutline } from "react-icons/io5";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  testimonialsApi,
  type Testimonial as ApiTestimonial,
} from "@/services/testimonials";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import "swiper/css";

interface Testimonial {
  id: number;
  name: string;
  thoughts: string;
  role: string;
  // companyLogo: string;
  instagramUrl: string;
}

// Mock testimonials data as fallback
const mockTestimonials: Testimonial[] = [
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
    title: "web",
    description: "web",
    icon: ({ className }) => <WebIcon className={className} />,
  },
  {
    id: 2,
    title: "uiux",
    description: "uiux",
    icon: ({ className }) => <UiuxIcon className={className} />,
  },
  {
    id: 3,
    title: "digital",
    description: "digital",
    icon: ({ className }) => <DigitalIcon className={className} />,
  },
  {
    id: 4,
    title: "social",
    description: "social",
    icon: ({ className }) => <SocialIcon className={className} />,
  },
  {
    id: 5,
    title: "content",
    description: "content",
    icon: ({ className }) => <ContentIcon className={className} />,
  },
  {
    id: 6,
    title: "graphic",
    description: "graphic",
    icon: ({ className }) => <GraphicIcon className={className} />,
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
    end: 50,
    label: "completedProjects",
    suffix: "+",
  },
  {
    id: 2,
    end: 100,
    label: "satisfiedClients",
    suffix: "%",
  },
  {
    id: 3,
    end: 5,
    label: "yearsExperience",
    suffix: "+",
  },
  {
    id: 4,
    end: 24,
    label: "customerSupport",
    suffix: "/7",
  },
];

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
        price: "529 AZN",
        features: [
          "Loqo dizaynı",
          "Vizit kart dizaynı",
          "Sosial media şablonları",
          "Brend kitabçası",
        ],
        popular: true,
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

const Homepage = () => {
  const t = useTranslations("homepage");
  const locale = useLocale();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [activePricingTab, setActivePricingTab] = useState(
    pricingCategories[0].id
  );
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(mockTestimonials);

  // Handle hash navigation (e.g., /#home-pricing-section)
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # from the hash
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 100);
        }
      }
    };

    // Run on mount
    scrollToHash();

    // Also listen for hash changes (when user clicks a link with hash)
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await testimonialsApi.getAll(undefined, locale);
        const data = response.data;

        // Handle both paginated response (with results) and direct array response
        let apiTestimonials: ApiTestimonial[] = [];
        if (Array.isArray(data)) {
          apiTestimonials = data;
        } else if (data && "results" in data && Array.isArray(data.results)) {
          apiTestimonials = data.results;
        }

        // Transform API response (capitalized fields) to component format (lowercase)
        if (apiTestimonials.length > 0) {
          const transformedTestimonials: Testimonial[] = apiTestimonials.map(
            (item) => ({
              id: item.id,
              name: item.Name,
              thoughts: item.Thoughts,
              role: item.Role,
              instagramUrl: item.InstagramUrl,
            })
          );
          setTestimonials(transformedTestimonials);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        // Keep mock data as fallback
        setTestimonials(mockTestimonials);
      }
    };

    fetchTestimonials();
  }, [locale]);

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
            sizes="100vw"
            className="object-cover"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/90 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center relative">
              <div className="homepage_3d_icons_section">
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.2, rotate: -15 }}
                  className="absolute md:-bottom-24 right-0 md:right-28"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/3d_icons/target-dynamic-color.png"
                      alt="Target"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-12 md:w-20 h-auto"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, y: -30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 150,
                  }}
                  whileHover={{ scale: 1.25, y: -5 }}
                  className="absolute -top-20 right-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/3d_icons/flash-dynamic-color.png"
                      alt="Flash Icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-9 md:w-20 h-auto"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.2, rotate: 20 }}
                  className="absolute -top-20 left-40 md:left-[540px]"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/3d_icons/notify-heart-dynamic-color.png"
                      alt="Heart Notification Icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-12 md:w-20 h-auto"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 270 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.6,
                    type: "spring",
                    stiffness: 80,
                  }}
                  whileHover={{ scale: 1.4, y: -10 }}
                  className="absolute top-6 md:-top-36 md:-left-12"
                >
                  <motion.div
                    animate={{ y: [0, 12, 0], rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 4.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/3d_icons/rocket-dynamic-color.png"
                      alt="Rocket Icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-12 md:w-32 h-auto"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: 45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 1,
                    delay: 1.1,
                    type: "spring",
                    stiffness: 110,
                  }}
                  whileHover={{ scale: 1.25, rotate: -8 }}
                  className="absolute -top-16 md:top-auto md:-bottom-12 left-6 md:left-56"
                >
                  <motion.div
                    animate={{ y: [0, -5, 0], x: [0, 2, -2, 0] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src="/images/3d_icons/thumb-up-dynamic-color.png"
                      alt="Thumbs Up Icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-12 md:w-20 h-auto"
                    />
                  </motion.div>
                </motion.div>
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.6)]"
              >
                {t.rich("hero.title", {
                  grad: (chunks) => (
                    <span className="bg-gradient-to-l from-[#15B6B0] to-[#20C943] bg-clip-text text-transparent font-bold drop-shadow-[0_0_30px_rgba(22,182,176,0.8)]">
                      {chunks}
                    </span>
                  ),
                })}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto"
              >
                {t.rich("hero.subtitle", {
                  grad: (chunks) => (
                    <span className="bg-gradient-to-l from-[#15B6B0] to-[#20C943] bg-clip-text text-transparent font-bold">
                      {chunks}
                    </span>
                  ),
                })}
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
                  {t("hero.startProject")}
                </Link>
                <Link
                  id="home-portfolio-link"
                  href="/portfolio"
                  aria-label="Portfolio"
                  // data-gtm-id="home-portfolio-link"
                  className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                >
                  <HomeSeePortfolioIcon />
                  {t("hero.viewPortfolio")}
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
          className="absolute bottom-3 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
              {t("services.title")}
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
                <div className="h-full bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-blue-200">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {t(`services.items.${service.title}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`services.items.${service.title}.description`)}
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
              <span>{t("services.viewAll")}</span>
              <HomeSeeAllServicesIcon />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Uğurlu veb Dizayn və Rəqəmsal Marketinq Layihələrimiz
            </h2>
            <p className="text-base text-gray-600">
              Müştərilərimiz üçün hazırladığımız veb saytlar və marketing kampaniyaları
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
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
                  {t(`stats.${stat.label}`)}
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
              {t("partners.title")}
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
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[150px] md:w-[120px] h-[80px] md:h-[60px] object-contain transition-all duration-300"
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
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[150px] md:w-[120px] h-[80px] md:h-[60px] object-contain transition-all duration-300"
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
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-[150px] md:w-[120px] h-[80px] md:h-[60px] object-contain transition-all duration-300"
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
        // FIXME: when redirect this section from other pages, it doesnt come down to this section. Have some functional fix for this
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
              {t("pricing.title")}
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
            id="home-pricing-section"
          >
            <div className="bg-white backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-gray-200 grid grid-cols-3 w-full md:w-max">
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
                                <HomePricingCubeIcon />
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
                                      <HomeCheckIcon className="w-3 h-3" />
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
                                  <HomeWpOrderIcon />
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
                              <HomeInfoIcon className="w-6 h-6 text-red-600" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-3 text-gray-900">
                              QİYMƏTLƏRƏ DAXİL DEYİL
                            </h3>
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
              {t("whyChooseUs.title")}
            </h2>
            {/* <p className="text-base text-white/80">
              Bizi fərqləndirən xüsusiyyətlər
            </p> */}
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {ourFeatures.map((feature, index) => (
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
                  {t(`whyChooseUs.features.${feature.title}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`whyChooseUs.features.${feature.title}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

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
              {t("process.title")}
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
                  {t(`process.steps.${step.title}.title`)}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[200px] mx-auto">
                  {t(`process.steps.${step.title}.description`)}
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
              Veb Dizayn və Vebsayt Hazırlanmasında İstifadə Etdiyimiz Texnologiyalar
            </h2>
            <p className="text-base text-gray-600">
              React, Next.js, WordPress və digər müasir web development texnologiyaları
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
        <div className="max-w-7xl mx-auto md:px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              {t("testimonials.title")}
            </h2>
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
        id="contact_cta_section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
              <h2 className="text-3xl font-bold text-white mb-2 md:w-[80%]">
                {t("contactCTA.title")}
              </h2>
              <p className="text-white text-base font-light">
                {t("contactCTA.subtitle")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                aria-label="Contact via WhatsApp"
                href="https://wa.me/994105319987"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors w-full md:w-max"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("contactCTA.button")}
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
