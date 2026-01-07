"use client";

import SubPageHero from "@/components/SubPageHero";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Our Philosophy"
                subtitle="VALUES"
                backgroundImage="/images/brand_philosophy_main.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Mission & Values</span>
                    <h2 className="text-4xl font-bold mb-6">우리가 지키는 약속</h2>
                    <p className="text-gray-600 text-lg">
                        바이오구오구는 타협하지 않는 원칙으로 가장 정직한 헬스케어 제품을 만듭니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Value Card 1 */}
                    <div className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                            {/* Icon Placeholder (Transparency) */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="font-bold text-2xl mb-4">Transparency</h3>
                        <p className="text-gray-600 leading-relaxed">
                            모든 성분과 기술적 원리를 보호자님께 투명하게 공개합니다.
                            우리는 숨길 것이 없을 때 비로소 신뢰가 시작된다고 믿습니다.
                        </p>
                    </div>

                    {/* Value Card 2 */}
                    <div className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                            {/* Icon Placeholder (Accuracy) */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="font-bold text-2xl mb-4">Accuracy</h3>
                        <p className="text-gray-600 leading-relaxed">
                            반려동물의 건강과 직결되는 문제이기에, 0.1%의 오차도 허용하지 않겠다는 집념으로
                            가장 정확한 데이터를 제공합니다.
                        </p>
                    </div>

                    {/* Value Card 3 */}
                    <div className="group bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:border-primary/30">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                            {/* Icon Placeholder (Empathy) */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </div>
                        <h3 className="font-bold text-2xl mb-4">Empathy</h3>
                        <p className="text-gray-600 leading-relaxed">
                            기술 이전에 생명에 대한 존중이 먼저입니다.
                            우리는 언제나 반려동물과 보호자의 입장에서 생각하고 고민합니다.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
