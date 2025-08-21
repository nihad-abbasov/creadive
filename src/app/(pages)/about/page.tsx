import About from '@/views/About';
import DynamicMetaTags from '@/components/DynamicMetaTags';

export default function AboutPage() {
  return (
    <>
      <DynamicMetaTags
        title="Haqqımızda | Creadive - İdealarınızı gerçəkləşdirək ✨"
        description="Creadive haqqında ətraflı məlumat. Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq sahəsində ixtisaslaşmış yaradıcı agentliyik."
        canonical="https://creadive.az/about"
        ogTitle="Haqqımızda - Creadive"
        ogDescription="Creadive haqqında ətraflı məlumat. Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq sahəsində ixtisaslaşmış yaradıcı agentliyik."
        ogUrl="https://creadive.az/about"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Haqqımızda - Creadive"
        twitterDescription="Creadive haqqında ətraflı məlumat. Biz vebsayt yaradılması, dizayn və rəqəmsal marketinq sahəsində ixtisaslaşmış yaradıcı agentliyik."
        twitterImage="https://creadive.az/og-img.png"
      />
      <About />
    </>
  );
} 