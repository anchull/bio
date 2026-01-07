"use client";

import { motion } from "framer-motion";
import { Dna, Microscope, Atom, Globe } from "lucide-react";

const features = [
    {
        icon: Dna,
        title: "유전자 편집 2.0",
        description: "오프 타겟 효과가 없는 차세대 CRISPR 기술.",
    },
    {
        icon: Microscope,
        title: "세포 역노화",
        description: "세포 노화를 되돌려 젊은 기능을 회복시킵니다.",
    },
    {
        icon: Globe,
        title: "합성 생물학",
        description: "새로운 생물학적 부품, 장치 및 시스템을 설계합니다.",
    },
];

export default function FeatureSection() {
    return (
        <section className="py-24 bg-background relative" id="science">
            {/* Subtle background grid or gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                        핵심 기술
                    </h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl break-keep">
                        우리의 플랫폼은 생물학적 공학을 융합하여 의학의 미래를 다시 씁니다.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-colors"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
