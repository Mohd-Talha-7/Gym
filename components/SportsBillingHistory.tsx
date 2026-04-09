import React from 'react';

export default function SportsBillingHistory() {
    return (
        <div className="flex-1 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full custom-scrollbar">
            {/* (1) Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-theme-primary-main rounded-2xl text-white flex items-center justify-center shadow-lg shadow-theme-primary-main/20">
                        <span className="material-symbols-outlined text-3xl">history</span>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-on-surface">Sports Billing Histor</h2>
                        <nav className="flex text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mt-1">
                            <span>Gym Operations</span>
                            <span className="mx-2">/</span>
                            <span className="text-theme-primary-main">Sports History</span>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-theme-border text-on-surface-variant bg-white font-semibold hover:bg-surface-container-low transition-colors text-sm shadow-sm">
                        <span className="material-symbols-outlined text-lg text-theme-text-muted">csv</span>
                        Export CSV
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-theme-border text-on-surface-variant bg-white font-semibold hover:bg-surface-container-low transition-colors text-sm shadow-sm">
                        <span className="material-symbols-outlined text-lg text-theme-text-muted">picture_as_pdf</span>
                        Export PDF
                    </button>
                </div>
            </div>

            {/* (3) Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-surface-container-lowest border border-theme-border shadow-sm p-6 rounded-lg flex flex-col gap-1 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider relative z-10">Total Collection</span>
                    <span className="text-3xl font-black text-green-600 relative z-10">Rs. 45,000</span>
                    <span className="text-xs text-green-600 flex items-center gap-1 mt-2 relative z-10">
                        <span className="material-symbols-outlined text-xs">trending_up</span>
                        12% increase from last month
                    </span>
                </div>
                <div className="bg-surface-container-lowest border border-theme-border shadow-sm p-6 rounded-lg flex flex-col gap-1 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-theme-primary-light/50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider relative z-10">Total Bills</span>
                    <span className="text-3xl font-black text-theme-primary-main relative z-10">124</span>
                    <span className="text-xs text-on-surface-variant flex items-center gap-1 mt-2 relative z-10">
                        <span className="material-symbols-outlined text-xs text-theme-primary-main">receipt</span>
                        Processed in current cycle
                    </span>
                </div>
                <div className="bg-surface-container-lowest border border-theme-border shadow-sm p-6 rounded-lg flex flex-col gap-1 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                    <span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider relative z-10">Pending Amount</span>
                    <span className="text-3xl font-black text-orange-500 relative z-10">Rs. 3,500</span>
                    <span className="text-xs text-orange-600 flex items-center gap-1 mt-2 relative z-10">
                        <span className="material-symbols-outlined text-xs">schedule</span>
                        8 invoices awaiting payment
                    </span>
                </div>
            </div>

            {/* (2) Filter Bar */}
            <div className="bg-surface-container-lowest border border-theme-border shadow-sm p-5 rounded-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                    <div className="col-span-1">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 block px-1">Date Range</label>
                        <div className="flex items-center gap-2">
                            <input className="w-full text-xs border border-theme-border bg-surface rounded-lg focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main h-10 px-3 outline-none" type="date" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 block px-1">Sport Type</label>
                        <select className="w-full text-xs border border-theme-border bg-surface rounded-lg focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main h-10 px-3 outline-none">
                            <option>All Sports</option>
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Swimming</option>
                            <option>Tennis</option>
                        </select>
                    </div>
                    <div className="col-span-1 border-theme-border">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 block px-1">Client Name</label>
                        <input className="w-full text-xs border border-theme-border bg-surface rounded-lg focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main h-10 px-3 outline-none" placeholder="Search client..." type="text" />
                    </div>
                    <div className="col-span-1">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 block px-1">Status</label>
                        <select className="w-full text-xs border border-theme-border bg-surface rounded-lg focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main h-10 px-3 outline-none">
                            <option>All Status</option>
                            <option>Paid</option>
                            <option>Pending</option>
                            <option>Voided</option>
                        </select>
                    </div>
                    <div className="col-span-1 border-theme-border">
                        <label className="text-[10px] font-bold uppercase text-on-surface-variant mb-1 block px-1">Trainer/Coach</label>
                        <select className="w-full text-xs border border-theme-border bg-surface rounded-lg focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main h-10 px-3 outline-none">
                            <option>All Trainers</option>
                            <option>Coach Sharma</option>
                            <option>Coach Peter</option>
                        </select>
                    </div>
                    <div className="col-span-1 flex items-end">
                        <button className="w-full bg-theme-primary-main text-white text-sm font-bold h-10 rounded-lg hover:bg-theme-primary-hover active:scale-95 transition-all">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* (4) Data Table */}
            <div className="bg-surface-container-lowest border border-theme-border rounded-lg overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap min-w-full">
                        <thead>
                            <tr className="bg-surface-container-low text-[10px] font-black uppercase text-on-surface-variant tracking-widest border-b border-theme-border">
                                <th className="px-6 py-4">Invoice No.</th>
                                <th className="px-6 py-4">Client Name</th>
                                <th className="px-6 py-4">Sport Type</th>
                                <th className="px-6 py-4">Package</th>
                                <th className="px-6 py-4">Sessions</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Mode</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium divide-y divide-theme-border">
                            {/* Swimmimg */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5 font-bold text-theme-primary-main">INV-8801</td>
                                <td className="px-6 py-5 text-on-surface">Arjun Mehta</td>
                                <td className="px-6 py-5">
                                    <span className="flex w-max items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">pool</span>
                                        Swimming
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-on-surface-variant">Monthly Pro</td>
                                <td className="px-6 py-5 text-on-surface-variant">12</td>
                                <td className="px-6 py-5 font-bold text-on-surface">Rs. 4,500</td>
                                <td className="px-6 py-5 text-on-surface-variant">UPI</td>
                                <td className="px-6 py-5 text-on-surface-variant">24 Oct 2023</td>
                                <td className="px-6 py-5">
                                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-[10px] font-black uppercase">Paid</span>
                                </td>
                                <td className="px-6 py-5 text-right space-x-2">
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-theme-primary-main">picture_as_pdf</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-emerald-500">chat</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-red-500">delete_outline</button>
                                </td>
                            </tr>
                            {/* Badminton */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5 font-bold text-theme-primary-main">INV-8802</td>
                                <td className="px-6 py-5 text-on-surface">Sarah Khan</td>
                                <td className="px-6 py-5">
                                    <span className="flex w-max items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">sports_tennis</span>
                                        Badminton
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-on-surface-variant">Quarterly</td>
                                <td className="px-6 py-5 text-on-surface-variant">24</td>
                                <td className="px-6 py-5 font-bold text-on-surface">Rs. 8,200</td>
                                <td className="px-6 py-5 text-on-surface-variant">Cash</td>
                                <td className="px-6 py-5 text-on-surface-variant">23 Oct 2023</td>
                                <td className="px-6 py-5">
                                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-md text-[10px] font-black uppercase">Pending</span>
                                </td>
                                <td className="px-6 py-5 text-right space-x-2">
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-theme-primary-main">picture_as_pdf</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-emerald-500">chat</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-red-500">delete_outline</button>
                                </td>
                            </tr>
                            {/* Football */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5 font-bold text-theme-primary-main">INV-8803</td>
                                <td className="px-6 py-5 text-on-surface">Rohan Das</td>
                                <td className="px-6 py-5">
                                    <span className="flex w-max items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">sports_soccer</span>
                                        Football
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-on-surface-variant">Weekend Pack</td>
                                <td className="px-6 py-5 text-on-surface-variant">8</td>
                                <td className="px-6 py-5 font-bold text-on-surface">Rs. 3,000</td>
                                <td className="px-6 py-5 text-on-surface-variant">Card</td>
                                <td className="px-6 py-5 text-on-surface-variant">22 Oct 2023</td>
                                <td className="px-6 py-5">
                                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-[10px] font-black uppercase">Paid</span>
                                </td>
                                <td className="px-6 py-5 text-right space-x-2">
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-theme-primary-main">picture_as_pdf</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-emerald-500">chat</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-red-500">delete_outline</button>
                                </td>
                            </tr>
                            {/* Cricket */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5 font-bold text-theme-primary-main">INV-8804</td>
                                <td className="px-6 py-5 text-on-surface">Vihaan Reddy</td>
                                <td className="px-6 py-5">
                                    <span className="flex w-max items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">sports_cricket</span>
                                        Cricket
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-on-surface-variant">Annual Elite</td>
                                <td className="px-6 py-5 text-on-surface-variant">100</td>
                                <td className="px-6 py-5 font-bold text-on-surface">Rs. 15,000</td>
                                <td className="px-6 py-5 text-on-surface-variant">UPI</td>
                                <td className="px-6 py-5 text-on-surface-variant">22 Oct 2023</td>
                                <td className="px-6 py-5">
                                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-[10px] font-black uppercase">Voided</span>
                                </td>
                                <td className="px-6 py-5 text-right space-x-2">
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-theme-primary-main">picture_as_pdf</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-emerald-500">chat</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-red-500">delete_outline</button>
                                </td>
                            </tr>
                            {/* Tennis */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5 font-bold text-theme-primary-main">INV-8805</td>
                                <td className="px-6 py-5 text-on-surface">Isha Patil</td>
                                <td className="px-6 py-5">
                                    <span className="flex w-max items-center gap-2 bg-lime-50 text-lime-700 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">sports_tennis</span>
                                        Tennis
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-on-surface-variant">Single Lesson</td>
                                <td className="px-6 py-5 text-on-surface-variant">1</td>
                                <td className="px-6 py-5 font-bold text-on-surface">Rs. 1,200</td>
                                <td className="px-6 py-5 text-on-surface-variant">UPI</td>
                                <td className="px-6 py-5 text-on-surface-variant">21 Oct 2023</td>
                                <td className="px-6 py-5">
                                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-[10px] font-black uppercase">Paid</span>
                                </td>
                                <td className="px-6 py-5 text-right space-x-2">
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-theme-primary-main">picture_as_pdf</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-emerald-500">chat</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-red-500">delete_outline</button>
                                </td>
                            </tr>
                            {/* Basketball */}
                            <tr className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5 font-bold text-theme-primary-main">INV-8806</td>
                                <td className="px-6 py-5 text-on-surface">Kabir Singh</td>
                                <td className="px-6 py-5">
                                    <span className="flex w-max items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">
                                        <span className="material-symbols-outlined text-sm">sports_basketball</span>
                                        Basketball
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-on-surface-variant">Team Pack</td>
                                <td className="px-6 py-5 text-on-surface-variant">12</td>
                                <td className="px-6 py-5 font-bold text-on-surface">Rs. 5,400</td>
                                <td className="px-6 py-5 text-on-surface-variant">Net Banking</td>
                                <td className="px-6 py-5 text-on-surface-variant">20 Oct 2023</td>
                                <td className="px-6 py-5">
                                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md text-[10px] font-black uppercase">Paid</span>
                                </td>
                                <td className="px-6 py-5 text-right space-x-2">
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-theme-primary-main">picture_as_pdf</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-emerald-500">chat</button>
                                    <button className="material-symbols-outlined text-on-surface-variant hover:text-red-500">delete_outline</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer Pagination */}
                <div className="px-6 py-5 bg-surface-container-low flex items-center justify-between border-t border-theme-border flex-wrap gap-4">
                    <p className="text-xs font-medium text-on-surface-variant">Showing <span className="font-bold text-on-surface">1 - 6</span> of 124 results</p>
                    <div className="flex items-center gap-1">
                        <button className="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant disabled:opacity-30" disabled>
                            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                        </button>
                        <button className="w-8 h-8 rounded-lg bg-theme-primary-main text-white text-xs font-bold transition-all">1</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-xs font-bold transition-all">2</button>
                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-xs font-bold transition-all">3</button>
                        <span className="px-1 text-on-surface-variant text-xs">...</span>
                        <button className="w-8 h-8 rounded-lg hover:bg-surface-container-high text-on-surface-variant text-xs font-bold transition-all">16</button>
                        <button className="p-2 rounded-lg hover:bg-surface-container-high text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
