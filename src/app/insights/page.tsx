"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, AlertTriangle, Lightbulb, UserCheck, ShieldAlert, Zap } from "lucide-react";

const stats = [
    { title: "AI Predictions", value: "94.2%", change: "Accuracy this month", icon: Zap },
    { title: "Risk Alerts", value: "14", change: "3 require immediate action", icon: ShieldAlert },
    { title: "Suggested Actions", value: "86", change: "+42 generated today", icon: Lightbulb },
];

const insights = [
    { id: 1, type: "opportunity", title: "High Conversion Probability", company: "Acme Corp", description: "Based on recent email sentiment and frequency of interaction, Acme Corp has a 92% chance of closing this week. Suggest sending standard SLA.", urgency: "high", icon: TrendingUp },
    { id: 2, type: "risk", title: "Churn Risk Detected", company: "Globex", description: "No activity logged for 14 days and the technical contact ignored the latest proposal. Recommend escalating to the VP level.", urgency: "critical", icon: AlertTriangle },
    { id: 3, type: "action", title: "Upsell Opportunity", company: "Initech", description: "They hit their API limit 3 times this month. Ideal time to propose the Enterprise tier.", urgency: "medium", icon: UserCheck },
];

export default function AIInsightsPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                            AI Insights
                        </h1>
                        <span className="bg-brand/10 text-brand text-xs px-2.5 py-1 rounded-full border border-brand/20 font-semibold shadow-ai flex items-center gap-1.5 line-clamp-1 whitespace-nowrap">
                            <Sparkles className="w-3 h-3" /> Aura Engine Active
                        </span>
                    </div>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Predictive analytics and ML-driven account recommendations.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-bg-surface border border-brand text-brand rounded-lg shadow-sm hover:bg-brand/5 transition-all">
                        <Sparkles className="w-4 h-4" /> Generate Report
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        key={stat.title}
                        className="p-5 rounded-xl bg-bg-surface border border-border/50 shadow-brand relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider">{stat.title}</h3>
                            <div className="p-2 rounded-lg bg-bg-elevated text-brand border border-brand/20 shadow-[0_0_12px_rgba(34,211,238,0.1)] group-hover:bg-brand/10 transition-colors">
                                <stat.icon className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="relative z-10 mt-3">
                            <p className="text-2xl font-bold text-text-primary flex items-center gap-2">{stat.value}</p>
                            <p className="text-xs text-text-muted mt-1 font-medium">{stat.change}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Insights Stream */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden"
            >
                <div className="p-6 border-b border-border/50 bg-bg-elevated/30 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-accent-cyan" /> Suggested Actions
                    </h3>
                </div>
                <div className="divide-y divide-border/50">
                    {insights.map((insight, idx) => (
                        <div key={insight.id} className="p-6 hover:bg-bg-elevated/20 transition-colors flex flex-col md:flex-row gap-6 relative group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex-shrink-0">
                                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm 
                             ${insight.urgency === 'critical' ? 'bg-semantic-danger/10 border-semantic-danger/30 text-semantic-danger' :
                                        insight.urgency === 'high' ? 'bg-semantic-success/10 border-semantic-success/30 text-semantic-success' :
                                            'bg-brand/10 border-brand/30 text-brand'}
                         `}>
                                    <insight.icon className="w-6 h-6" />
                                </div>
                            </div>

                            <div className="flex-1 space-y-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="text-base font-semibold text-text-primary">{insight.title}</h4>
                                        <p className="text-sm font-medium text-text-secondary mt-0.5">{insight.company}</p>
                                    </div>
                                    {insight.urgency === 'critical' && <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-semantic-danger/10 text-semantic-danger border border-semantic-danger/20">Critical</span>}
                                </div>
                                <p className="text-sm text-text-muted leading-relaxed max-w-3xl">{insight.description}</p>
                            </div>

                            <div className="flex-shrink-0 self-start md:self-center flex flex-col gap-2 w-full md:w-auto">
                                <button className="w-full text-center px-4 py-2 text-sm bg-bg-elevated text-text-primary rounded-lg border border-border hover:border-brand/50 hover:text-brand transition-colors font-medium">Review</button>
                                <button className="w-full text-center px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors">Dismiss</button>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
