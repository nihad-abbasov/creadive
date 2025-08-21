import Contact from '@/views/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Əlaqə - Creadive",
  description: "Creadive ilə əlaqə saxlayın. Vebsayt yaradılması, dizayn və rəqəmsal marketinq xidmətləri üçün bizimlə əlaqə saxlayın.",
  alternates: {
    canonical: "https://creadive.az/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
} 