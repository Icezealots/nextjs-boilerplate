import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIGHT | 頂級珠寶訂製與美學展示", // 修改這裡
  description: "Right 珠寶：以卓越工藝，點亮生命的璀璨時刻。", // 修改這裡
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW"> {/* 改為繁體中文 */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 你可以考慮在這裡放一個全站通用的 <Navbar /> */}
        {children}
        {/* 你可以考慮在這裡放一個全站通用的 <Footer /> */}
      </body>
    </html>
  );
}
