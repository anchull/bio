export default function Footer({ footerDict }: { footerDict: any }) {
    return (
        <footer id="contact" className="bg-foreground text-white py-16">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-12 border-b border-white/10 pb-12 mb-12">
                    {/* Brand */}
                    <div>
                        <img
                            src="/images/logo_labinbio.png"
                            alt="LabinBio"
                            className="h-8 w-auto mb-6 object-contain"
                        />
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            {footerDict.description || "반려동물과 함께하는 행복한 삶을 위해, 과학적인 진단과 건강한 먹거리를 연구합니다."}
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="md:text-right">
                        <h3 className="text-lg font-bold mb-6">{footerDict.contact}</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>광주광역시 서구 상무대로 지하1123 서구스타트업센터</li>
                            <li>대표자: 조인아</li>

                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {footerDict.company}. {footerDict.rights}</p>

                </div>
            </div>
        </footer>
    );
}
