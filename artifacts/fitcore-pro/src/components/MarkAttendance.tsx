

import React, { useState } from 'react';
import {
    Search,
    Calendar,
    Plus,
    CheckCircle2,
    UserCheck,
    Clock,
    Smartphone,
    Eye,
    Users,
    LineChart,
    ArrowUpRight,
    MoreVertical
} from 'lucide-react';

const MarkAttendance = () => {
    const [memberId, setMemberId] = useState('');

    const presentMembers = [
        { name: 'Julian Banks', id: '#FC-9011', checkIn: '08:15 AM', checkOut: '09:45 AM', source: 'BIOMETRIC', image: 'https://i.pravatar.cc/150?u=11' },
        { name: 'Marcus Chen', id: '#FC-7722', checkIn: '09:30 AM', checkOut: 'Active...', source: 'MANUAL', image: 'https://i.pravatar.cc/150?u=12' },
        { name: 'Sarah Jenkins', id: '#FC-2290', checkIn: '10:05 AM', checkOut: 'Active...', source: 'BIOMETRIC', image: 'https://i.pravatar.cc/150?u=13' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFDFD] p-10 font-sans">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight mb-1">Mark Attendance</h1>
                    <div className="flex items-center gap-2 text-theme-primary-main">
                        <Calendar size={18} className="font-bold" />
                        <span className="text-lg font-bold tracking-tight underline underline-offset-4 decoration-theme-primary-main/20">Monday, October 23, 2023</span>
                    </div>
                </div>
                <button className="flex items-center gap-2.5 px-6 py-3 bg-white border border-theme-primary-main/20 text-theme-primary-main rounded-xl font-bold text-xs shadow-sm hover:bg-theme-primary-main/5 transition-all uppercase tracking-wider">
                    <Plus size={18} />
                    Mark Bulk Attendance
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                <div className="lg:col-span-5 space-y-8">
                    <div className="bg-theme-bg-main p-8 rounded-[32px] border border-theme-border shadow-sm relative overflow-hidden group">
                        <h2 className="text-[10px] font-bold uppercase tracking-wider text-theme-text-muted mb-6">Member Search</h2>
                        <div className="relative">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-theme-text-muted w-5 h-5 group-focus-within:text-theme-primary-main transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by name or member ID..."
                                className="w-full pl-14 pr-6 py-4 bg-white border border-theme-border rounded-[20px] text-lg font-semibold shadow-sm focus:ring-4 focus:ring-theme-primary-main/5 transition-all outline-none placeholder:font-medium"
                            />
                        </div>

                        {/* Simulated Selected Member Card */}
                        <div className="mt-8 bg-white p-6 rounded-[32px] shadow-xl shadow-theme-primary-main/5 border border-theme-border relative z-10 animate-in slide-in-from-bottom-5">
                            <div className="flex gap-6 mb-6">
                                <div className="w-24 h-24 rounded-[24px] bg-theme-bg-main overflow-hidden border-2 border-white shrink-0">
                                    <img src="https://i.pravatar.cc/150?u=9" alt="Member" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-theme-text-main tracking-tight">Elena Rodriguez</h3>
                                            <p className="text-[10px] font-bold text-theme-text-muted mt-0.5 uppercase tracking-wider">#FC-8829</p>
                                        </div>
                                        <span className="px-2.5 py-0.5 bg-green-50 text-green-600 border border-green-100 text-[10px] font-bold rounded-lg uppercase tracking-wider">Active</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <p className="text-[9px] font-bold text-theme-text-muted uppercase tracking-wider mb-1">Membership Expiry</p>
                                            <p className="text-xs font-bold text-theme-text-main underline underline-offset-2 decoration-theme-primary-main/20">Dec 15, 2024</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-bold text-theme-text-muted uppercase tracking-wider mb-1">In-Time</p>
                                            <p className="text-xs font-bold text-theme-primary-main italic">Not marked</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-green-600 text-white py-4 rounded-[16px] font-bold text-xs uppercase tracking-wider shadow-lg shadow-green-600/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                                    <CheckCircle2 size={12} />
                                </div>
                                Mark Present
                            </button>
                        </div>

                        {/* Abstract Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-theme-primary-main/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    </div>
                </div>

                {/* Right Members Column */}
                <div className="lg:col-span-7 bg-white rounded-[32px] p-8 shadow-sm border border-theme-border flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold text-theme-text-main tracking-tight">Today's Present Members</h2>
                        <span className="bg-theme-primary-main text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">15 Members</span>
                    </div>

                    <div className="space-y-4 flex-1">
                        <table className="w-full">
                            <thead>
                                <tr className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider border-b border-theme-border">
                                    <th className="pb-6 text-left px-2">Member</th>
                                    <th className="pb-6 text-center">Check-In</th>
                                    <th className="pb-6 text-center">Check-Out</th>
                                    <th className="pb-6 text-center">Source</th>
                                    <th className="pb-6 text-right px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-theme-border">
                                {presentMembers.map((member, i) => (
                                    <tr key={i} className="group hover:bg-theme-bg-main/50 transition-colors">
                                        <td className="py-5 px-2">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-theme-bg-main overflow-hidden border border-theme-border group-hover:scale-105 transition-transform">
                                                    <img src={member.image} className="w-full h-full object-cover" alt="" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-sm font-semibold text-theme-text-main leading-none mb-1">{member.name}</span>
                                                    <span className="text-[10px] font-bold text-theme-text-muted tracking-wider uppercase">{member.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-5 text-center">
                                            <span className="text-xs font-bold text-theme-text-main px-2.5 py-1 bg-theme-bg-main rounded-lg">{member.checkIn}</span>
                                        </td>
                                        <td className="py-5 text-center">
                                            <span className={`text-xs font-bold ${member.checkOut === 'Active...' ? 'text-theme-primary-main italic' : 'text-theme-text-muted'}`}>{member.checkOut}</span>
                                        </td>
                                        <td className="py-5 text-center">
                                            <span className="px-2.5 py-0.5 bg-theme-primary-main/10 text-theme-primary-main text-[9px] font-bold rounded-lg uppercase tracking-wider border border-theme-primary-main/10">
                                                {member.source}
                                            </span>
                                        </td>
                                        <td className="py-6 text-right px-2">
                                            <button className="p-2 hover:bg-gray-100 rounded-xl transition-all text-gray-400 hover:text-gray-900">
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-10 border-t border-theme-border pt-8 flex justify-center">
                        <button className="text-[10px] font-bold text-theme-primary-main uppercase tracking-wider border-b border-theme-primary-main pb-0.5 hover:opacity-70 transition-all">View All Transactions</button>
                    </div>
                </div>
            </div>

            {/* Analytics Footer (High Fidelity) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 bg-white p-8 rounded-[32px] shadow-sm border border-theme-border">
                {[
                    { label: 'TOTAL PRESENT TODAY', value: '15', icon: UserCheck, color: 'text-theme-primary-main' },
                    { label: 'ACTIVE MEMBERS', value: '47', icon: Users, color: 'text-green-500' },
                    { label: 'ATTENDANCE RATE', value: '32%', icon: LineChart, color: 'text-orange-500' },
                ].map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl hover:bg-theme-bg-main transition-all cursor-default">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl bg-theme-bg-main ${stat.color}`}>
                                <stat.icon size={18} />
                            </div>
                            <span className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">{stat.label}</span>
                        </div>
                        <h4 className="text-2xl font-bold text-theme-text-main tracking-tight mt-1">{stat.value}</h4>
                    </div>
                ))}
                <div className="flex flex-col gap-3 p-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recently Checked-In</span>
                    <div className="flex items-center">
                        {[1, 2, 3, 4].map((u) => (
                            <div key={u} className="w-10 h-10 rounded-full border-4 border-white bg-gray-100 overflow-hidden -ml-3 first:ml-0 shadow-sm">
                                <img src={`https://i.pravatar.cc/150?u=${u + 10}`} className="w-full h-full object-cover" alt="" />
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-4 border-white bg-gray-900 text-[10px] font-bold text-white flex items-center justify-center -ml-3 shadow-sm">
                            +12
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkAttendance;
