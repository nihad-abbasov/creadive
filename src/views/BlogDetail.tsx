"use client";

import BlogDetailBackIcon from "../../public/icons/blog/BlogDetailBackIcon";
import { BlogDetailPost, blogDetailData } from "@/data/blogDetailData";
import { useTranslations } from "next-intl";
import Schema from "@/components/Schema";
import { Link } from "@/lib/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface BlogDetailProps {
  blogPost: BlogDetailPost;
}

export default function BlogDetail({ blogPost }: BlogDetailProps) {
  const t = useTranslations("blog");
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="py-16 min-h-screen blogDetailPage"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Schema Markup for Article */}
      <Schema type="article" data={blogPost} />

      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <motion.nav className="mb-8" variants={itemVariants}>
          <ol className="flex items-center space-x-2 text-sm text-white/80">
            <li>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/"
                  className="hover:text-blue-600 transition-colors text-white/80"
                >
                  Əsas səhifə
                </Link>
              </motion.div>
            </li>
            <li>/</li>
            <li>
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/blog"
                  className="hover:text-blue-600 transition-colors text-white/80"
                >
                  Bloq
                </Link>
              </motion.div>
            </li>
            <li>/</li>
            <li className="text-white font-medium">{blogPost.title}</li>
          </ol>
        </motion.nav>

        {/* Article Header */}
        <motion.article className="mb-12" variants={containerVariants}>
          {/* Category Badge */}
          <motion.div className="mb-4" variants={itemVariants}>
            <motion.span
              className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {blogPost.category}
            </motion.span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            {blogPost.title}
          </motion.h1>

          {/* Author Info */}
          {/* <motion.div
            className="flex items-center gap-4 mb-8"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={blogPost.author.image}
                alt={blogPost.author.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-12 h-12 rounded-full object-cover"
              />
            </motion.div>
            <div>
              <p className="font-medium text-gray-900">
                {blogPost.author.name}
              </p>
              <p className="text-sm text-gray-600">{blogPost.author.bio}</p>
              <p className="text-sm text-gray-500">
                {blogPost.date} • {blogPost.readTime} oxumaq
              </p>
            </div>
          </motion.div> */}

          {/* Featured Image */}
          <motion.div
            className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
              unoptimized={blogPost.image.startsWith('http://') || blogPost.image.startsWith('https://')}
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            className="prose prose-lg max-w-none !text-white"
            variants={itemVariants}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-200"
            variants={itemVariants}
          >
            <h3 className="text-lg font-semibold !text-white mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.article>

        {/* Author Bio Section */}
        {/* <motion.div
          className="bg-gray-50 rounded-2xl p-8 mb-12"
          variants={cardVariants}
          whileHover={{
            scale: 1.02,
            y: -5,
            transition: { duration: 0.2 },
          }}
        >
          <motion.h3
            className="text-xl font-semibold text-gray-900 mb-4"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Müəllif haqqında
          </motion.h3>
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={blogPost.author.image}
                alt={blogPost.author.name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-16 h-16 rounded-full object-cover"
              />
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {blogPost.author.name}
              </h3>
              <p className="text-gray-600">{blogPost.author.bio}</p>
            </div>
          </div>
        </motion.div> */}

        {/* Related Posts */}
        {blogPost.relatedPosts && blogPost.relatedPosts.length > 0 && (
          <motion.div
            className="border-t border-gray-200 pt-12"
            variants={containerVariants}
          >
            <motion.h3
              className="text-2xl font-bold !text-white mb-8"
              variants={itemVariants}
            >
              Əlaqəli məqalələr
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPost.relatedPosts.map((relatedId, index) => {
                const relatedPost = blogDetailData.find(
                  (post) => post.id === relatedId
                );
                if (!relatedPost) return null;

              return (
                <motion.div
                  key={relatedPost.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="group block"
                  >
                    <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 text-xs font-medium text-white bg-blue-500/90 rounded-full">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          {/* <span>{relatedPost.author.name}</span> */}
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
              })}
            </div>
          </motion.div>
        )}

        {/* Back to Blog */}
        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <BlogDetailBackIcon />
              {t("goBack")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
