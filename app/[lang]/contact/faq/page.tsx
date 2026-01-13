import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const t = dict.contact.faq;

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={t.hero_title}
                subtitle={t.hero_subtitle}
                backgroundImage="/images/hero_contact_faq.png"
            />
            <section className="py-24 container mx-auto px-6 max-w-4xl">
                <div className="mb-12 text-center">
                    <span className="text-primary font-bold text-sm uppercase mb-2 block">{t.label}</span>
                    <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
                    <p className="text-gray-600 mb-12">{t.desc}</p>
                </div>

                <div className="w-full">
                    <img
                        src="/images/faq_content.png"
                        alt="FAQ Content"
                        className="w-full h-auto rounded-3xl shadow-sm border border-gray-100"
                    />
                </div>
            </section>
        </main>
    );
}
