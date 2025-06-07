import Navigation from "@/components/semantic/Navigation";
import { ToastProvider } from "@/context/ToastContext";
import { ScrollProgress } from "./ScrollProgress";
import Footer from "@/components/semantic/Footer";
import Main from "@/components/semantic/Main";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollProgress />
        <Navigation />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
