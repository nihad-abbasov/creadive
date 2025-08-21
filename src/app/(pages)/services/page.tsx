import Services from '@/views/Services';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Xidmətlər - Creadive",
  description: "Creadive xidmətləri: vebsayt yaradılması, dizayn, rəqəmsal marketinq, SEO və daha çox. Peşəkar həllər üçün bizimlə əlaqə saxlayın.",
  alternates: {
    canonical: "https://creadive.az/services",
  },
};

export default function ServicesPage() {
  return (
    <Suspense>
      <Services />
    </Suspense>
  )
} 