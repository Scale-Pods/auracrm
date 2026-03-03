"use client";

import { motion } from "framer-motion";
import { usePipelineStore } from "@/store/pipeline-store";
import { notFound } from "next/navigation";
import {
    Building2,
    MapPin,
    Mail,
    Phone,
    Globe,
    Linkedin,
    Clock,
    MessageSquare,
    Calendar,
    FileText,
    Activity,
    ArrowRight,
    TrendingUp,
    AlertCircle,
    CheckCircle2,
    ListTodo,
    Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Timeline data
const timeline = [
    { id: 1, type: "call", title: "Discovery Call", date: "Today, 10:30 AM", user: "Jane Doe", note: "Discussed Q3 expansion plans. They are very interested in the enterprise tier and need a proposal by friday." },
    { id: 2, type: "email", title: "Sent Pricing Proposal", date: "Yesterday, 2:15 PM", user: "Jane Doe", note: "Attached the standard enterprise SLA and custom pricing tier sheet." },
    { id: 3, type: "note", title: "Internal Note", date: "Oct 12, 4:00 PM", user: "Manager Bob", note: "We should offer a 10% discount if they commit to a 2-year term." },
    { id: 4, type: "meeting", title: "Initial Demo", date: "Oct 10, 11:00 AM", user: "Jane Doe", note: "Demo went well. Technical team asked about SSO capabilities." },
];

export default function LeadDetailPage({ params }: { params: { id: string } }) {
    const { deals } = usePipelineStore();

    // Find deal across all stages
    const deal = Object.values(deals).flat().find(d => d.id === params.id);

    if (!deal) {
        return (
            <div className="flex items-center justify-center h-full flex-col gap-4">
                <h2 className="text-xl font-semibold text-text-primary">Deal not found</h2>
                <p className="text-text-secondary">The lead you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full bg-bg-base overflow-y-auto">
            {/* Header Area */}
            <header className="px-8 py-6 border-b border-border bg-bg-surface sticky top-0 z-20 shadow-sm">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand/20 to-accent-cyan/10 border border-brand/30 flex items-center justify-center text-brand font-bold text-2xl shadow-innerGlow">
                            {deal.company.charAt(0)}
                        </div>
                        <div>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl font-bold text-text-primary">{deal.company}</h1>
                                <span className="px-2.5 py-1 bg-brand/10 text-brand text-xs font-semibold rounded border border-brand/20 backdrop-blur-sm self-start mt-1 shadow-[0_0_12px_rgba(123,94,248,0.2)]">
                                    AI Score: {deal.aiScore}
                                </span>
                            </div>
                            <h2 className="text-text-secondary mt-1 tracking-tight flex items-center gap-2">
                                <span className="font-semibold">{deal.title}</span>
                                <span className="w-1 h-1 bg-border rounded-full" />
                                Owned by <span className="text-text-primary underline decoration-border underline-offset-4">{deal.ownerName}</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-bg-elevated p-2 rounded-xl border border-border shadow-sm">
                        <div className="px-4 py-2 border-r border-border">
                            <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Stage</p>
                            <p className="font-semibold text-text-primary capitalize text-sm">{deal.stage}</p>
                        </div>
                        <div className="px-4 py-2 border-r border-border">
                            <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Value</p>
                            <p className="font-bold text-brand font-mono text-lg tracking-tight">${deal.value.toLocaleString()}</p>
                        </div>
                        <div className="px-4 py-2 flex items-center gap-2">
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-bg-base/50" />
                                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent"
                                        className={cn(deal.probability >= 70 ? "text-semantic-success" : deal.probability >= 40 ? "text-brand" : "text-semantic-warning")}
                                        strokeDasharray={`${(deal.probability / 100) * 125} 125`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <span className="absolute text-xs font-bold text-text-primary">{deal.probability}%</span>
                            </div>
                            <div className="ml-1">
                                <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">Win Prob</p>
                                <p className="text-xs text-text-muted">High intent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Split */}
            <main className="flex-1 max-w-7xl mx-auto w-full p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Timeline & Activities */}
                <div className="lg:col-span-8 flex flex-col gap-6">

                    {/* Quick Action Bar */}
                    <div className="bg-bg-surface border border-border rounded-xl p-2 flex items-center gap-2 shadow-sm relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand" />
                        <button className="flex-1 flex justify-center items-center gap-2 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors">
                            <MessageSquare className="w-4 h-4" /> Log Note
                        </button>
                        <div className="w-px h-6 bg-border" />
                        <button className="flex-1 flex justify-center items-center gap-2 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors">
                            <Mail className="w-4 h-4" /> Email
                        </button>
                        <div className="w-px h-6 bg-border" />
                        <button className="flex-1 flex justify-center items-center gap-2 py-2 text-sm text-text-secondary text-brand hover:bg-brand/10 hover:text-brand-glow rounded-lg transition-colors font-medium">
                            <Phone className="w-4 h-4" /> Call
                        </button>
                        <div className="w-px h-6 bg-border" />
                        <button className="flex-1 flex justify-center items-center gap-2 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-lg transition-colors">
                            <Calendar className="w-4 h-4" /> Meeting
                        </button>
                    </div>

                    {/* Timeline */}
                    <div className="bg-bg-surface border border-border rounded-xl shadow-sm p-6">
                        <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                            <Activity className="w-5 h-5 text-text-secondary" /> Activity History
                        </h3>

                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
                            {timeline.map((item, i) => (
                                <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                    {/* Icon Marker */}
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-bg-surface bg-bg-elevated shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:bg-brand/10 group-hover:border-brand/30">
                                        {item.type === 'call' && <Phone className="w-4 h-4 text-brand" />}
                                        {item.type === 'email' && <Mail className="w-4 h-4 text-accent-cyan" />}
                                        {item.type === 'meeting' && <Calendar className="w-4 h-4 text-semantic-warning" />}
                                        {item.type === 'note' && <FileText className="w-4 h-4 text-text-secondary" />}
                                    </div>

                                    {/* Card Content */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-bg-base border border-border p-4 rounded-xl shadow-sm hover:border-border-subtle hover:shadow-md transition-all group-hover:-translate-y-1 relative"
                                    >
                                        {/* Arrow pointing to timeline */}
                                        <div className="absolute top-4 -left-2 w-2 h-2 bg-bg-base border-l border-b border-border transform rotate-45 md:hidden" />
                                        <div className="absolute top-4 -right-2 w-2 h-2 bg-bg-base border-t border-r border-border transform rotate-45 hidden md:group-odd:block" />
                                        <div className="absolute top-4 -left-2 w-2 h-2 bg-bg-base border-l border-b border-border transform rotate-45 hidden md:group-even:block" />

                                        <div className="flex items-center justify-between mb-1">
                                            <h4 className="font-semibold text-text-primary text-sm flex items-center gap-2">
                                                {item.title}
                                                {i === 0 && <span className="bg-brand/10 text-brand text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-brand/20">New</span>}
                                            </h4>
                                            <time className="text-xs text-text-muted font-mono">{item.date}</time>
                                        </div>
                                        <p className="text-sm text-text-secondary leading-relaxed mt-2">{item.note}</p>

                                        <div className="mt-3 flex items-center gap-2 pt-3 border-t border-border/50">
                                            <div className="w-5 h-5 rounded-full bg-bg-elevated flex items-center justify-center text-[9px] font-bold text-text-primary uppercase border border-border">
                                                {item.user.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <span className="text-xs text-text-secondary font-medium">{item.user}</span>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Right Column: AI Panel & Contact Info */}
                <div className="lg:col-span-4 flex flex-col gap-6">

                    {/* AI Summary Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-bg-surface border border-brand/30 rounded-xl shadow-[0_0_24px_rgba(123,94,248,0.05)] overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[40px] pointer-events-none" />

                        <div className="p-4 border-b border-border/50 bg-gradient-to-r from-bg-surface to-brand/5 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-brand" />
                            <h3 className="font-semibold text-text-primary">Aura Insights</h3>
                        </div>

                        <div className="p-5 space-y-4 relative z-10">
                            <div>
                                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2">Deal Summary</p>
                                <p className="text-sm text-text-primary leading-relaxed bg-bg-elevated/50 p-3 rounded-lg border border-border/50 backdrop-blur-sm">
                                    Prospect is highly engaged. Technical evaluation passed smoothly last week. The main blocker remaining is pricing approval from their CFO.
                                </p>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-semantic-success" /> Revenue Projection
                                </p>
                                <div className="flex items-end gap-2 bg-semantic-success/5 border border-semantic-success/20 p-3 rounded-lg">
                                    <span className="text-xl font-mono font-bold text-semantic-success">${(deal.value + (deal.value * 0.15)).toLocaleString()}</span>
                                    <span className="text-xs text-semantic-success/70 mb-1">w/ 15% upsell avg</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 flex items-center gap-2">
                                    <ListTodo className="w-3.5 h-3.5 text-brand" /> Suggested Next Action
                                </p>
                                <button className="w-full bg-bg-base border border-brand/50 p-3 rounded-lg text-left hover:bg-brand/10 transition-colors flex items-center justify-between group">
                                    <div>
                                        <h4 className="text-sm font-semibold text-text-primary text-brand group-hover:text-brand-glow">Draft ROI Proposal</h4>
                                        <p className="text-xs text-text-secondary mt-0.5">Highlight 2-year savings</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-brand opacity-50 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 duration-300" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Profile Info */}
                    <div className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-border bg-bg-elevated/50">
                            <h3 className="font-semibold text-text-primary">Company Info</h3>
                        </div>
                        <div className="p-5 space-y-4">
                            <div className="flex items-start gap-3">
                                <Globe className="w-4 h-4 text-text-secondary mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium text-text-primary hover:text-brand hover:underline cursor-pointer transition-colors">www.{deal.company.replace(/\s+/g, '').toLowerCase()}.com</p>
                                    <p className="text-xs text-text-secondary mt-0.5">Enterprise Software</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-text-secondary mt-0.5" />
                                <div>
                                    <p className="text-sm text-text-primary">123 Tech Boulevard</p>
                                    <p className="text-xs text-text-secondary mt-0.5">San Francisco, CA 94105</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/50">
                                <div className="flex flex-col">
                                    <span className="text-xs text-text-secondary">Employees</span>
                                    <span className="text-sm font-medium text-text-primary font-mono tracking-tight">1,000 - 5,000</span>
                                </div>
                                <div className="flex flex-col text-right">
                                    <span className="text-xs text-text-secondary">Est. Rev</span>
                                    <span className="text-sm font-medium text-text-primary font-mono tracking-tight">$50M - $100M</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-border bg-bg-elevated/50 flex justify-between items-center">
                            <h3 className="font-semibold text-text-primary">Key Contact</h3>
                            <span className="text-xs bg-bg-base border border-border px-2 py-0.5 rounded text-text-secondary">Decision Maker</span>
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-border/50 overflow-hidden">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-text-primary">Alex Mercer</h4>
                                    <p className="text-xs text-text-secondary">VP of Engineering</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-text-secondary" />
                                    <a href="#" className="text-sm text-text-primary hover:text-brand transition-colors">alex.m@{deal.company.replace(/\s+/g, '').toLowerCase()}.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-text-secondary" />
                                    <a href="#" className="text-sm text-text-primary hover:text-brand transition-colors font-mono tracking-tight">+1 (555) 019-2834</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Linkedin className="w-4 h-4 text-text-secondary" />
                                    <a href="#" className="text-sm text-text-primary hover:text-accent-cyan transition-colors">linkedin.com/in/alexmercer</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
