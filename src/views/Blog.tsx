"use client";

import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

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
    title: "Rəqəmsal Marketinq Strategiyaları 2025",
    excerpt:
      "2025-ci ildə rəqəmsal marketinqdə ən effektiv strategiyalar və trendlər haqqında dərin analiz.",
    category: "Marketinq",
    date: "15 Mart 2025",
    readTime: "5 dəq",
    image: "/images/blog/digital-marketing.jpg",
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
    date: "12 Mart 2025",
    readTime: "7 dəq",
    image: "/images/blog/ux-ui.jpg",
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
    date: "10 Mart 2025",
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
    date: "8 Mart 2025",
    readTime: "4 dəq",
    image: "/images/blog/smm.jpg",
    author: {
      name: "Zəhra Qurbanova",
      image: "/images/team/nihad.jpg",
    },
  },
  {
    id: 5,
    title: "Web Development Trendləri",
    excerpt:
      "2025-ci ildə web development sahəsində ən populyar texnologiyalar və trendlər.",
    category: "Development",
    date: "5 Mart 2025",
    readTime: "8 dəq",
    image: "/images/blog/web-development.jpg",
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
    date: "3 Mart 2025",
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
    date: "1 Mart 2025",
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
    date: "28 Fevral 2025",
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
    date: "25 Fevral 2025",
    readTime: "5 dəq",
    image: "/images/blog/e-commerce.jpg",
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
    date: "22 Fevral 2025",
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      className="py-16 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div variants={headerVariants}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-4 tracking-tight">
            Rəqəmsal Marketinq və Veb dizayn Bloqu
          </h1>
          <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
            SEO, social media marketinq, veb dizayn və rəqəmsal strategiyalar
            haqqında məqalələr.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.h2
          className="text-3xl font-bold text-center text-white mb-8"
          variants={headerVariants}
        >
          Bloq Kateqoriyaları
        </motion.h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={categoryVariants}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              selectedCategory === null
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hamısı
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={cardVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 overflow-hidden cursor-pointer">
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
              </Link>

              {/* Content */}
              <div className="p-6">
                {/* <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm text-gray-600">{post.author.name}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div> */}

                <Link href={`/blog/${post.id}`}>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer truncate">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-500">
                    {post.readTime} oxumaq
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    Ətraflı →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 text-lg">
              Bu kateqoriyada məqalə tapılmadı.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
