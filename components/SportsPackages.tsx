"use client";

import React, { useState } from 'react';
import {
    Package,
    Plus,
    MoreVertical,
    Edit3,
    Copy,
    XCircle,
    CheckCircle2,
    ChevronDown,
    Info,
    Trophy,
    Dumbbell,
    Timer
} from 'lucide-react';

const SportsPackages = () => {
    const [showModal, setShowModal] = useState(false);

    const packages = [
        { id: 1, name: 'Cricket Pro Academy', sport: 'Cricket', price: '$299', duration: '3 Months', sessions: '36 Field Sessions', status: 'Active', category: 'Elite Training', icon: Dumbbell, color: 'text-rose-600', bg: 'bg-rose-50' },
        { id: 2, name: 'Beginner Swimming', sport: 'Swimming', price: '$120', duration: '1 Month', sessions: '12 Pool Sessions', status: 'Active', category: 'Foundation', icon: Trophy, color: 'text-blue-600', bg: 'bg-blue-50' },
        { id: 3, name: 'Football Training Camp', sport: 'Football', price: '$450', duration: '45 Days', sessions: '40 High Intensity', status: 'Inactive', category: 'Summer Intensive', icon: Package, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFDFD] p-8">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">Sports Packages</h1>
                    <p className="text-theme-text-muted font-medium text-sm">Curate and manage your atelier's elite athletic offerings.</p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-theme-primary-main text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-theme-primary-main/10 hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-wider"
                >
                    <Plus size={18} />
                    <span>Add Package</span>
                </button>
            </div>

            {/* Filter Row */}
            <div className="bg-white p-5 rounded-[24px] mb-8 border border-theme-border shadow-sm flex flex-wrap items-center gap-8">
                <div className="flex-1 min-w-[240px] space-y-2">
                    <label className="block text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Sport Type</label>
                    <div className="relative group">
                        <select className="w-full bg-theme-bg-main border border-theme-border rounded-xl py-2.5 px-4 appearance-none focus:ring-2 focus:ring-theme-primary-main/10 font-semibold text-xs text-theme-text-main cursor-pointer outline-none">
                            <option>All Disciplines</option>
                            <option>Cricket</option>
                            <option>Football</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text-muted pointer-events-none" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1 text-center">Status</label>
                    <div className="flex bg-theme-bg-main p-1 rounded-xl border border-theme-border h-[42px]">
                        <button className="px-6 bg-white text-theme-primary-main font-bold rounded-lg shadow-sm text-[10px] uppercase tracking-wider">Active</button>
                        <button className="px-6 text-theme-text-muted font-bold text-[10px] uppercase tracking-wider hover:text-theme-text-main transition-colors">Inactive</button>
                    </div>
                </div>
                <div className="ml-auto flex items-center h-full pt-4">
                    <button className="flex items-center gap-2 text-theme-primary-main font-bold text-xs uppercase tracking-wider border-b border-theme-primary-main pb-0.5 hover:opacity-80 transition-all">
                        Advanced Filters
                    </button>
                </div>
            </div>

            {/* Infinite Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="bg-white rounded-[32px] p-8 border border-theme-border shadow-sm hover:shadow-xl hover:shadow-theme-primary-main/5 transition-all group flex flex-col h-full relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className={`p-4 rounded-2xl ${pkg.bg} ${pkg.color} shadow-sm`}>
                                <pkg.icon size={28} />
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-3xl font-bold text-theme-text-main tracking-tight">{pkg.price}</span>
                                <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mt-2 border ${pkg.id % 2 === 0 ? 'bg-theme-bg-main text-theme-text-muted border-theme-border' : 'bg-green-50 text-green-600 border-green-100'}`}>
                                    {pkg.id % 2 === 0 ? 'Inclusive' : 'Tax Applicable'}
                                </span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-theme-text-main tracking-tight leading-tight mb-2 relative z-10">{pkg.name}</h3>
                        <div className="flex items-center gap-2 mb-6 relative z-10">
                            <span className="bg-theme-bg-main text-theme-text-muted px-2.5 py-0.5 rounded-lg text-[9px] font-bold uppercase tracking-wider border border-theme-border">{pkg.category}</span>
                        </div>

                        <div className="space-y-4 border-t border-theme-border pt-6 mb-8 relative z-10">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-theme-text-muted">
                                    <Timer size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Duration</span>
                                </div>
                                <span className="text-sm font-bold text-theme-text-main">{pkg.duration}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-theme-text-muted">
                                    <Dumbbell size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Sessions</span>
                                </div>
                                <span className="text-sm font-bold text-theme-text-main">{pkg.sessions}</span>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">Active Status</span>
                                <div className={`w-10 h-5 rounded-full relative cursor-pointer transition-all ${pkg.status === 'Active' ? 'bg-theme-primary-main shadow-lg shadow-theme-primary-main/10' : 'bg-theme-border'}`}>
                                    <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${pkg.status === 'Active' ? 'right-0.5' : 'left-0.5'}`} />
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50 relative z-10">
                            <button className="flex items-center gap-2 text-gray-400 hover:text-theme-primary-main transition-all font-bold text-[10px] uppercase tracking-widest group/btn">
                                <Edit3 size={14} className="group-hover/btn:scale-125 transition-transform" />
                                Edit
                            </button>
                            <button className="flex items-center gap-2 text-gray-400 hover:text-theme-primary-main transition-all font-bold text-[10px] uppercase tracking-widest group/btn">
                                <Copy size={14} className="group-hover/btn:scale-125 transition-transform" />
                                Duplicate
                            </button>
                            <button className={`flex items-center gap-2 transition-all font-bold text-[10px] uppercase tracking-widest group/btn ${pkg.status === 'Active' ? 'text-red-400 hover:text-red-600' : 'text-green-500 hover:text-green-700'}`}>
                                {pkg.status === 'Active' ? <XCircle size={14} /> : <CheckCircle2 size={14} />}
                                {pkg.status === 'Active' ? 'Deactivate' : 'Activate'}
                            </button>
                        </div>

                        {/* Premium Background Shape */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-theme-primary-main/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                ))}
            </div>

            {/* Premium Creation Modal (High Fidelity) */}
            {showModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                        <div className="bg-theme-primary-main px-8 py-6 text-white relative">
                            <h2 className="text-xl font-bold tracking-tight mb-1">Create New Sports Package</h2>
                            <p className="text-white/80 text-[11px] font-medium">Configure elite training parameters for your members.</p>
                            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined text-[20px]">close</span>
                            </button>
                        </div>

                        <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white">
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Package Name</label>
                                <input className="w-full px-5 py-3 bg-theme-bg-main border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all outline-none placeholder:font-medium" placeholder="e.g. Advanced Basketball Masterclass" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Sport Type</label>
                                <div className="relative">
                                    <select className="w-full px-5 py-3 bg-theme-bg-main border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all appearance-none outline-none">
                                        <option>Cricket</option>
                                        <option>Football</option>
                                        <option>Basketball</option>
                                        <option>Swimming</option>
                                        <option>Tennis</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text-muted pointer-events-none" size={16} />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 space-y-1.5">
                                    <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Duration</label>
                                    <input type="number" className="w-full px-5 py-3 bg-theme-bg-main border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all outline-none" placeholder="1" />
                                </div>
                                <div className="w-28 space-y-1.5">
                                    <label className="text-[10px] font-bold text-transparent uppercase tracking-wider ml-1">Unit</label>
                                    <div className="relative">
                                        <select className="w-full px-5 py-3 bg-theme-bg-main border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all appearance-none outline-none">
                                            <option>Months</option>
                                            <option>Weeks</option>
                                            <option>Days</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text-muted pointer-events-none" size={16} />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1 block">Total Sessions</label>
                                <input type="number" className="w-full px-5 py-3 bg-theme-bg-main border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all outline-none" placeholder="12" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Base Price ($)</label>
                                <input type="number" className="w-full px-5 py-3 bg-theme-bg-main border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all outline-none" placeholder="99.00" />
                            </div>

                            <div className="md:col-span-2 flex items-center justify-between p-4 bg-theme-primary-main/5 rounded-[24px] border border-theme-primary-main/10 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-theme-primary-main shadow-sm">
                                        <Info size={16} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-theme-text-main">Set as Active</span>
                                        <span className="text-[9px] font-bold text-theme-text-muted uppercase tracking-wider">Available immediately for enrollment</span>
                                    </div>
                                </div>
                                <div className="w-10 h-5 bg-theme-primary-main rounded-full relative cursor-pointer shadow-lg shadow-theme-primary-main/10">
                                    <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full shadow-sm" />
                                </div>
                            </div>

                            <div className="md:col-span-2 flex gap-4 pt-2">
                                <button className="flex-1 py-3.5 bg-theme-primary-main text-white font-bold rounded-xl shadow-lg shadow-theme-primary-main/20 hover:brightness-110 active:scale-95 transition-all text-[11px] uppercase tracking-wider">Save Package</button>
                                <button onClick={() => setShowModal(false)} className="flex-1 py-3.5 bg-white border border-theme-border text-theme-text-muted font-bold rounded-xl hover:bg-theme-bg-main transition-all text-[11px] uppercase tracking-wider">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SportsPackages;
