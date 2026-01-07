"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/" },
        {
            name: "ABOUT",
            href: "/about",
            subMenus: [
                { name: "브랜드 스토리", href: "/about/story" },
                { name: "브랜드 철학", href: "/about/philosophy" },
                { name: "인증 및 수상", href: "/about/cert" }
            ]
        },
        {
            name: "PRODUCT",
            href: "/products",
            subMenus: [
                { name: "진단 키트", href: "/products/diagnostic" },
                { name: "덴탈 껌", href: "/products/chew" }
            ]
        },
        {
            name: "FEATURE",
            href: "/features",
            subMenus: [
                { name: "핵심 기술", href: "/features/tech" },
                { name: "앱 주요 기능", href: "/features/app" }
            ]
        },
        {
            name: "CONTACT",
            href: "/contact",
            subMenus: [
                { name: "자주 묻는 질문", href: "/contact/faq" },
                { name: "고객 지원", href: "/contact/support" },
                { name: "제휴 문의", href: "/contact/partner" }
            ]
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
                }`}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter z-50">
                    <span className={isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"}>BIO</span>
                    <span className={isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}>GUOGU</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center h-full">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => setHoveredLink(link.name)}
                        >
                            <Link
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 py-4 ${isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                                    }`}
                            >
                                {link.name}
                                {link.subMenus && (
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180' : ''}`} />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {hoveredLink === link.name && link.subMenus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[180px] bg-black/80 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden z-50 border border-white/10"
                                    >
                                        <div className="p-4">
                                            <div className="flex flex-col gap-2">
                                                {link.subMenus.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        className="group block px-2 py-1.5 rounded-lg hover:bg-white/5 transition-colors"
                                                    >
                                                        <div className="flex items-center justify-between gap-4">
                                                            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                                                {sub.name}
                                                            </span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"} />
                    )}
                </button>
            </div>


            {/* Mobile Menu Dropdown (Simplified) */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white pt-24 px-6 flex flex-col space-y-6 z-40 overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-gray-100 pb-4">
                            <Link
                                href={link.href}
                                className="text-foreground text-lg font-bold hover:text-primary block mb-3"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                            {link.subMenus && (
                                <div className="pl-4 space-y-3 flex flex-col border-l-2 border-primary/20">
                                    {link.subMenus.map(sub => (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            className="text-gray-500 text-sm hover:text-primary"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
}
