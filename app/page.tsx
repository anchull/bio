import Hero from "@/components/Hero";
import DiagnosticSection from "@/components/DiagnosticSection";
import ChewSection from "@/components/ChewSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ScrollProgress />
      <Hero />
      <DiagnosticSection />
      <ChewSection />
      <Footer />
    </main>
  );
}
