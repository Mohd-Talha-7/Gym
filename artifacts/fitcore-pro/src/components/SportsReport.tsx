

import React from 'react';
import {
    BarChart3,
    Calendar,
    Download,
    Plus,
    CheckCircle2,
    MoreVertical,
    ArrowUpRight,
    ChevronDown,
    TrendingUp,
    CreditCard,
    Target,
    Trophy,
    Filter,
    FileText
} from 'lucide-react';

const SportsReport = () => {
    const stats = [
        { label: 'TOTAL SPORTS COLLECTION', value: '₹ 1,24,800', growth: '+12% from last month', icon: CreditCard, color: 'border-green-500', iconColor: 'text-green-500' },
        { label: 'TOTAL BILLS', value: '428', sub: 'Invoices', icon: FileText, color: 'border-blue-500', iconColor: 'text-blue-500' },
        { label: 'PENDING PAYMENTS', value: '₹ 18,400', sub: '14 Outstanding accounts', icon: Target, color: 'border-orange-500', iconColor: 'text-orange-500' },
        { label: 'TOP SPORT', value: 'Swimming', sub: '42% Contribution', icon: Trophy, color: 'border-pink-500', iconColor: 'text-pink-500' },
    ];

    const packageMetrics = [
        { sport: 'Swimming', package: 'Olympic Pro Monthly', bills: 142, amount: '₹ 56,800', collected: '₹ 52,000', pending: '₹ 4,800', trainer: 'Marco Rossi' },
        { sport: 'Tennis', package: 'Private Coaching', bills: 86, amount: '₹ 42,000', collected: '₹ 38,000', pending: '₹ 4,000', trainer: 'Sasha Grey' },
        { sport: 'Boxing', package: 'Heavy Hitters Elite', bills: 64, amount: '₹ 26,000', collected: '₹ 26,000', pending: '—', trainer: 'Viktor Drago' },
    ];

    return (
        <div className="flex flex-col gap-6 p-8 bg-[#FDFDFD] min-h-screen">
            {/* Top Banner / Notification */}
            <div className="flex justify-end mb-2">
                <div className="bg-green-100 text-green-700 px-6 py-2 rounded-full flex items-center gap-3 text-xs font-bold shadow-sm border border-green-200 animate-in slide-in-from-right-10">
                    <CheckCircle2 size={16} />
                    <div>
                        <span className="uppercase tracking-widest">Report Generated</span>
                        <p className="font-bold opacity-70 text-[9px]">All athletic verticals successfully synced.</p>
                    </div>
                </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Collection Report</h1>
                    <p className="text-sm text-theme-text-muted font-medium mt-1">Performance metrics and financial yield across athletic departments</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-bold text-theme-text-main flex items-center gap-2 hover:bg-gray-50 transition-all uppercase tracking-wider">
                        <Download size={16} className="text-theme-primary-main" />
                        Export CSV
                    </button>
                    <button className="px-5 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-bold text-theme-text-main flex items-center gap-2 hover:bg-gray-50 transition-all uppercase tracking-wider">
                        <Download size={16} className="text-theme-primary-main" />
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Advanced Filters */}
            <div className="bg-white p-6 rounded-[24px] border border-theme-border shadow-sm grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Date Range</label>
                    <div className="flex items-center gap-3">
                        <div className="flex-1 px-4 py-2.5 bg-theme-bg-main rounded-xl flex items-center justify-between">
                            <span className="text-xs font-semibold text-theme-text-muted">mm/dd/yyyy</span>
                            <Calendar size={14} className="text-theme-text-muted" />
                        </div>
                        <span className="text-[10px] font-bold text-theme-text-muted">to</span>
                        <div className="flex-1 px-4 py-2.5 bg-theme-bg-main rounded-xl flex items-center justify-center">
                            <Calendar size={14} className="text-theme-text-muted" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1 text-center block">Sport Type</label>
                    <div className="w-full px-5 py-2.5 bg-theme-bg-main rounded-xl flex items-center justify-between text-xs font-semibold text-theme-text-main border border-transparent hover:border-theme-primary-main/20 cursor-pointer">
                        All Sports
                        <ChevronDown size={16} className="text-theme-text-muted" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1 text-center block">Trainer/Coach</label>
                    <div className="w-full px-5 py-2.5 bg-theme-bg-main rounded-xl flex items-center justify-between text-xs font-semibold text-theme-text-main border border-transparent hover:border-theme-primary-main/20 cursor-pointer">
                        All Coaches
                        <ChevronDown size={16} className="text-theme-text-muted" />
                    </div>
                </div>
                <div className="flex items-end">
                    <button className="w-full py-3 bg-theme-primary-main text-white font-bold rounded-xl shadow-lg shadow-theme-primary-main/10 hover:scale-[1.02] active:scale-95 transition-all text-xs uppercase tracking-wider">
                        Apply Filters
                    </button>
                </div>
            </div>

            {/* Elite Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className={`bg-white p-6 rounded-[24px] border-l-[4px] ${stat.color} shadow-sm border border-theme-border flex flex-col justify-between h-40 relative overflow-hidden group hover:shadow-md transition-all`}>
                        <div className="flex justify-between items-start z-10">
                            <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">{stat.label}</span>
                            <div className={`p-2 rounded-lg bg-theme-bg-main ${stat.iconColor}`}>
                                <stat.icon size={18} />
                            </div>
                        </div>
                        <div className="z-10">
                            <h3 className="text-2xl font-bold text-theme-text-main tracking-tight">{stat.value}</h3>
                            {stat.growth ? (
                                <p className="text-[10px] font-semibold text-green-600 flex items-center gap-1 mt-1">
                                    <ArrowUpRight size={12} />
                                    {stat.growth}
                                </p>
                            ) : (
                                <p className="text-[10px] font-semibold text-theme-text-muted mt-1">{stat.sub}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Analytics Row */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                <div className="lg:col-span-3 bg-theme-bg-main rounded-[32px] p-8">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xs font-bold text-theme-text-main uppercase tracking-wider">Monthly Revenue Breakdown</h3>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-theme-primary-main" />
                                <span className="text-[10px] font-semibold text-theme-text-muted">Training Sessions</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-theme-primary-main/30" />
                                <span className="text-[10px] font-semibold text-theme-text-muted">Competitions</span>
                            </div>
                        </div>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-6 px-4">
                        {[
                            { m: 'Jan', v1: 40, v2: 60 },
                            { m: 'Feb', v1: 55, v2: 45 },
                            { m: 'Mar', v1: 70, v2: 30 },
                            { m: 'Apr', v1: 90, v2: 10 },
                        ].map((d, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-4">
                                <div className="w-full flex flex-col gap-1 items-center h-48 justify-end">
                                    <div className="w-full max-w-[40px] bg-theme-primary-main/20 rounded-t-lg h-full overflow-hidden relative">
                                        <div className="absolute bottom-0 w-full bg-theme-primary-main" style={{ height: `${d.v1}%` }} />
                                        <div className="absolute top-0 w-full bg-theme-primary-main opacity-30" style={{ height: `${d.v2}%`, bottom: `${d.v1}%` }} />
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">{d.m}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2 bg-theme-bg-main rounded-[32px] p-8 flex flex-col items-center">
                    <div className="w-full">
                        <h3 className="text-xs font-bold text-theme-text-main uppercase tracking-wider mb-1">Revenue Distribution</h3>
                    </div>
                    <div className="relative w-56 h-56 mt-6">
                        {/* Donut Chart Visual */}
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="white" strokeWidth="10" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#b30069" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="140" strokeLinecap="round" />
                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#22c55e" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset="210" strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-bold text-theme-text-main tracking-tight">₹1.2M</span>
                            <span className="text-[9px] font-bold text-theme-text-muted uppercase tracking-wider">Total Value</span>
                        </div>
                    </div>
                    <div className="w-full mt-6 grid grid-cols-1 gap-2">
                        {[
                            { n: 'Swimming (48%)', c: 'bg-theme-primary-main' },
                            { n: 'Tennis (32%)', c: 'bg-green-500' },
                            { n: 'Boxing (20%)', c: 'bg-orange-400' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className={`w-3 h-3 rounded-sm ${item.c}`} />
                                <span className="text-xs font-semibold text-theme-text-main">{item.n}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Metrics Table */}
            <div className="bg-white rounded-[32px] px-8 py-6 shadow-sm border border-theme-border">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-theme-text-main tracking-tight">Package Performance Metrics</h3>
                    <button className="text-[10px] font-bold text-theme-primary-main uppercase tracking-wider border-b border-theme-primary-main pb-0.5">View All Packages</button>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">
                            <th className="pb-6 px-4">Sport Type</th>
                            <th className="pb-6 px-4">Package</th>
                            <th className="pb-6 px-4 text-center">Total Bills</th>
                            <th className="pb-6 px-4">Total Amount</th>
                            <th className="pb-6 px-4">Collected</th>
                            <th className="pb-6 px-4">Pending</th>
                            <th className="pb-6 px-4">Trainer</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {packageMetrics.map((item, i) => (
                            <tr key={i} className="group hover:bg-theme-bg-main/50 transition-colors">
                                <td className="py-6 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-theme-bg-main flex items-center justify-center text-theme-primary-main">
                                            <Trophy size={16} />
                                        </div>
                                        <span className="text-xs font-bold text-theme-text-main">{item.sport}</span>
                                    </div>
                                </td>
                                <td className="py-6 px-4">
                                    <span className="text-xs font-semibold text-theme-text-muted">{item.package}</span>
                                </td>
                                <td className="py-6 px-4 text-center">
                                    <span className="text-sm font-bold text-theme-text-main">{item.bills}</span>
                                </td>
                                <td className="py-6 px-4">
                                    <span className="text-sm font-bold text-theme-text-main">{item.amount}</span>
                                </td>
                                <td className="py-6 px-4">
                                    <span className="text-sm font-bold text-green-600 underline underline-offset-4 decoration-green-100">{item.collected}</span>
                                </td>
                                <td className="py-6 px-4">
                                    <span className={`text-sm font-bold ${item.pending !== '—' ? 'text-orange-500' : 'text-theme-text-muted opacity-50'}`}>{item.pending}</span>
                                </td>
                                <td className="py-6 px-4 text-xs font-semibold text-theme-text-muted">
                                    {item.trainer}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Trainers Section */}
            <div className="mt-8 flex items-center gap-8">
                <h3 className="text-xl font-bold text-theme-text-main tracking-tight shrink-0">Trainer Revenue Generation</h3>
                <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
                    <div className="flex gap-6">
                        {[
                            { name: 'Marco Rossi', sessions: 128, revenue: '₹ 64,200', image: 'https://i.pravatar.cc/150?u=1' },
                            { name: 'Sasha Grey', sessions: 94, revenue: '₹ 42,100', image: 'https://i.pravatar.cc/150?u=2' },
                            { name: 'Viktor Drago', sessions: 72, revenue: '₹ 31,500', image: 'https://i.pravatar.cc/150?u=3' },
                        ].map((trainer, i) => (
                            <div key={i} className="bg-white p-5 rounded-[24px] border border-theme-border shadow-sm flex items-center gap-6 min-w-[300px] hover:shadow-md transition-all">
                                <div className="w-14 h-14 rounded-full bg-theme-bg-main overflow-hidden border-4 border-white flex-shrink-0 shadow-sm">
                                    <img src={trainer.image} className="w-full h-full object-cover grayscale brightness-95" alt="" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-theme-text-main leading-tight mb-1">{trainer.name}</h4>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Sessions: <span className="text-theme-text-main">{trainer.sessions}</span></span>
                                        <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Revenue: <span className="text-green-600 font-bold">{trainer.revenue}</span></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SportsReport;
