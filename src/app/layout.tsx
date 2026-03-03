import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/layout/Shell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "AuraCRM | AI-Powered Sales Workspace",
  description: "Premium futuristic SaaS CRM with AI insights and predictive pipeline management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans bg-bg-base text-text-primary antialiased h-screen w-screen overflow-hidden selection:bg-brand/30 selection:text-brand">
        <Shell>
          {children}
        </Shell>
      </body>
    </html>
  );
}
