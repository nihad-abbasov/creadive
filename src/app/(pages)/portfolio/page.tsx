import Portfolio from '@/views/Portfolio';
import { Suspense } from 'react';
import DynamicMetaTags from '@/components/DynamicMetaTags';

export default function PortfolioPage() {
  return (
    <>
      <DynamicMetaTags
        title="Portfolio - Creadive"
        description="Creadive portfolio: vebsayt yaradılması, dizayn və marketinq layihələrimiz. Peşəkar işlərimizi kəşf edin."
        canonical="https://creadive.az/portfolio"
        ogTitle="Portfolio - Creadive"
        ogDescription="Creadive portfolio: vebsayt yaradılması, dizayn və marketinq layihələrimiz. Peşəkar işlərimizi kəşf edin."
        ogUrl="https://creadive.az/portfolio"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Portfolio - Creadive"
        twitterDescription="Creadive portfolio: vebsayt yaradılması, dizayn və marketinq layihələrimiz. Peşəkar işlərimizi kəşf edin."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Suspense>
        <Portfolio />
      </Suspense>
    </>
  )
} 