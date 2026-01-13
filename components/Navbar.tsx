"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ navDict, lang }: { navDict: any; lang: string }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: navDict.home || "HOME", href: `/${lang}` },
        {
            name: navDict.about,
            href: `/${lang}/about/story`,
            subMenus: [
                { name: navDict.about_submenu?.story || "브랜드 스토리", href: `/${lang}/about/story` },
                { name: navDict.about_submenu?.philosophy || "브랜드 철학", href: `/${lang}/about/philosophy` },
                { name: navDict.about_submenu?.cert || "품질 인증 현황", href: `/${lang}/about/cert` }
            ]
        },
        {
            name: navDict.products,
            href: `/${lang}/products/diagnostic`,
            subMenus: [
                { name: navDict.products_submenu?.diagnostic || "진단 키트", href: `/${lang}/products/diagnostic` },
                { name: navDict.products_submenu?.chew || "덴탈 껌", href: `/${lang}/products/chew` }
            ]
        },
        {
            name: navDict.features,
            href: `/${lang}/features/tech`,
            subMenus: [
                { name: navDict.features_submenu?.tech || "핵심 기술", href: `/${lang}/features/tech` },
                { name: navDict.features_submenu?.app || "앱 주요 기능", href: `/${lang}/features/app` }
            ]
        },
        {
            name: navDict.contact,
            href: `/${lang}/contact/faq`,
            subMenus: [
                { name: navDict.contact_submenu?.faq || "자주 묻는 질문", href: `/${lang}/contact/faq` },
                { name: navDict.contact_submenu?.support || "고객 지원", href: `/${lang}/contact/support` },
                { name: navDict.contact_submenu?.partner || "제휴 문의", href: `/${lang}/contact/partner` }
            ]
        },
    ];

    const getOtherLangPath = () => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        // segments[0] is "", segments[1] is "ko" or "en"
        const currentLang = segments[1];
        if (currentLang === "ko") {
            segments[1] = "en";
        } else if (currentLang === "en") {
            segments[1] = "ko";
        } else {
            // Should not happen with middleware, but fallback
            return "/en" + pathname;
        }
        return segments.join("/");
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6"
                }`}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link href={`/${lang}`} className="z-50 relative">
                    <img
                        src="/images/logo_labinbio.png"
                        alt="LabinBio"
                        className="h-10 w-auto object-contain"
                    />
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

                    {/* Language Switcher */}
                    <Link
                        href={getOtherLangPath()}
                        className={`text-sm font-bold border border-current px-3 py-1 rounded-full transition-colors ${isScrolled ? "text-primary hover:bg-primary hover:text-white" : "text-white hover:bg-white hover:text-primary"
                            }`}
                    >
                        {lang === 'ko' ? 'EN' : 'KO'}
                    </Link>
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
                    <Link
                        href={getOtherLangPath()}
                        className="inline-block text-center w-full py-3 mt-4 border border-gray-300 rounded-lg font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {lang === 'ko' ? 'English' : '한국어'}
                    </Link>
                </div>
            )}
        </nav>
    );
}
