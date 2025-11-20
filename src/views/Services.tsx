"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, useMemo, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Schema from "@/components/Schema";
import { servicesApi } from "@/services";
// import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
};

// Mock data - kept for reference and fallback
const mockServices: Service[] = [
  {
    id: "web-development",
    title: "Website Development", // This will be overridden by translations
    description: "Modern and functional websites and applications.",
    details:
      "We create fully customized, fast and secure websites and applications for your business. We use responsive design, SEO optimization and the latest technologies. Our goal is to successfully represent your brand in the digital world.",
    image: "/images/services/web-development.jpg",
  },
  {
    id: "smm",
    title: "SMM",
    description: "Professional management on social media platforms.",
    details:
      "We effectively manage your brand on Instagram, Facebook, LinkedIn and other platforms. Achieve success in social media with content planning, advertising and community management.",
    image: "/images/services/social-media.jpg",
  },
  {
    id: "targeting",
    title: "Targeting",
    description: "Precise targeting and effective advertising campaigns.",
    details:
      "We develop precise targeting strategies to reach your target audience. Get maximum ROI by optimizing your advertising campaigns.",
    image: "/images/services/targeting.jpg",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description: "Creative design solutions that enhance user experience.",
    details:
      "We design interfaces with a user-centered approach. We reflect the spirit of your brand in color palette, typography and visual elements. Our goal is to create a comfortable and attractive experience for users.",
    image: "/images/services/ui-ux-design.jpg",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Introduce and grow your brand in the digital world.",
    details:
      "We strengthen your brand in the online environment with digital marketing strategies, social media management, advertising campaigns and analytics. We offer effective solutions to reach your target audience and increase your sales.",
    image: "/images/services/digital-marketing.jpg",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Optimization for high ranking in search engines.",
    details:
      "We perform technical and content optimization for your site to appear in the top ranks of Google and other search engines. We increase your traffic and visibility.",
    image: "/images/services/seo.jpg",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Professional graphic design and brand identification.",
    details:
      "We strengthen your brand with logos, brand books, social media designs and other visual elements. Stand out with creative and modern design solutions.",
    image: "/images/services/graphic-design.jpg",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "High-quality mobile applications for iOS and Android.",
    details:
      "We create fast, functional and aesthetic applications for mobile users. We present perfect solutions that work on iOS and Android platforms. User experience and performance are our priority.",
    image: "/images/services/mobile-development.jpg",
  },
];

export default function Services() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");
  const [activeService, setActiveService] = useState<string | null>(null);
  const [, setIsModalOpen] = useState(false);

  // API state management
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();
  const t = useTranslations("services");

  // Function to get translated service data
  const getTranslatedService = useCallback(
    (service: Service) => {
      const serviceKey = service.id;
      return {
        ...service,
        title: t(`items.${serviceKey}.title`),
        description: t(`items.${serviceKey}.description`),
        details: t(`items.${serviceKey}.details`),
      };
    },
    [t]
  );

  const handleServiceClick = (serviceId: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    setActiveService(serviceId);
    setIsModalOpen(true);

    // Smooth scroll to the service section with offset for fixed header
    setTimeout(() => {
      const serviceElement = document.getElementById(serviceId);
      if (serviceElement) {
        const headerOffset = 80; // Account for fixed header height
        const elementPosition = serviceElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  // Memoize translated services to prevent unnecessary recalculations
  const translatedServices = useMemo(() => {
    return services.map((service) => getTranslatedService(service));
  }, [services, getTranslatedService]);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await servicesApi.getAll(locale);
        const apiServices = response.data || [];

        // If API returns empty or fails, use mock data as fallback
        if (apiServices.length === 0) {
          console.warn(
            "API returned empty services, using mock data as fallback"
          );
          setServices(mockServices);
        } else {
          setServices(apiServices);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setError(t("error"));
        // Use mock data as fallback on error
        setServices(mockServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [locale, t]);

  // Handle service scrolling when serviceId changes
  useEffect(() => {
    if (serviceId && services.some((s) => s.id === serviceId)) {
      setActiveService(serviceId);
      // Add a small delay to ensure the DOM is updated
      setTimeout(() => {
        const serviceElement = document.getElementById(serviceId);
        if (serviceElement) {
          const headerOffset = 80; // Account for fixed header height
          const elementPosition = serviceElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [serviceId, services]);

  return (
    <div className="py-16 min-h-screen">
      {/* Schema Markup for Services */}
      {/* TODO: Check if data that comes from the backend is valid for schema markup */}
      {services.map((service) => (
        <Schema key={service.id} type="service" data={service} />
      ))}

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center !text-white mb-2 tracking-tight">
          {t("title")}
        </h1>
        <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <span className="ml-3 text-white">{t("loading")}</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 w-full md:w-max mx-auto">
            <p className="text-center">{error}</p>
          </div>
        )}

        {/* Main Content - only show when not loading */}
        {!loading && (
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Service Tabs */}
            <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap justify-center space-y-3 md:sticky top-20 z-10 shadow-sm w-full lg:w-1/4">
              {translatedServices.map((translatedService) => (
                <button
                  key={translatedService.id}
                  onClick={(e) => handleServiceClick(translatedService.id, e)}
                  className={`px-4 py-4 rounded-xl text-center font-semibold transition-all duration-300 text-sm ${
                    activeService === translatedService.id
                      ? "bg-gradient-to-r from-slate-800 to-blue-700 text-white shadow-lg border border-slate-400"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {translatedService.title}
                </button>
              ))}
            </div>

            {/* Service Items */}
            <div className="flex flex-col space-y-8 w-full lg:w-full">
              {translatedServices.map((translatedService, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <motion.section
                    key={translatedService.id}
                    id={translatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-lg transition-all duration-300"
                    onClick={() => handleServiceClick(translatedService.id)}
                  >
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:space-x-2 items-center ${
                        isEven ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Image */}
                      <motion.div
                        className={`relative w-full h-52 md:h-60 ${
                          !isEven ? "md:order-2" : ""
                        }`}
                      >
                        <Image
                          src={translatedService.image}
                          alt={translatedService.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className={`object-cover w-full h-full rounded-none ${
                            isEven
                              ? "md:rounded-l-lg md:rounded-r-none"
                              : "md:rounded-r-lg md:rounded-l-none"
                          } shadow-sm`}
                        />
                      </motion.div>
                      {/* Content */}
                      <div className="p-4 md:p-6">
                        <motion.h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {translatedService.title}
                        </motion.h3>
                        <motion.p className="text-gray-600 mb-3">
                          {translatedService.description}
                        </motion.p>
                        <motion.div className="text-[#707070] text-xs font-light leading-relaxed">
                          {translatedService.details}
                        </motion.div>
                      </div>
                    </div>
                  </motion.section>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
