import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function PartnerPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const t = dict.contact.partner;

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={t.hero_title}
                subtitle={t.hero_subtitle}
                backgroundImage="/images/hero_contact_partner.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center md:text-left mb-16 max-w-3xl">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">{t.section_label}</span>
                    <h2
                        className="text-4xl font-bold mb-6"
                        dangerouslySetInnerHTML={{ __html: t.main_title }}
                    />
                    <p className="text-gray-600 text-lg leading-relaxed">
                        <span dangerouslySetInnerHTML={{ __html: t.main_desc }} />
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <span className="font-bold">H</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t.cards[0].title}</h3>
                        <p className="text-gray-500 text-sm">
                            {t.cards[0].desc}
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <span className="font-bold">S</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t.cards[1].title}</h3>
                        <p className="text-gray-500 text-sm">
                            {t.cards[1].desc}
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <span className="font-bold">F</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t.cards[2].title}</h3>
                        <p className="text-gray-500 text-sm">
                            {t.cards[2].desc}
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">{t.cta.title}</h3>
                        <p
                            className="text-gray-400 mb-8 max-w-xl mx-auto"
                            dangerouslySetInnerHTML={{ __html: t.cta.desc }}
                        />
                        <a href={`/${lang}/contact/support`} className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition-all shadow-lg transform hover:-translate-y-1">
                            {t.cta.button}
                        </a>
                    </div>
                    {/* Abstract bg shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
            </section>
        </main>
    );
}
