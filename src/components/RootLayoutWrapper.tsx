// import ScrollProgress from "@/components/semantic/ScrollProgress";
import Navigation from "@/components/semantic/Navigation";
import Footer from "@/components/semantic/Footer";
import Main from "@/components/semantic/Main";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TODO: workaround for scroll progress */}{/* <ScrollProgress /> */}
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
