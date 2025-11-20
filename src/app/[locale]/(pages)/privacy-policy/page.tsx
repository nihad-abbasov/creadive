import DynamicMetaTags from '@/components/DynamicMetaTags';
import PrivacyPolicy from '@/views/PrivacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <DynamicMetaTags
        title="Məxfilik Siyasəti | Creadive — Kreativ Reklam Agentliyi"
        description="Creadive agentliyinin məxfilik siyasəti. Şəxsi məlumatların toplanması, istifadəsi və qorunması haqqında məlumat. Azərbaycan Respublikasının 'Şəxsi Məlumatlar haqqında' Qanununa uyğun olaraq hazırlanmışdır."
        canonical="https://creadive.az/privacy-policy"
        ogTitle="Məxfilik Siyasəti - Creadive"
        ogDescription="Creadive agentliyinin məxfilik siyasəti. Şəxsi məlumatların toplanması, istifadəsi və qorunması haqqında məlumat."
        ogUrl="https://creadive.az/privacy-policy"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Məxfilik Siyasəti - Creadive"
        twitterDescription="Creadive agentliyinin məxfilik siyasəti. Şəxsi məlumatların toplanması, istifadəsi və qorunması haqqında məlumat."
        twitterImage="https://creadive.az/og-img.png"
      />
      <PrivacyPolicy />
    </>
  );
}

