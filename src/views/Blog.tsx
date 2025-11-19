"use client";

import { useTranslations } from "next-intl";
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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const t = useTranslations("blog");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: t("blog1.title"),
      excerpt: t("blog1.excerpt"),
      category: t("blog1.category"),
      date: t("blog1.date"),
      readTime: t("blog1.readTime"),
      image: t("blog1.image"),
      author: {
        name: t("blog1.author.name"),
        image: t("blog1.author.image"),
      },
    },
    {
      id: 2,
      title: t("blog2.title"),
      excerpt: t("blog2.excerpt"),
      category: t("blog2.category"),
      date: t("blog2.date"),
      readTime: t("blog2.readTime"),
      image: t("blog2.image"),
      author: {
        name: t("blog2.author.name"),
        image: t("blog2.author.image"),
      },
    },
    {
      id: 3,
      title: t("blog3.title"),
      excerpt: t("blog3.excerpt"),
      category: t("blog3.category"),
      date: t("blog3.date"),
      readTime: t("blog3.readTime"),
      image: t("blog3.image"),
      author: {
        name: t("blog3.author.name"),
        image: t("blog3.author.image"),
      },
    },
    {
      id: 4,
      title: t("blog4.title"),
      excerpt: t("blog4.excerpt"),
      category: t("blog4.category"),
      date: t("blog4.date"),
      readTime: t("blog4.readTime"),
      image: t("blog4.image"),
      author: {
        name: t("blog4.author.name"),
        image: t("blog4.author.image"),
      },
    },
    {
      id: 5,
      title: t("blog5.title"),
      excerpt: t("blog5.excerpt"),
      category: t("blog5.category"),
      date: t("blog5.date"),
      readTime: t("blog5.readTime"),
      image: t("blog5.image"),
      author: {
        name: t("blog5.author.name"),
        image: t("blog5.author.image"),
      },
    },
    {
      id: 6,
      title: t("blog6.title"),
      excerpt: t("blog6.excerpt"),
      category: t("blog6.category"),
      date: t("blog6.date"),
      readTime: t("blog6.readTime"),
      image: t("blog6.image"),
      author: {
        name: t("blog6.author.name"),
        image: t("blog6.author.image"),
      },
    },
    {
      id: 7,
      title: t("blog7.title"),
      excerpt: t("blog7.excerpt"),
      category: t("blog7.category"),
      date: t("blog7.date"),
      readTime: t("blog7.readTime"),
      image: t("blog7.image"),
      author: {
        name: t("blog7.author.name"),
        image: t("blog7.author.image"),
      },
    },
    {
      id: 8,
      title: t("blog8.title"),
      excerpt: t("blog8.excerpt"),
      category: t("blog8.category"),
      date: t("blog8.date"),
      readTime: t("blog8.readTime"),
      image: t("blog8.image"),
      author: {
        name: t("blog8.author.name"),
        image: t("blog8.author.image"),
      },
    },
    {
      id: 9,
      title: t("blog9.title"),
      excerpt: t("blog9.excerpt"),
      category: t("blog9.category"),
      date: t("blog9.date"),
      readTime: t("blog9.readTime"),
      image: t("blog9.image"),
      author: {
        name: t("blog9.author.name"),
        image: t("blog9.author.image"),
      },
    },
    {
      id: 10,
      title: t("blog10.title"),
      excerpt: t("blog10.excerpt"),
      category: t("blog10.category"),
      date: t("blog10.date"),
      readTime: t("blog10.readTime"),
      image: t("blog10.image"),
      author: {
        name: t("blog10.author.name"),
        image: t("blog10.author.image"),
      },
    },
  ];

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
            {t("title")}
          </h1>
          <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Categories */}
        {/* <motion.h2
          className="text-3xl font-bold text-center text-white mb-8"
          variants={headerVariants}
        >
          {t("categories")}
        </motion.h2> */}
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
            {t("all")}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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
                    {post.readTime} {t("readTime")}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                  >
                    {t("viewDetails")} →
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
            <p className="text-gray-600 text-lg">{t("noData")}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
