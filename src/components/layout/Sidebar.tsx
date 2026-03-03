"use client";

import { useUIStore } from "@/store/ui-store";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    KanbanSquare,
    Users,
    Building2,
    Activity,
    Sparkles,
    BarChart,
    Settings,
    ChevronLeft
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Pipeline", href: "/pipeline", icon: KanbanSquare },
    { name: "Contacts", href: "/contacts", icon: Users },
    { name: "Companies", href: "/companies", icon: Building2 },
    { name: "Activities", href: "/activities", icon: Activity },
    { name: "AI Insights", href: "/ai-insights", icon: Sparkles }, // ✅ fixed
    { name: "Reports", href: "/reports", icon: BarChart },
];

export function Sidebar() {
    const { sidebarCollapsed, toggleSidebar } = useUIStore();
    const pathname = usePathname();

    return (
        <motion.aside
            initial={false}
            animate={{ width: sidebarCollapsed ? 80 : 260 }}
            className="h-full bg-bg-surface border-r border-border flex flex-col relative flex-shrink-0 z-20"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-border">
                {!sidebarCollapsed ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-xl flex items-center gap-2"
                    >
                        <Sparkles className="w-5 h-5 text-brand" />
                        <span className="bg-clip-text text-transparent bg-accent-gradient">
                            AuraCRM
                        </span>
                    </motion.div>
                ) : (
                    <div className="w-full flex justify-center">
                        <Sparkles className="w-6 h-6 text-brand" />
                    </div>
                )}
            </div>

            {/* Collapse Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-20 bg-bg-surface border border-border rounded-full p-1 text-text-secondary hover:text-text-primary z-50 shadow-sm transition-transform hover:scale-110"
            >
                <motion.div animate={{ rotate: sidebarCollapsed ? 180 : 0 }}>
                    <ChevronLeft className="w-4 h-4" />
                </motion.div>
            </button>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center rounded-lg px-3 py-2.5 transition-colors relative group",
                                isActive
                                    ? "text-text-primary"
                                    : "text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50"
                            )}
                        >
                            <item.icon
                                className={cn(
                                    "flex-shrink-0 w-5 h-5",
                                    isActive ? "text-brand" : ""
                                )}
                            />

                            {!sidebarCollapsed && (
                                <span className="ml-3 text-sm font-medium">
                                    {item.name}
                                </span>
                            )}

                            {isActive && (
                                <>
                                    <motion.div
                                        layoutId="active-nav"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-r-full"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-brand/10 rounded-lg pointer-events-none" />
                                </>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border">
                <Link
                    href="/settings"   // ✅ Now clickable
                    className={cn(
                        "flex items-center rounded-lg px-3 py-2.5 transition-colors w-full text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50",
                        sidebarCollapsed ? "justify-center" : ""
                    )}
                >
                    <Settings className="flex-shrink-0 w-5 h-5" />
                    {!sidebarCollapsed && (
                        <span className="ml-3 text-sm font-medium">Settings</span>
                    )}
                </Link>

                {!sidebarCollapsed && (
                    <div className="mt-6 flex items-center px-3">
                        <div className="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-sm font-bold shadow-brand">
                            JD
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-text-primary">
                                Jane Doe
                            </p>
                            <p className="text-xs text-text-secondary">
                                Enterprise Plan
                            </p>
                        </div>
                    </div>
                )}

                {sidebarCollapsed && (
                    <div className="mt-6 flex justify-center w-full pb-2">
                        <div className="w-8 h-8 rounded-full bg-accent-gradient flex items-center justify-center text-sm font-bold shadow-brand">
                            JD
                        </div>
                    </div>
                )}
            </div>
        </motion.aside>
    );
}