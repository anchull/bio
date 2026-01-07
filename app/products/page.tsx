"use client";

import SubPageHero from "@/components/SubPageHero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-white">
            <SubPageHero
                title="Our Products"
                subtitle="LINEUP"
                backgroundImage="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2969&auto=format&fit=crop"
            />
            <section className="py-20 container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <Link href="/products/diagnostic" className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                        <img src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2940" alt="Diagnostic" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                            <h3 className="text-2xl font-bold mb-1">Diagnostic Kit</h3>
                            <p className="flex items-center gap-2 text-sm opacity-90 group-hover:translate-x-1 transition-transform">View Detail <ArrowRight className="w-4 h-4" /></p>
                        </div>
                    </Link>
                    <Link href="/products/chew" className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
                        <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688" alt="Chew" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                            <h3 className="text-2xl font-bold mb-1">Dental Chew</h3>
                            <p className="flex items-center gap-2 text-sm opacity-90 group-hover:translate-x-1 transition-transform">View Detail <ArrowRight className="w-4 h-4" /></p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
