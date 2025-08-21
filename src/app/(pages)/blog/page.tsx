import Blog from '@/views/Blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blog - Creadive",
  description: "Creadive blog: vebsayt yaradılması, dizayn, rəqəmsal marketinq və texnologiya haqqında faydalı məqalələr.",
  alternates: {
    canonical: "https://creadive.az/blog",
  },
};

export default function BlogPage() {
  return <Blog />;
} 