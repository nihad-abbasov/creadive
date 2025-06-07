"use client";
import { Autoplay, Pagination, Navigation, EffectCards } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
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
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "Vebsayt hazırlama",
    description:
      "Biznesiniz üçün müasir, funksional və estetik vebsaytlar hazırlayırıq.",
    icon: "💻",
  },
  {
    title: "UI/UX dizayn",
    description:
      "Müştəri tərəfindən təklif olunan xidmətlərimizin əsasını təşkil edir.",
    icon: "🎨",
  },
  {
    title: "Rəqəmsal marketinq",
    description:
      "Onlayn mövcudluğunuzu artırmaq üçün strateji marketinq həlləri təqdim edirik.",
    icon: "📈",
  },
  {
    title: "Sosial media mərkəzləşmə",
    description:
      "Brend məlumatlılığını və müştəri cəlb edilməsini artırmaq üçün sosial media platformalarında auditoriya ilə əlaqə.",
    icon: "💬",
  },
  {
    title: "Məzmun yaratma",
    description:
      "Müştəriləri cəlb etmək və saxlamaq üçün maraqlı və məlumatlandırıcı məzmun yaradırıq.",
    icon: "📝",
  },
  {
    title: "Grafik dizayn",
    description:
      "Brendiniz və marketinq materiallarınız üçün vizual cəhətdən cəlbedici qrafika yaradırıq.",
    icon: "🎨",
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

// interface FAQ {
//   id: number;
//   question: string;
//   answer: string;
// }

// const faqs: FAQ[] = [
//   {
//     id: 1,
//     question: "Layihənin müddəti nə qədərdir?",
//     answer: "Layihənin müddəti onun mürəkkəbliyindən və tələblərindən asılı olaraq dəyişir. Ortalama bir vebsayt layihəsi 4-8 həftə çəkir."
//   },
//   {
//     id: 2,
//     question: "Hansı ödəniş üsullarını qəbul edirsiniz?",
//     answer: "Biz bank köçürməsi, kredit kartı və digər rəqəmsal ödəniş metodlarını qəbul edirik. Ödənişlər mərhələli şəkildə həyata keçirilir."
//   },
//   {
//     id: 3,
//     question: "Layihə başa çatdıqdan sonra dəstək verirsinizmi?",
//     answer: "Bəli, biz layihə təhvil verildikdən sonra texniki dəstək və təkmilləşdirmə xidmətləri təklif edirik."
//   }
// ];

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Konsultasiya",
    description:
      "Layihənizi və hədəflərinizi başa düşmək üçün ilkin görüş keçiririk.",
    icon: "🤝",
  },
  {
    id: 2,
    title: "Planlaşdırma",
    description: "Detallı layihə planı və strategiya hazırlayırıq.",
    icon: "📋",
  },
  {
    id: 3,
    title: "Dizayn",
    description: "İstifadəçi təcrübəsini və interfeysi hazırlayırıq.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "İnkişaf",
    description: "Layihəni ən son texnologiyalarla həyata keçiririk.",
    icon: "💻",
  },
];

const Homepage = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero2.jpg"
            alt="Hero Background"
            fill
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
                <span className="bg-gradient-to-r from-[#15B6B0] to-[#20C943] bg-clip-text text-transparent">
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
      <div id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Xidmətlərimiz
            </h2>
            <p className="text-xl text-gray-600">
              Təcrübəli komandamız tərəfindən təklif olunan xidmətlər
            </p>
          </div>
          <div className="services-slider-container">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
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
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="services-swiper"
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 h-full group relative overflow-hidden">
                    {/* Gradient Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon with Background */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                        <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="mt-4 inline-flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Ətraflı
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
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
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
      <div className="bg-blue-600 py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {inView ? (
                    <CountUp
                      end={stat.end}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bloq</h2>
            <p className="text-xl text-gray-600">
              Son məqalələrimiz və xəbərlərimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Peşəkar Yanaşma
              </h3>
              <p className="text-gray-600">
                Hər bir layihəyə fərdi və peşəkar yanaşma tətbiq edirik
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Bütün məqalələri oxuyun
            </Link>
          </div>
        </div>
      </div> */}

      {/* Process Steps Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              İş Prosesimiz
            </h2>
            <p className="text-xl text-gray-600">
              Layihələri necə həyata keçiririk
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step) => (
              <div key={step.id} className="relative">
                {step.id !== processSteps.length && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-200 transform translate-y-1/2" />
                )}
                <div className="relative bg-white p-8 rounded-xl shadow-sm z-10">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
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

      {/* FAQ Section */}
      {/* <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tez-tez verilən suallar
            </h2>
            <p className="text-xl text-gray-600">
              Ən çox soruşulan suallara cavablar
            </p>
          </div>
          <div className="grid gap-8 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Partners Section */}
      {/* <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnyorlarımız
            </h2>
            <p className="text-xl text-gray-600">
              Bizə etibar edən şirkətlər
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div key={partner} className="flex items-center justify-center p-4">
                <div className="w-32 h-20 bg-gray-200 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Contact CTA Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl py-12 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between">
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
