import React from 'react';

export default function ClientsDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
    return (
        <div className="flex-1 overflow-auto relative z-0 max-w-7xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4 mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">Clients</h1>
                    <p className="text-theme-text-muted text-sm">Manage and track your active gym members and subscriptions.</p>
                </div>
                <button
                    className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-sm"
                    onClick={() => onNavigate('members-add')}
                >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    Add New Client
                </button>
            </div>

            {/* Filter Bar Section */}
            <div className="bg-theme-bg-card rounded-2xl p-4 mb-6 shadow-sm flex flex-wrap items-center gap-4 border border-theme-border">
                <div className="flex-1 min-w-[240px]">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-theme-text-muted text-lg pointer-events-none">search</span>
                        <input className="w-full bg-theme-bg-main border border-transparent focus:border-theme-primary-main rounded-xl pl-10 pr-4 py-2.5 text-sm focus:ring-1 focus:ring-theme-primary-main transition-all text-theme-text-main placeholder:text-theme-text-muted" placeholder="Search by name, ID or phone..." type="text" />
                    </div>
                </div>
                <select className="bg-theme-bg-main border-none rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-theme-primary-main cursor-pointer min-w-[140px] text-theme-text-main font-medium">
                    <option>Status: All</option>
                    <option>Active</option>
                    <option>Expired</option>
                    <option>Frozen</option>
                    <option>Expiring Soon</option>
                </select>
                <select className="bg-theme-bg-main border-none rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-theme-primary-main cursor-pointer min-w-[140px] text-theme-text-main font-medium">
                    <option>Package: All</option>
                    <option>Platinum Annual</option>
                    <option>Gold Monthly</option>
                    <option>Standard Quarterly</option>
                </select>
                <select className="bg-theme-bg-main border-none rounded-xl px-4 py-2.5 text-sm focus:ring-1 focus:ring-theme-primary-main cursor-pointer min-w-[100px] text-theme-text-main font-medium">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <div className="flex items-center bg-theme-bg-main rounded-xl px-4 py-2.5 gap-2 text-sm text-theme-text-muted cursor-pointer hover:bg-theme-bg-main transition-colors font-medium">
                    <span className="material-symbols-outlined text-lg">calendar_month</span>
                    Date Range
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-theme-text-main border border-theme-border rounded-xl hover:bg-theme-bg-main transition-colors">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Export CSV
                </button>
            </div>

            {/* Client Table Section */}
            <div className="bg-theme-bg-card rounded-2xl overflow-hidden shadow-sm border border-theme-border relative">
                <div className="overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left border-collapse custom-table whitespace-nowrap min-w-max">
                        <thead className="bg-theme-bg-main">
                            <tr>
                                <th className="p-4 w-10"><input className="rounded border-theme-border text-theme-primary-main focus:ring-theme-primary-main bg-theme-bg-main" type="checkbox" /></th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Client ID</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Profile</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Contact</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted text-center">Gender</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Registration</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Package</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Expiry</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted text-center">Reward</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted">Status</th>
                                <th className="p-4 text-[11px] font-bold uppercase tracking-wider text-theme-text-muted text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs divide-y divide-theme-border text-theme-text-main">
                            {/* Row 1 */}
                            <tr className="hover:bg-theme-bg-main transition-colors cursor-pointer" onClick={() => onNavigate('members-detail')}>
                                <td className="p-4" onClick={(e) => e.stopPropagation()}><input className="rounded border-theme-border text-theme-primary-main focus:ring-theme-primary-main bg-theme-bg-main" type="checkbox" /></td>
                                <td className="p-4 font-mono text-theme-text-muted font-medium">#FC-9901</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex flex-shrink-0 items-center justify-center font-bold text-slate-600">ER</div>
                                        <span className="font-semibold text-theme-text-main">Elena Rodriguez</span>
                                    </div>
                                </td>
                                <td className="p-4 text-theme-text-muted">+1 (555) 012-3456</td>
                                <td className="p-4 text-center text-theme-text-muted">F</td>
                                <td className="p-4 text-theme-text-muted">Oct 12, 2023</td>
                                <td className="p-4"><span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-700 font-bold">Platinum Annual</span></td>
                                <td className="p-4 text-theme-text-muted">Oct 12, 2024</td>
                                <td className="p-4 text-center font-bold text-green-600">450</td>
                                <td className="p-4"><span className="flex items-center gap-1.5 text-green-600 font-bold uppercase text-[10px] bg-green-50 px-2 py-1 rounded-full w-fit">Active</span></td>
                                <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-end gap-1">
                                        <button className="p-1.5 hover:bg-theme-bg-main rounded-lg text-theme-text-muted hover:text-theme-primary-main" title="View Profile"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                                        <button className="p-1.5 hover:bg-theme-bg-main rounded-lg text-theme-text-muted hover:text-theme-primary-main" title="Send WhatsApp"><span className="material-symbols-outlined text-[18px]">chat</span></button>
                                        <button className="p-1.5 hover:bg-theme-bg-main rounded-lg text-theme-text-muted hover:text-theme-primary-main" title="Mark Attendance"><span className="material-symbols-outlined text-[18px]">check_circle</span></button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 2 */}
                            <tr className="hover:bg-theme-bg-main transition-colors cursor-pointer" onClick={() => onNavigate('members-detail')}>
                                <td className="p-4" onClick={(e) => e.stopPropagation()}><input className="rounded border-theme-border text-theme-primary-main focus:ring-theme-primary-main bg-theme-bg-main" type="checkbox" /></td>
                                <td className="p-4 font-mono text-theme-text-muted font-medium">#FC-9905</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex flex-shrink-0 items-center justify-center font-bold text-slate-600">MC</div>
                                        <span className="font-semibold text-theme-text-main">Marcus Chen</span>
                                    </div>
                                </td>
                                <td className="p-4 text-theme-text-muted">+1 (555) 012-7890</td>
                                <td className="p-4 text-center text-theme-text-muted">M</td>
                                <td className="p-4 text-theme-text-muted">Jan 05, 2024</td>
                                <td className="p-4"><span className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 font-bold">Gold Monthly</span></td>
                                <td className="p-4 text-theme-text-muted">Feb 05, 2024</td>
                                <td className="p-4 text-center font-bold text-theme-text-muted">120</td>
                                <td className="p-4"><span className="flex items-center gap-1.5 text-orange-600 font-bold uppercase text-[10px] bg-orange-50 px-2 py-1 rounded-full w-fit">Expiring Soon</span></td>
                                <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-end gap-1">
                                        <button className="p-1.5 hover:bg-theme-primary-light rounded-lg text-theme-primary-main font-bold" title="Renew Now"><span className="material-symbols-outlined text-[18px]">refresh</span></button>
                                        <button className="p-1.5 hover:bg-theme-bg-main rounded-lg text-theme-text-muted hover:text-theme-primary-main" title="Add Follow-up"><span className="material-symbols-outlined text-[18px]">calendar_today</span></button>
                                        <button className="p-1.5 hover:bg-theme-bg-main rounded-lg text-theme-text-muted hover:text-theme-primary-main" title="Send SMS"><span className="material-symbols-outlined text-[18px]">sms</span></button>
                                    </div>
                                </td>
                            </tr>

                            {/* Row 3 */}
                            <tr className="hover:bg-theme-bg-main transition-colors opacity-75 cursor-pointer" onClick={() => onNavigate('members-detail')}>
                                <td className="p-4" onClick={(e) => e.stopPropagation()}><input className="rounded border-theme-border text-theme-primary-main focus:ring-theme-primary-main bg-theme-bg-main" type="checkbox" /></td>
                                <td className="p-4 font-mono text-theme-text-muted font-medium">#FC-9882</td>
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex flex-shrink-0 items-center justify-center text-slate-600 font-bold">SJ</div>
                                        <span className="font-semibold text-theme-text-main">Sarah Johnson</span>
                                    </div>
                                </td>
                                <td className="p-4 text-theme-text-muted">+1 (555) 011-2233</td>
                                <td className="p-4 text-center text-theme-text-muted">F</td>
                                <td className="p-4 text-theme-text-muted">Nov 15, 2023</td>
                                <td className="p-4"><span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-bold">Standard Qtrly</span></td>
                                <td className="p-4 text-red-600 font-bold">Jan 15, 2024</td>
                                <td className="p-4 text-center font-bold text-theme-text-muted">55</td>
                                <td className="p-4"><span className="flex items-center gap-1.5 text-red-600 font-bold uppercase text-[10px] bg-red-50 px-2 py-1 rounded-full w-fit">Expired</span></td>
                                <td className="p-4 text-right" onClick={(e) => e.stopPropagation()}>
                                    <div className="flex justify-end gap-1">
                                        <button className="p-1.5 hover:bg-theme-primary-light rounded-lg text-theme-primary-main" title="Renew Member"><span className="material-symbols-outlined text-[18px]">autorenew</span></button>
                                        <button className="p-1.5 hover:bg-theme-bg-main rounded-lg text-theme-text-muted hover:text-theme-primary-main" title="Transfer Profile"><span className="material-symbols-outlined text-[18px]">move_up</span></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination Section */}
                <div className="bg-theme-bg-main px-6 py-4 flex items-center justify-between border-t border-theme-border">
                    <span className="text-xs text-theme-text-muted font-medium">Showing 1 to 10 of 2,450 clients</span>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-theme-bg-card rounded-lg text-theme-text-muted disabled:opacity-30 transition-colors" disabled>
                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-theme-primary-main text-white font-bold text-xs shadow-sm">1</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-theme-bg-card text-theme-text-muted font-bold text-xs transition-colors">2</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-theme-bg-card text-theme-text-muted font-bold text-xs transition-colors">3</button>
                        <span className="text-theme-text-muted text-xs font-bold px-1">...</span>
                        <button className="w-8 h-8 rounded-lg hover:bg-theme-bg-card text-theme-text-muted font-bold text-xs transition-colors">245</button>
                        <button className="p-2 hover:bg-theme-bg-card rounded-lg text-theme-text-muted transition-colors">
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Dashboard Bottom Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="bg-theme-bg-card p-5 rounded-2xl border border-theme-border shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-theme-text-muted uppercase tracking-wider">Total Active</span>
                        <span className="material-symbols-outlined text-green-500">trending_up</span>
                    </div>
                    <div className="flex items-end gap-2 text-theme-text-main">
                        <span className="text-2xl font-bold tracking-tight">1,842</span>
                        <span className="text-xs text-green-500 font-bold mb-1">+4.2%</span>
                    </div>
                </div>
                <div className="bg-theme-bg-card p-5 rounded-2xl border border-theme-border shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-theme-text-muted uppercase tracking-wider">Monthly Revenue</span>
                        <span className="material-symbols-outlined text-green-500">payments</span>
                    </div>
                    <div className="flex items-end gap-2 text-theme-text-main">
                        <span className="text-2xl font-bold tracking-tight">$42,900</span>
                        <span className="text-xs text-green-500 font-bold mb-1">+$2.1k</span>
                    </div>
                </div>
                <div className="bg-theme-bg-card p-5 rounded-2xl border border-theme-border shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-theme-text-muted uppercase tracking-wider">Expiring (7 Days)</span>
                        <span className="material-symbols-outlined text-orange-500">error</span>
                    </div>
                    <div className="flex items-end gap-2 text-theme-text-main">
                        <span className="text-2xl font-bold tracking-tight text-orange-500">84</span>
                        <span className="text-xs text-theme-text-muted font-bold mb-1">Follow up needed</span>
                    </div>
                </div>
                <div className="bg-theme-bg-card p-5 rounded-2xl border border-theme-border shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-theme-text-muted uppercase tracking-wider">Churn Rate</span>
                        <span className="material-symbols-outlined text-red-500">trending_down</span>
                    </div>
                    <div className="flex items-end gap-2 text-theme-text-main">
                        <span className="text-2xl font-bold tracking-tight">1.2%</span>
                        <span className="text-xs text-red-500 font-bold mb-1">-0.3%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
