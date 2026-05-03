export default function UpcomingRenewals() {
    return (
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight">Upcoming Renewals</h1>
                <p className="text-sm text-slate-500">Manage and track memberships expiring soon.</p>
            </div>

            {/* Filters Bar */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="fa-solid fa-magnifying-glass text-slate-400 text-sm"></i>
                    </div>
                    <input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm transition-shadow" placeholder="Search by Member Name" type="text" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-48">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Expiry Period</label>
                        <div className="relative">
                            <select className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main bg-white appearance-none cursor-pointer">
                                <option>Next 15 Days</option>
                                <option>Next 30 Days</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                <i className="fa-solid fa-chevron-down text-xs"></i>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-48">
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Status</label>
                        <div className="relative">
                            <select className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main bg-white appearance-none cursor-pointer">
                                <option>All Statuses</option>
                                <option>Pending</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                <i className="fa-solid fa-chevron-down text-xs"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table Area */}
            <div className="border border-slate-200 rounded-xl overflow-x-auto table-container">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 tracking-wider">Member</th>
                            <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 tracking-wider">Plan</th>
                            <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 tracking-wider">Expiry Date</th>
                            <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 tracking-wider">Amount Due</th>
                            <th className="px-6 py-3.5 text-xs font-semibold text-slate-600 tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-100">
                        {/* Row 1 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img alt="" className="h-10 w-10 rounded-full object-cover bg-slate-100" src="https://ui-avatars.com/api/?name=Alex+Chen&background=f1f5f9&color=64748b" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-slate-900">Alex Chen</div>
                                        <div className="text-sm text-slate-500">alex@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Annual Pro</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">Oct 28, 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">$199.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex gap-2">
                                    <button className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-primary-hover transition-colors shadow-sm">Renew Now</button>
                                    <button className="bg-theme-bg-card text-theme-primary-main border border-theme-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-bg-main transition-colors shadow-sm">Send Reminder</button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 2 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img alt="" className="h-10 w-10 rounded-full object-cover bg-slate-100" src="https://ui-avatars.com/api/?name=Ravi+Shamn&background=f1f5f9&color=64748b" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-slate-900">Ravi Shamn</div>
                                        <div className="text-sm text-slate-500">ravi@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Annual Pro</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">Oct 28, 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">$199.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex gap-2">
                                    <button className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-primary-hover transition-colors shadow-sm">Renew Now</button>
                                    <button className="bg-theme-bg-card text-theme-primary-main border border-theme-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-bg-main transition-colors shadow-sm">Send Reminder</button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 3 (Highlighted) */}
                        <tr className="bg-red-50/50 hover:bg-red-50 transition-colors border-l-2 border-l-red-500">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img alt="" className="h-10 w-10 rounded-full object-cover bg-slate-100" src="https://ui-avatars.com/api/?name=Clara+Chen&background=fef2f2&color=ef4444" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-slate-900">Clara Chen</div>
                                        <div className="text-sm text-slate-500">clara@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Annual Pro</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-600">
                                <div className="flex items-center gap-1.5">
                                    Oct 26, 2024
                                    <i className="fa-solid fa-triangle-exclamation text-[10px]"></i>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">$199.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex gap-2">
                                    <button className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-primary-hover transition-colors shadow-sm">Renew Now</button>
                                    <button className="bg-theme-bg-card text-theme-primary-main border border-theme-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-bg-main transition-colors shadow-sm">Send Reminder</button>
                                </div>
                            </td>
                        </tr>
                        {/* Row 4 */}
                        <tr className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <img alt="" className="h-10 w-10 rounded-full object-cover bg-slate-100" src="https://ui-avatars.com/api/?name=Mary+Chen&background=f1f5f9&color=64748b" />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-slate-900">Mary Chen</div>
                                        <div className="text-sm text-slate-500">mary@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Annual Pro</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">Oct 28, 2024</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">$199.00</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <div className="flex gap-2">
                                    <button className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-primary-hover transition-colors shadow-sm">Renew Now</button>
                                    <button className="bg-theme-bg-card text-theme-primary-main border border-theme-border px-4 py-2 rounded-lg text-sm font-medium hover:bg-theme-bg-main transition-colors shadow-sm">Send Reminder</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between md:justify-end pt-6 relative md:flex-row flex-col gap-4">
                <span className="md:absolute md:left-1/2 md:-translate-x-1/2 text-sm text-slate-600 font-medium">Page 1 of 5</span>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-400 bg-slate-50 cursor-not-allowed flex items-center gap-2">
                        <i className="fa-solid fa-chevron-left text-xs"></i> Previous
                    </button>
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
                        Next <i className="fa-solid fa-chevron-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
