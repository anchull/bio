"use client";

import SubPageHero from "@/components/SubPageHero";

export default function PartnerPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="App Partnership"
                subtitle="BUSINESS"
                backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="text-center md:text-left mb-16 max-w-3xl">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Partnership</span>
                    <h2 className="text-4xl font-bold mb-6">함께 성장할 파트너를 찾습니다</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        바이오구오구는 혁신적인 반려동물 헬스케어 생태계를 함께 만들어갈 <br className="hidden md:block" />
                        다양한 분야의 파트너사를 기다리고 있습니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <span className="font-bold">H</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">동물 병원 (Hospital)</h3>
                        <p className="text-gray-500 text-sm">
                            바이오구오구 검사 결과를 활용한 진료 연계 및 스마트 헬스케어 솔루션 도입
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <span className="font-bold">S</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">유통/판매 (Sales)</h3>
                        <p className="text-gray-500 text-sm">
                            온/오프라인 펫샵, 약국 등 바이오구오구 제품 입점 및 판매 제휴
                        </p>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group">
                        <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <span className="font-bold">T</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">기술 제휴 (Tech)</h3>
                        <p className="text-gray-500 text-sm">
                            반려동물 데이터 분석, 헬스케어 디바이스 연동 등 기술 협력
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4">제휴 제안하기</h3>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            회사소개서와 제휴 제안 내용을 메일로 보내주세요.<br />
                            담당 부서가 검토 후 빠르게 연락드리겠습니다.
                        </p>
                        <a href="mailto:business@bioguogu.com" className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-primary/90 transition-all shadow-lg transform hover:-translate-y-1">
                            business@bioguogu.com
                        </a>
                    </div>
                    {/* Abstract bg shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                </div>
            </section>
        </main>
    );
}
