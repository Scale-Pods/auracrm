"use client";

import { motion } from "framer-motion";
import { BarChart as BarChartIcon, Download, Filter, TrendingUp, PieChart, Activity, Users } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Cell } from "recharts";

const stats = [
    { title: "Total Revenue Generated", value: "$4.2M", change: "+12.5% vs Q1", icon: TrendingUp },
    { title: "Win Rate %", value: "32.4%", change: "-2.1% vs Q1", icon: PieChart },
    { title: "Avg Sales Cycle", value: "42 Days", change: "-4 days (faster)", icon: Activity },
];

const revenueData = [
    { name: "Jan", target: 400, actual: 450 },
    { name: "Feb", target: 450, actual: 520 },
    { name: "Mar", target: 500, actual: 480 },
    { name: "Apr", target: 550, actual: 610 },
    { name: "May", target: 600, actual: 590 },
    { name: "Jun", target: 650, actual: 720 },
];

const performanceData = [
    { name: "Jane Doe", value: 142 },
    { name: "John Smith", value: 98 },
    { name: "Alice J.", value: 85 },
    { name: "Bob M.", value: 64 },
];

export default function ReportsPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                        Reports & Analytics
                    </h1>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Deep dive into revenue metrics and team performance.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-bg-surface border border-border rounded-lg text-text-secondary hover:text-text-primary transition-colors hover:border-brand/40 shadow-sm">
                        <Filter className="w-4 h-4" /> This Quarter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-brand text-white rounded-lg shadow-brand hover:brightness-110 transition-all">
                        <Download className="w-4 h-4" /> Export CSV
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        key={stat.title}
                        className="p-5 rounded-xl bg-bg-surface border border-border/70 shadow-sm relative overflow-hidden group hover:border-brand/30 transition-colors"
                    >
                        <div className="absolute right-0 top-0 w-32 h-32 bg-accent-cyan/5 blur-3xl rounded-full group-hover:bg-brand/10 transition-colors" />
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <h3 className="text-text-secondary text-sm font-semibold">{stat.title}</h3>
                            <div className="p-2.5 rounded-xl bg-bg-elevated text-brand shadow-innerGlow">
                                <stat.icon className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="relative z-10 mt-2">
                            <p className="text-3xl font-bold text-text-primary font-mono tracking-tight">{stat.value}</p>
                            <p className="text-sm text-text-muted mt-2 font-medium">{stat.change}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Revenue Tracking Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="p-6 rounded-xl bg-bg-surface border border-border shadow-sm flex flex-col h-[400px]"
                >
                    <div className="mb-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-brand" /> Revenue Tracking
                            </h2>
                            <p className="text-xs text-text-secondary mt-1">Actual vs Target (in thousands)</p>
                        </div>
                    </div>

                    <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#7B5EF8" stopOpacity={0.6} />
                                        <stop offset="95%" stopColor="#7B5EF8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#8B95B0", fontSize: 12 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8B95B0", fontSize: 12 }} tickFormatter={(value) => `$${value}k`} width={50} />
                                <CartesianGrid vertical={false} stroke="#1F2535" strokeDasharray="4 4" />
                                <Tooltip contentStyle={{ backgroundColor: "#161B27", borderColor: "#1F2535", borderRadius: "8px", color: "#F0F4FF" }} itemStyle={{ color: "#22D3EE" }} />
                                <Area type="monotone" dataKey="target" stroke="#4A5270" strokeWidth={2} strokeDasharray="4 4" fill="none" />
                                <Area type="monotone" dataKey="actual" stroke="#7B5EF8" strokeWidth={3} fillOpacity={1} fill="url(#colorActual)" activeDot={{ r: 6, strokeWidth: 0, fill: "#22D3EE" }} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Rep Performance Bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="p-6 rounded-xl bg-bg-surface border border-border shadow-sm flex flex-col h-[400px]"
                >
                    <div className="mb-6 flex justify-between items-center">
                        <div>
                            <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
                                <Users className="w-5 h-5 text-accent-cyan" /> Rep Performance
                            </h2>
                            <p className="text-xs text-text-secondary mt-1">Closed won value (in thousands)</p>
                        </div>
                    </div>

                    <div className="flex-1 w-full min-h-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart layout="vertical" data={performanceData} margin={{ top: 0, right: 20, left: 40, bottom: 0 }}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: "#F0F4FF", fontSize: 12, fontWeight: 500 }} width={80} />
                                <Tooltip cursor={{ fill: "#161B27" }} contentStyle={{ backgroundColor: "#161B27", borderColor: "#1F2535", borderRadius: "8px", color: "#F0F4FF" }} />
                                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                                    {performanceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 0 ? "#10B981" : "#7B5EF8"} opacity={1 - (index * 0.15)} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
