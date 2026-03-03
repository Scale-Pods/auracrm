"use client";

import { motion } from "framer-motion";
import { Activity, Phone, Mail, Calendar, CheckSquare, ListTodo, FileText } from "lucide-react";

const stats = [
    { title: "Meetings This Week", value: "12", change: "+3 vs last week", icon: Calendar },
    { title: "Pending Tasks", value: "48", change: "14 high priority", icon: ListTodo },
    { title: "Calls Logged", value: "156", change: "+12.4% vs last month", icon: Phone },
];

const mockActivities = [
    { id: 1, type: "meeting", title: "Discovery with Initech", entity: "Initech", user: "Jane Doe", time: "Today, 2:00 PM", status: "upcoming" },
    { id: 2, type: "call", title: "Follow-up Call", entity: "Acme Corp", user: "John Smith", time: "Today, 10:30 AM", status: "completed" },
    { id: 3, type: "email", title: "Sent Revised Proposal", entity: "Globex", user: "Jane Doe", time: "Yesterday, 4:15 PM", status: "completed" },
    { id: 4, type: "task", title: "Draft SOW Document", entity: "Themyscira Inc", user: "Alice J.", time: "Oct 15, 5:00 PM", status: "overdue" },
];

export default function ActivitiesPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                        Activities
                    </h1>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Log calls, track emails, and manage your tasks.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-brand text-white rounded-lg shadow-brand hover:brightness-110 transition-all">
                        <CheckSquare className="w-4 h-4" /> New Task
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        key={stat.title}
                        className="px-5 py-4 rounded-xl bg-bg-surface border border-border shadow-sm group relative overflow-hidden flex items-center gap-4 hover:border-border-subtle transition-colors h-24"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-bg-elevated to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center shadow-innerGlow relative z-10 shrink-0 border border-brand/20">
                            <stat.icon className="w-5 h-5" />
                        </div>
                        <div className="relative z-10 flex-1">
                            <h3 className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-1">{stat.title}</h3>
                            <div className="flex items-baseline gap-2">
                                <p className="text-2xl font-bold text-text-primary font-mono tracking-tight leading-none">{stat.value}</p>
                                <p className="text-[10px] text-text-muted font-medium">{stat.change}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Activity Timeline List */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-bg-surface border border-border rounded-xl shadow-sm p-6"
            >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                    <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                        <Activity className="w-5 h-5 text-text-secondary" /> Upcoming & Recent
                    </h3>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-bg-elevated border border-border rounded-md text-xs font-semibold text-text-primary cursor-pointer hover:border-brand/50 transition-colors">All</span>
                        <span className="px-3 py-1 bg-bg-base border border-transparent rounded-md text-xs font-semibold text-text-secondary cursor-pointer hover:bg-bg-elevated transition-colors">Tasks</span>
                        <span className="px-3 py-1 bg-bg-base border border-transparent rounded-md text-xs font-semibold text-text-secondary cursor-pointer hover:bg-bg-elevated transition-colors">Meetings</span>
                    </div>
                </div>

                <div className="space-y-4">
                    {mockActivities.map((activity, i) => (
                        <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-bg-base border border-border/50 hover:bg-bg-elevated/50 hover:border-border transition-colors group">
                            <div className="w-10 h-10 rounded-full border border-bg-surface bg-bg-elevated shadow shrink-0 flex items-center justify-center mt-1 group-hover:border-brand/30 transition-colors">
                                {activity.type === 'call' && <Phone className="w-4 h-4 text-brand" />}
                                {activity.type === 'email' && <Mail className="w-4 h-4 text-accent-cyan" />}
                                {activity.type === 'meeting' && <Calendar className="w-4 h-4 text-semantic-warning" />}
                                {activity.type === 'task' && <FileText className="w-4 h-4 text-text-secondary" />}
                            </div>
                            <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <h4 className="font-semibold text-text-primary text-sm flex items-center gap-2">
                                        {activity.title}
                                        {activity.status === 'overdue' && <span className="bg-semantic-danger/10 text-semantic-danger text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-semantic-danger/20">Overdue</span>}
                                    </h4>
                                    <p className="text-sm text-text-secondary mt-1 flex items-center gap-2">
                                        <span className="font-medium hover:text-brand cursor-pointer transition-colors">{activity.entity}</span>
                                        <span className="w-1 h-1 bg-border rounded-full" />
                                        <span>Assignee: {activity.user}</span>
                                    </p>
                                </div>
                                <div className="flex flex-col sm:items-end gap-2">
                                    <time className="text-xs text-text-muted font-mono">{activity.time}</time>
                                    <button className="text-xs font-medium text-brand hover:text-brand-glow transition-colors">Mark Complete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
