"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Smartphone, Activity } from "lucide-react";
import Link from "next/link";

export default function DiagnosticSection() {
    const steps = [
        {
            id: "01",
            icon: <ClipboardCheck className="w-10 h-10 text-white" />,
            title: "간편한 검사",
            desc: "집에서 1분이면 충분합니다. 소변 검사로 반려동물의 건강 상태를 체크하세요."
        },
        {
            id: "02",
            icon: <Smartphone className="w-10 h-10 text-white" />,
            title: "앱으로 결과 확인",
            desc: "전용 앱을 통해 검사 결과를 스캔하면 실시간으로 분석 결과를 확인할 수 있습니다."
        },
        {
            id: "03",
            icon: <Activity className="w-10 h-10 text-white" />,
            title: "지속적인 관리",
            desc: "검사 기록을 누적하여 건강 변화 추이를 모니터링하고 미리 예방하세요."
        }
    ];

    return (
        <section id="diagnostic" className="py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Diagnostic Kit</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                            집에서 시작하는 <br />
                            <span className="text-primary">반려동물 건강검진</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            병원에 가지 않아도, 스트레스 없이. <br />
                            바이오구오구 진단키트는 반려동물의 소변을 통해 신장 질환, 당뇨 등 주요 질병의 징후를 조기에 발견할 수 있도록 돕습니다.
                        </p>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                                        <span className="font-bold text-white">{step.id}</span>
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
                                <p className="font-bold text-2xl">Smart Check Kit</p>
                                <p className="opacity-90">ISO 13485 인증 제조시설 생산</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
