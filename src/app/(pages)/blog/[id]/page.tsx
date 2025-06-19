import { notFound } from 'next/navigation';
import BlogDetail from '@/views/BlogDetail';
import { blogDetailData } from '@/data/blogDetailData';

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
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