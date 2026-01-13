"use client";

import SubPageHero from "@/components/SubPageHero";

export default function PhilosophyPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Our Philosophy"
                subtitle="VALUES"
                backgroundImage="/images/brand_philosophy_main.png"
            />
            <section className="py-24 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <img
                        src="/images/brand_philosophy_detail.png"
                        alt="LabinBio Brand Philosophy"
                        className="w-full h-auto shadow-2xl rounded-2xl"
                    />
                </div>
            </section>
        </main>
    );
}
