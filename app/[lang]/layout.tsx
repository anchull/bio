import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "../globals.css";
import { i18n } from "../../i18n-config";
import { getDictionary } from "../../lib/dictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "Bioguogu | 반려견 헬스케어 솔루션",
  description: "반려견을 위한 스마트 진단키트와 건강한 개껌, 바이오구오구입니다.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <Navbar navDict={dict.nav} lang={lang} />
        {children}
        <Footer footerDict={dict.footer} />
      </body>
    </html>
  );
}
