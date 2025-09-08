"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { RxDoubleArrowRight } from "react-icons/rx";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
};

type Category = {
  id: string;
  name: string;
  items: PortfolioItem[];
  aspectRatio: string; // Add aspect ratio property
};

const categories: Category[] = [
  {
    id: "websites",
    name: "Veb Saytlar",
    aspectRatio: "aspect-video", // 16:9 for landscape website images
    items: [
      {
        id: 1,
        title: "21 Couture House",
        description: "Premium geyim brendi üçün e-ticarət platforması",
        image: "/images/portfolio/websites/21ch-website.png",
        link: "https://21couturehouse.az",
      },
      {
        id: 2,
        title: "Buketchim",
        description: "Florist xidmətləri üçün veb sayt",
        image: "/images/portfolio/buketchim-website.png",
        link: "https://buketchim.az",
        // url: "https://buketchim.vercel.app",
      },
      {
        id: 3,
        title: "Mirror Studio",
        description: "3D Interior Design",
        image: "/images/portfolio/mirror-website.png",
        link: "https://mirror-cgi.az",
        // url: "https://mirror-cgi.vercel.app",
      },
    ],
  },
  {
    id: "targeting",
    name: "Tarqetinq",
    aspectRatio: "aspect-video", // 16:9 for landscape targeting images
    items: [
      {
        id: 4,
        title: "21 Couture House",
        description:
          "Facebook və Instagram üzrə hədəflənmiş reklam kampaniyaları",
        image: "/images/portfolio/targeting/21couture-targeting.jpeg",
      },
      {
        id: 5,
        title: "Buketchim",
        description: "Instagram və Google Ads üzrə reklam kampaniyaları",
        image: "/images/portfolio/targeting/buketchim-targeting.jpeg",
      },
      {
        id: 6,
        title: "Xaricdə Təhsil Şirkəti",
        description: "Xaricdə Təhsil Şirkəti(Anonim) üçün tarqetinq kampaniyaları",
        image: "/images/portfolio/targeting/xaricde-tehsil-targeting.jpeg",
      },
    ],
  },
  {
    id: "smm",
    name: "SMM",
    aspectRatio: "aspect-auto", // 9:16 for portrait SMM images
    items: [
      {
        id: 3,
        title: "Coffeshop SMM-folio",
        description: "Instagram üzrə SMM postları və kontent",
        image: "/images/portfolio/smm/coffeeshop-smm.jpg",
        link: "https://www.instagram.com/p/DKXVmtkIMQU",
      },
      {
        id: 4,
        title: "Restaurant SMM-folio",
        description: "Instagram üzrə SMM postları və kontent",
        image: "/images/portfolio/smm/restoran-smm.jpg",
        link: "https://www.instagram.com/p/DKUzctRoyMc",
      },
      {
        id: 5,
        title: "Maşın yağları üçün SMM-folio",
        description: "Instagram üzrə SMM postları və kontent",
        image: "/images/portfolio/smm/mashinyaglari-smm.jpg",
        link: "https://www.instagram.com/p/DKKbtxkIgO7",
      },
    ],
  },
  // {
  //   id: "branding",
  //   name: "Brendinq",
  //   items: [
  //     {
  //       id: 5,
  //       title: "21 Couture House Branding",
  //       description: "Brend identifikasiyası və vizual elementlər",
  //       image: "/images/portfolio/21couture-branding.png",
  //     },
  //     {
  //       id: 6,
  //       title: "Buketchim Branding",
  //       description: "Brend identifikasiyası və vizual elementlər",
  //       image: "/images/portfolio/buketchim-branding.png",
  //     },
  //   ],
  // },
];

export default function Portfolio() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(
    categoryId || categories[0].id
  );

  useEffect(() => {
    if (categoryId && categories.some((cat) => cat.id === categoryId)) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  return (
    <Suspense>
      {/* bg-white */}
      <div className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center !text-white mb-2 tracking-tight">
            Portfolio - Uğurlu Layihələrimiz
          </h1>
          <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Müştərilərimiz üçün həyata keçirdiyimiz veb saytlar, reklam kampaniyaları və dizayn layihələri.
          </p>

          {/* Category Tabs */}
          <h2 className="text-3xl font-bold text-center !text-white mb-8">
            Layihə Kateqoriyaları
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Portfolio Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(() => {
                const activeCategoryData = categories.find(
                  (cat) => cat.id === activeCategory
                );
                if (
                  !activeCategoryData ||
                  activeCategoryData.items.length === 0
                ) {
                  return (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="col-span-full flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ rotate: -10, scale: 0.8 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-2xl font-semibold text-white mb-2"
                      >
                        Bu kateqoriyada hələ layihə yoxdur
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="text-white/80 text-base max-w-md"
                      >
                        {activeCategory === "smm" &&
                          "SMM layihələrimiz tezliklə əlavə olunacaq."}
                        {activeCategory === "branding" &&
                          "Brendinq layihələrimiz tezliklə əlavə olunacaq."}
                        {activeCategory === "websites" &&
                          "Veb sayt layihələrimiz tezliklə əlavə olunacaq."}
                        {activeCategory === "targeting" &&
                          "Tarqetinq layihələrimiz tezliklə əlavə olunacaq."}
                      </motion.p>
                    </motion.div>
                  );
                }

                return activeCategoryData.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.2 },
                    }}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <motion.div
                      className={`relative ${activeCategoryData.aspectRatio} mb-4 overflow-hidden rounded-xl`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.title}
                    </motion.h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {item.link && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                        >
                          Ətraflı bax
                          <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                            <RxDoubleArrowRight />
                          </motion.div>
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ));
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Suspense>
  );
}
