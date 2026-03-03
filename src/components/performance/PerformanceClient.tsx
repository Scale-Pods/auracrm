"use client";

import { useRepPerformanceQuery } from "@/hooks/useRepPerformanceQuery";
import { KPISection } from "@/components/performance/KPISection";
import { LeaderboardTable } from "@/components/performance/LeaderboardTable";
import { GoalProgress } from "@/components/performance/GoalProgress";
import { AlertsPanel } from "@/components/performance/AlertsPanel";
import { RepCardsGrid } from "@/components/performance/RepCardsGrid";
import dynamicImport from "next/dynamic";

const TrendChart = dynamicImport(
    () => import("@/components/performance/TrendChart").then(mod => mod.TrendChart),
    { ssr: false }
);

export default function PerformanceClient() {
    const { data, isLoading } = useRepPerformanceQuery();

    if (isLoading) return <div className="p-6">Loading...</div>;
    if (!data) return <div className="p-6 text-semantic-danger">Error loading performance data.</div>;


    return (
        <>
            <KPISection reps={data.reps} teamAverage={data.teamAverage} />
            <LeaderboardTable reps={data.reps} />
            <GoalProgress goals={data.goals} />
            <TrendChart data={data.trend} />
            <RepCardsGrid reps={data.reps} />
            <AlertsPanel alerts={data.alerts} />
        </>
    );
}