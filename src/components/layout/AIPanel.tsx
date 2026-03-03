"use client";

import { X, Sparkles, Send, FileText } from "lucide-react";
import { useUIStore } from "@/store/ui-store";
import { motion, AnimatePresence } from "framer-motion";

export function AIPanel() {
    const { aiPanelOpen, closeAIPanel } = useUIStore();

    return (
        <AnimatePresence>
            {aiPanelOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAIPanel}
                        className="fixed inset-0 bg-bg-base/50 backdrop-blur-sm z-40 transition-opacity"
                    />
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 w-full max-w-sm h-full bg-bg-surface border-l border-border z-50 flex flex-col shadow-2xl"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-border bg-bg-elevated/50 backdrop-blur">
                            <div className="flex items-center gap-2 text-brand">
                                <Sparkles className="w-5 h-5" />
                                <h2 className="font-semibold text-text-primary">AI Assistant</h2>
                            </div>
                            <button
                                onClick={closeAIPanel}
                                className="p-1 hover:bg-bg-elevated rounded-full transition-colors text-text-secondary"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col">
                            <div className="flex flex-col gap-2 relative group w-full self-start max-w-[85%] text-sm bg-bg-elevated border-l-2 border-brand p-3 rounded-lg rounded-tl-none shadow-sm mt-auto mb-2 opacity-90 hover:opacity-100 transition-opacity">
                                <p className="text-text-primary leading-relaxed whitespace-pre-wrap"><span className="text-brand font-semibold mr-1">Aura AI: </span>Hello Jane! How can I help you today? Try asking me to summarize a deal or draft an email.</p>
                            </div>
                        </div>

                        <div className="p-4 border-t border-border bg-bg-surface">
                            <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
                                <button className="whitespace-nowrap rounded-full px-3 py-1 bg-bg-elevated border border-border text-xs text-text-secondary hover:text-brand hover:border-brand transition-colors">Summarize Deal #1</button>
                                <button className="whitespace-nowrap rounded-full px-3 py-1 bg-bg-elevated border border-border text-xs text-text-secondary hover:text-brand hover:border-brand transition-colors">Draft follow up</button>
                                <button className="whitespace-nowrap rounded-full px-3 py-1 bg-bg-elevated border border-border text-xs text-text-secondary hover:text-brand hover:border-brand transition-colors">What are risks?</button>
                            </div>
                            <div className="relative">
                                <textarea
                                    className="w-full bg-bg-elevated border border-border rounded-xl px-4 py-3 pb-10 text-sm focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent text-text-primary placeholder:text-text-muted resize-none min-h-[50px] overflow-hidden"
                                    placeholder="Ask anything..."
                                    rows={2}
                                />

                                <div className="absolute right-2 bottom-2 flex items-center gap-1">
                                    <button className="p-1.5 text-text-muted hover:text-text-primary transition-colors tooltip-trigger relative group">
                                        <FileText className="w-4 h-4" />
                                        <span className="absolute bottom-full mb-2 right-0 hidden group-hover:block bg-bg-elevated text-xs px-2 py-1 rounded border border-border w-max">Attach Context</span>
                                    </button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-1.5 bg-brand text-white rounded-lg hover:bg-brand/90 transition-colors shadow-brand"
                                    >
                                        <Send className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
