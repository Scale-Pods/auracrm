"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, TrendingDown } from "lucide-react";
import { RepAlert } from "@/types/performance";
import { cn } from "@/lib/utils";

interface AlertsPanelProps {
    alerts: RepAlert[];
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {
    const getIcon = (type: string) => {
        switch (type) {
            case 'zero_activity_3pm': return <Clock className="w-5 h-5 text-semantic-warning" />;
            case 'below_threshold': return <TrendingDown className="w-5 h-5 text-semantic-danger" />;
            case 'high_performer': return <TrendingDown className="w-5 h-5 text-semantic-success" />; // Ideally TrendingUp
            default: return <AlertTriangle className="w-5 h-5 text-brand" />;
        }
    };

    const getColor = (type: string) => {
        switch (type) {
            case 'zero_activity_3pm': return "bg-semantic-warning/10 border-semantic-warning/30 text-semantic-warning";
            case 'below_threshold': return "bg-semantic-danger/10 border-semantic-danger/30 text-semantic-danger";
            case 'high_performer': return "bg-semantic-success/10 border-semantic-success/30 text-semantic-success";
            default: return "bg-brand/10 border-brand/30 text-brand";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-bg-surface border border-border/70 rounded-xl shadow-sm overflow-hidden col-span-12 xl:col-span-4 flex flex-col glass-card h-[380px]"
        >
            <div className="px-6 py-5 border-b border-border/50 bg-bg-elevated/40 flex justify-between items-center shrink-0">
                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-semantic-danger" /> System Alerts
                </h3>
                {alerts.length > 0 && (
                    <span className="text-[10px] text-semantic-danger bg-semantic-danger/10 border border-semantic-danger/20 rounded-md px-2 py-0.5 font-bold uppercase tracking-widest">{alerts.length} Active</span>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {alerts.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-text-muted">
                        <CheckCircle2 className="w-8 h-8 mb-2 opacity-50" />
                        <p className="text-sm font-medium">No active alerts</p>
                    </div>
                ) : (
                    alerts.map((alert, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            key={alert.id}
                            className="p-4 rounded-lg bg-bg-base border border-border flex gap-4 group hover:border-border-subtle transition-colors"
                        >
                            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 border", getColor(alert.alertType))}>
                                {getIcon(alert.alertType)}
                            </div>
                            <div>
                                <p className="text-sm text-text-primary font-medium leading-relaxed">{alert.payload}</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-xs text-text-muted font-mono bg-bg-elevated px-2 py-0.5 rounded">Just now</span>
                                    <button className="text-xs font-semibold text-brand hover:text-brand-glow transition-colors">Resolve</button>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.div>
    );
}
