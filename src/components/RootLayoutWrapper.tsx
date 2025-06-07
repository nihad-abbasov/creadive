
import Navigation from "@/components/semantic/Navigation";
import { ScrollProgress } from "./ScrollProgress";
import Footer from "@/components/semantic/Footer";
import Main from "@/components/semantic/Main";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollProgress />
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
