import Services from '@/views/Services';
import { Suspense } from 'react';
import DynamicMetaTags from '@/components/DynamicMetaTags';

export default function ServicesPage() {
  return (
    <>
      <DynamicMetaTags
        title="Xidmətlər | Creadive - İdealarınızı gerçəkləşdirək ✨"
        description="Creadive xidmətləri: vebsayt yaradılması, dizayn, rəqəmsal marketinq, SEO və daha çox. Peşəkar həllər üçün bizimlə əlaqə saxlayın."
        canonical="https://creadive.az/services"
        ogTitle="Xidmətlər - Creadive"
        ogDescription="Creadive xidmətləri: vebsayt yaradılması, dizayn, rəqəmsal marketinq, SEO və daha çox. Peşəkar həllər üçün bizimlə əlaqə saxlayın."
        ogUrl="https://creadive.az/services"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Xidmətlər - Creadive"
        twitterDescription="Creadive xidmətləri: vebsayt yaradılması, dizayn, rəqəmsal marketinq, SEO və daha çox. Peşəkar həllər üçün bizimlə əlaqə saxlayın."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Suspense>
        <Services />
      </Suspense>
    </>
  )
} 