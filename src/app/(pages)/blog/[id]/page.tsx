'use client';

import { blogDetailData } from '@/data/blogDetailData';
import BlogDetail from '@/views/BlogDetail';
import { notFound } from 'next/navigation';
import DynamicMetaTags from '@/components/DynamicMetaTags';
import { useEffect, useState } from 'react';

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = params;
  const blogId = parseInt(id);
  const [blogPost, setBlogPost] = useState(blogDetailData.find(post => post.id === blogId));

  useEffect(() => {
    const post = blogDetailData.find(post => post.id === blogId);
    setBlogPost(post);
  }, [blogId]);

  if (!blogPost) {
    notFound();
  }

  return (
    <>
      <DynamicMetaTags
        title={`${blogPost.title} - Creadive`}
        description={blogPost.excerpt || "Creadive blog məqaləsi"}
        canonical={`https://creadive.az/blog/${id}`}
        ogTitle={`${blogPost.title} - Creadive`}
        ogDescription={blogPost.excerpt || "Creadive blog məqaləsi"}
        ogUrl={`https://creadive.az/blog/${id}`}
        ogImage="https://creadive.az/og-img.png"
        twitterTitle={`${blogPost.title} - Creadive`}
        twitterDescription={blogPost.excerpt || "Creadive blog məqaləsi"}
        twitterImage="https://creadive.az/og-img.png"
      />
      <BlogDetail blogPost={blogPost} />
    </>
  );
} 