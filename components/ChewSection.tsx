"use client";

import { motion } from "framer-motion";
import { Bone, Heart, Shield } from "lucide-react";
import Link from "next/link";

export default function ChewSection({ dict }: { dict: any }) {
    const icons = [
        <Bone className="w-8 h-8 text-primary" />,
        <Shield className="w-8 h-8 text-primary" />,
        <Heart className="w-8 h-8 text-primary" />
    ];

    return (
        <section id="chew" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">{dict.label}</span>
                    <h2
                        className="text-4xl md:text-5xl font-bold text-foreground mb-4"
                        dangerouslySetInnerHTML={{ __html: dict.title }}
                    />
                    <p
                        className="text-muted-foreground text-lg"
                        dangerouslySetInnerHTML={{ __html: dict.description }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dict.benefits.map((item: any, idx: number) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-secondary p-8 rounded-2xl text-center border border-border hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                                {icons[idx]}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Product Showcase Image */}
                <div className="mt-16 w-full h-[400px] rounded-3xl overflow-hidden relative shadow-lg">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop')" }}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

                    </div>
                </div>
            </div>
        </section>
    );
}
