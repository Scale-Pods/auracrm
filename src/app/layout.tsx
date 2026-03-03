import "./globals.css";
import { Inter } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AuraCRM",
  description: "AI-powered Sales CRM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <div className="flex h-screen bg-bg-primary text-text-primary">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
              <Topbar />

              <main className="flex-1 overflow-y-auto p-6">
                {children}
              </main>
            </div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}