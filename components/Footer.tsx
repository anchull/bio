export default function Footer() {
    return (
        <footer id="contact" className="bg-foreground text-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6">
                            <span className="text-primary">BIO</span>GUOGU
                        </h2>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            반려동물과 함께하는 행복한 삶을 위해, <br />
                            과학적인 진단과 건강한 먹거리를 연구합니다.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Company</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>info@bioguogu.com</li>
                            <li>+82 02-1234-5678</li>
                            <li>Seoul, Korea</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Bioguogu. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social placeholders */}
                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                        <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
