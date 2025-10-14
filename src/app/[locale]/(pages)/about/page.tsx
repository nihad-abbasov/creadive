import DynamicMetaTags from '@/components/DynamicMetaTags';
import About from '@/views/About';

export default function AboutPage() {
  return (
    <>
      <DynamicMetaTags
        title="Haqqımızda | Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri"
        description="Creadive haqqında ətraflı məlumat. Creadive reklam agentliyi SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        canonical="https://creadive.az/about"
        ogTitle="Haqqımızda - Creadive"
        ogDescription="Creadive haqqında ətraflı məlumat. Creadive reklam agentliyi SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        ogUrl="https://creadive.az/about"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Haqqımızda - Creadive"
        twitterDescription="Creadive haqqında ətraflı məlumat. Creadive reklam agentliyi SMM, SEO, veb sayt və kreativ dizayn xidmətləri ilə brendinizi böyüdür. Xidmətlərimizlə yaxından tanış olmaq üçün saytımıza daxil olun."
        twitterImage="https://creadive.az/og-img.png"
      />
      <About />
    </>
  );
} 