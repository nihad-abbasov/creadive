import Blog from '@/views/Blog';
import DynamicMetaTags from '@/components/DynamicMetaTags';

export default function BlogPage() {
  return (
    <>
      <DynamicMetaTags
        title="Blog - Creadive"
        description="Creadive blog: vebsayt yaradılması, dizayn, rəqəmsal marketinq və texnologiya haqqında faydalı məqalələr."
        canonical="https://creadive.az/blog"
        ogTitle="Blog - Creadive"
        ogDescription="Creadive blog: vebsayt yaradılması, dizayn, rəqəmsal marketinq və texnologiya haqqında faydalı məqalələr."
        ogUrl="https://creadive.az/blog"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Blog - Creadive"
        twitterDescription="Creadive blog: vebsayt yaradılması, dizayn, rəqəmsal marketinq və texnologiya haqqında faydalı məqalələr."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Blog />
    </>
  );
} 