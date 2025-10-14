import DynamicMetaTags from '@/components/DynamicMetaTags';
import Services from '@/views/Services';
import { Suspense } from 'react';

export default function ServicesPage() {
  return (
    <>
      <DynamicMetaTags
        title="Xidmətlər | Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri"
        description="Creadive xidmətləri: SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        canonical="https://creadive.az/services"
        ogTitle="Xidmətlər - Creadive"
        ogDescription="Creadive xidmətləri: SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        ogUrl="https://creadive.az/services"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Xidmətlər - Creadive"
        twitterDescription="Creadive xidmətləri: SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Suspense>
        <Services />
      </Suspense>
    </>
  )
} 