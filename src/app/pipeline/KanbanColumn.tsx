"use client";

import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { KanbanCard } from "./KanbanCard";
import { Deal, StageId } from "@/store/pipeline-store";
import { cn } from "@/lib/utils";

interface KanbanColumnProps {
    title: string;
    stageId: StageId;
    deals: Deal[];
}

export function KanbanColumn({ title, stageId, deals }: KanbanColumnProps) {
    const { setNodeRef, isOver } = useDroppable({
        id: stageId,
        data: {
            type: "Column",
            stageId,
        },
    });

    const totalValue = deals.reduce((acc, deal) => acc + deal.value, 0);

    return (
        <div className="flex flex-col w-80 shrink-0 bg-bg-surface border border-border rounded-xl h-full shadow-sm relative group overflow-hidden">
            {/* Header */}
            <div className="p-3 border-b border-border bg-bg-elevated/50 flex justify-between items-center group-hover:bg-bg-elevated transition-colors z-10 relative">
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
                    <span className="bg-bg-base text-text-secondary text-xs px-2 py-0.5 rounded-full border border-border">
                        {deals.length}
                    </span>
                </div>
                <span className="text-xs font-mono text-text-secondary">
                    ${(totalValue / 1000).toFixed(1)}k
                </span>
            </div>

            {/* Droppable Area */}
            {isOver && (
                <div className="absolute inset-0 bg-brand/5 border-2 border-brand/50 border-dashed rounded-xl z-0 transition-colors" />
            )}

            <div
                ref={setNodeRef}
                className={cn(
                    "flex-1 p-3 flex flex-col gap-3 overflow-y-auto min-h-[150px] z-10 relative transition-colors",
                    isOver ? "bg-bg-base/30 backdrop-blur-sm" : ""
                )}
            >
                <SortableContext items={deals.map(d => d.id)} strategy={verticalListSortingStrategy}>
                    {deals.map(deal => (
                        <KanbanCard key={deal.id} deal={deal} />
                    ))}
                </SortableContext>
            </div>
        </div>
    );
}
