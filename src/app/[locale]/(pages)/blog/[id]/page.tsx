'use client';

import DynamicMetaTags from '@/components/DynamicMetaTags';
import { blogDetailData, BlogDetailPost } from '@/data/blogDetailData';
import BlogDetail from '@/views/BlogDetail';
import { useEffect, useState } from 'react';
import { blogApi } from '@/services/blog';
import { useLocale } from 'next-intl';

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

// API response type (based on admin panel fields)
type ApiBlogDetailPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  tags: string[];
  categories: string[];
  status: "published" | "draft";
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const [blogPost, setBlogPost] = useState<BlogDetailPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  useEffect(() => {
    const getBlogPost = async () => {
      try {
        setLoading(true);
        setError(null);

        const { id } = await params;
        const blogId = id; // Keep as string for API call, will parse for mock data

        // First, try to fetch from API
        try {
          const response = await blogApi.getById(blogId, locale);
          const apiPost: ApiBlogDetailPost = response.data;

          if (apiPost && apiPost.id) {
            // Map API response to BlogDetailPost format
            const mappedPost: BlogDetailPost = {
              id: apiPost.id,
              title: apiPost.title,
              excerpt: apiPost.excerpt,
              category: apiPost.categories?.[0] || apiPost.tags?.[0] || "Uncategorized",
              date: apiPost.date,
              readTime: apiPost.readTime,
              image: apiPost.image,
              author: {
                name: apiPost.author || "Creadive Team",
                image: "/images/default-avatar.png",
                bio: "Creadive komandasının üzvü",
              },
              content: apiPost.content,
              tags: apiPost.tags || [],
              relatedPosts: [], // Related posts would need separate API call or logic
            };

            setBlogPost(mappedPost);
            setLoading(false);
            return; // Successfully fetched from API, exit early
          }
        } catch (apiError: any) {
          // API failed (404, network error, etc.), fall back to mock data
          console.warn("API fetch failed, falling back to mock data:", apiError?.response?.status || apiError?.message);
        }

        // Fallback to mock data
        const blogIdNum = parseInt(blogId);
        if (!isNaN(blogIdNum)) {
          const mockPost = blogDetailData.find(post => post.id === blogIdNum);
          if (mockPost) {
            setBlogPost(mockPost);
            setLoading(false);
            return;
          }
        }

        // If neither API nor mock data found, use first mock post as fallback
        console.warn(`Blog post with ID ${blogId} not found in API or mock data, using fallback`);
        setBlogPost(blogDetailData[0] || null);
        setError(`Blog post not found`);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to load blog post");
        // Final fallback to first mock post
        setBlogPost(blogDetailData[0] || null);
      } finally {
        setLoading(false);
      }
    };

    getBlogPost();
  }, [params, locale]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white text-lg">
          {error || "Blog post not found"}
        </div>
      </div>
    );
  }

  return (
    <>
      <DynamicMetaTags
        title={`${blogPost.title} | Creadive `}
        description={blogPost.excerpt || "Creadive blog məqaləsi"}
        canonical={`https://creadive.az/blog/${blogPost.id}`}
        ogTitle={`${blogPost.title} - Creadive`}
        ogDescription={blogPost.excerpt || "Creadive blog məqaləsi"}
        ogUrl={`https://creadive.az/blog/${blogPost.id}`}
        ogImage="https://creadive.az/og-img.png"
        twitterTitle={`${blogPost.title} - Creadive`}
        twitterDescription={blogPost.excerpt || "Creadive blog məqaləsi"}
        twitterImage="https://creadive.az/og-img.png"
      />
      <BlogDetail blogPost={blogPost} />
    </>
  );
} 