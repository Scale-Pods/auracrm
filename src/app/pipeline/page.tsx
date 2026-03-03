"use client";

import { Filter, LayoutList, Columns } from "lucide-react";
import { KanbanBoard } from "./KanbanBoard";

export default function PipelinePage() {
    return (
        <div className="flex flex-col h-full w-full">
            <header className="p-6 md:p-8 shrink-0 flex items-center justify-between border-b border-border bg-bg-surface/50">
                <div>
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                            Deals Pipeline
                        </h1>
                        <span className="bg-bg-elevated text-text-secondary text-xs px-2.5 py-1 rounded-full border border-border">Total: $496k</span>
                    </div>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Manage and track your active sales opportunities.</p>
                </div>

                <div className="flex items-center gap-3 hidden sm:flex">
                    <div className="flex bg-bg-elevated p-1 rounded-lg border border-border">
                        <button className="flex items-center justify-center p-1.5 rounded-md bg-bg-surface text-brand shadow border border-border transition-colors">
                            <Columns className="w-4 h-4" />
                        </button>
                        <button className="flex items-center justify-center p-1.5 rounded-md text-text-muted hover:text-text-primary transition-colors">
                            <LayoutList className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="w-px h-8 bg-border hidden md:block" />
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-bg-surface border border-border rounded-lg text-text-secondary hover:text-text-primary transition-colors hover:border-brand/40">
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-brand text-white rounded-lg shadow-brand hover:brightness-110 transition-all">
                        + New Deal
                    </button>
                </div>
            </header>

            <main className="flex-1 overflow-hidden shrink-0 min-h-0 bg-bg-base/50">
                <KanbanBoard />
            </main>
        </div>
    );
}
