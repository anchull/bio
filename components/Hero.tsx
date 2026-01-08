"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    useEffect(() => {
        // Prevent browser from restoring scroll position automatically
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Force scroll to top
        window.scrollTo(0, 0);

        // Optional: Ensure it stays at top after a short delay (for slower connections)
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);

        return () => {
            // Restore default behavior when component unmounts
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'auto';
            }
            clearTimeout(timer);
        };
    }, []);

    return (
        <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image/Overlay */}
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover opacity-80"
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                {/* Fallback image if needed */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2969&auto=format&fit=crop')" }}
                />
            </video>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white/80 text-xs font-semibold tracking-wider mb-6 backdrop-blur-md">
                        PREMIUM PET HEALTHCARE
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        반려견을 위한 <br />
                        <span className="text-primary">스마트 헬스케어</span>의 시작
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                        바이오구오구는 최첨단 바이오 기술로 반려동물의 건강 상태를 집에서 간편하게 진단하고,
                        건강한 간식으로 관리하는 토탈 솔루션을 제공합니다.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                            제품 보러가기
                        </button>
                        <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all">
                            브랜드 스토리
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </section>
    );
}
