import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function ChewProductPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={dict.products.chew.title}
                subtitle={dict.products.chew.subtitle}
                backgroundImage="/images/hero_product_chew.png"
            />
            {/* Full Screen Image Presentation */}
            <section className="py-20 w-full bg-gray-50">
                <div className="w-full max-w-4xl mx-auto px-4 flex flex-col gap-0 shadow-2xl rounded-xl overflow-hidden bg-white">
                    <img src="/images/chew_new_1.jpg" alt="Dental Chew Trust" className="w-full h-auto" />
                    <img src="/images/chew_new_2.png" alt="Dental Chew Reviews" className="w-full h-auto" />
                    <img src="/images/chew_new_3.png" alt="Dental Chew Lifestyle" className="w-full h-auto" />
                    <img src="/images/chew_new_4.png" alt="Dental Chew Sizes" className="w-full h-auto" />
                    <img src="/images/chew_new_5.png" alt="Dental Chew Specs" className="w-full h-auto" />
                    <img src="/images/chew_new_6.png" alt="Dental Chew Guide & Details" className="w-full h-auto" />
                </div>
            </section>
        </main>
    );
}
