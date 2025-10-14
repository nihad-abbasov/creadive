"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Suspense, useState, useEffect } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useSearchParams } from "next/navigation";
import { portfolioApi } from "@/services";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { useLocale } from "next-intl";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
  category?: string;
  client?: string;
  completionDate?: string;
  technologies?: any[];
  technologies_list?: string;
  createdAt?: string;
  updatedAt?: string;
};

type Category = {
  id: string;
  name: string;
  items: PortfolioItem[];
  aspectRatio: string; // Add aspect ratio property
};


// Mock data - kept for admin panel usage
// const categories: Category[] = [
//   {
//     id: "websites",
//     name: "Veb Saytlar",
//     aspectRatio: "aspect-video", // 16:9 for landscape website images
//     items: [
//       {
//         id: 1,
//         title: "21 Couture House",
//         description: "Premium geyim brendi üçün e-ticarət platforması",
//         image: "/images/portfolio/websites/21ch-website.png",
//         link: "https://21couturehouse.az",
//       },
//       {
//         id: 2,
//         title: "Buketchim",
//         description: "Florist xidmətləri üçün veb sayt",
//         image: "/images/portfolio/buketchim-website.png",
//         link: "https://buketchim.az",
//         // url: "https://buketchim.vercel.app",
//       },
//       {
//         id: 3,
//         title: "Mirror Studio",
//         description: "3D Interior Design",
//         image: "/images/portfolio/mirror-website.png",
//         link: "https://mirror-cgi.az",
//         // url: "https://mirror-cgi.vercel.app",
//       },
//     ],
//   },
//   {
//     id: "targeting",
//     name: "Tarqetinq",
//     aspectRatio: "aspect-video", // 16:9 for landscape targeting images
//     items: [
//       {
//         id: 4,
//         title: "21 Couture House",
//         description:
//           "Facebook və Instagram üzrə hədəflənmiş reklam kampaniyaları",
//         image: "/images/portfolio/targeting/21couture-targeting.jpeg",
//       },
//       {
//         id: 5,
//         title: "Buketchim",
//         description: "Instagram və Google Ads üzrə reklam kampaniyaları",
//         image: "/images/portfolio/targeting/buketchim-targeting.jpeg",
//       },
//       {
//         id: 6,
//         title: "Xaricdə Təhsil Şirkəti",
//         description: "Xaricdə Təhsil Şirkəti(Anonim) üçün tarqetinq kampaniyaları",
//         image: "/images/portfolio/targeting/xaricde-tehsil-targeting.jpeg",
//       },
//     ],
//   },
//   {
//     id: "smm",
//     name: "SMM",
//     aspectRatio: "aspect-auto", // 9:16 for portrait SMM images
//     items: [
//       {
//         id: 3,
//         title: "Coffeshop SMM-folio",
//         description: "Instagram üzrə SMM postları və kontent",
//         image: "/images/portfolio/smm/coffeeshop-smm.jpg",
//         link: "https://www.instagram.com/p/DKXVmtkIMQU",
//       },
//       {
//         id: 4,
//         title: "Restaurant SMM-folio",
//         description: "Instagram üzrə SMM postları və kontent",
//         image: "/images/portfolio/smm/restoran-smm.jpg",
//         link: "https://www.instagram.com/p/DKUzctRoyMc",
//       },
//       {
//         id: 5,
//         title: "Maşın yağları üçün SMM-folio",
//         description: "Instagram üzrə SMM postları və kontent",
//         image: "/images/portfolio/smm/mashinyaglari-smm.jpg",
//         link: "https://www.instagram.com/p/DKKbtxkIgO7",
//       },
//     ],
//   },
//   // {
//   //   id: "branding",
//   //   name: "Brendinq",
//   //   items: [
//   //     {
//   //       id: 5,
//   //       title: "21 Couture House Branding",
//   //       description: "Brend identifikasiyası və vizual elementlər",
//   //       image: "/images/portfolio/21couture-branding.png",
//   //     },
//   //     {
//   //       id: 6,
//   //       title: "Buketchim Branding",
//   //       description: "Brend identifikasiyası və vizual elementlər",
//   //       image: "/images/portfolio/buketchim-branding.png",
//   //     },
//   //   ],
//   // },
// ];

export default function Portfolio() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  // State management
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const locale = useLocale();

  // Fetch categories and portfolio data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try to fetch categories first, if that fails, try to get categories from portfolio items
        let categoriesData: any[] = [];
        let portfolioItems: any[] = [];

        try {
          // Fetch categories
          const categoriesResponse = await portfolioApi.getCategories(locale);
          categoriesData = categoriesResponse.data || [];
        } catch (categoryError) {
          console.error('Error fetching categories:', categoryError);
        }

        // Fetch all portfolio items
        const portfolioResponse = await portfolioApi.getAll(locale);
        portfolioItems = portfolioResponse.data || [];

        // If no categories from API, extract unique categories from portfolio items
        if (categoriesData.length === 0 && portfolioItems.length > 0) {
          const uniqueCategories = [...new Set(portfolioItems.map((item: any) => item.category).filter(Boolean))];

          categoriesData = uniqueCategories.map((categoryName: string) => ({
            category: categoryName,
            count: portfolioItems.filter((item: any) => item.category === categoryName).length
          }));
        }

        // If still no categories and no portfolio items, use fallback categories
        if (categoriesData.length === 0 && portfolioItems.length === 0) {
          categoriesData = [
            { category: 'websites', count: 0 },
            { category: 'targeting', count: 0 },
            { category: 'smm', count: 0 }
          ];
        }

        // Group portfolio items by category
        const groupedCategories = categoriesData.map((category: any) => {

          // Handle the actual API response structure: {category: "smm", count: 2}
          const categoryId = category.category || category.id || 'unknown';
          const categoryName = getCategoryDisplayName(categoryId);

          return {
            id: categoryId,
            name: categoryName,
            aspectRatio: getAspectRatio(categoryName),
            items: portfolioItems.filter((item: any) => {
              return item.category === categoryId;
            }),
          };
        });

        setCategories(groupedCategories);

        // Set active category
        if (categoryId && groupedCategories.some((cat) => cat.id === categoryId)) {
          setActiveCategory(categoryId);
        } else if (groupedCategories.length > 0) {
          setActiveCategory(groupedCategories[0].id);
        }
      } catch (err) {
        console.error('Error fetching portfolio data:', err);
        setError('Portfolio məlumatları yüklənərkən xəta baş verdi');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryId, locale]);

  // Helper function to get display name for category
  const getCategoryDisplayName = (categoryId: string) => {
    const categoryMap: { [key: string]: string } = {
      'smm': 'SMM',
      'websites': 'Veb Saytlar',
      'targeting': 'Tarqetinq',
      'branding': 'Brendinq',
      'web-development': 'Veb Saytlar',
      'social-media': 'SMM',
      'digital-marketing': 'Rəqəmsal Marketinq'
    };

    return categoryMap[categoryId] || categoryId.charAt(0).toUpperCase() + categoryId.slice(1);
  };

  // Helper function to determine aspect ratio based on category
  const getAspectRatio = (categoryName: string | undefined) => {
    if (!categoryName) return 'aspect-video'; // Default to landscape

    const name = categoryName.toLowerCase();
    if (name.includes('smm') || name.includes('social')) {
      return 'aspect-auto'; // 9:16 for portrait SMM images
    }
    return 'aspect-video'; // 16:9 for landscape images
  };

  if (loading) {
    return (
      <div className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center !text-white mb-2 tracking-tight">
            Portfolio - Uğurlu Layihələrimiz
          </h1>
          <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Müştərilərimiz üçün həyata keçirdiyimiz veb saytlar, reklam kampaniyaları və dizayn layihələri.
          </p>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <span className="ml-3 text-white text-lg">Yüklənir...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center !text-white mb-2 tracking-tight">
            Portfolio - Uğurlu Layihələrimiz
          </h1>
          <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
            Müştərilərimiz üçün həyata keçirdiyimiz veb saytlar, reklam kampaniyaları və dizayn layihələri.
          </p>
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Xəta baş verdi</h3>
            <p className="text-white/80 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Yenidən yoxla
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          {categories.length > 0 && (
            <>
              {/* <h2 className="text-3xl font-bold text-center !text-white mb-8">
                Layihə Kateqoriyaları
              </h2> */}
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
            </>
          )}

          {/* Portfolio Items */}
          {categories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
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
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Hələ portfolio məlumatları yoxdur
              </h3>
              <p className="text-white/80 text-base max-w-md">
                Portfolio məlumatları tezliklə əlavə olunacaq.
              </p>
            </div>
          ) : (
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
                          Bu kateqoriyada layihələr tezliklə əlavə olunacaq.
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
                      // p-6
                      className="group bg-white rounded-2xl p-0 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      <motion.div
                        className={`relative ${activeCategoryData.aspectRatio} mb-4 overflow-hidden rounded-t-xl`}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={item?.image || "/images/cliente.png"}
                          alt={item.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className={`${item.image ? "w-full" : "w-1/2 mx-auto opacity-40 my-4"} h-full object-contain`}
                        />
                      </motion.div>
                      <div className="px-4 py-2">
                        <motion.h3
                          className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        {item.url && (
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              href={item.url}
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
                      </div>
                    </motion.div>
                  ));
                })()}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </Suspense>
  );
}
