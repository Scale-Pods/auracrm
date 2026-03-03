"use client";

import { motion } from "framer-motion";
import { Users, UserPlus, Filter, Download, Mail, Building2, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { title: "Total Contacts", value: "2,451", change: "+148 this month", icon: Users },
    { title: "New MQLs", value: "342", change: "+24% vs last month", icon: UserPlus },
    { title: "Engagement Rate", value: "48.2%", change: "+5.1% vs last month", icon: Mail },
];

const mockContacts = [
    { id: 1, name: "Alice Johnston", role: "VP Engineering", company: "Acme Corp", email: "alice@acme.com", location: "San Francisco", lastActive: "2h ago" },
    { id: 2, name: "Bob Smith", role: "CTO", company: "Globex", email: "bob@globex.com", location: "New York", lastActive: "1d ago" },
    { id: 3, name: "Charlie Davis", role: "Product Manager", company: "Initech", email: "cdavis@initech.com", location: "London", lastActive: "3h ago" },
    { id: 4, name: "Diana Prince", role: "CEO", company: "Themyscira Inc", email: "diana@themy.com", location: "Paris", lastActive: "5m ago" },
];

export default function ContactsPage() {
    return (
        <div className="p-6 md:p-8 max-w-7xl mx-auto w-full flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                        Contacts
                    </h1>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Manage and connect with your leads and customers.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-bg-surface border border-border rounded-lg text-text-secondary hover:text-text-primary transition-colors hover:border-brand/40 shadow-sm">
                        <Filter className="w-4 h-4" /> Filters
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-bg-surface border border-border rounded-lg text-text-secondary hover:text-text-primary transition-colors hover:border-brand/40 shadow-sm">
                        <Download className="w-4 h-4" /> Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium bg-brand text-white rounded-lg shadow-brand hover:brightness-110 transition-all">
                        <UserPlus className="w-4 h-4" /> Add Contact
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        key={stat.title}
                        className="p-5 rounded-xl bg-bg-surface border border-border shadow-sm group hover:border-brand/40 transition-colors relative overflow-hidden glass-card"
                    >
                        <div className="absolute right-0 top-0 w-24 h-24 bg-brand/5 blur-2xl rounded-bl-full group-hover:bg-brand/10 transition-colors" />
                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <h3 className="text-text-secondary text-sm font-medium">{stat.title}</h3>
                            <div className="p-2 rounded-lg bg-bg-elevated text-brand shadow-innerGlow">
                                <stat.icon className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="relative z-10">
                            <p className="text-2xl font-bold text-text-primary font-mono tracking-tight">{stat.value}</p>
                            <p className="text-xs text-semantic-success mt-1">{stat.change}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Data Table Area (Placeholder View) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-bg-elevated/50">
                                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider">Contact</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider">Company</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider">Location</th>
                                <th className="px-6 py-4 text-xs font-semibold text-text-secondary uppercase tracking-wider">Last Active</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {mockContacts.map((contact) => (
                                <tr key={contact.id} className="hover:bg-bg-elevated/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-bg-elevated border border-border flex items-center justify-center font-bold text-sm text-text-primary">
                                                {contact.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-text-primary group-hover:text-brand transition-colors cursor-pointer">{contact.name}</p>
                                                <p className="text-xs text-text-secondary mt-0.5 flex items-center gap-1">
                                                    <Mail className="w-3 h-3" /> {contact.email}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4 text-text-secondary" />
                                            <div>
                                                <p className="text-sm text-text-primary">{contact.company}</p>
                                                <p className="text-xs text-text-secondary">{contact.role}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                                            <MapPin className="w-4 h-4" /> {contact.location}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs text-text-secondary bg-bg-base px-2 py-1 rounded-md border border-border">
                                            {contact.lastActive}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-text-secondary hover:text-brand text-sm font-medium transition-colors">Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </div>
    );
}
