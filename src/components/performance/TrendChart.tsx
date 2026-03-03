"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface TrendChartProps {
    data: Array<any>;
}

export function TrendChart({ data }: TrendChartProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="p-6 rounded-xl bg-bg-surface border border-border shadow-sm flex flex-col col-span-12 xl:col-span-8 h-[380px] glass-card"
        >
            <div className="mb-6 flex justify-between items-center shrink-0">
                <div>
                    <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
                        <Activity className="w-5 h-5 text-brand" /> 7-Day Productivity Trend
                    </h2>
                    <p className="text-xs text-text-secondary mt-1">Rolling average momentum score per rep.</p>
                </div>
            </div>

            <div className="w-full h-[300px] min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorAvg" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#7B5EF8" stopOpacity={0.6} />
                                <stop offset="95%" stopColor="#7B5EF8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#8B95B0", fontSize: 12 }} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8B95B0", fontSize: 12 }} width={30} domain={[0, 100]} />
                        <CartesianGrid vertical={false} stroke="#1F2535" strokeDasharray="4 4" />
                        <Tooltip
                            contentStyle={{ backgroundColor: "#161B27", borderColor: "#1F2535", borderRadius: "8px", color: "#F0F4FF" }}
                            itemStyle={{ fontSize: '13px', paddingTop: '4px' }}
                        />
                        <Area type="monotone" dataKey="Team Avg" stroke="#7B5EF8" strokeWidth={3} fillOpacity={1} fill="url(#colorAvg)" activeDot={{ r: 6, strokeWidth: 0, fill: "#22D3EE" }} />
                        <Area type="monotone" dataKey="Jane Doe" stroke="#10B981" strokeWidth={2} fill="none" strokeDasharray="4 4" />
                        <Area type="monotone" dataKey="John Smith" stroke="#F59E0B" strokeWidth={2} fill="none" strokeDasharray="4 4" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
