import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function TechPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const t = dict.features.tech;

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={t.hero_title}
                subtitle={t.hero_subtitle}
                backgroundImage="/images/hero_feature_tech.png"
            />
            <section className="py-24 container mx-auto px-6">
                {/* Tech Block 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold text-sm uppercase mb-2 block">{t.block1.label}</span>
                        <h2
                            className="text-3xl font-bold mb-6"
                            dangerouslySetInnerHTML={{ __html: t.block1.title }}
                        />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {t.block1.desc}
                        </p>
                        <ul className="space-y-3">
                            {t.block1.list.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/tech_ai_analysis.png"
                            alt="AI Technology"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Tech Block 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold text-sm uppercase mb-2 block">{t.block2.label}</span>
                        <h2
                            className="text-3xl font-bold mb-6"
                            dangerouslySetInnerHTML={{ __html: t.block2.title }}
                        />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {t.block2.desc}
                        </p>
                        <ul className="space-y-3">
                            {t.block2.list.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940"
                            alt="Technology Correction"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Tech Block 3 */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold text-sm uppercase mb-2 block">{t.block3.label}</span>
                        <h2
                            className="text-3xl font-bold mb-6"
                            dangerouslySetInnerHTML={{ __html: t.block3.title }}
                        />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {t.block3.desc}
                        </p>
                        <ul className="space-y-3">
                            {t.block3.list.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/tech_dental_mechanism.png"
                            alt="Dental Chew Technology"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
