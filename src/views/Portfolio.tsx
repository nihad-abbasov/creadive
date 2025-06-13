"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  url?: string;
};

type Category = {
  id: string;
  name: string;
  items: PortfolioItem[];
};

const categories: Category[] = [
  {
    id: "websites",
    name: "Veb Saytlar",
    items: [
      {
        id: 1,
        title: "21 Couture House",
        description: "Premium geyim brendi üçün e-ticarət platforması",
        image: "/images/portfolio/21couture.png",
        url: "https://21couturehouse.az",
      },
      {
        id: 2,
        title: "Buketchim",
        description: "Florist xidmətləri üçün veb sayt",
        image: "/images/portfolio/buketchim.png",
        url: "https://buketchim.vercel.app",
      },
    ],
  },
  {
    id: "smm",
    name: "SMM",
    items: [
      {
        id: 3,
        title: "21 Couture House SMM",
        description: "Instagram və Facebook üzrə sosial media marketinq",
        image: "/images/portfolio/21couture-smm.png",
      },
      {
        id: 4,
        title: "Buketchim SMM",
        description: "Instagram üzrə kontent yaradıcılığı və marketinq",
        image: "/images/portfolio/buketchim-smm.png",
      },
    ],
  },
  {
    id: "branding",
    name: "Brendinq",
    items: [
      {
        id: 5,
        title: "21 Couture House Branding",
        description: "Brend identifikasiyası və vizual elementlər",
        image: "/images/portfolio/21couture-branding.png",
      },
      {
        id: 6,
        title: "Buketchim Branding",
        description: "Brend identifikasiyası və vizual elementlər",
        image: "/images/portfolio/buketchim-branding.png",
      },
    ],
  },
  {
    id: "targeting",
    name: "Tarqetinq",
    items: [
      {
        id: 7,
        title: "21 Couture House Tarqetinq",
        description:
          "Facebook və Instagram üzrə hədəflənmiş reklam kampaniyaları",
        image: "/images/portfolio/21couture-targeting.png",
      },
      {
        id: 8,
        title: "Buketchim Tarqetinq",
        description: "Instagram və Google Ads üzrə reklam kampaniyaları",
        image: "/images/portfolio/buketchim-targeting.png",
      },
    ],
  },
];

export default function Portfolio() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(categoryId || categories[0].id);

  useEffect(() => {
    if (categoryId && categories.some(cat => cat.id === categoryId)) {
      setActiveCategory(categoryId);
    }
  }, [categoryId]);

  return (
    <Suspense>
      <div className="py-16 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-2 tracking-tight">
            Portfolio
          </h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Layihələrimiz və uğurlu işlərimiz.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories
              .find((cat) => cat.id === activeCategory)
              ?.items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                >
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.url && (
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      Sayta bax
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
