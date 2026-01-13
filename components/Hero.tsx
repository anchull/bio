"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero({ heroDict, lang }: { heroDict: any; lang: string }) {
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
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover"
                onError={(e) => console.error('Video error:', e)}
                onLoadedData={() => console.log('Video loaded successfully')}
            >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-black/40" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white/80 text-xs font-semibold tracking-wider mb-6 backdrop-blur-md">
                        {heroDict.preheading}
                    </span>
                    <h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: heroDict.title }}
                    />
                    <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                        {heroDict.description}
                    </p>

                    <div className="flex flex-col md:flex-row gap-4">
                        <Link href={`/${lang}/products/diagnostic`} className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-center">
                            {heroDict.cta_product}
                        </Link>
                        <Link href={`/${lang}/about/story`} className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all text-center">
                            {heroDict.cta_story}
                        </Link>
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
