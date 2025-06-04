"use client";

import Image from "next/image";
import { useState } from "react";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    image: string;
  };
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Rəqəmsal Marketinq Strategiyaları 2024",
    excerpt:
      "2024-cü ildə rəqəmsal marketinqdə ən effektiv strategiyalar və trendlər haqqında dərin analiz.",
    category: "Marketinq",
    date: "15 Mart 2024",
    readTime: "5 dəq",
    image: "/images/blog/marketing.jpg",
    author: {
      name: "Rəşad Məmmədli",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 2,
    title: "UI/UX Dizayn Prinsipləri",
    excerpt:
      "İstifadəçi təcrübəsini yaxşılaşdıran əsas dizayn prinsipləri və best practice-lər.",
    category: "Dizayn",
    date: "12 Mart 2024",
    readTime: "7 dəq",
    image: "/images/blog/design.jpg",
    author: {
      name: "Leyla Əliyeva",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 3,
    title: "SEO Optimizasiyası",
    excerpt:
      "Axtarış sistemlərində yüksək sıralanma üçün effektiv SEO strategiyaları.",
    category: "SEO",
    date: "10 Mart 2024",
    readTime: "6 dəq",
    image: "/images/blog/seo.jpg",
    author: {
      name: "Nihad Abbasov",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 4,
    title: "Sosial Media Marketinqi",
    excerpt:
      "Sosial media platformalarında uğurlu marketinq strategiyaları və content planlaması.",
    category: "Marketinq",
    date: "8 Mart 2024",
    readTime: "4 dəq",
    image: "/images/blog/social.jpg",
    author: {
      name: "Zəhra Qurbanova",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 5,
    title: "Web Development Trendləri",
    excerpt:
      "2024-cü ildə web development sahəsində ən populyar texnologiyalar və trendlər.",
    category: "Development",
    date: "5 Mart 2024",
    readTime: "8 dəq",
    image: "/images/blog/web.jpg",
    author: {
      name: "Əli Hüseynov",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 6,
    title: "Branding Strategiyaları",
    excerpt:
      "Uğurlu brend yaratmaq üçün əsas strategiyalar və best practice-lər.",
    category: "Branding",
    date: "3 Mart 2024",
    readTime: "5 dəq",
    image: "/images/blog/branding.jpg",
    author: {
      name: "Aynur Məmmədova",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 7,
    title: "Content Marketing",
    excerpt:
      "Content marketing strategiyaları və effektiv content yaratma üsulları.",
    category: "Marketinq",
    date: "1 Mart 2024",
    readTime: "6 dəq",
    image: "/images/blog/content.jpg",
    author: {
      name: "Zəhra Qurbanova",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 8,
    title: "Mobile App Dizaynı",
    excerpt: "İstifadəçi dostu mobile app dizaynı üçün əsas prinsiplər.",
    category: "Dizayn",
    date: "28 Fevral 2024",
    readTime: "7 dəq",
    image: "/images/blog/mobile.jpg",
    author: {
      name: "Leyla Əliyeva",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 9,
    title: "E-commerce Strategiyaları",
    excerpt:
      "Online satışları artırmaq üçün effektiv e-commerce strategiyaları.",
    category: "E-commerce",
    date: "25 Fevral 2024",
    readTime: "5 dəq",
    image: "/images/blog/ecommerce.jpg",
    author: {
      name: "Rəşad Məmmədli",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 10,
    title: "Data Analytics",
    excerpt: "Business qərarlar üçün data analizi və reporting.",
    category: "Analytics",
    date: "22 Fevral 2024",
    readTime: "6 dəq",
    image: "/images/blog/analytics.jpg",
    author: {
      name: "Nihad Abbasov",
      image: "/images/team/nihad.jpg",
    },
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  return (
    <div className="py-16 min-h-screen bg-gradient-to-br from-[#1e2533] via-[#232b39] to-[#181f2a]">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Bloq
        </h1>
        <p className="text-lg text-blue-100 text-center mb-12 max-w-2xl mx-auto">
          Agentliyimizin yenilikləri, məqalələri və xəbərləri.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${selectedCategory === null
              ? "bg-blue-500 text-white"
              : "bg-[#2a3444] text-gray-300 hover:bg-blue-500 hover:text-white"
              }`}
          >
            Hamısı
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-[#2a3444] text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#232b39]/90 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500/90 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-300">{post.author.name}</p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <span className="text-sm text-gray-400">
                    {post.readTime} oxumaq
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Ətraflı →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">
              Bu kateqoriyada məqalə tapılmadı.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
