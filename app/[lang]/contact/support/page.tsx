import SubPageHero from "@/components/SubPageHero";
import { getDictionary } from "../../../../lib/dictionary";

export default async function SupportPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const t = dict.contact.support;

    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title={t.hero_title}
                subtitle={t.hero_subtitle}
                backgroundImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2940&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-3">{t.title}</h2>
                        <p
                            className="text-gray-500"
                            dangerouslySetInnerHTML={{ __html: t.desc }}
                        />
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">{t.form.name}</label>
                                <input type="text" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder={t.form.placeholder_name} />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">{t.form.contact}</label>
                                <input type="text" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder={t.form.placeholder_contact} />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">{t.form.email}</label>
                            <input type="email" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder={t.form.placeholder_email} />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">{t.form.type}</label>
                            <select className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
                                {t.form.types.map((type: string, idx: number) => (
                                    <option key={idx}>{type}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">{t.form.content}</label>
                            <textarea className="w-full border border-gray-200 rounded-xl p-4 h-40 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder={t.form.placeholder_content} />
                        </div>
                        <button className="w-full bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all shadow-lg text-lg">
                            {t.form.submit}
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
