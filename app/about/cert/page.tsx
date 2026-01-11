"use client";

import SubPageHero from "@/components/SubPageHero";

export default function CertPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="품질 인증 현황"
                subtitle="CERTIFICATIONS"
                backgroundImage="/images/hero_about_cert.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Global Standards</span>
                    <h2 className="text-4xl font-bold mb-6">검증된 품질, 믿을 수 있는 제조</h2>
                    <p className="text-gray-600 text-lg">
                        바이오구오구의 모든 제품은 국제 표준 품질 경영 시스템과 <br />
                        엄격한 식품 안전 관리 기준을 통과한 시설에서 생산됩니다.
                    </p>
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
