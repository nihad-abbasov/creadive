'use client';

import DynamicMetaTags from '@/components/DynamicMetaTags';
import { blogDetailData } from '@/data/blogDetailData';
import BlogDetail from '@/views/BlogDetail';
import { useEffect, useState } from 'react';

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const [blogPost, setBlogPost] = useState<typeof blogDetailData[0]>(
    blogDetailData[0]
  );

  useEffect(() => {
    const getBlogPost = async () => {
      const { id } = await params;
      const blogId = parseInt(id);
      const post = blogDetailData.find(post => post.id === blogId);
      setBlogPost(post || blogDetailData[0]);
    };
    getBlogPost();
  }, [params]);

  if (!blogPost) {
    // console.log('Blog post not found');
    return null;
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