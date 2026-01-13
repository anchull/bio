"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Smartphone, Activity } from "lucide-react";
import Link from "next/link";

export default function DiagnosticSection({ dict }: { dict: any }) {
    const icons = [
        <ClipboardCheck className="w-10 h-10 text-white" />,
        <Smartphone className="w-10 h-10 text-white" />,
        <Activity className="w-10 h-10 text-white" />
    ];

    return (
        <section id="diagnostic" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">{dict.label}</span>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: dict.title }}
                        />
                        <p
                            className="text-muted-foreground text-lg mb-8 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: dict.description }}
                        />

                        <div className="space-y-6">
                            {dict.steps.map((step: any, index: number) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                                        <div className="flex items-center justify-center">
                                            {/* Reuse icons based on index */}
                                            {icons[index]}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-1">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>

                    {/* Visual Content (Placeholder for Product Image) */}
                    <div className="w-full md:w-1/2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-white">
                        {/* Replace with actual product image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2940&auto=format&fit=crop')" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-bold text-2xl">{dict.image_text.title}</p>
                                <p className="opacity-90">{dict.image_text.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
