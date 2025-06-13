import Portfolio from '@/views/Portfolio';
import { Suspense } from 'react';

export default function PortfolioPage() {
  return (
    <Suspense>
      <Portfolio />
    </Suspense>
  )
} 