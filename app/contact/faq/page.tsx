"use client";

import SubPageHero from "@/components/SubPageHero";

export default function FaqPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="FAQ"
                subtitle="QUESTIONS"
                backgroundImage="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6 max-w-4xl">
                <div className="mb-12 text-center">
                    <span className="text-primary font-bold text-sm uppercase mb-2 block">Help Center</span>
                    <h2 className="text-3xl font-bold mb-4">자주 묻는 질문</h2>
                    <p className="text-gray-600">고객님들이 가장 많이 궁금해하시는 질문들을 모았습니다.</p>
                </div>

                <div className="space-y-6">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">제품 관련</span>
                        <h3 className="font-bold text-lg mb-2">Q. 진단 키트는 재사용이 가능한가요?</h3>
                        <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl mt-3">
                            A. 아닙니다. 바이오구오구 소변 진단 키트는 일회용 의료기기로, 정확한 검사 결과를 위해 재사용은 절대 금지합니다. 사용 후에는 폐기해 주시기 바랍니다.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                        <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full mb-3">앱 사용</span>
                        <h3 className="font-bold text-lg mb-2">Q. 검사 결과는 얼마나 빨리 나오나요?</h3>
                        <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl mt-3">
                            A. 앱으로 키트를 촬영하는 즉시 AI가 분석을 시작하며, 통신 환경에 따라 3~5초 이내에 결과를 확인하실 수 있습니다.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                        <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold rounded-full mb-3">배송/주문</span>
                        <h3 className="font-bold text-lg mb-2">Q. 배송은 언제 도착하나요?</h3>
                        <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl mt-3">
                            A. 오후 2시 이전 결제 완료 건에 한하여 당일 발송되며, 일반적으로 발송 다음 날 수령 가능합니다. (도서 산간 지역 제외)
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
                        <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-bold rounded-full mb-3">덴탈껌</span>
                        <h3 className="font-bold text-lg mb-2">Q. 알러지가 있는 아이도 먹을 수 있나요?</h3>
                        <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-xl mt-3">
                            A. 네, 츄가드 프로는 알러지를 최소화하기 위해 가수분해 단백질을 사용하고 곡물을 첨가하지 않은 그레인프리 제품입니다. 다만 특정 성분에 민감한 경우 전성분을 확인해 주세요.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
