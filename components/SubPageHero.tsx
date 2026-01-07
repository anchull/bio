"use client";

import { motion } from "framer-motion";

interface SubPageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

export default function SubPageHero({ title, subtitle, backgroundImage }: SubPageHeroProps) {
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            {/* Background Image */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* {subtitle && (
                        <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-white/90 text-xs font-semibold tracking-wider mb-4 backdrop-blur-md">
                            {subtitle}
                        </span>
                    )} */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>
                </motion.div>
            </div>
        </section>
    );
}
