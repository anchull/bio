"use client";

import SubPageHero from "@/components/SubPageHero";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="About Us"
                subtitle="COMPANY"
                backgroundImage="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2787&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">Who We Are</span>
                        <h2 className="text-4xl font-bold mb-6 leading-tight">
                            반려동물의 <span className="text-primary">더 나은 삶</span>을 위한 <br />
                            끊임없는 여정
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-8">
                            바이오구오구는 혁신적인 바이오 기술과 반려동물에 대한 깊은 이해를 바탕으로 시작되었습니다.
                            우리는 단순히 제품을 만드는 것을 넘어, 보호자와 반려동물이 오랫동안 건강하게 함께할 수 있는 세상을 꿈꿉니다.
                            <br /><br />
                            가정에서 시작되는 전문적인 헬스케어, 바이오구오구가 그 기준을 만들어갑니다.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581888227599-779811985203?q=80&w=2787"
                                alt="Researcher with dog"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
                            <p className="text-4xl font-bold text-primary mb-1">10+</p>
                            <p className="text-gray-500 font-medium">Years of Research</p>
                        </div>
                    </div>
                </div>

                {/* Stats / Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-gray-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">99.9%</h3>
                        <p className="text-gray-500">진단 정확도</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">500K+</h3>
                        <p className="text-gray-500">누적 데이터</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Patent</h3>
                        <p className="text-gray-500">독자 기술 특허</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Global</h3>
                        <p className="text-gray-500">수출 국가 확대</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
