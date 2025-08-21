import { blogDetailData } from '@/data/blogDetailData';
import BlogDetail from '@/views/BlogDetail';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const blogId = parseInt(id);
  const blogPost = blogDetailData.find(post => post.id === blogId);

  if (!blogPost) {
    return {
      title: "Blog Məqaləsi - Creadive",
      description: "Creadive blog məqaləsi",
    };
  }

  return {
    title: `${blogPost.title} - Creadive`,
    description: blogPost.excerpt || "Creadive blog məqaləsi",
    alternates: {
      canonical: `https://creadive.az/blog/${id}`,
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blogId = parseInt(id);
  const blogPost = blogDetailData.find(post => post.id === blogId);

  if (!blogPost) {
    notFound();
  }

  return <BlogDetail blogPost={blogPost} />;
} 