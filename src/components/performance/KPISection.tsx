"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, DollarSign, Wallet, Target } from "lucide-react";
import { RepDailyStat } from "@/types/performance";
import { cn } from "@/lib/utils";

interface KPISectionProps {
    reps: RepDailyStat[];
    teamAverage: number;
}

export function KPISection({ reps, teamAverage }: KPISectionProps) {
    const totalCalls = reps.reduce((acc, rep) => acc + rep.callsTotal, 0);
    const totalMeetings = reps.reduce((acc, rep) => acc + rep.meetingsCompleted, 0);
    const totalWon = reps.reduce((acc, rep) => acc + rep.dealsWon, 0);
    const totalRevenue = reps.reduce((acc, rep) => acc + rep.revenueClosed, 0);

    const formatCurrency = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(val);

    const statCards = [
        { title: "Total Calls Today", value: totalCalls, icon: Phone, color: "text-brand", bgColor: "bg-brand/10", border: "border-brand/20" },
        { title: "Meetings Completed", value: totalMeetings, icon: Calendar, color: "text-accent-cyan", bgColor: "bg-accent-cyan/10", border: "border-accent-cyan/20" },
        { title: "Deals Won", value: totalWon, icon: DollarSign, color: "text-semantic-success", bgColor: "bg-semantic-success/10", border: "border-semantic-success/20" },
        { title: "Revenue Closed", value: formatCurrency(totalRevenue), icon: Wallet, color: "text-text-primary", bgColor: "bg-text-secondary/10", border: "border-border" },
        { title: "Avg Productivity", value: teamAverage, icon: Target, color: "text-semantic-warning", bgColor: "bg-semantic-warning/10", border: "border-semantic-warning/20" },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {statCards.map((stat, i) => (
                <motion.div
                    key={stat.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="p-5 rounded-xl bg-bg-surface border border-border shadow-sm flex items-center gap-4 relative overflow-hidden group hover:border-border-subtle transition-colors glass-card"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-bg-elevated to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 border relative z-10 shadow-innerGlow", stat.bgColor, stat.color, stat.border)}>
                        <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="relative z-10 flex-1">
                        <h3 className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-1">{stat.title}</h3>
                        <p className="text-2xl font-bold text-text-primary font-mono tracking-tight leading-none">{stat.value}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
