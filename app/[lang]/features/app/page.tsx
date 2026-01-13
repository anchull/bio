import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function AppPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const t = dict.features.app;

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={t.hero_title}
                subtitle={t.hero_subtitle}
                backgroundImage="/images/hero_feature_app.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">{t.section_label}</span>
                    <h2
                        className="text-4xl font-bold mb-6"
                        dangerouslySetInnerHTML={{ __html: t.main_title }}
                    />
                    <p className="text-gray-600 text-lg">
                        {t.main_desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {t.features.map((feature: any, idx: number) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-50 flex flex-col items-center text-center">
                            <div className="w-full aspect-[9/16] bg-gray-100 rounded-2xl mb-8 overflow-hidden relative">
                                {idx === 0 && (
                                    <>
                                        <img
                                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874"
                                            alt="App Screen Analysis"
                                            className="absolute inset-0 w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 bg-black/20" />
                                        <div className="absolute inset-x-4 top-10 bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur">
                                            <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                                            <div className="text-xs font-bold text-primary">검사 완료!</div>
                                        </div>
                                    </>
                                )}
                                {idx === 1 && (
                                    <img
                                        src="/images/app_history_tracking.png"
                                        alt="App Screen History Tracking"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                                {idx === 2 && (
                                    <img
                                        src="/images/app_vet_consult.png"
                                        alt="App Screen Vet Consult"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
