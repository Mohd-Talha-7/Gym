import React from 'react';

export default function AddClient({ onNavigate }: { onNavigate: (path: string) => void }) {
    return (
        <div className="flex-1 overflow-x-hidden p-2 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-[1920px] mx-auto custom-scrollbar">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">Add New Client</h1>
                        <p className="text-theme-text-muted text-sm mt-1">Register a new member to the FitCore Pro ecosystem.</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-theme-text-muted">
                        <button onClick={() => onNavigate('members')} className="hover:text-theme-primary-main transition-colors">Clients</button>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        <span className="text-theme-text-main">Registration</span>
                    </div>
                </header>

                {/* Main Form */}
                <form
                    className="grid grid-cols-12 gap-6 lg:gap-8 items-start"
                    onSubmit={(e) => { e.preventDefault(); onNavigate('members'); }}
                >
                    {/* Left Panel: Form Card */}
                    <div className="col-span-12 lg:col-span-9 bg-theme-bg-card rounded-xl p-6 lg:p-8 shadow-sm border border-theme-border">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Column 1 */}
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Member ID</label>
                                    <input className="w-full bg-theme-bg-main border-none rounded-lg py-2 px-3 text-sm text-theme-text-muted opacity-60 cursor-not-allowed font-mono" readOnly type="text" value="AUTO" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Client Name <span className="text-red-500">*</span></label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="Full legal name" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Contact Number <span className="text-red-500">*</span></label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="+1 (555) 000-0000" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Alternate Contact</label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="Secondary phone" type="tel" />
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Email Address <span className="text-red-500">*</span></label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="client@example.com" type="email" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Gender <span className="text-red-500">*</span></label>
                                    <div className="flex items-center gap-4 py-2">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input defaultChecked className="text-theme-primary-main focus:ring-theme-primary-main border-theme-border bg-theme-bg-main" name="gender" type="radio" />
                                            <span className="text-sm font-medium text-theme-text-main group-hover:text-theme-primary-main transition-colors">Male</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input className="text-theme-primary-main focus:ring-theme-primary-main border-theme-border bg-theme-bg-main" name="gender" type="radio" />
                                            <span className="text-sm font-medium text-theme-text-main group-hover:text-theme-primary-main transition-colors">Female</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input className="text-theme-primary-main focus:ring-theme-primary-main border-theme-border bg-theme-bg-main" name="gender" type="radio" />
                                            <span className="text-sm font-medium text-theme-text-main group-hover:text-theme-primary-main transition-colors">Other</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Date of Birth <span className="text-red-500">*</span></label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" type="date" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Blood Group</label>
                                    <select className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main cursor-pointer">
                                        <option>Select</option>
                                        <option>A+</option><option>A-</option>
                                        <option>B+</option><option>B-</option>
                                        <option>O+</option><option>O-</option>
                                        <option>AB+</option><option>AB-</option>
                                    </select>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Client Source</label>
                                    <select className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main cursor-pointer">
                                        <option>Select Source</option>
                                        <option>Walk-in</option>
                                        <option>Social Media</option>
                                        <option>Referral</option>
                                        <option>Website</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Emergency Name</label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="Contact Person" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Emergency Phone</label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="Contact Number" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Profession</label>
                                    <input className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main" placeholder="Occupation" type="text" />
                                </div>
                            </div>

                            {/* Full Width Fields */}
                            <div className="md:col-span-3 space-y-5 mt-2 border-t border-theme-border pt-6">
                                <div>
                                    <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Residential Address</label>
                                    <textarea className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-3 px-4 text-sm transition-all text-theme-text-main resize-y min-h-[80px]" placeholder="Full street address, city, and zip code" rows={2}></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Preferred Workout Hours</label>
                                        <select className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main cursor-pointer">
                                            <option>Select slot</option>
                                            <option>Morning (06:00 - 11:00)</option>
                                            <option>Afternoon (12:00 - 16:00)</option>
                                            <option>Evening (17:00 - 22:00)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Remarks</label>
                                        <textarea className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main focus:ring-1 focus:ring-theme-primary-main rounded-lg py-2 px-3 text-sm transition-all text-theme-text-main resize-none" placeholder="Medical notes or special requests" rows={1}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="col-span-12 lg:col-span-3 space-y-6">
                        {/* Photo Section */}
                        <div className="bg-theme-bg-card rounded-xl p-6 shadow-sm border border-theme-border text-center">
                            <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-widest mb-4">Client Portrait</label>

                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <div className="w-full h-full rounded-full bg-theme-bg-main flex items-center justify-center border-4 border-theme-bg-card shadow-md overflow-hidden">
                                    <span className="material-symbols-outlined text-4xl text-theme-text-muted opacity-50">person</span>
                                </div>
                                <button type="button" className="absolute bottom-0 right-0 bg-theme-primary-main text-white p-2 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform">
                                    <span className="material-symbols-outlined text-[16px]">edit</span>
                                </button>
                            </div>

                            <div className="border-2 border-dashed border-theme-border rounded-xl p-6 hover:border-theme-primary-main hover:bg-theme-primary-light transition-all cursor-pointer group">
                                <span className="material-symbols-outlined text-3xl text-theme-text-muted group-hover:text-theme-primary-main transition-colors">camera_enhance</span>
                                <p className="text-[12px] font-bold text-theme-text-main mt-2 group-hover:text-theme-primary-main">Upload Photo</p>
                                <p className="text-[10px] text-theme-text-muted mt-1 font-medium">JPG, PNG up to 5MB</p>
                            </div>
                        </div>

                        {/* Documents Section */}
                        <div className="bg-theme-bg-card rounded-xl p-6 shadow-sm border border-theme-border">
                            <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-widest mb-4">Documentation</label>

                            <div className="border-2 border-dashed border-theme-border rounded-lg p-4 flex items-center gap-3 hover:border-theme-primary-main transition-all cursor-pointer group">
                                <span className="material-symbols-outlined text-2xl text-theme-text-muted group-hover:text-theme-primary-main">description</span>
                                <div className="text-left">
                                    <p className="text-[12px] font-bold text-theme-text-main group-hover:text-theme-primary-main">Health Form</p>
                                    <p className="text-[10px] text-theme-text-muted font-medium">PDF or Scanned Copy</p>
                                </div>
                            </div>

                            <div className="mt-4 flex items-start gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                                <span className="material-symbols-outlined text-blue-600 text-[18px]">info</span>
                                <p className="text-[10px] text-blue-800 leading-relaxed font-medium">Ensure the health form includes the physician's clearance signature for high-intensity training.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="col-span-12">
                        <div className="bg-theme-bg-card rounded-xl p-4 shadow-sm border border-theme-border flex items-center justify-between">
                            <p className="text-[11px] text-theme-text-muted ml-4 italic flex items-center gap-2 font-medium">
                                <span className="material-symbols-outlined text-[14px]">lock</span>
                                Securely encrypted registration
                            </p>
                            <div className="flex items-center gap-3">
                                <button type="button" onClick={() => onNavigate('members')} className="px-6 py-2.5 rounded-lg text-sm font-semibold text-theme-text-muted hover:bg-theme-bg-main hover:text-theme-text-main transition-colors">
                                    Cancel
                                </button>
                                <button type="submit" className="px-8 py-2.5 bg-theme-primary-main text-white rounded-lg text-sm font-bold shadow-md hover:bg-theme-primary-hover active:scale-[0.98] transition-all">
                                    Save Client
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
