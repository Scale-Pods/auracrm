"use client";

import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { AIPanel } from "./AIPanel";

export function Shell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full bg-bg-base overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col h-full min-w-0">
                <Topbar />
                <main className="flex-1 overflow-y-auto w-full">
                    {children}
                </main>
            </div>
            <AIPanel />
        </div>
    );
}
