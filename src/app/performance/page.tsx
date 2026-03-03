export const dynamic = "force-dynamic";

"use client";

import { motion } from "framer-motion";
import { useRepPerformanceQuery } from "@/hooks/useRepPerformanceQuery";
import { KPISection } from "@/components/performance/KPISection";
import { LeaderboardTable } from "@/components/performance/LeaderboardTable";
import { GoalProgress } from "@/components/performance/GoalProgress";
import dynamicImport from "next/dynamic";

const TrendChart = dynamicImport(
    () => import("@/components/performance/TrendChart").then(mod => mod.TrendChart),
    { ssr: false }
);
import { AlertsPanel } from "@/components/performance/AlertsPanel";
import { Loader2 } from "lucide-react";

export default function PerformancePage() {
    const { data, isLoading, error } = useRepPerformanceQuery();

    if (isLoading) {
        return (
            <div className="flex bg-bg-base w-full h-[80vh] items-center justify-center">
                <Loader2 className="w-8 h-8 text-brand animate-spin" />
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="p-8 text-center text-semantic-danger w-full">
                <p>Failed to load performance metrics.</p>
            </div>
        );
    }

    // Pre-calculate mapping for Recharts component since it needs an Array format 
    const trendMetrics = [
        { date: "Mon", "Team Avg": 68, "Jane Doe": 85, "John Smith": 70 },
        { date: "Tue", "Team Avg": 70, "Jane Doe": 88, "John Smith": 75 },
        { date: "Wed", "Team Avg": 69, "Jane Doe": 82, "John Smith": 72 },
        { date: "Thu", "Team Avg": 73, "Jane Doe": 90, "John Smith": 68 },
        { date: "Fri", "Team Avg": 76, "Jane Doe": 95, "John Smith": 80 },
        { date: "Sat", "Team Avg": 71, "Jane Doe": 92, "John Smith": 75 },
        { date: "Sun", "Team Avg": 70, "Jane Doe": 96, "John Smith": 72 },
    ];

    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6 pb-24">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                        Daily Performance
                    </h1>
                    <p className="text-text-secondary text-sm md:text-base mt-1">
                        Track real-time productivity score, calls, and pipeline movement.
                    </p>
                </div>
            </header>

            {/* 1. Global KPI Section */}
            <KPISection reps={data.reps} teamAverage={data.teamAverage} />

            {/* 2. Top row: Leaderboard & Alerts */}
            <div className="grid grid-cols-12 gap-6 mt-2">
                <LeaderboardTable reps={data.reps} />
                <AlertsPanel alerts={data.alerts} />
            </div>

            {/* 3. Bottom row: Goal Rings & Trend Line */}
            <div className="grid grid-cols-12 gap-6 mt-2">
                <GoalProgress goals={data.goals} />
                <TrendChart data={trendMetrics} />
            </div>

        </div>
    );
}
