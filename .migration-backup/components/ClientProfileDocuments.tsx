import React from 'react';

export default function ClientProfileDocuments() {
    return (
        <div className="space-y-6 pb-24">
            {/* Documents Header Row */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold tracking-tight text-theme-text-main">Documents</h3>
                <button className="flex items-center bg-brand-magenta text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-brand-magenta/90 transition-all active:scale-95">
                    <span className="material-symbols-outlined mr-2">add</span> + Upload Document
                </button>
            </div>

            {/* Documents Bento-style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Card 1: PAR-Q Health Form */}
                <div className="bg-theme-bg-card rounded-xl p-5 border border-theme-border flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mr-4">
                                <span className="material-symbols-outlined text-3xl">description</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-theme-text-main leading-tight">PAR-Q Health Form</h4>
                                <p className="text-xs text-theme-text-muted font-medium mt-0.5">Type: PAR-Q</p>
                            </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-extrabold uppercase tracking-widest">Signed</span>
                    </div>

                    <div className="h-16 w-full rounded-lg border border-theme-border flex items-center justify-center mb-4 relative overflow-hidden"
                        style={{ background: 'repeating-linear-gradient(45deg, #f1f4f9, #f1f4f9 10px, #ffffff 10px, #ffffff 20px)' }}>
                        <span className="text-[10px] text-theme-text-muted/40 absolute top-2 left-2 uppercase tracking-tighter font-bold">Signature Preview</span>
                        <span className="font-serif italic text-2xl text-theme-text-main/60 select-none">Rajiv Kumar</span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-theme-border">
                        <div className="text-[11px] text-theme-text-muted">
                            Uploaded: <span className="font-semibold text-theme-text-main">12 Oct 2024</span> by Ravi Sharma
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-primary-main transition-colors">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-text-muted transition-colors">
                                <span className="material-symbols-outlined text-xl">download</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 2: Membership Agreement */}
                <div className="bg-theme-bg-card rounded-xl p-5 border border-theme-border flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mr-4">
                                <span className="material-symbols-outlined text-3xl">contract</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-theme-text-main leading-tight">Membership Agreement</h4>
                                <p className="text-xs text-theme-text-muted font-medium mt-0.5">Type: Membership Agreement</p>
                            </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] font-extrabold uppercase tracking-widest">Pending</span>
                    </div>

                    <div className="mb-4">
                        <button className="w-full py-2.5 rounded-xl border-2 border-dashed border-theme-primary-main/30 text-theme-primary-main text-xs font-bold hover:bg-theme-primary-main/5 transition-all flex items-center justify-center">
                            <span className="material-symbols-outlined mr-2 text-sm">draw</span> Request Digital Signature
                        </button>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-theme-border">
                        <div className="text-[11px] text-theme-text-muted">
                            Uploaded: <span className="font-semibold text-theme-text-main">14 Oct 2024</span> by Ravi Sharma
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-primary-main transition-colors">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-text-muted transition-colors">
                                <span className="material-symbols-outlined text-xl">download</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 3: ID Proof */}
                <div className="bg-theme-bg-card rounded-xl p-5 border border-theme-border flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mr-4">
                                <span className="material-symbols-outlined text-3xl">badge</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-theme-text-main leading-tight">ID Proof (Aadhar)</h4>
                                <p className="text-xs text-theme-text-muted font-medium mt-0.5">Type: ID Proof</p>
                            </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-slate-200 text-slate-600 text-[10px] font-extrabold uppercase tracking-widest">Not Required</span>
                    </div>

                    <div className="h-16 flex items-center justify-center mb-4">
                        <div className="flex -space-x-4">
                            <div className="w-24 h-12 bg-theme-bg-main rounded-md border border-theme-border/50 flex items-center justify-center rotate-[-3deg] shadow-sm">
                                <div className="w-1/3 h-1/2 bg-theme-border/40 rounded mr-1"></div>
                                <div className="w-1/2 space-y-1">
                                    <div className="w-full h-1 bg-theme-border/40 rounded"></div>
                                    <div className="w-3/4 h-1 bg-theme-border/40 rounded"></div>
                                </div>
                            </div>
                            <div className="w-24 h-12 bg-white rounded-md border border-theme-border/50 flex items-center justify-center rotate-[2deg] shadow-sm">
                                <div className="w-1/2 space-y-1">
                                    <div className="w-full h-1 bg-slate-100 rounded"></div>
                                    <div className="w-full h-1 bg-slate-100 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-theme-border">
                        <div className="text-[11px] text-theme-text-muted">
                            Uploaded: <span className="font-semibold text-theme-text-main">12 Oct 2024</span> by Ravi Sharma
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-primary-main transition-colors">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-text-muted transition-colors">
                                <span className="material-symbols-outlined text-xl">download</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card 4: Physiotherapy Report */}
                <div className="bg-theme-bg-card rounded-xl p-5 border border-theme-border flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mr-4">
                                <span className="material-symbols-outlined text-3xl">medical_services</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-theme-text-main leading-tight">Physiotherapy Report</h4>
                                <p className="text-xs text-theme-text-muted font-medium mt-0.5">Type: Health Assessment</p>
                            </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-extrabold uppercase tracking-widest">Signed</span>
                    </div>

                    <div className="bg-theme-bg-main p-3 rounded-lg mb-4">
                        <p className="text-[11px] leading-tight text-theme-text-muted italic">
                            "Patient shows significant improvement in lumbar flexibility. Recommend continued core stability focus in workout regime."
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-theme-border">
                        <div className="text-[11px] text-theme-text-muted">
                            Uploaded: <span className="font-semibold text-theme-text-main">20 Oct 2024</span> by Coach Sarah
                        </div>
                        <div className="flex items-center space-x-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-primary-main transition-colors">
                                <span className="material-symbols-outlined text-xl">visibility</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-theme-bg-main text-theme-text-muted transition-colors">
                                <span className="material-symbols-outlined text-xl">download</span>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 text-red-500 transition-colors">
                                <span className="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination/Footer Stats */}
            <div className="mt-8 flex items-center justify-between text-xs text-theme-text-muted font-medium">
                <p>Showing 4 of 12 documents</p>
                <div className="flex items-center space-x-2">
                    <button className="w-8 h-8 border border-theme-border rounded flex items-center justify-center hover:bg-theme-bg-main transition-all"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                    <button className="w-8 h-8 bg-brand-magenta text-white rounded flex items-center justify-center font-bold">1</button>
                    <button className="w-8 h-8 border border-theme-border rounded flex items-center justify-center hover:bg-theme-bg-main transition-all">2</button>
                    <button className="w-8 h-8 border border-theme-border rounded flex items-center justify-center hover:bg-theme-bg-main transition-all"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                </div>
            </div>
        </div>
    );
}
