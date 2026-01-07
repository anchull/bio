"use client";

import SubPageHero from "@/components/SubPageHero";

export default function FeaturePage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Features"
                subtitle="HIGHLIGHTS"
                backgroundImage="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2940&auto=format&fit=crop"
            />
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">기술이 만드는 차이</h2>
                <p className="text-gray-600">바이오구오구만의 독자적인 기술과 사용자 경험을 소개합니다.</p>
            </section>
        </main>
    );
}
