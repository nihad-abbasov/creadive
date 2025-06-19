"use client";

import Image from "next/image";
import Link from "next/link";
import { BlogDetailPost, blogDetailData } from "@/data/blogDetailData";

interface BlogDetailProps {
  blogPost: BlogDetailPost;
}

export default function BlogDetail({ blogPost }: BlogDetailProps) {
  return (
    <div className="py-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Əsas səhifə
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Bloq
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{blogPost.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <article className="mb-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full">
              {blogPost.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src={blogPost.author.image}
              alt={blogPost.author.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">{blogPost.author.name}</p>
              <p className="text-sm text-gray-600">{blogPost.author.bio}</p>
              <p className="text-sm text-gray-500">{blogPost.date} • {blogPost.readTime} oxumaq</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 mb-8 rounded-2xl overflow-hidden">
            <Image
              src={blogPost.image}
              alt={blogPost.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Author Bio Section */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Müəllif haqqında</h3>
          <div className="flex items-start gap-4">
            <Image
              src={blogPost.author.image}
              alt={blogPost.author.name}
              width={0}
              height={0}
              sizes="100vw"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">{blogPost.author.name}</h4>
              <p className="text-gray-600">{blogPost.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Əlaqəli məqalələr</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPost.relatedPosts.map((relatedId) => {
              const relatedPost = blogDetailData.find(post => post.id === relatedId);
              if (!relatedPost) return null;
              
              return (
                <Link
                  key={relatedPost.id}
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
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{relatedPost.author.name}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Bütün məqalələrə qayıt
          </Link>
        </div>
      </div>
    </div>
  );
} 