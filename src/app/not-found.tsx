import DynamicMetaTags from "@/components/DynamicMetaTags";
import NotFoundView from "@/views/NotFoundView";

export default function NotFound() {
  return (
    <>
      <DynamicMetaTags
        title="404 - Səhifə tapılmadı | Creadive - İdealarınızı gerçəkləşdirək ✨"
        description="Səhifə tapılmadı. Düzgün URL-i yoxlayın."
        canonical="https://creadive.az/404"
        ogTitle="404 - Səhifə tapılmadı"
        ogDescription="Səhifə tapılmadı. Düzgün URL-i yoxlayın."
        ogUrl="https://creadive.az/404"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="404 - Səhifə tapılmadı"
        twitterDescription="Səhifə tapılmadı. Düzgün URL-i yoxlayın."
        twitterImage="https://creadive.az/og-img.png"
      />
      <NotFoundView />
    </>
  );
} 