import React from 'react';

export default function ClientProfileOverview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Personal Details Card */}
            <div className="lg:col-span-5 bg-theme-bg-card rounded-xl p-6 shadow-sm border border-theme-border relative">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold tracking-tight text-theme-text-main">Personal Details</h2>
                    <button className="material-symbols-outlined text-theme-text-muted p-2 hover:bg-theme-bg-main hover:text-theme-primary-main rounded-full transition-colors">edit</button>
                </div>

                <div className="space-y-0 text-sm">
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Date of Birth</span>
                        <span className="font-bold text-theme-text-main">May 14, 1992</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Gender</span>
                        <span className="font-bold text-theme-text-main">Male</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Blood Group</span>
                        <span className="font-black text-red-500">O Positive</span>
                    </div>
                    <div className="flex flex-col gap-2 py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Address</span>
                        <span className="font-bold text-theme-text-main leading-relaxed">
                            #42, Skyview Residency,<br />
                            Sector 12, Bengaluru - 560001
                        </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Profession</span>
                        <span className="font-bold text-theme-text-main text-right break-words">Senior Software Architect</span>
                    </div>
                    <div className="flex flex-col gap-2 py-3">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Emergency Contact</span>
                        <div className="font-bold text-theme-text-main bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">
                            Priya Kumar<br />
                            <span className="text-blue-600">+91 98888 77777</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column Group */}
            <div className="lg:col-span-7 space-y-8">
                {/* Membership Details Card */}
                <div className="bg-theme-bg-card rounded-xl p-6 shadow-sm border border-theme-border">
                    <h2 className="text-lg font-bold tracking-tight text-theme-text-main mb-6">Membership Details</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Current Package</p>
                            <p className="text-sm font-black text-theme-primary-main leading-tight">Annual Pro Elite</p>
                        </div>
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Joining Date</p>
                            <p className="text-sm font-bold text-theme-text-main">Oct 26, 2023</p>
                        </div>
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Expiry Date</p>
                            <p className="text-sm font-bold text-theme-text-main">Oct 26, 2026</p>
                        </div>
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Last Renewal</p>
                            <p className="text-sm font-bold text-theme-text-main">Oct 20, 2024</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-theme-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Total Bills Paid</span>
                        </div>
                        <span className="text-2xl font-black text-theme-text-main">$48,500.00</span>
                    </div>
                </div>

                {/* Reward Points History */}
                <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
                    <div className="p-6 pb-4">
                        <h2 className="text-lg font-bold tracking-tight text-theme-text-main">Reward Points History</h2>
                    </div>

                    <table className="w-full text-left text-sm border-collapse">
                        <thead className="bg-theme-bg-main text-theme-text-muted font-bold text-[10px] uppercase tracking-wider border-y border-theme-border">
                            <tr>
                                <th className="px-6 py-3">Date</th>
                                <th className="px-6 py-3">Activity</th>
                                <th className="px-6 py-3 text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-theme-border">
                            <tr className="hover:bg-theme-bg-main transition-colors">
                                <td className="px-6 py-4 text-theme-text-muted font-medium">Oct 20, 2024</td>
                                <td className="px-6 py-4 font-bold text-theme-text-main">Membership Renewal</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="font-black text-green-600 bg-green-50 px-2 py-1 rounded-md">+500</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-theme-bg-main transition-colors">
                                <td className="px-6 py-4 text-theme-text-muted font-medium">Sep 15, 2024</td>
                                <td className="px-6 py-4 font-bold text-theme-text-main">Referral Credit</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="font-black text-green-600 bg-green-50 px-2 py-1 rounded-md">+750</span>
                                </td>
                            </tr>
                            <tr className="hover:bg-theme-bg-main transition-colors">
                                <td className="px-6 py-4 text-theme-text-muted font-medium">Aug 02, 2024</td>
                                <td className="px-6 py-4 font-bold text-theme-text-main">Supplement Purchase</td>
                                <td className="px-6 py-4 text-right">
                                    <span className="font-black text-green-600 bg-green-50 px-2 py-1 rounded-md">+100</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
