import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bioguogu | 반려견 헬스케어 솔루션",
  description: "반려견을 위한 스마트 진단키트와 건강한 개껌, 바이오구오구입니다.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
