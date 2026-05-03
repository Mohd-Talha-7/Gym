import React, { useState } from 'react';
import ClientProfileOverview from './ClientProfileOverview';
import ClientProfileBills from './ClientProfileBills';
import ClientProfileWorkoutPlans from './ClientProfileWorkoutPlans';
import ClientProfileNutritionPlans from './ClientProfileNutritionPlans';
import ClientProfileBodyAnalysis from './ClientProfileBodyAnalysis';
import ClientProfileAttendance from './ClientProfileAttendance';

export default function ClientProfile({ onNavigate }: { onNavigate: (path: string) => void }) {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="flex-1 overflow-x-hidden p-2 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-[1920px] mx-auto custom-scrollbar">
            {/* Breadcrumb / Top Nav Spacer (Optional) */}
            <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-theme-text-muted mt-2">
                <button onClick={() => onNavigate('members')} className="hover:text-theme-primary-main transition-colors">Clients</button>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-theme-text-main">Rajiv Kumar</span>
            </div>

            {/* Member Hero Card */}
            <section className="bg-theme-bg-card rounded-xl p-8 mb-6 flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm border border-theme-border">
                <div className="relative shrink-0">
                    <img
                        className="w-32 h-32 rounded-full object-cover border-4 border-theme-bg-main shadow-sm"
                        alt="Rajiv Kumar"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLs4q2JhmhfAY1wmd0fGdIlMQIHraKMfyOWvR6s2khWuuRd4Hs5R4YpEzS6EPGy6Tyy0ibZGZrFudNX5y86SR3oEk2lSesQFr9xnRXtDHVsSVoaonCKC6drOV-S4sDYS7NNu7k8xm6THRZ-V-6HYr1EpgR8MN0raeBc3LsR4lAoJJ-xGGK_BpoI5-Wilck0y3YPlCCOzV7ymJt3PAI5bYwlMPIv4MuVbAVlxMiDtcQ9oQ3giZj7YjH3GhgncpH6VonVETV8pR_ew"
                    />
                    <div className="absolute bottom-1 right-1 bg-green-100 text-green-700 p-1 rounded-full border-2 border-theme-bg-card flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-[14px] font-bold">check_circle</span>
                    </div>
                </div>

                <div className="flex-grow text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                        <h1 className="text-3xl font-black tracking-tight text-theme-text-main">Rajiv Kumar</h1>
                        <div className="flex items-center justify-center md:justify-start gap-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">Active</span>
                            <span className="bg-theme-primary-main/10 text-theme-primary-main border border-theme-primary-main/20 px-3 py-1 rounded-full text-xs font-bold">1,250 PTS</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-y-4 gap-x-6 mt-6 text-sm text-theme-text-muted font-medium">
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">id_card</span>
                            <span className="text-theme-text-main font-bold">FC-1024</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">call</span>
                            <span className="text-theme-text-main font-bold">+91 98765 43210</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">mail</span>
                            <span className="text-theme-text-main font-bold truncate">rajiv.kumar@email.com</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">card_membership</span>
                            <span className="text-theme-text-main font-bold">Annual Pro</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-start bg-theme-bg-main p-2 rounded-lg border border-theme-border/50 xl:col-span-1">
                            <span className="material-symbols-outlined text-theme-text-muted text-[18px]">event_busy</span>
                            <span className="text-theme-text-main font-bold">Oct 26, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
                <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary-main">
                    <span className="material-symbols-outlined text-sm">autorenew</span> Renew Membership
                </button>
                <button className="bg-theme-bg-card border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
                    Freeze
                </button>
                <button className="bg-theme-bg-card border-2 border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
                    Transfer
                </button>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">chat</span> Send WhatsApp
                </button>
                <button className="bg-theme-bg-card border border-theme-border text-theme-text-main hover:bg-theme-bg-main px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
                    Add Follow-up
                </button>
                <button className="bg-theme-bg-card border border-theme-border text-theme-text-main hover:bg-theme-bg-main px-6 py-2.5 rounded-xl font-bold text-sm transition-all shadow-sm">
                    Mark Attendance
                </button>
            </div>

            {/* Tab Bar */}
            <div className="flex border-b border-theme-border mb-8 overflow-x-auto custom-scrollbar">
                <button onClick={() => setActiveTab('overview')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Overview</button>
                <button onClick={() => setActiveTab('bills')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'bills' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Bills</button>
                <button onClick={() => setActiveTab('workout_plans')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'workout_plans' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Workout Plans</button>
                <button onClick={() => setActiveTab('nutrition_plans')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'nutrition_plans' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Nutrition Plans</button>
                <button onClick={() => setActiveTab('body_analysis')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'body_analysis' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>AI Body Analysis</button>
                <button onClick={() => setActiveTab('attendance')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'attendance' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Attendance</button>
                <button onClick={() => setActiveTab('documents')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'documents' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Documents</button>
                <button onClick={() => setActiveTab('notes')} className={`px-6 py-4 text-sm whitespace-nowrap transition-colors ${activeTab === 'notes' ? 'font-bold border-b-[3px] border-theme-primary-main text-theme-primary-main bg-theme-primary-light' : 'font-medium text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main'}`}>Notes</button>
            </div>

            {/* Conditional Tab Rendering */}
            {activeTab === 'overview' && <ClientProfileOverview />}
            {activeTab === 'bills' && <ClientProfileBills />}
            {activeTab === 'workout_plans' && <ClientProfileWorkoutPlans />}
            {activeTab === 'nutrition_plans' && <ClientProfileNutritionPlans />}
            {activeTab === 'body_analysis' && <ClientProfileBodyAnalysis />}
            {activeTab === 'attendance' && <ClientProfileAttendance />}
        </div>
    );
}
