import React from 'react';

export default function BirthdaysAnniversaries() {
    return (
        <div className="p-4 md:p-8 min-h-screen w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h1 className="text-2xl font-black text-on-surface tracking-tight">Birthdays &amp; Anniversaries</h1>
                <button className="flex items-center gap-2 bg-theme-primary-main text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-theme-primary-hover transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Export CSV
                </button>
            </div>

            {/* Filter Bar */}
            <div className="bg-surface-container-lowest rounded-xl p-4 mb-6 flex flex-wrap gap-4 items-end shadow-sm border border-theme-border">
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Date Range</label>
                    <div className="relative">
                        <select className="w-full bg-surface-container-low border-none rounded-lg text-sm px-4 py-2.5 focus:ring-2 focus:ring-theme-primary-main/20 appearance-none">
                            <option>Next 7 Days</option>
                            <option>Today Only</option>
                            <option>Next 30 Days</option>
                            <option>Custom Range</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-slate-400 pointer-events-none">calendar_today</span>
                    </div>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">Type Filter</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg text-sm px-4 py-2.5 focus:ring-2 focus:ring-theme-primary-main/20">
                        <option>Both (All Occasions)</option>
                        <option>Birthdays</option>
                        <option>Anniversaries</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-6 py-2.5 bg-surface-container-high text-on-surface font-semibold text-sm rounded-lg hover:bg-slate-200 transition-colors">Reset</button>
                    <button className="px-6 py-2.5 bg-theme-primary-light text-theme-primary-main font-bold text-sm rounded-lg hover:brightness-95 transition-colors border border-theme-primary-main/20">Apply Filters</button>
                </div>
            </div>

            {/* Today's Highlights Banner */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    </div>
                    <div>
                        <h3 className="text-emerald-900 font-bold text-lg leading-none mb-1">Today's Celebrations</h3>
                        <p className="text-emerald-700 text-sm">You have <span className="font-bold">3 Birthdays</span> and <span className="font-bold">2 Anniversaries</span> today.</p>
                    </div>
                </div>
                <button className="bg-theme-primary-main text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-theme-primary-hover transition-all flex items-center gap-2 whitespace-nowrap shrink-0">
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    Quick-Send All
                </button>
            </div>

            {/* Tables Layout (Bento Grid Style) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Upcoming Birthdays */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col border border-theme-border">
                    <div className="p-6 border-b border-theme-border flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-theme-primary-main">cake</span>
                            <h2 className="font-bold text-on-surface">Upcoming Birthdays</h2>
                        </div>
                        <button className="text-xs font-bold text-theme-primary-main hover:underline">Bulk Send</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-low">
                                <tr>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Member</th>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Birthday</th>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Turning</th>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-theme-border">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <img alt="Avatar" className="w-8 h-8 rounded-full border border-white" src="https://ui-avatars.com/api/?name=Liam+Peterson&background=f1f5f9&color=64748b" />
                                            <div>
                                                <div className="text-xs font-bold text-theme-text-main">Liam Peterson</div>
                                                <div className="text-[10px] text-slate-400">+1 234 567 890</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="text-xs font-medium text-theme-text-main">May 24</div>
                                        <div className="text-[10px] text-emerald-500 font-bold">Tomorrow</div>
                                    </td>
                                    <td className="px-4 py-4 text-xs font-bold text-slate-600">28</td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">cake</span>
                                            </button>
                                            <button className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">sms</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <img alt="Avatar" className="w-8 h-8 rounded-full border border-white" src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=f1f5f9&color=64748b" />
                                            <div>
                                                <div className="text-xs font-bold text-theme-text-main">Sarah Jenkins</div>
                                                <div className="text-[10px] text-slate-400">+1 234 567 891</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="text-xs font-medium text-theme-text-main">May 26</div>
                                        <div className="text-[10px] text-slate-400">In 3 days</div>
                                    </td>
                                    <td className="px-4 py-4 text-xs font-bold text-slate-600">32</td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">cake</span>
                                            </button>
                                            <button className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">sms</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Upcoming Anniversaries */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm flex flex-col border border-theme-border">
                    <div className="p-6 border-b border-theme-border flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-theme-primary-main">celebration</span>
                            <h2 className="font-bold text-on-surface">Upcoming Anniversaries</h2>
                        </div>
                        <button className="text-xs font-bold text-theme-primary-main hover:underline">Bulk Send</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-surface-container-low">
                                <tr>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Member</th>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Date</th>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Years</th>
                                    <th className="px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-theme-border">
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <img alt="Avatar" className="w-8 h-8 rounded-full border border-white" src="https://ui-avatars.com/api/?name=Marcus+Thorne&background=f1f5f9&color=64748b" />
                                            <div>
                                                <div className="text-xs font-bold text-theme-text-main">Marcus Thorne</div>
                                                <div className="text-[10px] text-slate-400">+1 234 567 895</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="text-xs font-medium text-theme-text-main">May 23</div>
                                        <div className="text-[10px] text-theme-primary-main font-black">Today</div>
                                    </td>
                                    <td className="px-4 py-4 text-xs font-bold text-slate-600">3</td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">chat</span>
                                            </button>
                                            <button className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">sms</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-3">
                                            <img alt="Avatar" className="w-8 h-8 rounded-full border border-white" src="https://ui-avatars.com/api/?name=Elena+Rodriguez&background=f1f5f9&color=64748b" />
                                            <div>
                                                <div className="text-xs font-bold text-theme-text-main">Elena Rodriguez</div>
                                                <div className="text-[10px] text-slate-400">+1 234 567 899</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="text-xs font-medium text-theme-text-main">May 25</div>
                                        <div className="text-[10px] text-slate-400">In 2 days</div>
                                    </td>
                                    <td className="px-4 py-4 text-xs font-bold text-slate-600">1</td>
                                    <td className="px-4 py-4">
                                        <div className="flex gap-2">
                                            <button className="p-1.5 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">chat</span>
                                            </button>
                                            <button className="p-1.5 bg-slate-50 text-slate-400 rounded-lg hover:bg-slate-100 transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">sms</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Template Preview Section */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-theme-border">
                <div className="p-6 border-b border-theme-border flex justify-between items-center bg-slate-50/50 text-theme-text-main">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant">border_color</span>
                        <h2 className="font-bold text-theme-text-main">Editable Greeting Template</h2>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-white border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-50">Select Template</button>
                        <button className="px-3 py-1.5 bg-white border border-slate-200 text-xs font-bold rounded-lg hover:bg-slate-50">Save changes</button>
                    </div>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <div className="p-6 bg-white border border-dashed border-slate-200 rounded-xl relative">
                            <span className="absolute -top-3 left-4 px-2 bg-white text-[10px] font-black uppercase text-slate-400">Preview</span>
                            <p className="text-sm leading-relaxed text-theme-text-main">
                                Happy Birthday <span className="inline-flex items-center bg-theme-primary-light text-theme-primary-main px-2 py-0.5 rounded text-[11px] font-bold mx-1">{'{name}'}</span>! Wishing you a great day from the team at FitCore Gym. Enjoy your special day!
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="text-[10px] font-bold text-slate-400 uppercase w-full">Quick Tags:</span>
                            <button className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded hover:bg-slate-200">{'{name}'}</button>
                            <button className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded hover:bg-slate-200">{'{age}'}</button>
                            <button className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded hover:bg-slate-200">{'{gym_name}'}</button>
                            <button className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded hover:bg-slate-200">{'{years}'}</button>
                        </div>
                    </div>
                    <div className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden border border-theme-border">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined text-[120px]">mark_email_unread</span>
                        </div>
                        <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Notification Logic</h4>
                        <ul className="space-y-3 relative z-10">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span>
                                <span className="text-xs text-on-surface-variant leading-tight">Sends automatically at 9:00 AM on the day of occasion.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span>
                                <span className="text-xs text-on-surface-variant leading-tight">Fallback to SMS if WhatsApp is not delivered in 1 hour.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-theme-primary-main text-[18px]">toggle_on</span>
                                <span className="text-xs font-bold text-on-surface leading-tight">Smart Personalization active.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
