"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    name: "Targeting",
    items: [
      {
        id: 7,
        title: "21 Couture House Targeting",
        description:
          "Facebook və Instagram üzrə hədəflənmiş reklam kampaniyaları",
        image: "/images/portfolio/21couture-targeting.png",
      },
      {
        id: 8,
        title: "Buketchim Targeting",
        description: "Instagram və Google Ads üzrə reklam kampaniyaları",
        image: "/images/portfolio/buketchim-targeting.png",
      },
    ],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-2 tracking-tight drop-shadow-lg">
          Portfolio
        </h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Layihələrimiz və uğurlu işlərimiz.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-[#232b39] text-gray-300 hover:bg-[#2a3444]"
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
                className="group bg-[#232b39]/90 rounded-2xl p-6 shadow-xl hover:bg-[#2a3444] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
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
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-300 mb-4">{item.description}</p>
                {item.url && (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
  );
}
