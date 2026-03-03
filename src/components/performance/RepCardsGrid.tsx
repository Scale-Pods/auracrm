"use client";

import { motion } from "framer-motion";
import { RepDailyStat } from "@/types/performance";
import { Users } from "lucide-react";

interface RepCardsGridProps {
    reps: RepDailyStat[];
}

export function RepCardsGrid({ reps }: RepCardsGridProps) {
    return (
        <div className="col-span-12">
            <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-brand" />
                <h3 className="text-lg font-bold text-text-primary">Performance Cards</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reps.map((rep, i) => (
                    <motion.div
                        key={rep.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-4 rounded-xl bg-bg-surface border border-border glass-card"
                    >
                        <div className="flex items-center gap-3">
                            <img src={rep.avatar} alt={rep.repName} className="w-10 h-10 rounded-full border border-border" />
                            <div>
                                <h4 className="font-semibold text-text-primary">{rep.repName}</h4>
                                <p className="text-xs text-text-secondary">Score: {rep.productivityScore}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
