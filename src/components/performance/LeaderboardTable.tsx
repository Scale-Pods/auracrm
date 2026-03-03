"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Trophy } from "lucide-react";
import { RepDailyStat } from "@/types/performance";
import { cn } from "@/lib/utils";

interface LeaderboardTableProps {
    reps: RepDailyStat[];
}

export function LeaderboardTable({ reps }: LeaderboardTableProps) {
    const sortedReps = [...reps].sort((a, b) => b.productivityScore - a.productivityScore);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-bg-surface border border-border/70 rounded-xl shadow-sm overflow-hidden col-span-12 xl:col-span-8 flex flex-col glass-card max-h-[480px]"
        >
            <div className="px-6 py-5 border-b border-border/50 bg-bg-elevated/40 flex justify-between items-center">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-semantic-warning" /> Daily Leaderboard
                </h3>
                <span className="text-xs text-text-secondary bg-bg-base border border-border rounded-md px-3 py-1 font-semibold tracking-wide uppercase">Today</span>
            </div>

            <div className="overflow-x-auto flex-1 h-full min-h-[300px]">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border/50 bg-bg-base text-xs font-semibold text-text-secondary uppercase tracking-wider h-12 sticky top-0 z-10 hidden sm:table-row">
                            <th className="px-6 py-3">Rank</th>
                            <th className="px-6 py-3">Sales Rep</th>
                            <th className="px-4 py-3 text-right">Calls</th>
                            <th className="px-4 py-3 text-right">Mtgs</th>
                            <th className="px-4 py-3 text-right">Revenue</th>
                            <th className="px-6 py-3 text-right">Score</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/50">
                        {sortedReps.map((rep, index) => (
                            <tr key={rep.id} className="hover:bg-bg-elevated/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span className={cn(
                                            "w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold border",
                                            index === 0 ? "bg-semantic-warning/10 text-semantic-warning border-semantic-warning/30" :
                                                index === 1 ? "bg-text-secondary/10 text-text-primary border-border" :
                                                    index === 2 ? "bg-brand/10 text-brand border-brand/20" :
                                                        "bg-bg-base text-text-secondary border-transparent"
                                        )}>
                                            #{index + 1}
                                        </span>
                                        {rep.rankDelta > 0 ? <TrendingUp className="w-3 h-3 text-semantic-success" /> : rep.rankDelta < 0 ? <TrendingDown className="w-3 h-3 text-semantic-danger" /> : <span className="w-3 text-center">-</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img src={rep.avatar} alt={rep.repName} className="w-8 h-8 rounded-full border border-border" />
                                        <div>
                                            <p className="text-sm font-semibold text-text-primary group-hover:text-brand transition-colors whitespace-nowrap">{rep.repName}</p>
                                            {rep.activityCompletionRate < 50 && (
                                                <span className="inline-block px-1.5 py-0.5 rounded bg-semantic-danger/10 text-semantic-danger text-[10px] font-bold border border-semantic-danger/20 mt-0.5 uppercase">At Risk</span>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-right text-sm text-text-primary font-mono">{rep.callsTotal}</td>
                                <td className="px-4 py-4 text-right text-sm text-text-primary font-mono">{rep.meetingsCompleted}</td>
                                <td className="px-4 py-4 text-right text-sm font-medium text-text-secondary whitespace-nowrap">{formatCurrency(rep.revenueClosed)}</td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex flex-col items-end">
                                        <span className={cn(
                                            "text-xl font-bold font-mono",
                                            rep.productivityScore >= 80 ? "text-semantic-success" : rep.productivityScore >= 50 ? "text-text-primary" : "text-semantic-danger"
                                        )}>
                                            {rep.productivityScore}
                                        </span>
                                        <div className="w-16 h-1.5 bg-bg-base rounded-full mt-1 overflow-hidden border border-border">
                                            <div
                                                className={cn("h-full rounded-full", rep.productivityScore >= 80 ? "bg-semantic-success" : rep.productivityScore >= 50 ? "bg-brand" : "bg-semantic-danger")}
                                                style={{ width: `${Math.min(rep.productivityScore, 100)}%` }}
                                            />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
}
