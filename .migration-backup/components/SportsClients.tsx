"use client";

import React, { useState } from 'react';
import {
    Users,
    Search,
    Filter,
    Download,
    MoreHorizontal,
    Plus,
    MessageSquare,
    Archive,
    X,
    ChevronRight,
    ChevronLeft,
    Bell,
    Settings,
    MoreVertical,
    Check
} from 'lucide-react';
import Image from 'next/image';

const SportsClients = () => {
    const [selectedClients, setSelectedClients] = useState<number[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    const clients = [
        { id: 1, name: 'Elena Rodriguez', sport: 'Swimming', package: 'Gold Elite', sessions: '15/20 Left', expiration: 'Oct 24, 2024', coach: 'Coach Marcus', status: 'ACTIVE', phone: '+1 234 567 890' },
        { id: 2, name: 'Arjun Sharma', sport: 'Cricket', package: 'Pro League', sessions: '2/24 Left', expiration: 'Aug 12, 2024', coach: 'Coach Dev', status: 'EXPIRING', phone: '+91 98765 43210' },
        { id: 3, name: 'Li Wei', sport: 'Badminton', package: 'Academy Plus', sessions: '8/12 Left', expiration: 'Nov 05, 2024', coach: 'Coach Zhang', status: 'ACTIVE', phone: '+86 138 2211 4433' },
        { id: 4, name: 'Jordan Banks', sport: 'Basketball', package: 'Rookie Basic', sessions: 'Unlimited', expiration: 'Dec 15, 2024', coach: 'Coach Terry', status: 'ACTIVE', phone: '+1 555 012 3456' },
        { id: 5, name: 'Sophia Miller', sport: 'Tennis', package: 'Private Coaching', sessions: '0/10 Left', expiration: 'Jul 10, 2024', coach: 'Coach Rafa', status: 'EXPIRED', phone: '+1 555 019 2837' },
        { id: 6, name: 'Malik Johnson', sport: 'Basketball', package: 'Rookie Basic', sessions: '8/12 Left', expiration: 'Dec 15, 2024', coach: 'Coach Phil', status: 'ACTIVE', phone: '+1 202 555 0101' },
        { id: 7, name: 'Yuki Tanaka', sport: 'Karate', package: 'Black Belt Prep', sessions: '4/16 Left', expiration: 'Sep 20, 2024', coach: 'Sensei Hiro', status: 'ACTIVE', phone: '+81 90 1122 3344' },
        { id: 8, name: 'Mia Lars', sport: 'Skating', package: 'Urban Pro', sessions: '10/12 Left', expiration: 'Nov 30, 2024', coach: 'Coach Sven', status: 'ACTIVE', phone: '+45 70 123 4567' },
    ];

    const toggleSelection = (id: number) => {
        if (selectedClients.includes(id)) {
            setSelectedClients(selectedClients.filter(item => item !== id));
        } else {
            setSelectedClients([...selectedClients, id]);
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case 'ACTIVE':
                return 'bg-green-50 text-green-600 ring-green-500/20';
            case 'EXPIRING':
                return 'bg-orange-50 text-orange-600 ring-orange-500/20';
            case 'EXPIRED':
                return 'bg-red-50 text-red-600 ring-red-500/20';
            default:
                return 'bg-gray-50 text-gray-600 ring-gray-200';
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#FDFDFD] font-sans">
            {/* Search Header */}
            <div className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Global search..."
                        className="w-full pl-11 pr-4 py-2.5 bg-[#F8F9FB] border-0 rounded-2xl text-xs font-medium focus:ring-2 focus:ring-theme-primary-main/10"
                    />
                </div>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        <span className="text-sm font-bold text-theme-primary-main border-b-2 border-theme-primary-main pb-4 mt-4 cursor-pointer">Overview</span>
                        <span className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mt-4 pb-4 border-b-2 border-transparent">Schedules</span>
                        <span className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mt-4 pb-4 border-b-2 border-transparent">Attendance</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 relative border border-gray-100">
                            <Bell size={20} />
                            <div className="absolute top-2.5 right-2.5 w-2 h-2 bg-theme-primary-main rounded-full border-2 border-white" />
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-900 border-2 border-white shadow-sm overflow-hidden">
                            <img src="https://lh3.googleusercontent.com/aida/ADBb0ujn_97otPHL33wNPUmLgKSwiRXowCphLbGw82Wc5y3zU-Lo0swQuJxYmS7-kweQGuiq9A59zg5ID_-rRGRstgb6XwvgGdWoVw3dToJtwbb9lmTNUYzMVgQJ8lVxfjcrUeA-M9PdufPhluEe86Vz_TYc99jKyZENtwaxcmjY1wKfQbadEhmqY4ME4_BG6Q-x3VJNMPkFw96KZrTxVLmuo-YuPkGhR1il6vuCBF3d0FHION045PHlFBgFKQ" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8 overflow-y-auto pb-32">
                {/* Main Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-theme-text-main flex items-center gap-3 tracking-tight">
                            Sports Clients
                            <span className="text-xs font-bold bg-theme-primary-main/10 text-theme-primary-main px-3 py-1 rounded-full">124</span>
                        </h1>
                        <p className="text-sm text-theme-text-muted font-medium mt-1">Manage and track athletes across all active disciplines.</p>
                    </div>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-theme-border text-theme-text-main rounded-xl font-bold text-xs shadow-sm hover:shadow-md transition-all active:scale-95 uppercase tracking-wider">
                        <Download size={16} className="text-theme-primary-main" />
                        Export CSV
                    </button>
                </div>

                {/* Filters Panel */}
                <div className="bg-theme-bg-main rounded-[24px] p-5 mb-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Search Clients</label>
                        <div className="relative">
                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text-muted w-4 h-4" />
                            <input type="text" placeholder="Name, ID or Email..." className="w-full pl-11 pr-4 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-2 focus:ring-theme-primary-main/10 outline-none placeholder:font-medium" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Sport Type</label>
                        <select className="w-full px-4 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-2 focus:ring-theme-primary-main/10 appearance-none cursor-pointer outline-none">
                            <option>All Sports</option>
                            <option>Swimming</option>
                            <option>Cricket</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1 text-center block">Status</label>
                        <div className="flex bg-white rounded-xl p-1 border border-theme-border h-[40px]">
                            <button className="flex-1 rounded-lg bg-theme-primary-main text-white text-[10px] font-bold uppercase tracking-wider">Active</button>
                            <button className="flex-1 rounded-lg text-theme-text-muted text-[10px] font-bold uppercase tracking-wider hover:text-theme-text-main transition-colors">Expired</button>
                        </div>
                    </div>
                    <div className="space-y-2 relative">
                        <label className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider ml-1">Package</label>
                        <select className="w-full px-4 py-2.5 bg-white border border-theme-border rounded-xl text-xs font-semibold shadow-sm focus:ring-2 focus:ring-theme-primary-main/10 appearance-none cursor-pointer outline-none">
                            <option>All Packages</option>
                            <option>Gold Elite</option>
                            <option>Pro League</option>
                        </select>
                        <div className="absolute right-0 bottom-0 translate-y-2 w-10 h-10 bg-theme-primary-main/10 text-theme-primary-main rounded-xl flex items-center justify-center cursor-pointer hover:bg-theme-primary-main/20 transition-all border border-theme-primary-main/10">
                            <Settings size={18} />
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-[40px] px-8 py-4 shadow-sm border border-gray-50">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-[10px] font-bold text-theme-text-muted uppercase tracking-wider">
                                <th className="py-6 w-12 text-center">
                                    <div className="w-5 h-5 border-2 border-theme-border rounded-md cursor-pointer hover:border-theme-primary-main transition-colors mx-auto" />
                                </th>
                                <th className="py-6 px-4">Client</th>
                                <th className="py-6 px-4">Sport</th>
                                <th className="py-6 px-4">Package</th>
                                <th className="py-6 px-4 text-center">Sessions</th>
                                <th className="py-6 px-4">Expiration</th>
                                <th className="py-6 px-4">Coach</th>
                                <th className="py-6 px-4 text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {clients.map((client) => (
                                <tr key={client.id} className="group hover:bg-[#FDF9FB]/50 transition-all cursor-pointer">
                                    <td className="py-8 w-12 text-center">
                                        <div
                                            onClick={() => toggleSelection(client.id)}
                                            className={`w-5 h-5 border-2 rounded-md transition-all mx-auto flex items-center justify-center ${selectedClients.includes(client.id) ? 'bg-theme-primary-main border-theme-primary-main shadow-lg shadow-theme-primary-main/30' : 'border-gray-200 group-hover:border-theme-primary-main'}`}
                                        >
                                            {selectedClients.includes(client.id) && <Check size={14} className="text-white" />}
                                        </div>
                                    </td>
                                    <td className="py-6 px-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-theme-bg-main overflow-hidden border-2 border-white shadow-sm">
                                                <img src={`https://i.pravatar.cc/150?u=${client.id}`} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-theme-text-main leading-none mb-1">{client.name}</span>
                                                <span className="text-[10px] font-bold text-theme-text-muted">#KP-{4400 + client.id} • {client.phone.slice(0, 10)}...</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4">
                                        <span className="px-3 py-1 bg-theme-primary-main/10 text-theme-primary-main text-[10px] font-bold rounded-lg inline-flex items-center gap-1">
                                            <div className="w-1 h-1 bg-theme-primary-main rounded-full" />
                                            {client.sport}
                                        </span>
                                    </td>
                                    <td className="py-6 px-4">
                                        <span className="text-sm font-semibold text-theme-text-main tracking-tight">{client.package}</span>
                                    </td>
                                    <td className="py-6 px-4">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className="text-[10px] font-bold text-[#A1316E]">{client.sessions}</span>
                                            <div className="w-16 h-1 bg-theme-bg-main rounded-full overflow-hidden">
                                                <div className="h-full bg-theme-primary-main rounded-full" style={{ width: client.sessions === 'Unlimited' ? '100%' : '60%' }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-4">
                                        <span className="text-xs font-semibold text-theme-text-main">{client.expiration}</span>
                                    </td>
                                    <td className="py-6 px-4">
                                        <span className="text-xs font-semibold text-theme-text-muted">{client.coach}</span>
                                    </td>
                                    <td className="py-6 px-4 text-center">
                                        <span className={`px-2.5 py-1 rounded-lg text-[9px] font-bold border ${getStatusStyle(client.status)}`}>
                                            {client.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex items-center justify-between py-8 border-t border-gray-50 px-4">
                        <span className="text-xs font-bold text-gray-400">Showing 8 of 124 clients</span>
                        <div className="flex items-center gap-1">
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900"><ChevronLeft size={16} /></button>
                            <button className="w-8 h-8 rounded-lg bg-theme-primary-main text-white text-xs font-bold">1</button>
                            <button className="w-8 h-8 rounded-lg text-gray-400 text-xs font-bold hover:bg-gray-50">2</button>
                            <button className="w-8 h-8 rounded-lg text-gray-400 text-xs font-bold hover:bg-gray-50">3</button>
                            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Drawer (High Fidelity) */}
            {selectedClients.length > 0 && (
                <div className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-[#1A1115] text-white px-8 py-5 rounded-[32px] shadow-2xl shadow-[#A1316E]/20 flex items-center gap-10 animate-in slide-in-from-bottom-10 duration-500 z-50 ring-4 ring-[#A1316E]/10 border border-[#A1316E]/20">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-theme-primary-main text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-theme-primary-main/30">
                            {selectedClients.length}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#9C8F96]">Client</span>
                            <span className="text-sm font-bold tracking-tight">Selected</span>
                        </div>
                    </div>

                    <div className="h-10 w-px bg-[#2D2328]" />

                    <div className="flex items-center gap-8">
                        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FDF9FB] hover:text-theme-primary-main transition-colors group">
                            <div className="w-8 h-8 rounded-xl bg-[#2D2328] flex items-center justify-center group-hover:bg-theme-primary-main transition-all">
                                <MessageSquare size={16} />
                            </div>
                            Bulk WhatsApp
                        </button>
                        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FDF9FB] hover:text-theme-primary-main transition-colors group">
                            <div className="w-8 h-8 rounded-xl bg-[#2D2328] flex items-center justify-center group-hover:bg-theme-primary-main transition-all">
                                <Download size={16} />
                            </div>
                            Export Selected
                        </button>
                        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FDF9FB] hover:text-red-400 transition-colors group">
                            <div className="w-8 h-8 rounded-xl bg-[#2D2328] flex items-center justify-center group-hover:bg-red-500 transition-all">
                                <Archive size={16} />
                            </div>
                            Archive
                        </button>
                    </div>

                    <button
                        onClick={() => setSelectedClients([])}
                        className="w-10 h-10 rounded-full bg-[#2D2328] flex items-center justify-center hover:bg-[#3D3338] transition-all ml-4"
                    >
                        <X size={20} className="text-[#9C8F96]" />
                    </button>
                </div>
            )}

            {/* Quick Add Button */}
            <button className="fixed bottom-12 left-12 w-14 h-14 rounded-[22px] bg-theme-primary-main text-white shadow-xl shadow-theme-primary-main/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group z-10">
                <Plus size={28} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
        </div>
    );
};

export default SportsClients;
