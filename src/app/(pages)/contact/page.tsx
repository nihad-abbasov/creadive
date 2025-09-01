import DynamicMetaTags from '@/components/DynamicMetaTags';
import Contact from '@/views/Contact';

export default function ContactPage() {
  return (
    <>
      <DynamicMetaTags
        title="Əlaqə | Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri"
        description="Creadive ilə əlaqə saxlayın. SMM, SEO, veb sayt və kreativ dizayn xidmətləri üçün bizimlə əlaqə saxlayın."
        canonical="https://creadive.az/contact"
        ogTitle="Əlaqə - Creadive"
        ogDescription="Creadive ilə əlaqə saxlayın. SMM, SEO, veb sayt və kreativ dizayn xidmətləri üçün bizimlə əlaqə saxlayın."
        ogUrl="https://creadive.az/contact"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Əlaqə - Creadive"
        twitterDescription="Creadive ilə əlaqə saxlayın. SMM, SEO, veb sayt və kreativ dizayn xidmətləri üçün bizimlə əlaqə saxlayın."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Contact />
    </>
  );
} 