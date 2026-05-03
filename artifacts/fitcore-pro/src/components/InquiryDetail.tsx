import React from 'react';

export default function InquiryDetail({ onNavigate }: { onNavigate: (path: string) => void }) {
    return (
        <div className="flex flex-col xl:flex-row min-h-full h-auto w-full max-w-[1920px] mx-auto -mx-4 md:-mx-6 px-4 md:px-6">
            {/* Main Canvas */}
            <main className="flex-1 pr-0 xl:pr-6 pb-24 w-full">
                {/* Breadcrumb */}
                <nav className="my-6 flex items-center gap-2 text-theme-text-muted text-[11px] uppercase tracking-[0.05em] font-semibold">
                    <button onClick={() => onNavigate('inquiries')} className="hover:text-theme-primary-main transition-colors">Inquiries</button>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-theme-text-main font-bold">Arjun Sharma</span>
                </nav>

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">Arjun Sharma</h1>
                    <p className="text-theme-text-muted text-sm mt-1">Lead ID: #8829 • Social Media Inquiry</p>
                </div>

                {/* Bento Layout Content */}
                <div className="grid grid-cols-12 gap-6 w-full">
                    {/* Left Column: Inquiry Details Card */}
                    <div className="col-span-12 lg:col-span-7 space-y-6">
                        <section className="bg-theme-bg-card rounded-xl p-6 border border-theme-border shadow-sm">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-sm font-bold uppercase tracking-wider text-theme-text-muted">Inquiry Details</h2>
                                <span className="material-symbols-outlined text-theme-text-muted cursor-pointer hover:text-theme-primary-main">edit</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Full Name</label>
                                    <input className="w-full bg-transparent border-none p-0 font-semibold text-theme-text-main focus:ring-0" type="text" defaultValue="Arjun Sharma" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Phone Number</label>
                                    <input className="w-full bg-transparent border-none p-0 font-semibold text-theme-text-main focus:ring-0" type="text" defaultValue="+91 98765 43210" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Email Address</label>
                                    <input className="w-full bg-transparent border-none p-0 font-semibold text-theme-text-main focus:ring-0" type="email" defaultValue="arjun.s@email.com" />
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Primary Interest</label>
                                    <select className="w-full bg-transparent border-none p-0 cursor-pointer font-semibold text-theme-text-main focus:ring-0 appearance-none">
                                        <option value="pt">Personal Training</option>
                                        <option value="yoga">Yoga Classes</option>
                                        <option value="general">General Membership</option>
                                    </select>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Source</label>
                                    <div className="font-semibold text-theme-text-main">Social Media</div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Assigned Staff</label>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-theme-primary-light flex items-center justify-center text-[10px] text-theme-primary-text font-bold">RV</div>
                                        <span className="font-semibold text-theme-text-main">Rahul Verma</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Follow-up Date</label>
                                    <input className="w-full bg-transparent border-none p-0 font-semibold text-theme-text-main focus:ring-0" type="date" defaultValue="2024-10-25" />
                                </div>
                            </div>

                            <div className="mt-8 space-y-1">
                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Remarks</label>
                                <textarea className="w-full bg-transparent border-none p-0 font-semibold text-theme-text-main focus:ring-0 min-h-[80px] resize-none" defaultValue="Interested in weight loss and evening sessions. Mentioned past injury in left knee." />
                            </div>

                            <div className="mt-8 pt-6 border-t border-theme-border">
                                <button className="bg-theme-primary-main text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-sm">
                                    Save Changes
                                </button>
                            </div>
                        </section>
                    </div>

                    {/* Right Column within Main Area */}
                    <div className="col-span-12 lg:col-span-5 space-y-6">
                        {/* Status Update Card */}
                        <section className="bg-theme-bg-card rounded-xl p-6 border border-theme-border shadow-sm">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-theme-text-muted mb-6">Status Update</h2>
                            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 mb-6">
                                <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 border border-blue-100">
                                    Contacted
                                </div>
                                <div className="flex-1 w-full min-w-[140px]">
                                    <select defaultValue="update" className="w-full border-none bg-theme-bg-main p-2 rounded-lg text-sm font-semibold text-theme-text-main focus:ring-1 focus:ring-theme-primary-main outline-none">
                                        <option value="update" disabled>Update Status...</option>
                                        <option value="pending">Pending</option>
                                        <option value="contacted">Contacted</option>
                                        <option value="converted">Converted</option>
                                        <option value="lost">Lost</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full py-2.5 rounded-xl border-2 border-theme-primary-main text-theme-primary-main font-bold text-sm hover:bg-theme-primary-light transition-colors">
                                Update Status
                            </button>
                        </section>

                        {/* Activity Timeline */}
                        <section className="bg-theme-bg-card rounded-xl p-6 border border-theme-border shadow-sm flex flex-col h-auto">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-theme-text-muted mb-6">Activity Timeline</h2>

                            <div className="space-y-6 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-theme-border flex-1">
                                {/* Note Item */}
                                <div className="relative pl-8 z-10">
                                    <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-theme-primary-main flex items-center justify-center ring-4 ring-theme-bg-card">
                                        <span className="material-symbols-outlined text-white text-[12px]">chat_bubble</span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-sm font-bold text-theme-text-main">Rahul Verma</h4>
                                            <span className="text-[10px] text-theme-text-muted font-bold uppercase">2 hours ago</span>
                                        </div>
                                        <p className="text-sm text-theme-text-muted mt-1 leading-relaxed font-medium">Spoke to Arjun, he is coming for a trial session tomorrow.</p>
                                    </div>
                                </div>

                                {/* System Item */}
                                <div className="relative pl-8 z-10">
                                    <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-theme-border flex items-center justify-center ring-4 ring-theme-bg-card">
                                        <span className="material-symbols-outlined text-theme-text-muted text-[14px]">auto_awesome</span>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-sm font-bold text-theme-text-main">System</h4>
                                            <span className="text-[10px] text-theme-text-muted font-bold uppercase">Yesterday</span>
                                        </div>
                                        <p className="text-sm text-theme-text-muted mt-1 leading-relaxed font-medium">Inquiry created via Instagram Ad.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Add Note Area */}
                            <div className="mt-8 pt-6 border-t border-theme-border">
                                <textarea className="w-full bg-theme-bg-main border border-transparent rounded-xl p-4 text-sm focus:ring-1 focus:ring-theme-primary-main outline-none min-h-[100px] text-theme-text-main placeholder-theme-text-muted resize-none" placeholder="Add a note..."></textarea>
                                <button className="mt-3 w-full bg-theme-border text-theme-text-main font-bold text-sm py-2.5 rounded-xl hover:bg-slate-300 transition-colors">
                                    Add Note
                                </button>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Float Action / Bottom CTA Area relative to main canvas */}
                <div className="mt-8 lg:mt-12 flex justify-end">
                    <button className="flex items-center gap-3 bg-theme-primary-main text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <span className="material-symbols-outlined">person_add</span>
                        <span>Convert to Client</span>
                    </button>
                </div>
            </main>

            {/* Right SideNavBar Execution */}
            <aside className="w-full xl:w-64 shrink-0 bg-theme-bg-main border-l border-theme-border pb-12 pt-6 pl-0 xl:pl-6 hidden xl:flex flex-col min-h-full">
                <div className="bg-theme-primary-main rounded-xl p-4 text-white mb-6 mt-6 mr-6 xl:mr-0 xl:-ml-3 shadow-md shadow-theme-primary-main/20">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-full border-2 border-white/20 bg-theme-primary-hover flex items-center justify-center font-bold text-sm shrink-0">
                            QA
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Management</div>
                            <div className="text-sm font-bold">Quick Actions</div>
                        </div>
                    </div>
                </div>

                <nav className="space-y-1">
                    <a className="flex items-center justify-between group bg-theme-primary-light text-theme-primary-text border-l-2 border-theme-primary-main px-4 py-3 transition-all duration-200" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">bolt</span>
                            <span className="text-sm font-semibold">Quick Actions</span>
                        </div>
                    </a>
                    <a className="flex items-center justify-between group text-theme-text-muted hover:bg-theme-bg-card hover:text-theme-text-main px-4 py-3 rounded-lg transition-all duration-200" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">analytics</span>
                            <span className="text-sm font-medium">Inquiry Status</span>
                        </div>
                        <span className="bg-rose-100 text-rose-600 border border-rose-200 text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
                    </a>
                    <a className="flex items-center justify-between group text-theme-text-muted hover:bg-theme-bg-card hover:text-theme-text-main px-4 py-3 rounded-lg transition-all duration-200" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">person</span>
                            <span className="text-sm font-medium">Member Profile</span>
                        </div>
                    </a>
                    <a className="flex items-center justify-between group text-theme-text-muted hover:bg-theme-bg-card hover:text-theme-text-main px-4 py-3 rounded-lg transition-all duration-200" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">payments</span>
                            <span className="text-sm font-medium">Payment History</span>
                        </div>
                    </a>
                    <a className="flex items-center justify-between group text-theme-text-muted hover:bg-theme-bg-card hover:text-theme-text-main px-4 py-3 rounded-lg transition-all duration-200" href="#" onClick={(e) => e.preventDefault()}>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[20px]">star</span>
                            <span className="text-sm font-medium">Lead Score</span>
                        </div>
                        <span className="bg-rose-100 border border-rose-200 text-rose-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Hot</span>
                    </a>
                </nav>

                <div className="mt-12 pt-8 border-t border-theme-border space-y-1">
                    <a className="flex items-center gap-3 text-theme-text-muted hover:bg-theme-bg-card hover:text-theme-text-main rounded-lg px-4 py-2.5 transition-all" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[18px]">contact_support</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Support</span>
                    </a>
                    <a className="flex items-center gap-3 text-theme-text-muted hover:bg-theme-bg-card hover:text-theme-text-main rounded-lg px-4 py-2.5 transition-all" href="#" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined text-[18px]">help</span>
                        <span className="text-xs font-bold uppercase tracking-wider">Help</span>
                    </a>
                </div>
            </aside>
        </div>
    );
}
