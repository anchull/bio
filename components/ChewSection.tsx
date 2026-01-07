"use client";

import { motion } from "framer-motion";
import { Bone, Heart, Shield } from "lucide-react";
import Link from "next/link";

export default function ChewSection() {
    const benefits = [
        {
            icon: <Bone className="w-8 h-8 text-primary" />,
            title: "치석 제거 & 구취 완화",
            desc: "특수 설계된 단면이 치아 사이의 플라그를 효과적으로 제거합니다."
        },
        {
            icon: <Shield className="w-8 h-8 text-primary" />,
            title: "알러지 프리",
            desc: "곡물 알러지 유발 성분을 배제한 그레인 프리 포뮬러입니다."
        },
        {
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "스트레스 해소",
            desc: "오래 씹을 수 있는 적당한 경도로 반려견의 스트레스를 풀어줍니다."
        }
    ];

    return (
        <section id="chew" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Healthy Snack</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        맛있게 씹으며 지키는 <br /> <span className="text-primary">치아 건강</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        바이오구오구 덴탈껌은 단순한 간식이 아닙니다. <br />
                        치의학 전문가와 함께 설계한 기능성 덴탈 케어 솔루션입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-secondary p-8 rounded-2xl text-center border border-border hover:shadow-xl transition-all"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-primary">
                                {item.icon}
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
