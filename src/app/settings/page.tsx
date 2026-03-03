"use client";

import { motion } from "framer-motion";
import { User, Building, Bell, Moon, Sun, Save, Lock, Mail, Users, MonitorSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SettingsPage() {
    const [theme, setTheme] = useState<'system' | 'dark' | 'light'>('dark');
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [aiAlerts, setAiAlerts] = useState(true);

    return (
        <div className="p-6 md:p-8 max-w-4xl mx-auto w-full flex flex-col gap-8 pb-20">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-text-primary to-text-secondary">
                        Settings
                    </h1>
                    <p className="text-text-secondary text-sm md:text-base mt-1">Manage your account, team, and workspace preferences.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-brand text-white rounded-lg shadow-brand hover:brightness-110 transition-all">
                        <Save className="w-4 h-4" /> Save Changes
                    </button>
                </div>
            </header>

            {/* Profile Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden"
            >
                <div className="p-5 border-b border-border/50 bg-bg-elevated/30 flex items-center gap-2">
                    <User className="w-5 h-5 text-text-secondary" />
                    <h2 className="text-lg font-semibold text-text-primary">Profile Information</h2>
                </div>
                <div className="p-6 flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-24 h-24 rounded-full bg-accent-gradient flex items-center justify-center text-2xl font-bold text-white shadow-brand border-4 border-bg-surface overflow-hidden relative group cursor-pointer">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=JD" alt="Avatar" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-bg-base/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-xs font-medium">Change</div>
                        </div>
                        <button className="text-xs font-semibold text-brand hover:text-brand-glow transition-colors">Remove Photo</button>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col gap-1.5 focus-within:text-brand text-text-secondary transition-colors">
                            <label className="text-xs font-semibold uppercase tracking-wider">First Name</label>
                            <input type="text" defaultValue="Jane" className="bg-bg-base border border-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5 focus-within:text-brand text-text-secondary transition-colors">
                            <label className="text-xs font-semibold uppercase tracking-wider">Last Name</label>
                            <input type="text" defaultValue="Doe" className="bg-bg-base border border-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5 focus-within:text-brand text-text-secondary transition-colors md:col-span-2">
                            <label className="text-xs font-semibold uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
                                <input type="email" defaultValue="jane.doe@example.com" className="w-full bg-bg-base border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Workspace Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden"
            >
                <div className="p-5 border-b border-border/50 bg-bg-elevated/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Building className="w-5 h-5 text-text-secondary" />
                        <h2 className="text-lg font-semibold text-text-primary">Workspace</h2>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide bg-brand/10 text-brand border border-brand/20 rounded">Enterprise Plan</span>
                </div>
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        <div className="flex flex-col gap-1.5 focus-within:text-brand text-text-secondary transition-colors">
                            <label className="text-xs font-semibold uppercase tracking-wider">Organization Name</label>
                            <input type="text" defaultValue="AuraCRM Inc." className="bg-bg-base border border-border rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-brand focus:border-transparent transition-all" />
                        </div>
                        <div className="flex flex-col gap-1.5 focus-within:text-brand text-text-secondary transition-colors">
                            <label className="text-xs font-semibold uppercase tracking-wider">Workspace URL</label>
                            <div className="flex border border-border rounded-lg overflow-hidden bg-bg-base focus-within:ring-1 focus-within:ring-brand focus-within:border-transparent transition-all">
                                <span className="bg-bg-elevated px-4 py-2 text-sm text-text-muted border-r border-border truncate flex-shrink-0">app.auracrm.com/</span>
                                <input type="text" defaultValue="startups" className="bg-transparent px-3 py-2 text-sm text-text-primary focus:outline-none w-full min-w-0" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                        <div>
                            <h4 className="text-sm font-semibold text-text-primary flex items-center gap-2"><Users className="w-4 h-4 text-text-muted" /> Team Members</h4>
                            <p className="text-xs text-text-secondary mt-1">Manage who has access to this workspace.</p>
                        </div>
                        <button className="px-4 py-2 text-sm border border-border rounded-lg text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors font-medium">Manage Team</button>
                    </div>
                </div>
            </motion.section>

            {/* Preferences Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-bg-surface border border-border rounded-xl shadow-sm overflow-hidden"
            >
                <div className="p-5 border-b border-border/50 bg-bg-elevated/30 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-text-secondary" />
                    <h2 className="text-lg font-semibold text-text-primary">Preferences</h2>
                </div>
                <div className="p-6 space-y-8">

                    {/* Notifications */}
                    <div>
                        <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider text-text-muted">Notifications</h3>
                        <div className="space-y-4">
                            <label className="flex items-start justify-between cursor-pointer group">
                                <div>
                                    <p className="text-sm font-medium text-text-primary group-hover:text-brand transition-colors">Email Summaries</p>
                                    <p className="text-xs text-text-secondary mt-0.5 max-w-sm">Receive a daily digest of pipeline changes, completed tasks, and AI insights.</p>
                                </div>
                                <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-bg-base disabled:cursor-not-allowed disabled:opacity-50" style={{ backgroundColor: emailAlerts ? '#7B5EF8' : '#1F2535' }} onClick={() => setEmailAlerts(!emailAlerts)}>
                                    <span className={cn("inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out shadow-sm", emailAlerts ? "translate-x-4" : "translate-x-0")} />
                                </div>
                            </label>

                            <label className="flex items-start justify-between cursor-pointer group">
                                <div>
                                    <p className="text-sm font-medium text-text-primary group-hover:text-accent-cyan transition-colors">AI Risk Alerts</p>
                                    <p className="text-xs text-text-secondary mt-0.5 max-w-sm">Instantly notify me when the AI engine detects high churn probability on critical deals.</p>
                                </div>
                                <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:ring-offset-2 focus:ring-offset-bg-base disabled:cursor-not-allowed disabled:opacity-50" style={{ backgroundColor: aiAlerts ? '#22D3EE' : '#1F2535' }} onClick={() => setAiAlerts(!aiAlerts)}>
                                    <span className={cn("inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out shadow-sm", aiAlerts ? "translate-x-4" : "translate-x-0")} />
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Appearance */}
                    <div className="pt-6 border-t border-border/50">
                        <h3 className="text-sm font-bold text-text-primary mb-4 uppercase tracking-wider text-text-muted flex items-center gap-2">Appearance</h3>
                        <div className="grid grid-cols-3 gap-3">
                            <button onClick={() => setTheme('light')} className={cn("flex flex-col gap-2 items-center justify-center p-4 rounded-xl border-2 transition-all", theme === 'light' ? "border-brand bg-brand/5 text-brand" : "border-border bg-bg-base text-text-secondary hover:border-border-subtle hover:text-text-primary")}>
                                <Sun className="w-6 h-6" />
                                <span className="text-xs font-semibold">Light</span>
                            </button>
                            <button onClick={() => setTheme('dark')} className={cn("flex flex-col gap-2 items-center justify-center p-4 rounded-xl border-2 transition-all shadow-ai relative overflow-hidden", theme === 'dark' ? "border-brand bg-brand/5 text-brand" : "border-border bg-bg-surface text-text-secondary hover:border-border-subtle hover:text-text-primary")}>
                                {theme === 'dark' && <div className="absolute inset-0 bg-brand/5 blur-xl pointer-events-none" />}
                                <Moon className="w-6 h-6 relative z-10" />
                                <span className="text-xs font-semibold relative z-10">Dark</span>
                            </button>
                            <button onClick={() => setTheme('system')} className={cn("flex flex-col gap-2 items-center justify-center p-4 rounded-xl border-2 transition-all", theme === 'system' ? "border-brand bg-brand/5 text-brand" : "border-border bg-bg-base text-text-secondary hover:border-border-subtle hover:text-text-primary")}>
                                <MonitorSmartphone className="w-6 h-6" />
                                <span className="text-xs font-semibold">System</span>
                            </button>
                        </div>
                    </div>

                    {/* Danger Zone */}
                    <div className="pt-6 border-t border-border/50">
                        <div className="p-5 border border-semantic-danger/30 bg-semantic-danger/5 rounded-xl flex items-center justify-between">
                            <div>
                                <h4 className="text-sm font-semibold text-semantic-danger flex items-center gap-2"><Lock className="w-4 h-4" /> Danger Zone</h4>
                                <p className="text-xs text-text-secondary mt-1">Permanently delete your account and all associated sales data.</p>
                            </div>
                            <button className="px-4 py-2 text-sm border border-semantic-danger/50 text-semantic-danger font-medium rounded-lg hover:bg-semantic-danger hover:text-white transition-all shadow-sm">Delete Account</button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
