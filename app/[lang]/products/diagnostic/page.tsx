import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function DiagnosticProductPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={dict.products.diagnostic.title}
                subtitle={dict.products.diagnostic.subtitle}
                backgroundImage="/images/hero_product_diagnostic.png"
            />
            {/* Full Screen Image Presentation */}
            <section className="py-20 w-full">
                <div className="w-full max-w-[1000px] mx-auto px-6">
                    <img
                        src={lang === 'en' ? "/images/diagnostic_detail_en.jpg" : "/images/diagnostic_detail.jpg"}
                        alt="Diagnostic Kit Detail"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </main>
    );
}
