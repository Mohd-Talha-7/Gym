import { useGetMember, useListMemberBills } from '@workspace/api-client-react';

function fmtDate(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function fmtINR(paise: number) {
    return `₹${(paise / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function ClientProfileOverview({ memberId }: { memberId: string }) {
    const { data: member } = useGetMember(memberId);
    const { data: bills = [] } = useListMemberBills(memberId);
    const totalPaid = bills.reduce((s, b) => s + b.paid, 0);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-theme-bg-card rounded-xl p-6 shadow-sm border border-theme-border relative">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-bold tracking-tight text-theme-text-main">Personal Details</h2>
                </div>
                <div className="space-y-0 text-sm">
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Date of Birth</span>
                        <span className="font-bold text-theme-text-main">{fmtDate(member?.dob)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Gender</span>
                        <span className="font-bold text-theme-text-main capitalize">{member?.gender ?? '—'}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Blood Group</span>
                        <span className="font-black text-red-500">{member?.bloodGroup ?? '—'}</span>
                    </div>
                    <div className="flex flex-col gap-2 py-3 border-b border-theme-border">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Address</span>
                        <span className="font-bold text-theme-text-main leading-relaxed whitespace-pre-line">{member?.address ?? '—'}</span>
                    </div>
                    <div className="flex flex-col gap-2 py-3">
                        <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Emergency Contact</span>
                        <div className="font-bold text-theme-text-main bg-blue-50/50 p-3 rounded-lg border border-blue-100/50 whitespace-pre-line">{member?.emergencyContact ?? '—'}</div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
                <div className="bg-theme-bg-card rounded-xl p-6 shadow-sm border border-theme-border">
                    <h2 className="text-lg font-bold tracking-tight text-theme-text-main mb-6">Membership Details</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Current Package</p>
                            <p className="text-sm font-black text-theme-primary-main leading-tight">{member?.plan ?? '—'}</p>
                        </div>
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Joining Date</p>
                            <p className="text-sm font-bold text-theme-text-main">{fmtDate(member?.joinDate)}</p>
                        </div>
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Expiry Date</p>
                            <p className="text-sm font-bold text-theme-text-main">{fmtDate(member?.expiryDate)}</p>
                        </div>
                        <div className="bg-theme-bg-main p-4 xl:p-3 rounded-xl border border-theme-border/50 flex flex-col justify-center">
                            <p className="text-[10px] uppercase font-bold text-theme-text-muted mb-1">Balance Due</p>
                            <p className={`text-sm font-bold ${(member?.balanceDue ?? 0) > 0 ? 'text-amber-600' : 'text-theme-text-main'}`}>{fmtINR(member?.balanceDue ?? 0)}</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-theme-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <span className="material-symbols-outlined">payments</span>
                            </div>
                            <span className="text-xs uppercase tracking-wider font-bold text-theme-text-muted">Total Bills Paid</span>
                        </div>
                        <span className="text-2xl font-black text-theme-text-main">{fmtINR(totalPaid)}</span>
                    </div>
                </div>

                {member?.medicalHistory && (
                    <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border p-6">
                        <h2 className="text-lg font-bold tracking-tight text-theme-text-main mb-3">Medical History</h2>
                        <p className="text-sm text-theme-text-muted leading-relaxed whitespace-pre-line">{member.medicalHistory}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
