import { create } from "zustand";

interface UIState {
    sidebarCollapsed: boolean;
    aiPanelOpen: boolean;
    commandPaletteOpen: boolean;
    toggleSidebar: () => void;
    openAIPanel: () => void;
    closeAIPanel: () => void;
    toggleCommandPalette: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    sidebarCollapsed: false,
    aiPanelOpen: false,
    commandPaletteOpen: false,
    toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
    openAIPanel: () => set({ aiPanelOpen: true }),
    closeAIPanel: () => set({ aiPanelOpen: false }),
    toggleCommandPalette: () => set((state) => ({ commandPaletteOpen: !state.commandPaletteOpen })),
}));
