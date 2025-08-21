import About from '@/views/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Haqqımızda - Creadive",
  description: "Creadive haqqında ətraflı məlumat. Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq sahəsində ixtisaslaşmış yaradıcı agentliyik.",
  alternates: {
    canonical: "https://creadive.az/about",
  },
};

export default function AboutPage() {
  return <About />;
} 