"use client";

import SubPageHero from "@/components/SubPageHero";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Contact Us"
                subtitle="GET IN TOUCH"
                backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="w-full lg:w-1/3 space-y-8">
                        <div>
                            <span className="text-primary font-bold text-sm uppercase mb-2 block">Customer Center</span>
                            <h2 className="text-4xl font-bold mb-6">1544-0000</h2>
                            <p className="text-gray-600">
                                평일 10:00 - 18:00 <br />
                                점심 12:00 - 13:00 <br />
                                (주말 및 공휴일 휴무)
                            </p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span> Email
                            </h4>
                            <p className="text-gray-600 text-sm mb-2">일반 문의: help@bioguogu.com</p>
                            <p className="text-gray-600 text-sm">제휴 문의: biz@bioguogu.com</p>
                        </div>

                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span> Location
                            </h4>
                            <p className="text-gray-600 text-sm">
                                서울특별시 강남구 테헤란로 123, <br />
                                바이오구오구 빌딩 10층
                            </p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="w-full lg:w-2/3 h-[500px] bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2933"
                            alt="Map Location"
                            className="w-full h-full object-cover grayscale opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white px-6 py-4 rounded-full shadow-2xl font-bold text-lg flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                BioGuogu Headquarter
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
