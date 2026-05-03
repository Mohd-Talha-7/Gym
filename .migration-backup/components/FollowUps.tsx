export default function FollowUps() {
    return (
        <div className="space-y-6 w-full max-w-7xl mx-auto pb-20">
            {/* Header Section */}
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="text-[1.5rem] font-bold tracking-tight text-[#2d3339]">Follow-ups</h2>
                    <p className="text-[0.6875rem] text-[#5a6066] uppercase tracking-[0.05em] font-medium">Manage your active member and lead communications</p>
                </div>
                <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all hover:shadow-lg active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    New Follow-up
                </button>
            </div>

            {/* Quick Stats Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="p-2 rounded-lg bg-[#DBEAFE] text-theme-primary-main">
                            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        </span>
                        <span className="text-[10px] font-bold text-[#5a6066]">+12% vs yest</span>
                    </div>
                    <p className="text-[0.6875rem] font-medium text-[#5a6066] uppercase tracking-wider">Pending Today</p>
                    <p className="text-2xl font-bold text-[#2d3339]">24</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="p-2 rounded-lg bg-[#FEE2E2] text-[#a83836]">
                            <span className="material-symbols-outlined text-[20px]">bolt</span>
                        </span>
                        <span className="text-[10px] font-bold text-[#a83836]">Urgent</span>
                    </div>
                    <p className="text-[0.6875rem] font-medium text-[#5a6066] uppercase tracking-wider">High Priority</p>
                    <p className="text-2xl font-bold text-[#2d3339]">08</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="p-2 rounded-lg bg-[#FEF9C3] text-[#6e0a12]">
                            <span className="material-symbols-outlined text-[20px]">history</span>
                        </span>
                        <span className="text-[10px] font-bold text-[#6e0a12]">Attention</span>
                    </div>
                    <p className="text-[0.6875rem] font-medium text-[#5a6066] uppercase tracking-wider">Overdue</p>
                    <p className="text-2xl font-bold text-[#2d3339]">05</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/15 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <span className="p-2 rounded-lg bg-[#DCFCE7] text-[#166534]">
                            <span className="material-symbols-outlined text-[20px]">done_all</span>
                        </span>
                        <span className="text-[10px] font-bold text-[#166534]">On track</span>
                    </div>
                    <p className="text-[0.6875rem] font-medium text-[#5a6066] uppercase tracking-wider">Completed Today</p>
                    <p className="text-2xl font-bold text-[#2d3339]">18</p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/15 shadow-sm flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-lg">
                    <button className="px-4 py-1.5 text-[12px] font-semibold bg-white text-theme-primary-main rounded-md shadow-sm">All</button>
                    <button className="px-4 py-1.5 text-[12px] font-medium text-[#5a6066] hover:text-theme-primary-main transition-colors">Inquiries</button>
                    <button className="px-4 py-1.5 text-[12px] font-medium text-[#5a6066] hover:text-theme-primary-main transition-colors">Renewals</button>
                    <button className="px-4 py-1.5 text-[12px] font-medium text-[#5a6066] hover:text-theme-primary-main transition-colors">Pending Payments</button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#5a6066]">calendar_month</span>
                        <input className="pl-10 pr-4 py-1.5 text-[12px] rounded-lg bg-surface-container-low border-none focus:ring-1 focus:ring-theme-primary-main w-48 cursor-pointer" readOnly type="text" value="Oct 12 - Oct 19, 2023" />
                    </div>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-[18px] text-[#5a6066]">search</span>
                        <input className="pl-10 pr-4 py-1.5 text-[12px] rounded-lg bg-surface-container-low border-none focus:ring-1 focus:ring-theme-primary-main w-64" placeholder="Filter by name..." type="text" />
                    </div>
                </div>
            </div>

            {/* Main Table Section */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/15 shadow-sm overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-surface-container-low">
                            <th className="px-6 py-4 text-[0.6875rem] font-bold text-[#5a6066] uppercase tracking-[0.05em]">Member/Lead</th>
                            <th className="px-6 py-4 text-[0.6875rem] font-bold text-[#5a6066] uppercase tracking-[0.05em]">Type</th>
                            <th className="px-6 py-4 text-[0.6875rem] font-bold text-[#5a6066] uppercase tracking-[0.05em]">Priority</th>
                            <th className="px-6 py-4 text-[0.6875rem] font-bold text-[#5a6066] uppercase tracking-[0.05em]">Scheduled Time</th>
                            <th className="px-6 py-4 text-[0.6875rem] font-bold text-[#5a6066] uppercase tracking-[0.05em]">Last Comment</th>
                            <th className="px-6 py-4 text-[0.6875rem] font-bold text-[#5a6066] uppercase tracking-[0.05em] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-outline-variant/10">
                        {/* Row 1 */}
                        <tr className="hover:bg-surface-bright transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                                        <img alt="Arjun Sharma avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMJT4mAmWPiLi1ofS1ioD1Zg7cFv8xodAsAP301ANzFaDZLyMb2xkFxivEkZjCgA48XsYzQ8xr81JVIe5L53i_eK52zAQ5ZQNlrdlcxff8tuXbwuUrTKv4PkCABvRmnyjOdFGi_yAuOkbUkKFR2-kOQzW7qRWB3GqMTokJcIVUCbjzHCPidtYGhr96d0A4vU42v8f6DXL9i9-7fA3TWTByZv9YET6_Gqknf_3v90AvSsIIB4NG8NeZea_iXkIsA8BtEh543plVog" />
                                    </div>
                                    <span className="text-sm font-semibold text-[#2d3339]">Arjun Sharma</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#DBEAFE] text-theme-primary-main">Inquiry</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FEE2E2] text-[#a83836]">Hot</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-[#2d3339]">Today, 2:30 PM</span>
                                    <span className="text-[11px] text-[#5a6066]">Scheduled 2h ago</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm text-[#5a6066] max-w-[200px] truncate">Interested in PT session trial...</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="WhatsApp">
                                        <span className="material-symbols-outlined text-[18px]">chat</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DBEAFE] hover:text-theme-primary-main rounded-lg transition-colors" title="Call">
                                        <span className="material-symbols-outlined text-[18px]">call</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="Mark Done">
                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#F3E8FF] hover:text-[#6d567f] rounded-lg transition-colors" title="Reschedule">
                                        <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-surface-bright transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                                        <img alt="Priya Doshi avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqbxiaBvzEvBcca70HA26sm76fkae-owoP6jEHCTekSmcRJvABcTkcedm586EsSCzdsaCJbbxYBDDmbH1uiHqGvJme_i5u3PdK2njjIhKD95QW7yEmOacw6dMbtXq_2w6EfWn6NOIDPmvf2OvA3eCtwjj3B5XKR7whyaG_qJtYQty6O4WmcgVfgC8qLwa-cR3ax6MbA4RV17BejF6bkWVgRH4GsKk6V8ClkKvShlkr59UdxNh1NqJI7rKgWcyokjtxwJfTWjE4iA" />
                                    </div>
                                    <span className="text-sm font-semibold text-[#2d3339]">Priya Doshi</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#F3E8FF] text-[#6d567f]">Renewal</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FFF7ED] text-[#9a3412]">Urgent</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-error">Yesterday, 10 AM</span>
                                    <span className="text-[11px] text-error">Overdue by 24h</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm text-[#5a6066] max-w-[200px] truncate">Annual membership expires Friday</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="WhatsApp">
                                        <span className="material-symbols-outlined text-[18px]">chat</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DBEAFE] hover:text-theme-primary-main rounded-lg transition-colors" title="Call">
                                        <span className="material-symbols-outlined text-[18px]">call</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="Mark Done">
                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#F3E8FF] hover:text-[#6d567f] rounded-lg transition-colors" title="Reschedule">
                                        <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 3 */}
                        <tr className="hover:bg-surface-bright transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                                        <img alt="Marcus Chen avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhDVt2gYrjxc1QuVQmtuU-KFfwInH-jhvY0CPJK0ks6i5Hc55xmEk4FqzYWBrZpXX1X6buURs7zPB6qco3eYwbRlRZTtP91sUJbe0xEblAsZHXuAtx7S6yjoR4Ef6mZO0-MRrfaSYJpZ2WZwVG1LV7Jo2SpK2-JFFbqseNNtl-gZukA8vbQmDKZBEX-BPCrmZA0AruzBE2k33FzOue8ZkBomKvjUFXmJInOyaZpHG7uouHB0u918TJlH4aH8ymzzqjaZObKNUJYA" />
                                    </div>
                                    <span className="text-sm font-semibold text-[#2d3339]">Marcus Chen</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FEF9C3] text-[#854d0e]">Payment</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#f1f4f9] text-[#5a6066]">Cold</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-[#2d3339]">Tomorrow, 11 AM</span>
                                    <span className="text-[11px] text-[#5a6066]">Waiting for invoice</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm text-[#5a6066] max-w-[200px] truncate">Card declined thrice. Follow up.</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="WhatsApp">
                                        <span className="material-symbols-outlined text-[18px]">chat</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DBEAFE] hover:text-theme-primary-main rounded-lg transition-colors" title="Call">
                                        <span className="material-symbols-outlined text-[18px]">call</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="Mark Done">
                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#F3E8FF] hover:text-[#6d567f] rounded-lg transition-colors" title="Reschedule">
                                        <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover:bg-surface-bright transition-colors group">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100">
                                        <img alt="Sarah Miller avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX5KDyaOXiyb5KaFjz9nH2OMkFETTHhT5l7DSS7i9bIh1BiBcdOeIq1P6XJbplfHValW2tO-4rirwJ7onNivJxbJEAQ1SR5fKDHzgoq8SrGd5HH0Y4q8EpV8p-xLGC_hthR4auT4gOs2zvPa5ObYRLs1rGQgVaYBkxu98TOEwU5im9Tb2uCdElAxY8RXfwFibKJH0nTUww-qsKxJpr75mmW9t6KNG_4ptAp074rDErTvZsjrd-aJIrFxiqqiOvdbUi33Z-UD2FhA" />
                                    </div>
                                    <span className="text-sm font-semibold text-[#2d3339]">Sarah Miller</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#DBEAFE] text-theme-primary-main">Inquiry</span>
                            </td>
                            <td className="px-6 py-4">
                                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#DCFCE7] text-[#166534]">Warm</span>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex flex-col">
                                    <span className="text-sm font-medium text-[#2d3339]">Oct 20, 4:00 PM</span>
                                    <span className="text-[11px] text-[#5a6066]">First touchpoint</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className="text-sm text-[#5a6066] max-w-[200px] truncate">Referral from James. Yoga focus.</p>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="WhatsApp">
                                        <span className="material-symbols-outlined text-[18px]">chat</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DBEAFE] hover:text-theme-primary-main rounded-lg transition-colors" title="Call">
                                        <span className="material-symbols-outlined text-[18px]">call</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#DCFCE7] hover:text-[#166534] rounded-lg transition-colors" title="Mark Done">
                                        <span className="material-symbols-outlined text-[18px]">check_circle</span>
                                    </button>
                                    <button className="p-2 hover:bg-[#F3E8FF] hover:text-[#6d567f] rounded-lg transition-colors" title="Reschedule">
                                        <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant/10 flex flex-col md:flex-row gap-4 items-center justify-between">
                    <span className="text-[12px] text-[#5a6066] font-medium">Showing 4 of 32 results</span>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-[12px] font-medium bg-white border border-outline-variant/20 rounded-md hover:bg-surface-container-low transition-colors shadow-sm">Previous</button>
                        <button className="px-3 py-1.5 text-[12px] font-medium bg-theme-primary-main text-white rounded-md hover:bg-theme-primary-hover transition-colors shadow-sm">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
