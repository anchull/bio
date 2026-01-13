"use client";

import SubPageHero from "@/components/SubPageHero";

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Customer Support"
                subtitle="HELP"
                backgroundImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2940&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-3">1:1 문의하기</h2>
                        <p className="text-gray-500">
                            제품 사용 중 불편한 점이 있거나 도움이 필요하시면 문의를 남겨주세요.<br />
                            담당자가 확인 후 신속하게 답변 드리겠습니다.
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">이름</label>
                                <input type="text" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="홍길동" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-gray-700">연락처</label>
                                <input type="text" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="010-0000-0000" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">이메일</label>
                            <input type="email" className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="example@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">문의 유형</label>
                            <select className="w-full border border-gray-200 rounded-xl p-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white">
                                <option>제품 관련 문의</option>
                                <option>배송/주문 문의</option>
                                <option>앱 사용 문의</option>
                                <option>기타</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-700">문의 내용</label>
                            <textarea className="w-full border border-gray-200 rounded-xl p-4 h-40 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="문의하실 내용을 자세히 적어주세요." />
                        </div>
                        <button className="w-full bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all shadow-lg text-lg">
                            문의 접수하기
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
