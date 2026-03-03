"use client";

import { useState } from "react";
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { usePipelineStore, StageId, Deal } from "@/store/pipeline-store";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";

const STAGES = [
    { id: "lead" as StageId, title: "Lead" },
    { id: "qualified" as StageId, title: "Qualified" },
    { id: "proposal" as StageId, title: "Proposal" },
    { id: "negotiation" as StageId, title: "Negotiation" },
    { id: "won" as StageId, title: "Closed Won" },
];

export function KanbanBoard() {
    const { deals, moveDeal } = usePipelineStore();
    const [activeDeal, setActiveDeal] = useState<Deal | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, { activationConstraint: { distance: 3 } }),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    );

    const handleDragStart = (event: DragStartEvent) => {
        const { active } = event;
        const stageId = active.data.current?.sortable?.containerId as StageId | undefined;

        if (stageId && deals[stageId]) {
            const deal = deals[stageId].find((d) => d.id === active.id);
            if (deal) setActiveDeal(deal);
        }
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveDeal(null);

        if (!over) return;

        const activeContainerId = active.data.current?.sortable?.containerId as StageId | undefined;
        const fromStage = activeContainerId || activeDeal?.stage;

        const overIdIsColumn = STAGES.some((s) => s.id === over.id);
        const overContainerId = over.data.current?.sortable?.containerId as StageId | undefined;
        const toStage = (overIdIsColumn ? over.id : overContainerId) as StageId | undefined;

        if (!fromStage || !toStage || !deals[fromStage] || !deals[toStage]) return;

        const activeIndex = deals[fromStage].findIndex((d) => d.id === active.id);
        let overIndex = deals[toStage].findIndex((d) => d.id === over.id);

        // If dropping into empty column or not on a specific item
        if (overIndex === -1) {
            overIndex = deals[toStage].length;
        }

        if (fromStage !== toStage || activeIndex !== overIndex) {
            if (activeIndex !== -1) {
                moveDeal(active.id as string, fromStage, toStage, overIndex);
            }
        }
    };

    return (
        <div className="flex h-full gap-4 overflow-x-auto pb-4 pt-2 px-1">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
            >
                {STAGES.map((stage) => (
                    <KanbanColumn
                        key={stage.id}
                        stageId={stage.id}
                        title={stage.title}
                        deals={deals[stage.id] || []}
                    />
                ))}

                <DragOverlay dropAnimation={{ duration: 250, easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)" }}>
                    {activeDeal ? <KanbanCard deal={activeDeal} isDraggingOverlay /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
}
