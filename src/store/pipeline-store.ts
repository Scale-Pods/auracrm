import { create } from "zustand";

export type StageId = "lead" | "qualified" | "proposal" | "negotiation" | "won" | "lost";

export interface Deal {
    id: string;
    title: string;
    company: string;
    value: number;
    probability: number;
    aiScore: number;
    ownerName: string;
    stage: StageId;
}

interface PipelineState {
    deals: Record<StageId, Deal[]>;
    moveDeal: (dealId: string, fromStage: StageId, toStage: StageId, newIndex: number) => void;
}

const initialDeals: Record<StageId, Deal[]> = {
    lead: [
        { id: "d-1", title: "Enterprise License", company: "Acme Corp", value: 45000, probability: 10, aiScore: 88, ownerName: "Jane Doe", stage: "lead" },
        { id: "d-2", title: "API Integration", company: "Globex", value: 12000, probability: 15, aiScore: 64, ownerName: "John Smith", stage: "lead" },
    ],
    qualified: [
        { id: "d-3", title: "100 Seat Upgrade", company: "Initech", value: 85000, probability: 40, aiScore: 92, ownerName: "Jane Doe", stage: "qualified" },
    ],
    proposal: [
        { id: "d-4", title: "Custom Deployment", company: "Umbrella Corp", value: 120000, probability: 60, aiScore: 78, ownerName: "Alice J.", stage: "proposal" },
        { id: "d-5", title: "Annual Contract", company: "Soylent", value: 24000, probability: 70, aiScore: 85, ownerName: "John Smith", stage: "proposal" },
    ],
    negotiation: [
        { id: "d-6", title: "Enterprise Deal", company: "Stark Ind.", value: 250000, probability: 85, aiScore: 96, ownerName: "Jane Doe", stage: "negotiation" },
    ],
    won: [],
    lost: [],
};

export const usePipelineStore = create<PipelineState>((set) => ({
    deals: initialDeals,
    moveDeal: (dealId, fromStage, toStage, newIndex) =>
        set((state) => {
            const sourceDeals = [...state.deals[fromStage]];
            const destDeals = fromStage === toStage ? sourceDeals : [...state.deals[toStage]];

            const dealIndex = sourceDeals.findIndex((d) => d.id === dealId);
            if (dealIndex === -1) return state;

            const [movedDeal] = sourceDeals.splice(dealIndex, 1);
            const updatedDeal = { ...movedDeal, stage: toStage };

            destDeals.splice(newIndex, 0, updatedDeal);

            return {
                deals: {
                    ...state.deals,
                    [fromStage]: sourceDeals,
                    [toStage]: destDeals,
                },
            };
        }),
}));
