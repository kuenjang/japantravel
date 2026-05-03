import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "日本中部・北陸 7天6夜旅遊行程",
  description:
    "從名古屋出發，穿越昇龍道、上高地、合掌村，最後南下關西。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSansTc.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
