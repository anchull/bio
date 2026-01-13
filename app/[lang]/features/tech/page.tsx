"use client";

import SubPageHero from "@/components/SubPageHero";

export default function TechPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Core Technology"
                subtitle="INNOVATION"
                backgroundImage="/images/hero_feature_tech.png"
            />
            <section className="py-24 container mx-auto px-6">
                {/* Tech Block 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold text-sm uppercase mb-2 block">Machine Vision AI</span>
                        <h2 className="text-3xl font-bold mb-6">0.1mm의 오차도 없는 <br /> AI 컬러 분석 알고리즘</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            수만 건의 반려동물 소변 데이터를 딥러닝한 독자적인 AI 모델이 색상 변화를 미세하게 감지합니다.
                            사람의 눈으로는 구분하기 힘든 미묘한 색상 차이까지 정확하게 분석하여 신뢰도 높은 결과를 제공합니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                99.9% 분석 정확도
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                실시간 이미지 처리 엔진
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/tech_ai_analysis.png"
                            alt="AI Technology"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Tech Block 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold text-sm uppercase mb-2 block">Ambient Light Correction</span>
                        <h2 className="text-3xl font-bold mb-6">환경 변수 자동 보정 기술</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            집집마다 다른 조명 환경(형광등, 백열등, 자연광 등)과 촬영 각도에 따른 색상 왜곡을 자동으로 보정합니다.
                            어떤 환경에서 촬영하더라도 표준화된 결과를 도출하는 것이 바이오구오구 기술의 핵심입니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                자동 화이트 밸런스 조정
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                다각도 왜곡 보정
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940"
                            alt="Technology Correction"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Tech Block 3 */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold text-sm uppercase mb-2 block">Dental Health Science</span>
                        <h2 className="text-3xl font-bold mb-6">Dual-Action <br /> 구강 케어 메커니즘</h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            물리적 마찰과 유효 성분의 작용을 결합한 이중 케어 솔루션입니다.
                            특수 설계된 공기 구멍(Air Hole) 구조가 잇몸 깊숙한 곳의 치석을 자극 없이 제거하며,
                            SHMP와 OraCMU 성분이 입 냄새 원인균을 억제하여 구강 환경을 개선합니다.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                특허받은 Air Hole 구조의 물리적 스케일링
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                                유산균(OraCMU) & SHMP 함유
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="/images/tech_dental_mechanism.png"
                            alt="Dental Chew Technology"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
