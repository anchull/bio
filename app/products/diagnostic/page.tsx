"use client";

import SubPageHero from "@/components/SubPageHero";

export default function DiagnosticProductPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Diagnostic Kit"
                subtitle="PRODUCT"
                backgroundImage="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2940&auto=format&fit=crop"
            />
            {/* Full Screen Image Presentation */}
            <section className="py-20 w-full">
                <div className="w-full max-w-[1000px] mx-auto px-6">
                    <img
                        src="/images/diagnostic_detail.jpg"
                        alt="Diagnostic Kit Detail"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </main>
    );
}
