"use client";

import { Bell, Search, Menu, Sparkles } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { motion } from "framer-motion";

export function Topbar() {
    const { toggleCommandPalette, openAIPanel } = useUIStore();

    return (
        <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-bg-surface z-10 sticky top-0">
            <div className="flex items-center flex-1">
                <button className="md:hidden mr-4 text-text-secondary hover:text-text-primary">
                    <Menu className="w-6 h-6" />
                </button>

                <button
                    onClick={toggleCommandPalette}
                    className="flex items-center md:w-80 w-full max-w-sm px-3 py-1.5 text-sm bg-bg-base border border-border rounded-lg text-text-muted hover:text-text-secondary focus:outline-none focus:ring-1 focus:ring-brand hover:border-border-subtle transition-all"
                >
                    <Search className="w-4 h-4 mr-2" />
                    <span>Search deals, contacts...</span>
                    <div className="ml-auto hidden md:flex items-center text-xs space-x-1">
                        <kbd className="bg-bg-elevated px-1.5 rounded border border-border">⌘</kbd>
                        <kbd className="bg-bg-elevated px-1.5 rounded border border-border">K</kbd>
                    </div>
                </button>
            </div>

            <div className="flex items-center space-x-4">
                <button className="relative p-2 text-text-secondary hover:text-text-primary transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand rounded-full border border-bg-surface" />
                </button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openAIPanel}
                    className="flex items-center px-3 py-1.5 text-sm font-medium bg-bg-elevated border-border text-brand rounded-lg shadow-ai hover:bg-brand/10 transition-colors"
                >
                    <Sparkles className="w-4 h-4 mr-1.5" />
                    AI Assist
                </motion.button>

                <div className="w-px h-6 bg-border mx-2" />

                <button className="flex items-center focus:outline-none">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=JD"
                        alt="User avatar"
                        className="w-8 h-8 rounded-full border border-border hover:border-brand transition-colors"
                    />
                </button>
            </div>
        </header>
    );
}
