import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function BrandStoryPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={dict.about.story.hero_title}
                subtitle={dict.about.story.hero_subtitle}
                backgroundImage="/images/hero_about_story.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">{dict.about.story.section_label}</span>
                        <h2
                            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                            dangerouslySetInnerHTML={{ __html: dict.about.story.main_title }}
                        />
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                            {dict.about.story.main_desc}
                        </p>
                    </div>

                    <div className="relative w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-gray-100">
                        <img
                            src="/images/brand_representative.jpg"
                            alt="Bioguogu Brand Representative"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="text-center mb-16">
                        <p className="text-2xl font-bold italic text-primary">
                            {dict.about.story.quote}
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="mb-6">{dict.about.story.p1}</p>
                        <p className="mb-6">{dict.about.story.p2}</p>
                        <p>{dict.about.story.p3}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
