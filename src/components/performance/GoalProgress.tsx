"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, TrendingUp } from "lucide-react";
import { RepGoal } from "@/types/performance";

interface GoalProgressProps {
    goals: RepGoal[];
}

export function GoalProgress({ goals }: GoalProgressProps) {
    // In a real app we would map 'targetValue' vs actual achievements
    // For the UI, we'll mock the progress visually
    const progressMocks = [
        { title: "Daily Calls", current: 261, target: 300, percentage: 87, color: "text-brand", ringOffset: "text-brand/20" },
        { title: "Meetings", current: 14, target: 20, percentage: 70, color: "text-accent-cyan", ringOffset: "text-accent-cyan/20" },
        { title: "Revenue", current: 78000, target: 100000, percentage: 78, color: "text-semantic-success", ringOffset: "text-semantic-success/20", format: true },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-bg-surface border border-border/70 rounded-xl shadow-sm overflow-hidden col-span-12 xl:col-span-4 flex flex-col glass-card h-[480px]"
        >
            <div className="px-6 py-5 border-b border-border/50 bg-bg-elevated/40 flex justify-between items-center shrink-0">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <Target className="w-5 h-5 text-accent-cyan" /> Team Goals
                </h3>
                <span className="text-[10px] text-brand bg-brand/10 border border-brand/20 rounded-md px-2 py-0.5 font-bold uppercase tracking-widest">Daily</span>
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
                {progressMocks.map((item, i) => (
                    <div key={item.title} className="flex items-center gap-6">
                        <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                <path
                                    className={item.ringOffset}
                                    fill="none"
                                    strokeWidth="3"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path
                                    className={item.color}
                                    fill="none"
                                    strokeWidth="3"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeDasharray={`${item.percentage}, 100`}
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-text-primary">
                                {item.percentage}%
                            </div>
                        </div>

                        <div className="flex-1">
                            <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-text-primary font-mono tracking-tight">
                                    {item.format ? `$${(item.current / 1000).toFixed(1)}k` : item.current}
                                </span>
                                <span className="text-xs text-text-secondary font-medium">
                                    / {item.format ? `$${(item.target / 1000).toFixed(0)}k` : item.target}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-semantic-success/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-semantic-success" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-text-primary">On Target to Hit Daily Quota</p>
                        <p className="text-xs text-text-secondary mt-0.5 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-brand" /> +14% vs yesterday
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
