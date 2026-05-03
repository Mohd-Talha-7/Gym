export default function InconsistentClients() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-20">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 mb-1 tracking-tight font-headline">Inconsistent Clients</h1>
                <p className="text-sm text-slate-500">Identify and re-engage members with dropping attendance.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center min-h-[110px]">
                    <h3 className="text-sm font-semibold text-slate-600 mb-2">Total Inconsistent</h3>
                    <p className="text-3xl font-bold text-slate-900">3</p>
                    <p className="text-xs text-slate-500 mt-1">Active members</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center min-h-[110px]">
                    <h3 className="text-sm font-semibold text-slate-600 mb-2">At Risk of Churn</h3>
                    <p className="text-3xl font-bold text-slate-900">1</p>
                    <p className="text-xs text-slate-500 mt-1">Very high risk</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center min-h-[110px]">
                    <h3 className="text-sm font-semibold text-slate-600 mb-2">Successfully Re-engaged</h3>
                    <p className="text-3xl font-bold text-slate-900">12 this month</p>
                    <p className="text-xs text-emerald-500 font-semibold mt-1">+4 last week ↑</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Table Area */}
                <div className="flex-1">
                    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden flex flex-col space-y-4 p-6">
                        <div className="grid grid-cols-12 gap-4 pb-3 border-b border-slate-100 px-2 lg:px-4 text-xs font-semibold text-slate-700">
                            <div className="col-span-4 lg:col-span-3">Member info</div>
                            <div className="col-span-3 lg:col-span-3 text-center">Attendance Trend</div>
                            <div className="col-span-2 text-center">Last Visit</div>
                            <div className="col-span-2 text-center">Risk Level</div>
                            <div className="col-span-3 lg:col-span-2 text-right">Quick Actions</div>
                        </div>

                        {/* Row 1 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-white p-4 py-2 rounded-xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-0.5">
                            <div className="col-span-4 lg:col-span-3 flex items-center gap-3">
                                <img alt="" className="h-10 w-10 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=fdf4ff&color=c026d3" />
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Sarah Johnson</div>
                                    <div className="text-xs text-slate-500">Gold Member</div>
                                </div>
                            </div>
                            <div className="col-span-3 lg:col-span-3 flex justify-center items-center">
                                <svg className="w-24 h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L30 15L55 12L80 25" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="5" cy="5" r="3" fill="#818cf8" />
                                    <circle cx="30" cy="15" r="3" fill="#818cf8" />
                                    <circle cx="55" cy="12" r="3" fill="#818cf8" />
                                    <circle cx="80" cy="25" r="3" fill="#818cf8" />
                                    <path d="M85 20L92 25L85 30" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="col-span-2 text-center text-sm font-medium text-slate-700">12 days ago</div>
                            <div className="col-span-2 text-center">
                                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#fef2f2] text-[#ef4444]">High Risk</span>
                            </div>
                            <div className="col-span-3 lg:col-span-2 flex flex-col gap-1.5 justify-end items-end">
                                <button className="w-full flex justify-center items-center gap-1.5 bg-theme-primary-main text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-theme-primary-hover transition">
                                    <span className="material-symbols-outlined text-[14px]">chat</span> Send WhatsApp
                                </button>
                                <button className="w-full flex justify-center items-center gap-1.5 bg-theme-bg-card border border-theme-primary-main text-theme-primary-main px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-theme-primary-light transition">
                                    <span className="material-symbols-outlined text-[14px]">call</span> Log Call
                                </button>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-white p-4 py-2 rounded-xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-0.5">
                            <div className="col-span-4 lg:col-span-3 flex items-center gap-3">
                                <img alt="" className="h-10 w-10 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Mike+Chen&background=f3f4f6&color=374151" />
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Mike Chen</div>
                                    <div className="text-xs text-slate-500">Silver Member</div>
                                </div>
                            </div>
                            <div className="col-span-3 lg:col-span-3 flex justify-center items-center">
                                <svg className="w-24 h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8L30 8L55 18L80 22" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="5" cy="8" r="3" fill="#818cf8" />
                                    <circle cx="30" cy="8" r="3" fill="#818cf8" />
                                    <circle cx="55" cy="18" r="3" fill="#818cf8" />
                                    <circle cx="80" cy="22" r="3" fill="#818cf8" />
                                    <path d="M85 17L92 22L85 27" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="col-span-2 text-center text-sm font-medium text-slate-700">9 days ago</div>
                            <div className="col-span-2 text-center">
                                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#fffbeb] text-[#d97706]">Medium Risk</span>
                            </div>
                            <div className="col-span-3 lg:col-span-2 flex flex-col gap-1.5 justify-end items-end">
                                <button className="w-full flex justify-center items-center gap-1.5 bg-theme-primary-main text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-theme-primary-hover transition">
                                    <span className="material-symbols-outlined text-[14px]">chat</span> Send WhatsApp
                                </button>
                                <button className="w-full flex justify-center items-center gap-1.5 bg-theme-bg-card border border-theme-primary-main text-theme-primary-main px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-theme-primary-light transition">
                                    <span className="material-symbols-outlined text-[14px]">call</span> Log Call
                                </button>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-12 gap-4 items-center bg-white p-4 py-2 rounded-xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-0.5">
                            <div className="col-span-4 lg:col-span-3 flex items-center gap-3">
                                <img alt="" className="h-10 w-10 rounded-full object-cover" src="https://ui-avatars.com/api/?name=Emily+Davis&background=fffbeb&color=d97706" />
                                <div>
                                    <div className="text-sm font-bold text-slate-900">Emily Davis</div>
                                    <div className="text-xs text-slate-500">Basic Member</div>
                                </div>
                            </div>
                            <div className="col-span-3 lg:col-span-3 flex justify-center items-center">
                                <svg className="w-24 h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 5L30 15L55 15L80 28" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="5" cy="5" r="3" fill="#818cf8" />
                                    <circle cx="30" cy="15" r="3" fill="#818cf8" />
                                    <circle cx="55" cy="15" r="3" fill="#818cf8" />
                                    <circle cx="80" cy="28" r="3" fill="#818cf8" />
                                    <path d="M85 23L92 28L85 33" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="col-span-2 text-center text-sm font-medium text-slate-700">14 days ago</div>
                            <div className="col-span-2 text-center">
                                <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-[#eff6ff] text-[#3b82f6]">Low Risk</span>
                            </div>
                            <div className="col-span-3 lg:col-span-2 flex flex-col gap-1.5 justify-end items-end">
                                <button className="w-full flex justify-center items-center gap-1.5 bg-theme-primary-main text-white px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-theme-primary-hover transition">
                                    <span className="material-symbols-outlined text-[14px]">chat</span> Send WhatsApp
                                </button>
                                <button className="w-full flex justify-center items-center gap-1.5 bg-theme-bg-card border border-theme-primary-main text-theme-primary-main px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-theme-primary-light transition">
                                    <span className="material-symbols-outlined text-[14px]">call</span> Log Call
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Sidebar - Tips */}
                <div className="w-full lg:w-72 bg-[#f5f3ff] rounded-2xl p-6 border border-[#ede9fe] shadow-sm">
                    <h3 className="text-sm font-bold text-slate-800 mb-4">Re-engagement Tips</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-theme-primary-main shrink-0"></div>
                            <span className="text-[13px] leading-relaxed text-slate-700">Offer a complimentary personal training session.</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-theme-primary-main shrink-0"></div>
                            <span className="text-[13px] leading-relaxed text-slate-700">Send personalized class invitations based on past attendance.</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-theme-primary-main shrink-0"></div>
                            <span className="text-[13px] leading-relaxed text-slate-700">Suggest a fitness challenge or goal-setting meeting.</span>
                        </li>
                        <li className="flex gap-2">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-theme-primary-main shrink-0"></div>
                            <span className="text-[13px] leading-relaxed text-slate-700">Check in with a personalized call or message.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
