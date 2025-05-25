type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Modern və funksional veb saytlar və tətbiqlər.",
    icon: "🌐"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "İstifadəçi təcrübəsini artıran kreativ dizayn həlləri.",
    icon: "🎨"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Brendinizi rəqəmsal dünyada tanıdın və böyüdün.",
    icon: "📈"
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description: "iOS və Android üçün yüksək keyfiyyətli mobil tətbiqlər.",
    icon: "📱"
  },
  {
    id: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description: "Online satış platformaları və e-ticarət həlləri.",
    icon: "🛍️"
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Axtarış sistemlərində yüksək sıralama üçün optimallaşdırma.",
    icon: "🔍"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Brendiniz üçün unikal və cəlbedici kontent.",
    icon: "✍️"
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description: "Sosial media platformalarında professional idarəetmə.",
    icon: "📱"
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description: "Effektiv brend strategiyası və marketinq planlaması.",
    icon: "🎯"
  },
  {
    id: "analytics-reporting",
    title: "Analytics & Reporting",
    description: "Detallı analitika və performans hesabatları.",
    icon: "📊"
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Bulud texnologiyaları və hosting xidmətləri.",
    icon: "☁️"
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description: "Təhlükəsizlik audit və qorunma həlləri.",
    icon: "🔒"
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Üçüncü tərəf sistemləri ilə inteqrasiya.",
    icon: "🔌"
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "IT və digital transformasiya məsləhətləri.",
    icon: "💡"
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7 texniki dəstək və problemlərin həlli.",
    icon: "🛠️"
  },
];

export default function Services() {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Xidmətlərimiz
        </h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Brendinizi inkişaf etdirmək üçün təqdim etdiyimiz əsas xidmətlər.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#232b39]/90 rounded-2xl p-8 shadow-lg text-center transition-all duration-300 hover:bg-[#2a3444] hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-4xl mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
