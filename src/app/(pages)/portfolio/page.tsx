import Portfolio from '@/views/Portfolio';
import { Suspense } from 'react';
import DynamicMetaTags from '@/components/DynamicMetaTags';

export default function PortfolioPage() {
  return (
    <>
      <DynamicMetaTags
        title="Portfolio | Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri"
        description="Creadive portfolio: SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        canonical="https://creadive.az/portfolio"
        ogTitle="Portfolio - Creadive"
        ogDescription="Creadive portfolio: SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        ogUrl="https://creadive.az/portfolio"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Portfolio - Creadive"
        twitterDescription="Creadive portfolio: SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Suspense>
        <Portfolio />
      </Suspense>
    </>
  )
} 