"use client";

import SubPageHero from "@/components/SubPageHero";

export default function BrandStoryPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Brand Story"
                subtitle="OUR JOURNEY"
                backgroundImage="/images/hero_about_story.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-3 block">The Beginning</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            "말 못 하는 아이들의 아픔을 <br />
                            먼저 알아챌 수는 없을까?"
                        </h2>
                        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                            바이오구오구의 시작은 이 작은, 하지만 절실한 질문에서부터였습니다.
                        </p>
                    </div>

                    <div className="relative w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-gray-100">
                        <img
                            src="/images/brand_representative.jpg"
                            alt="Bioguogu Brand Representative"
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="text-center mb-16">
                        <p className="text-2xl font-bold italic text-primary">
                            "사랑한다면 관찰이 아닌, 진단을 시작하세요."
                        </p>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="mb-6">
                            반려동물은 아파도 티를 내지 않습니다. 본능적으로 아픔을 숨기는 아이들의 습성 때문에,
                            보호자가 이상 징후를 발견했을 때는 이미 증상이 상당히 진행된 후인 경우가 많습니다.
                        </p>
                        <p className="mb-6">
                            우리는 이 '골든 타임'을 지키고 싶었습니다. 매일 병원에 갈 수는 없지만,
                            가정에서 누구나 쉽고 정확하게 건강 상태를 확인할 수 있다면 어떨까요?
                        </p>
                        <p>
                            수의학 전문가와 데이터 사이언티스트들이 모여 수년간의 연구 끝에 탄생한 바이오구오구는,
                            이제 전 세계 반려가족의 가장 든든한 건강 파트너가 되고자 합니다.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
