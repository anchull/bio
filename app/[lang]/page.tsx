import Hero from "@/components/Hero";
import DiagnosticSection from "@/components/DiagnosticSection";
import ChewSection from "@/components/ChewSection";
import ScrollProgress from "@/components/ScrollProgress";

import { getDictionary } from "../../lib/dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <ScrollProgress />
      <Hero heroDict={dict.hero} lang={lang} />
      <DiagnosticSection dict={dict.home.diagnostic} />
      <ChewSection dict={dict.home.chew} />
    </main>
  );
}
