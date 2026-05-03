

import React, { useState } from 'react';
import {
    BarChart3,
    Calendar,
    Download,
    Plus,
    Search,
    ChevronDown,
    ChevronUp,
    Filter,
    Users,
    Clock,
    Smartphone,
    CheckCircle2,
    MoreVertical,
    ArrowUpRight,
    TrendingDown,
    Layout
} from 'lucide-react';

const AttendanceReport = () => {
    const [expandedId, setExpandedId] = useState<string | null>('FCP-1184');

    const attendanceLogs = [
        { id: 'FCP-2940', name: 'Marcus Chen', date: 'Oct 24, 2023', day: 'Tuesday', in: '06:14 AM', out: '07:45 AM', hours: '1.5h', source: 'BIOMETRIC', image: 'https://i.pravatar.cc/150?u=1' },
        { id: 'FCP-3102', name: 'Sarah Jenkins', date: 'Oct 24, 2023', day: 'Tuesday', in: '08:30 AM', out: '10:00 AM', hours: '1.5h', source: 'OR SCAN', image: 'https://i.pravatar.cc/150?u=2' },
        { id: 'FCP-1184', name: 'David Miller', date: 'Oct 24, 2023', day: 'Tuesday', in: '05:00 PM', out: '07:00 PM', hours: '2.0h', source: 'MANUAL', image: 'https://i.pravatar.cc/150?u=3' },
    ];

    const stats = [
        { label: 'TOTAL RECORDS', value: '1,429', growth: '+12%', color: 'text-green-500' },
        { label: 'UNIQUE MEMBERS', value: '582', growth: '+4.2%', color: 'text-green-500' },
        { label: 'AVG DAILY FOOTFALL', value: '46', growth: '-2%', color: 'text-red-400' },
        { label: 'PEAK DAY', value: 'Tue', sub: '84 check-ins', color: 'text-theme-primary-main' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFDFD] p-10 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Attendance Report</h1>
                    <p className="text-sm text-theme-text-muted font-medium mt-1">Deep dive into facility traffic and member engagement.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-bold text-theme-text-muted hover:bg-theme-bg-main transition-all uppercase tracking-wider shadow-sm">
                        <Download size={16} className="text-theme-primary-main" />
                        Export PDF
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-theme-primary-main text-white rounded-xl text-xs font-bold shadow-lg shadow-theme-primary-main/10 hover:scale-105 active:scale-95 transition-all uppercase tracking-wider">
                        <Download size={16} />
                        Export CSV
                    </button>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-theme-bg-main rounded-[32px] p-6 mb-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 border border-theme-border">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Date Range</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text-muted w-4 h-4" />
                        <input type="text" placeholder="Oct 01, 2023 - Oct 31, 23" className="w-full pl-11 pr-4 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 outline-none" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Search Member</label>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text-muted w-4 h-4" />
                        <input type="text" placeholder="Search by name or member ID..." className="w-full pl-11 pr-4 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 outline-none placeholder:font-medium" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Source</label>
                    <div className="relative">
                        <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 outline-none appearance-none cursor-pointer">
                            <option>All Sources</option>
                            <option>Biometric</option>
                            <option>Manual</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text-muted pointer-events-none" size={16} />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Class/Branch</label>
                    <div className="relative">
                        <select className="w-full pl-4 pr-10 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 outline-none appearance-none cursor-pointer">
                            <option>Main Branch</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text-muted pointer-events-none" size={16} />
                    </div>
                </div>
                <div className="flex items-end">
                    <button className="w-full py-3 bg-theme-primary-main text-white font-bold rounded-xl shadow-lg shadow-theme-primary-main/10 hover:brightness-110 active:scale-95 transition-all text-[10px] uppercase tracking-wider">Apply Filters</button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-theme-border shadow-sm group hover:shadow-md transition-all">
                        <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider flex items-center gap-2 mb-4">
                            <div className="w-1 h-3 bg-theme-primary-main rounded-full" />
                            {stat.label}
                        </span>
                        <div className="flex items-baseline gap-4">
                            <h3 className="text-3xl font-bold text-theme-text-main tracking-tight">{stat.value}</h3>
                            {stat.growth && (
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${stat.color.replace('text-', 'bg-')}/10 ${stat.color}`}>
                                    {stat.growth}
                                </span>
                            )}
                        </div>
                        {stat.sub && <p className="text-[10px] font-semibold text-theme-text-muted mt-2">{stat.sub}</p>}
                    </div>
                ))}
            </div>

            {/* Footfall Chart Visualization */}
            <div className="bg-white border border-theme-border rounded-[32px] p-10 mb-8 shadow-sm relative overflow-hidden group">
                <div className="flex items-start justify-between mb-10">
                    <div>
                        <h3 className="text-xl font-bold text-theme-text-main tracking-tight">Footfall Trends</h3>
                        <p className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider mt-1">Daily attendance distribution for current month</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-theme-primary-main shadow-lg shadow-theme-primary-main/10" />
                            <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Check-Ins</span>
                        </div>
                    </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-4 px-4 overflow-x-auto no-scrollbar pb-2">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="flex-1 min-w-[12px] flex flex-col items-center gap-4 group/bar">
                            <div className="w-full max-w-[32px] bg-theme-primary-main/10 rounded-t-xl relative transition-all duration-700 group-hover/bar:bg-theme-primary-main/20" style={{ height: `${20 + Math.random() * 80}%` }}>
                                <div className="absolute inset-x-0 bottom-0 bg-theme-primary-main/40 rounded-t-xl transition-all duration-1000 group-hover/bar:bg-theme-primary-main" style={{ height: `${40 + Math.random() * 60}%` }} />
                            </div>
                            {i % 7 === 0 && <span className="text-[9px] font-bold text-theme-text-muted/60 uppercase tracking-wider whitespace-nowrap">Oct {i + 1}</span>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Attendance Table */}
            <div className="bg-theme-bg-main rounded-[32px] overflow-hidden border border-theme-border shadow-sm mb-12">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">
                            <th className="py-6 px-10">Member ID</th>
                            <th className="py-6 px-6">Name</th>
                            <th className="py-6 px-6">Date</th>
                            <th className="py-6 px-6 text-center">In/Out</th>
                            <th className="py-6 px-6 text-center">Hours</th>
                            <th className="py-6 px-6">Source</th>
                            <th className="py-6 px-10 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {attendanceLogs.map((log) => (
                            <React.Fragment key={log.id}>
                                <tr
                                    className={`group transition-all cursor-pointer ${expandedId === log.id ? 'bg-white' : 'hover:bg-white/50'}`}
                                    onClick={() => setExpandedId(expandedId === log.id ? null : log.id)}
                                >
                                    <td className="py-6 px-10">
                                        <span className="font-bold text-theme-primary-main text-sm">#{log.id}</span>
                                    </td>
                                    <td className="py-6 px-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                                                <img src={log.image} className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <span className="text-sm font-bold text-theme-text-main">{log.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-theme-text-main leading-none mb-1">{log.date}</span>
                                            <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">{log.day}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-6">
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-xs font-bold text-theme-text-main bg-theme-bg-main px-2.5 py-1 rounded-lg border border-theme-border">{log.in}</span>
                                            <div className="w-4 h-px bg-theme-border" />
                                            <span className="text-xs font-bold text-theme-text-main bg-theme-bg-main px-2.5 py-1 rounded-lg border border-theme-border">{log.out}</span>
                                        </div>
                                    </td>
                                    <td className="py-6 px-6 text-center">
                                        <span className="text-sm font-bold text-theme-text-main">{log.hours}</span>
                                    </td>
                                    <td className="py-6 px-6">
                                        <span className="text-[9px] font-bold text-theme-primary-main bg-white border border-theme-primary-main/20 px-3 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                                            {log.source}
                                        </span>
                                    </td>
                                    <td className="py-6 px-10 text-right">
                                        <button className="w-8 h-8 rounded-full bg-theme-bg-main flex items-center justify-center text-theme-text-muted group-hover:bg-theme-primary-main group-hover:text-white transition-all">
                                            {expandedId === log.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                        </button>
                                    </td>
                                </tr>
                                {expandedId === log.id && (
                                    <tr className="bg-white animate-in slide-in-from-top-2">
                                        <td colSpan={7} className="px-10 py-10">
                                            <div className="bg-theme-bg-main rounded-3xl p-6 border border-theme-border shadow-sm">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h4 className="text-sm font-bold text-theme-text-main uppercase tracking-wider">Attendance Summary: {log.name} (Oct 01 - Oct 31)</h4>
                                                </div>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                    <div>
                                                        <p className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider mb-1">Visits</p>
                                                        <p className="text-2xl font-bold text-theme-text-main tracking-tight">22 Days</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider mb-1">Avg. Duration</p>
                                                        <p className="text-2xl font-bold text-theme-text-main tracking-tight">1.8 Hours</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider mb-1">Consistency</p>
                                                        <p className="text-2xl font-bold text-theme-primary-main tracking-tight">88%</p>
                                                    </div>
                                                </div>
                                                <div className="mt-8 space-y-3">
                                                    <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-theme-border shadow-inner">
                                                        <div className="h-full bg-theme-primary-main rounded-full" style={{ width: '88%' }} />
                                                    </div>
                                                    <p className="text-[10px] font-semibold text-theme-text-muted uppercase tracking-wider">Attendance goal progress (22/30 days)</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

                {/* Custom Pagination Footer */}
                <div className="p-8 bg-white border-t border-theme-border flex items-center justify-between">
                    <span className="text-xs font-bold text-theme-text-muted uppercase tracking-wider">Showing 1 to 10 of 1,429 records</span>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-theme-bg-main rounded-lg border border-theme-border group cursor-pointer">
                            <span className="text-xs font-bold text-theme-text-muted uppercase tracking-wider">10 per page</span>
                            <ChevronDown size={14} className="text-theme-text-muted group-hover:text-theme-primary-main transition-colors" />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-theme-text-muted hover:bg-theme-bg-main transition-all transform rotate-90"><BarChart3 size={16} /></button>
                            <button className="w-9 h-9 rounded-xl bg-theme-primary-main text-white text-xs font-bold shadow-lg shadow-theme-primary-main/10">1</button>
                            <button className="w-9 h-9 rounded-xl text-theme-text-muted text-xs font-bold hover:bg-theme-bg-main transition-all">2</button>
                            <button className="w-9 h-9 rounded-xl text-theme-text-muted text-xs font-bold hover:bg-theme-bg-main transition-all">3</button>
                            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-theme-text-muted hover:bg-theme-bg-main transition-all transform -rotate-90"><ChevronDown size={16} /></button>
                        </div>
                        <button className="ml-4 px-6 py-3 bg-theme-primary-main text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-theme-primary-main/10 hover:scale-[1.02] active:scale-95 transition-all">
                            Export Full Dataset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendanceReport;
