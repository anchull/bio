"use client";

import SubPageHero from "@/components/SubPageHero";

export default function ChewProductPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Dental Chew"
                subtitle="PRODUCT"
                backgroundImage="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop"
            />
            {/* Full Screen Image Presentation */}
            <section className="py-20 w-full">
                <div className="w-full max-w-[1000px] mx-auto px-6">
                    <img
                        src="/images/chew_detail.png"
                        alt="Dental Chew Detail"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </main>
    );
}
