"use client";

import SubPageHero from "@/components/SubPageHero";

export default function CertPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Certifications"
                subtitle="TRUST"
                backgroundImage="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2940&auto=format&fit=crop"
            />
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-6">공인된 기술력</h2>
                <p className="text-gray-600 mb-12">국내외 전문 기관 검증을 통과한 안전하고 정확한 제품만을 만듭니다.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-400 font-bold border rounded-xl p-12">
                    {/* Placeholder for Logos */}
                    <div className="p-4 border border-dashed rounded flex items-center justify-center">ISO 13485</div>
                    <div className="p-4 border border-dashed rounded flex items-center justify-center">HACCP</div>
                    <div className="p-4 border border-dashed rounded flex items-center justify-center">벤처기업 인증</div>
                    <div className="p-4 border border-dashed rounded flex items-center justify-center">FDA 등록</div>
                </div>
            </section>
        </main>
    );
}
