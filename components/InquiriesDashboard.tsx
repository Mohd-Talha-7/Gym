import React from 'react';

export default function InquiriesDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
    return (
        <div className="flex-1 flex flex-col overflow-hidden relative z-0 max-w-7xl mx-auto space-y-6">
            {/* Page Header: Title and Action Button */}
            <div className="flex items-center justify-between flex-shrink-0 mt-4">
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Inquiries</h1>
                <button
                    onClick={() => onNavigate('inquiries-add')}
                    className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add New Inquiry
                </button>
            </div>

            {/* Controls Row: Tabs and Filters */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 flex-shrink-0">
                {/* Tabs */}
                <div className="flex items-center p-1 bg-theme-bg-main rounded-lg border border-theme-border w-max overflow-x-auto">
                    <button className="px-4 py-1.5 text-sm font-medium rounded-md bg-theme-bg-card shadow-sm text-theme-primary-main border border-theme-border transition-all">All</button>
                    <button className="px-4 py-1.5 text-sm font-medium text-theme-text-muted hover:text-theme-text-main rounded-md transition-all">Pending</button>
                    <button className="px-4 py-1.5 text-sm font-medium text-theme-text-muted hover:text-theme-text-main rounded-md transition-all">Contacted</button>
                    <button className="px-4 py-1.5 text-sm font-medium text-theme-text-muted hover:text-theme-text-main rounded-md transition-all">Converted</button>
                    <button className="px-4 py-1.5 text-sm font-medium text-theme-text-muted hover:text-theme-text-main rounded-md transition-all">Lost</button>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-3 flex-wrap">
                    {/* Date Filter */}
                    <div className="relative border border-theme-border rounded-lg bg-theme-bg-card overflow-hidden group hover:border-theme-primary-main transition-colors">
                        <button className="flex items-center gap-2 px-3 py-2 text-sm text-theme-text-main font-medium bg-theme-bg-card w-40 justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-theme-text-muted">calendar_today</span>
                                <span>Last 30 Days</span>
                            </div>
                            <span className="material-symbols-outlined text-[16px] text-theme-text-muted">expand_more</span>
                        </button>
                    </div>

                    {/* Search specific to table */}
                    <div className="relative w-64 border border-theme-border rounded-lg bg-theme-bg-card overflow-hidden group transition-colors focus-within:border-theme-primary-main focus-within:ring-1 focus-within:ring-theme-primary-main">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-[16px] text-theme-text-muted">search</span>
                        </div>
                        <input className="block w-full pl-9 pr-3 py-2 text-sm placeholder-gray-400 focus:outline-none bg-transparent border-none focus:ring-0 text-theme-text-main" placeholder="Search by name, ID, or contact..." type="text" />
                    </div>

                    {/* Staff Filter */}
                    <div className="relative border border-theme-border rounded-lg bg-theme-bg-card overflow-hidden group hover:border-theme-primary-main transition-colors">
                        <button className="flex items-center gap-2 px-3 py-2 text-sm text-theme-text-main font-medium bg-theme-bg-card w-28 justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px] text-theme-text-muted">person</span>
                                <span>Staff</span>
                            </div>
                            <span className="material-symbols-outlined text-[16px] text-theme-text-muted">expand_more</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* BEGIN: Data Table Container */}
            <div className="flex-1 overflow-auto rounded-xl border border-theme-border bg-theme-bg-card table-container relative shadow-sm">
                <table className="w-full text-left border-collapse custom-table whitespace-nowrap min-w-max">
                    <thead className="bg-theme-bg-main sticky top-0 z-10 shadow-sm border-b border-theme-border">
                        <tr>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">ID</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Name</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Contact</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Interest</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Inquiry Date</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Source</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Status</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">
                                <div className="flex items-center gap-1 cursor-pointer hover:text-theme-text-main">Follow-up</div>
                            </th>
                            <th className="px-5 py-3 text-xs font-semibold text-theme-text-muted uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-theme-text-main divide-y divide-theme-border">
                        {/* Row 1 */}
                        <tr className="hover:bg-theme-bg-main transition-colors group cursor-pointer" onClick={() => onNavigate('inquiries-detail')}>
                            <td className="px-5 py-3.5 font-medium text-theme-text-muted w-24">#INQ-1024</td>
                            <td className="px-5 py-3.5 w-48">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 flex-shrink-0">RS</div>
                                    <span className="font-medium text-theme-text-main">Ravi Sharma</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5 w-52">
                                <div className="flex flex-col">
                                    <span>ravi.sharma@email.com</span>
                                    <span className="text-theme-text-muted">+91 98765 43210</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5">PT (Personal Training)</td>
                            <td className="px-5 py-3.5 text-theme-text-muted">12 Oct 2023</td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-[#f3f4f6] text-[#4b5563]">Walk-in</span>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ffedd5] text-[#c2410c]">Pending</span>
                            </td>
                            <td className="px-5 py-3.5 text-theme-text-muted">15 Oct 2023</td>
                            <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                                <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">person_add</span> Convert
                                </button>
                            </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-theme-bg-main transition-colors group cursor-pointer" onClick={() => onNavigate('inquiries-detail')}>
                            <td className="px-5 py-3.5 font-medium text-theme-text-muted w-24">#INQ-1025</td>
                            <td className="px-5 py-3.5 w-48">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 flex-shrink-0">AJ</div>
                                    <span className="font-medium text-theme-text-main">Anjali Jha</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5 w-52">
                                <div className="flex flex-col">
                                    <span>anjali.jha@email.com</span>
                                    <span className="text-theme-text-muted">+91 91234 56789</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5">Yoga</td>
                            <td className="px-5 py-3.5 text-theme-text-muted">11 Oct 2023</td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-[#e0e7ff] text-[#4f46e5]">Social Media</span>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#dbeafe] text-[#1d4ed8]">Contacted</span>
                            </td>
                            <td className="px-5 py-3.5 text-theme-text-muted">14 Oct 2023</td>
                            <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                                <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
                                    <span className="material-symbols-outlined text-[14px]">person_add</span> Convert
                                </button>
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-theme-bg-main transition-colors group cursor-pointer" onClick={() => onNavigate('inquiries-detail')}>
                            <td className="px-5 py-3.5 font-medium text-theme-text-muted">#INQ-1026</td>
                            <td className="px-5 py-3.5">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 flex-shrink-0">VP</div>
                                    <span className="font-medium text-theme-text-main">Vikram Patel</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5">
                                <div className="flex flex-col">
                                    <span>vikram.patel@email.com</span>
                                    <span className="text-theme-text-muted">+91 90123 45678</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5">Gym</td>
                            <td className="px-5 py-3.5 text-theme-text-muted">10 Oct 2023</td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-[#dcfce7] text-[#166534]">Online</span>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#dcfce7] text-[#15803d]">Converted</span>
                            </td>
                            <td className="px-5 py-3.5 text-gray-400">-</td>
                            <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-3">
                                    <button className="text-theme-text-muted hover:text-theme-primary-main flex items-center gap-1 text-xs font-medium transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">edit</span> Edit
                                    </button>
                                    <button className="text-theme-text-muted hover:text-red-600 flex items-center gap-1 text-xs font-medium transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">delete</span> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover:bg-theme-bg-main transition-colors group cursor-pointer" onClick={() => onNavigate('inquiries-detail')}>
                            <td className="px-5 py-3.5 font-medium text-theme-text-muted">#INQ-1027</td>
                            <td className="px-5 py-3.5">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 flex-shrink-0">SK</div>
                                    <span className="font-medium text-theme-text-main">Sneha Kapoor</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5">
                                <div className="flex flex-col">
                                    <span>sneha.kapoor@email.com</span>
                                    <span className="text-theme-text-muted">+91 92345 67890</span>
                                </div>
                            </td>
                            <td className="px-5 py-3.5">Zumba</td>
                            <td className="px-5 py-3.5 text-theme-text-muted">09 Oct 2023</td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-[#e0f2fe] text-[#0369a1]">Referral</span>
                            </td>
                            <td className="px-5 py-3.5">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ffe4e6] text-[#be123c]">Lost</span>
                            </td>
                            <td className="px-5 py-3.5 text-gray-400">-</td>
                            <td className="px-5 py-3.5" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-3">
                                    <button className="text-theme-text-muted hover:text-theme-primary-main flex items-center gap-1 text-xs font-medium transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">edit</span> Edit
                                    </button>
                                    <button className="text-theme-text-muted hover:text-red-600 flex items-center gap-1 text-xs font-medium transition-colors">
                                        <span className="material-symbols-outlined text-[14px]">delete</span> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* BEGIN: Pagination Footer */}
            <div className="flex items-center justify-between flex-shrink-0 pt-2 border-t border-theme-border mt-auto">
                <p className="text-sm text-theme-text-muted">
                    Showing <span className="font-semibold text-theme-text-main">1-10</span> of <span className="font-semibold text-theme-text-main">84</span> inquiries
                </p>
                <div className="flex items-center gap-1">
                    <button className="h-8 w-8 flex items-center justify-center rounded-md border border-theme-border text-theme-text-muted hover:text-theme-text-main hover:bg-theme-bg-main disabled:opacity-50 transition-colors" disabled>
                        <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-md bg-theme-primary-main text-white text-sm font-semibold hover:bg-theme-primary-hover transition-colors">1</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-md text-theme-text-muted hover:bg-theme-bg-main text-sm font-semibold transition-colors">2</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-md text-theme-text-muted hover:bg-theme-bg-main text-sm font-semibold transition-colors">3</button>
                    <span className="h-8 w-8 flex items-center justify-center text-theme-text-muted">...</span>
                    <button className="h-8 w-8 flex items-center justify-center rounded-md text-theme-text-muted hover:bg-theme-bg-main text-sm font-semibold transition-colors">9</button>
                    <button className="h-8 w-8 flex items-center justify-center rounded-md border border-theme-border text-theme-text-muted hover:bg-theme-bg-main transition-colors">
                        <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </button>
                </div>
            </div>
            {/* END: Pagination Footer */}
        </div>
    );
}
