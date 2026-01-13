import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function CertPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={dict.about.cert.hero_title}
                subtitle={dict.about.cert.hero_subtitle}
                backgroundImage="/images/hero_about_cert.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">{dict.about.cert.section_label}</span>
                    <h2
                        className="text-4xl font-bold mb-6"
                        dangerouslySetInnerHTML={{ __html: dict.about.cert.title }}
                    />
                    <p
                        className="text-gray-600 text-lg"
                        dangerouslySetInnerHTML={{ __html: dict.about.cert.desc }}
                    />
                </div>

                <div className="flex flex-col gap-16 max-w-4xl mx-auto">
                    {/* Certification 1: HACCP */}
                    <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="/images/cert_haccp.png"
                            alt="HACCP Certification Info"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Certification 2: FSSC 22000 */}
                    <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="/images/cert_fssc.png"
                            alt="FSSC 22000 Certification Info"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Certification 3: ISO 9001 & 14001 */}
                    <div className="rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                        <img
                            src="/images/cert_iso.png"
                            alt="ISO Certification Info"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
