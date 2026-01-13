import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function PhilosophyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={dict.nav.about_submenu.philosophy}
                subtitle="VALUES"
                backgroundImage="/images/brand_philosophy_main.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <img
                        src={lang === 'en' ? "/images/brand_philosophy_detail_en.jpg" : "/images/brand_philosophy_detail.png"}
                        alt="LabinBio Brand Philosophy"
                        className="w-full h-auto shadow-2xl rounded-2xl"
                    />
                </div>
            </section>
        </main>
    );
}
