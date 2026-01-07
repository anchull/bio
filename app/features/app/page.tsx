"use client";

import SubPageHero from "@/components/SubPageHero";

export default function AppPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Mobile Application"
                subtitle="SMART CARE"
                backgroundImage="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Smart Healthcare App</span>
                    <h2 className="text-4xl font-bold mb-6">내 손안의 수의사, <br /> 바이오구오구 앱</h2>
                    <p className="text-gray-600 text-lg">
                        복잡한 건강 기록부터 전문가 상담까지, 앱 하나로 스마트하게 관리하세요.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature Card 1 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-50 flex flex-col items-center text-center">
                        <div className="w-full aspect-[9/16] bg-gray-100 rounded-2xl mb-8 overflow-hidden relative">
                            {/* Placeholder for App Screen 1 */}
                            <img
                                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2874"
                                alt="App Screen Analysis"
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute inset-x-4 top-10 bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur">
                                <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                                <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                                <div className="text-xs font-bold text-primary">검사 완료!</div>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">실시간 건강 리포트</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            촬영 즉시 10가지 항목에 대한 분석 결과와 위험도를 직관적인 그래프로 보여줍니다.
                        </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-50 flex flex-col items-center text-center">
                        <div className="w-full aspect-[9/16] bg-gray-100 rounded-2xl mb-8 overflow-hidden relative">
                            {/* App Screen 2: History Tracking */}
                            <img
                                src="/images/app_history_tracking.png"
                                alt="App Screen History Tracking"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-3">건강 히스토리 트래킹</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            과거의 검사 기록들을 누적하여 건강 변화 추이를 한눈에 파악하고 이상 징후를 예방할 수 있습니다.
                        </p>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-50 flex flex-col items-center text-center">
                        <div className="w-full aspect-[9/16] bg-gray-100 rounded-2xl mb-8 overflow-hidden relative">
                            {/* App Screen 3: Vet Consult */}
                            <img
                                src="/images/app_vet_consult.png"
                                alt="App Screen Vet Consult"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-xl font-bold mb-3">수의사 상담 연결</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            검사 결과에 대해 더 궁금한 점이 있다면, 제휴된 동물 병원 수의사와 비대면 상담을 진행할 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
