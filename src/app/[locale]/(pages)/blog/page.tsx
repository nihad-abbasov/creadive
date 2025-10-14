import DynamicMetaTags from '@/components/DynamicMetaTags';
import Blog from '@/views/Blog';

export default function BlogPage() {
  return (
    <>
      <DynamicMetaTags
        title="Blog | Creadive — Kreativ Reklam Agentliyi | Marketinq Xidmətləri"
        description="Creadive blog: SMM, SEO, veb sayt və kreativ dizayn xidmətləri haqqında faydalı məqalələr."
        canonical="https://creadive.az/blog"
        ogTitle="Blog - Creadive"
        ogDescription="Creadive blog: SMM, SEO, veb sayt və kreativ dizayn xidmətləri haqqında faydalı məqalələr."
        ogUrl="https://creadive.az/blog"
        ogImage="https://creadive.az/og-img.png"
        twitterTitle="Blog - Creadive"
        twitterDescription="Creadive blog: SMM, SEO, veb sayt və kreativ dizayn xidmətləri haqqında faydalı məqalələr."
        twitterImage="https://creadive.az/og-img.png"
      />
      <Blog />
    </>
  );
} 