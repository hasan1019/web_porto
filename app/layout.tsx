import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Hasan || Portfolio",
  description: "Portofolio create with Next.js 13 and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratFont.className} antialiased bg-[#0a0a0b]`}>{children}</body>
    </html>
  );
}
