"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState("hero");

    // Section Tracking Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "diagnostic", "chew", "contact"];

            // Check if we are at the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
                setActiveSection("contact");
                return;
            }

            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "hero", label: "HOME" },
        { id: "diagnostic", label: "DIAGNOSTIC" },
        { id: "chew", label: "DENTAL CHEW" },
        { id: "contact", label: "CONTACT" },
    ];

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-6 hidden md:flex">
            {/* Visual Line Gauge */}
            <div className="absolute right-[5px] top-0 bottom-0 w-[2px] bg-gray-200 rounded-full h-full -z-10 overflow-hidden">
                <motion.div
                    className="w-full bg-primary origin-top"
                    style={{ scaleY }}
                />
            </div>

            {/* Dots */}
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="relative group flex items-center justify-center w-4 h-4"
                >

                    {/* Dot */}
                    <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 ${activeSection === section.id
                        ? "bg-primary border-primary scale-125"
                        : "bg-white border-gray-300 group-hover:border-primary"
                        }`} />
                </a>
            ))}
        </div>
    );
}
