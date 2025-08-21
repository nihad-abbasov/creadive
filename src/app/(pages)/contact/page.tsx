import Contact from '@/views/Contact';
import DynamicMetaTags from '@/components/DynamicMetaTags';

export default function ContactPage() {
  return (
    <>
      <DynamicMetaTags
        title="Əlaqə - Creadive"
        description="Creadive ilə əlaqə saxlayın. Vebsayt yaradılması, dizayn və rəqəmsal marketinq xidmətləri üçün bizimlə əlaqə saxlayın."
        canonical="https://creadive.az/contact"
        ogTitle="Əlaqə - Creadive"
        ogDescription="Creadive ilə əlaqə saxlayın. Vebsayt yaradılması, dizayn və rəqəmsal marketinq xidmətləri üçün bizimlə əlaqə saxlayın."
        ogUrl="https://creadive.az/contact"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Əlaqə - Creadive"
        twitterDescription="Creadive ilə əlaqə saxlayın. Vebsayt yaradılması, dizayn və rəqəmsal marketinq xidmətləri üçün bizimlə əlaqə saxlayın."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Contact />
    </>
  );
} 