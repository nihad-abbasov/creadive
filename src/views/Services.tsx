"use client"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
};

const services: Service[] = [
  {
    id: "web-development",
    title: "Vebsayt yaradılması",
    description: "Modern və funksional veb saytlar və tətbiqlər.",
    details: `Biznesiniz üçün tam fərdiləşdirilmiş, sürətli və təhlükəsiz veb saytlar və tətbiqlər hazırlayırıq. Responsive dizayn, SEO Optimizasıyası və ən son texnologiyalardan istifadə edirik. Məqsədimiz, brendinizi rəqəmsal dünyada uğurla təmsil etməkdir.`,
    image: "/images/services/web-development.jpg"
  },
  {
    id: "smm",
    title: "SMM",
    description: "Sosial media platformalarında professional idarəetmə.",
    details: `Instagram, Facebook, LinkedIn və digər platformalarda brendinizi effektiv şəkildə idarə edirik. Kontent planlaması, reklam və icma idarəçiliyi ilə sosial mediada uğur qazanın.`,
    image: "/images/services/social-media.jpg"
  },
  {
    id: "targeting",
    title: "Tarqetinq",
    description: "Dəqiq hədəfləndirmə və effektiv reklam kampaniyaları.",
    details: `Hədəf auditoriyanıza çatmaq üçün dəqiq hədəfləndirmə strategiyaları hazırlayırıq. Reklam kampaniyalarınızı optimallaşdıraraq maksimum ROI əldə edin.`,
    image: "/images/services/targeting.jpg"
  },
  {
    id: "ui-ux",
    title: "UI/UX Dizayn",
    description: "İstifadəçi təcrübəsini artıran kreativ dizayn həlləri.",
    details: `İstifadəçi mərkəzli yanaşma ilə interfeyslər dizayn edirik. Rəng palitrası, tipografiya və vizual elementlərdə brendinizin ruhunu əks etdiririk. Məqsədimiz, istifadəçilər üçün rahat və cəlbedici təcrübə yaratmaqdır.`,
    image: "/images/services/ui-ux-design.jpg"
  },
  {
    id: "digital-marketing",
    title: "Rəqəmsal Marketinq",
    description: "Brendinizi rəqəmsal dünyada tanıdın və böyüdün.",
    details: `Rəqəmsal marketinq strategiyaları, sosial media idarəçiliyi, reklam kampaniyaları və analitika ilə brendinizi onlayn mühitdə gücləndiririk. Hədəf auditoriyanıza çatmaq və satışlarınızı artırmaq üçün effektiv həllər təklif edirik.`,
    image: "/images/services/digital-marketing.jpg"
  },
  {
    id: "seo",
    title: "SEO",
    description: "Axtarış sistemlərində yüksək sıralama üçün Optimizasıyası.",
    details: `Saytınızın Google və digər axtarış sistemlərində ön sıralarda çıxması üçün texniki və məzmun Optimizasıyası edirik. Trafikinizi və görünürlüyünüzü artırırıq.`,
    image: "/images/services/seo.jpg"
  },
  {
    id: "graphic-design",
    title: "Qrafik Dizayn",
    description: "Professional qrafik dizayn və brend identifikasiyası.",
    details: `Logo, brend kitabı, sosial media dizaynları və digər vizual elementlərlə brendinizi gücləndiririk. Kreativ və müasir dizayn həlləri ilə fərqlənin.`,
    image: "/images/services/graphic-design.jpg"
  },

  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "iOS və Android üçün yüksək keyfiyyətli mobil tətbiqlər.",
    details: `Mobil istifadəçilər üçün sürətli, funksional və estetik tətbiqlər hazırlayırıq. iOS və Android platformalarında mükəmməl işləyən həllər təqdim edirik. İstifadəçi təcrübəsi və performans bizim üçün ön plandadır.`,
    image: "/images/services/mobile-development.jpg"
  },
];

export default function Services() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get('service');
  const [activeService, setActiveService] = useState<string | null>(null);
  const [, setIsModalOpen] = useState(false);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(serviceId);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (serviceId && services.some(s => s.id === serviceId)) {
      setActiveService(serviceId);
      const serviceElement = document.getElementById(serviceId);
      if (serviceElement) {
        serviceElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [serviceId]);

  return (
    <div className="py-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">
          Xidmətlərimiz
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Biznesiniz üçün ən yaxşı həlləri təklif edirik
        </p>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-0 bg-white z-10 py-4 shadow-sm">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services?service=${service.id}`}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm ${
                activeService === service.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {service.title}
            </Link>
          ))}
        </div>

        {/* Service Items */}
        <div className="flex flex-col gap-12">
          {services.map((service, idx) => (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image */}
                <motion.div
                  className={`relative w-full h-64 md:h-80 ${idx % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full rounded-none md:rounded-2xl shadow-sm"
                  />
                </motion.div>
                {/* Content */}
                <div className="p-6 md:p-8">
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 mb-6"
                  >
                    {service.description}
                  </motion.p>
                  <motion.div 
                    className="text-gray-600"
                  >
                    {service.details}
                  </motion.div>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
