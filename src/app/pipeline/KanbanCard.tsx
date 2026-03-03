"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Deal } from "@/store/pipeline-store";
import { cn } from "@/lib/utils";
import { Building2, Sparkles, User, Clock } from "lucide-react";
import Link from "next/link";

interface KanbanCardProps {
    deal: Deal;
    isDraggingOverlay?: boolean;
}

export function KanbanCard({ deal, isDraggingOverlay }: KanbanCardProps) {
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: deal.id,
        data: {
            type: "Deal",
            deal,
        },
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    if (isDragging && !isDraggingOverlay) {
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="bg-bg-elevated/50 border-2 border-dashed border-border rounded-lg h-32 opacity-40 w-full"
            />
        );
    }

    return (
        <Link href={`/leads/${deal.id}`} passHref legacyBehavior>
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className={cn(
                    "bg-bg-base border border-border p-3.5 rounded-lg shadow-sm flex flex-col gap-3 cursor-grab hover:border-brand/40 hover:shadow-md transition-all relative group w-full",
                    isDraggingOverlay ? "scale-[1.04] shadow-xl rotate-[1.5deg] border-brand z-50 cursor-grabbing bg-bg-surface" : ""
                )}
            >
                {/* Header: Title & AI Score */}
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-0.5 max-w-[70%]">
                        <h4 className="text-sm font-semibold text-text-primary leading-tight truncate">{deal.title}</h4>
                        <div className="flex items-center text-xs text-text-secondary">
                            <Building2 className="w-3 h-3 mr-1" />
                            <span className="truncate">{deal.company}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 bg-brand/10 text-brand px-1.5 py-0.5 rounded text-[10px] font-bold border border-brand/20 shadow-ai">
                        <Sparkles className="w-2.5 h-2.5" />
                        {deal.aiScore}
                    </div>
                </div>

                {/* Value & Probability Bar */}
                <div className="flex flex-col gap-1.5 mt-1">
                    <div className="flex justify-between items-end">
                        <span className="text-base font-bold text-text-primary font-mono tracking-tight cursor-pointer pointer-events-auto">
                            ${deal.value.toLocaleString()}
                        </span>
                        <span className="text-xs text-text-secondary font-medium">
                            {deal.probability}% Win
                        </span>
                    </div>

                    <div className="h-1.5 w-full bg-bg-elevated rounded-full overflow-hidden">
                        <div
                            className={cn(
                                "h-full rounded-full transition-all duration-500",
                                deal.probability >= 75 ? "bg-semantic-success" :
                                    deal.probability >= 40 ? "bg-brand" : "bg-semantic-warning"
                            )}
                            style={{ width: `${deal.probability}%` }}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-1 pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1.5 tooltip-trigger group/owner relative">
                        <div className="w-5 h-5 rounded-full bg-accent-gradient flex items-center justify-center text-[9px] font-bold text-white uppercase shadow-sm">
                            {deal.ownerName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="absolute bottom-full mb-1 left-0 hidden group-hover/owner:block bg-bg-elevated text-xs px-2 py-1 rounded border border-border w-max text-text-primary z-50">
                            {deal.ownerName}
                        </span>
                    </div>
                    <div className="flex items-center text-text-muted text-[10px]">
                        <Clock className="w-3 h-3 mr-1" />
                        12h ago
                    </div>
                </div>
            </div>
        </Link>
    );
}
