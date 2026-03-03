"use client";

import { motion } from "framer-motion";
import { Building2, Plus, Search, MapPin, Globe, Filter, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { title: "Target Accounts", value: "842", change: "+12 this week", icon: Building2 },
    { title: "Open Opportunities", value: "145", change: "$4.2M Pipeline", icon: Briefcase },
    { title: "Lost Accounts", value: "24", change: "-5% vs last quarter", icon: Filter },
];

const mockCompanies = [
    { id: 1, name: "Acme Corp", industry: "Manufacturing", location: "San Francisco, CA", website: "acmecorp.com", employees: "1,000-5,000", revenue: "$50M - $100M" },
    { id: 2, name: "Globex", industry: "Technology", location: "New York, NY", website: "globex.io", employees: "500-1,000", revenue: "$10M - $50M" },
    { id: 3, name: "Initech", industry: "Software", location: "London, UK", website: "initech.com", employees: "50-200", revenue: "$5M - $10M" },
    { id: 4, name: "Themyscira Inc", industry: "Retail", location: "Paris, FR", website: "themy.com", employees: "10,000+", revenue: "$1B+" },
];

export default function CompaniesPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                        Companies
                    </h1>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Track target accounts and business profiles.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="text" placeholder="Search companies..." className="bg-bg-base border border-border rounded-lg pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-brand text-text-primary placeholder:text-text-muted w-64 transition-all focus:border-transparent" />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-brand text-white rounded-lg shadow-brand hover:brightness-110 transition-all">
                        <Plus className="w-4 h-4" /> Account
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
                        className="p-5 rounded-xl bg-bg-surface border border-border shadow-sm group hover:border-brand/40 transition-colors relative overflow-hidden glass-card"
                    >
                        <div className="absolute left-0 top-0 w-1 h-full bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <h3 className="text-text-secondary text-sm font-medium">{stat.title}</h3>
                            <div className="p-2 rounded-lg bg-bg-elevated text-brand border border-border/50 group-hover:border-brand/30 transition-colors">
                                <stat.icon className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="relative z-10 mt-3">
                            <p className="text-2xl font-bold text-text-primary font-mono tracking-tight">{stat.value}</p>
                            <p className="text-xs text-text-muted mt-1 font-medium">{stat.change}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Card Grid View */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {mockCompanies.map((company, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                        key={company.id}
                        className="bg-bg-surface border border-border rounded-xl p-5 shadow-sm hover:border-border-subtle hover:shadow-md transition-all group flex flex-col sm:flex-row gap-5"
                    >
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand/10 to-accent-cyan/10 border border-brand/20 flex flex-shrink-0 items-center justify-center text-brand font-bold text-2xl shadow-innerGlow">
                            {company.name.charAt(0)}
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-text-primary group-hover:text-brand transition-colors cursor-pointer">{company.name}</h3>
                                    <p className="text-xs font-medium text-text-secondary mt-0.5 max-w-max bg-bg-elevated px-2 py-0.5 rounded border border-border">{company.industry}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm mt-1">
                                <div className="flex items-center gap-2 text-text-secondary">
                                    <MapPin className="w-4 h-4 text-text-muted" /> <span className="truncate">{company.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-text-secondary">
                                    <Globe className="w-4 h-4 text-text-muted" /> <a href="#" className="hover:text-brand transition-colors truncate">{company.website}</a>
                                </div>
                                <div className="col-span-2 pt-3 mt-1 border-t border-border/50 flex justify-between items-center text-xs">
                                    <div className="flex flex-col">
                                        <span className="text-text-muted mb-0.5">Employees</span>
                                        <span className="text-text-primary font-mono font-medium">{company.employees}</span>
                                    </div>
                                    <div className="flex flex-col text-right">
                                        <span className="text-text-muted mb-0.5">Annual Revenue</span>
                                        <span className="text-text-primary font-mono font-medium">{company.revenue}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
