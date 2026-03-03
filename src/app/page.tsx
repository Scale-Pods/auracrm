"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Zap
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";
import { cn } from "@/lib/utils";

const revenueData = [
  { name: "Jan", total: 45000 },
  { name: "Feb", total: 52000 },
  { name: "Mar", total: 48000 },
  { name: "Apr", total: 61000 },
  { name: "May", total: 59000 },
  { name: "Jun", total: 72000 },
  { name: "Jul", total: 84000 },
];

const pipelineStageData = [
  { name: "Lead", value: 124, expected: 50 },
  { name: "Qualified", value: 86, expected: 40 },
  { name: "Proposal", value: 45, expected: 30 },
  { name: "Negotiation", value: 24, expected: 20 },
  { name: "Won", value: 18, expected: 15 },
];

const insights = [
  { id: 1, text: "Acme Corp is highly likely to close this week based on sentiment analysis.", type: "success" },
  { id: 2, text: "Globex deal stalled for 14 days. Suggest sending a follow-up email.", type: "warning" },
  { id: 3, text: "Overall win rate increased by 4.2% since last quarter.", type: "info" },
];

const reps = [
  { name: "Jane Doe", score: 94, deals: 12, value: "$142k" },
  { name: "John Smith", score: 88, deals: 8, value: "$98k" },
  { name: "Alice J.", score: 82, deals: 10, value: "$85k" },
];

const kpis = [
  { title: "Total Revenue", value: "$84,230.00", icon: DollarSign, trend: "+12.5%", isPositive: true },
  { title: "Active Deals", value: "142", icon: Target, trend: "+8.2%", isPositive: true },
  { title: "Win Rate", value: "34.2%", icon: TrendingUp, trend: "-2.4%", isPositive: false },
  { title: "Avg Deal Size", value: "$12,450", icon: Users, trend: "+5.1%", isPositive: true },
];

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
      <header className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
          Overview
        </h1>
        <p className="text-text-secondary text-sm md:text-base mt-1">Here&apos;s what&apos;s happening in your sales pipeline today.</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
            key={kpi.title}
            className="p-5 rounded-xl bg-bg-surface border border-border shadow-sm group hover:border-brand/40 transition-colors relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-24 h-24 bg-brand/5 blur-2xl rounded-bl-full group-hover:bg-brand/10 transition-colors" />

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div className="p-2.5 rounded-lg bg-bg-elevated text-brand shadow-innerGlow">
                <kpi.icon className="w-5 h-5" />
              </div>
              <div className={cn("flex items-center text-xs font-semibold px-2 py-1 rounded-full", kpi.isPositive ? "bg-semantic-success/10 text-semantic-success" : "bg-semantic-danger/10 text-semantic-danger")}>
                {kpi.isPositive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                {kpi.trend}
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-text-secondary text-sm font-medium">{kpi.title}</h3>
              <p className="text-2xl font-bold text-text-primary mt-1 font-mono tracking-tight">{kpi.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="lg:col-span-8 p-5 rounded-xl bg-bg-surface border border-border shadow-sm flex flex-col h-[400px]"
        >
          <div className="mb-4">
            <h2 className="text-lg font-bold text-text-primary">Revenue Forecast</h2>
            <p className="text-xs text-text-secondary">Estimated revenue over time based on current pipeline</p>
          </div>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7B5EF8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#7B5EF8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8B95B0", fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#8B95B0", fontSize: 12 }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                  width={60}
                />
                <CartesianGrid vertical={false} stroke="#1F2535" strokeDasharray="4 4" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#161B27", borderColor: "#1F2535", borderRadius: "8px", color: "#F0F4FF" }}
                  itemStyle={{ color: "#22D3EE" }}
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#7B5EF8"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                  activeDot={{ r: 6, strokeWidth: 0, fill: "#22D3EE" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Funnel/Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="lg:col-span-4 p-5 rounded-xl bg-bg-surface border border-border shadow-sm flex flex-col"
        >
          <div className="mb-4">
            <h2 className="text-lg font-bold text-text-primary">Pipeline Funnel</h2>
            <p className="text-xs text-text-secondary">Deal distribution across stages</p>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height={260}>
              <BarChart layout="vertical" data={pipelineStageData} margin={{ top: 0, right: 0, left: 30, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: "#8B95B0", fontSize: 12 }} width={80} />
                <Tooltip
                  cursor={{ fill: "#161B27" }}
                  contentStyle={{ backgroundColor: "#161B27", borderColor: "#1F2535", borderRadius: "8px", color: "#F0F4FF" }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24}>
                  {pipelineStageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === pipelineStageData.length - 1 ? "#10B981" : "#7B5EF8"} opacity={1 - (index * 0.15)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
        {/* AI Insights Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="p-5 rounded-xl bg-bg-surface border border-border/50 shadow-brand relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-accent-cyan/5 pointer-events-none" />
          <div className="flex items-center gap-2 mb-5 relative z-10">
            <div className="p-1.5 rounded-full bg-brand/20 text-brand">
              <Zap className="w-5 h-5 fill-brand/20" />
            </div>
            <h2 className="text-lg font-bold text-text-primary">AI Action Items</h2>
          </div>

          <div className="space-y-3 relative z-10">
            {insights.map((insight) => (
              <div key={insight.id} className="p-4 rounded-lg bg-bg-elevated border border-border flex items-start gap-3 hover:border-brand/40 transition-all cursor-pointer group">
                <div className={cn(
                  "w-2 h-2 rounded-full mt-1.5 flex-shrink-0",
                  insight.type === 'success' ? 'bg-semantic-success shadow-[0_0_8px_rgba(16,185,129,0.6)]' :
                    insight.type === 'warning' ? 'bg-semantic-warning shadow-[0_0_8px_rgba(245,158,11,0.6)]' :
                      'bg-brand shadow-[0_0_8px_rgba(123,94,248,0.6)]'
                )} />
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">{insight.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rep Performance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="p-5 rounded-xl bg-bg-surface border border-border shadow-sm flex flex-col"
        >
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-text-primary">Top Performers</h2>
            <button className="text-xs text-brand hover:text-brand-glow transition-colors">View All</button>
          </div>

          <div className="space-y-4 flex-1">
            {reps.map((rep) => (
              <div key={rep.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-elevated transition-colors border border-transparent hover:border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-bg-base border border-border flex items-center justify-center font-bold text-sm">
                    {rep.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary">{rep.name}</h4>
                    <p className="text-xs text-text-secondary">{rep.deals} active deals</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-text-primary font-mono tracking-tight">{rep.value}</p>
                  <p className="text-xs text-semantic-success mt-0.5">Score: {rep.score}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
