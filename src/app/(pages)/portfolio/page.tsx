import Portfolio from '@/views/Portfolio';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Portfolio - Creadive",
  description: "Creadive portfolio: vebsayt yaradılması, dizayn və marketinq layihələrimiz. Peşəkar işlərimizi kəşf edin.",
  alternates: {
    canonical: "https://creadive.az/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <Suspense>
      <Portfolio />
    </Suspense>
  )
} 