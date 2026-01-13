"use client";

import SubPageHero from "@/components/SubPageHero";

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="FAQ"
                subtitle="QUESTIONS"
                backgroundImage="/images/hero_contact_faq.png"
            />
            <section className="py-24 container mx-auto px-6 max-w-4xl">
                <div className="mb-12 text-center">
                    <span className="text-primary font-bold text-sm uppercase mb-2 block">Help Center</span>
                    <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
                    <p className="text-gray-600 mb-12">고객님들이 가장 많이 궁금해하시는 질문들을 모았습니다.</p>
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
