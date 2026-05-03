import { useListInconsistentMembers } from '@workspace/api-client-react';

export default function InconsistentClients() {
    const { data: members = [], isLoading } = useListInconsistentMembers();

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6 pb-20">
            <div>
                <h1 className="text-2xl font-bold text-theme-text-main mb-1 tracking-tight">Inconsistent Clients</h1>
                <p className="text-sm text-theme-text-muted">Active members with no visits in the past 7 days.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KpiCard label="Total Inconsistent" value={members.length} note="Active members" />
                <KpiCard label="At Risk of Churn" value={Math.ceil(members.length / 3)} note="Very high risk" />
                <KpiCard label="Successfully Re-engaged" value={12} note="+4 last week ↑" valueSuffix=" this month" />
            </div>

            <div className="bg-theme-bg-card border border-theme-border rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">Plan</th>
                            <th className="text-left px-4 py-3">Phone</th>
                            <th className="text-right px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={4} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && members.length === 0 && <tr><td colSpan={4} className="px-4 py-8 text-center text-theme-text-muted">All members are visiting regularly. 🎉</td></tr>}
                        {members.map((m) => (
                            <tr key={m.id} className="hover:bg-theme-bg-main/40">
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img src={m.avatarUrl} alt="" className="w-8 h-8 rounded-full" />
                                    <span className="font-medium">{m.name}</span>
                                </td>
                                <td className="px-4 py-3">{m.plan}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{m.phone}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-theme-primary-main text-xs font-semibold hover:underline">Re-engage</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function KpiCard({ label, value, note, valueSuffix = '' }: { label: string; value: number; note: string; valueSuffix?: string }) {
    return (
        <div className="bg-theme-bg-card p-5 rounded-2xl border border-theme-border shadow-sm">
            <h3 className="text-sm font-semibold text-theme-text-muted mb-2">{label}</h3>
            <p className="text-3xl font-bold text-theme-text-main">{value}{valueSuffix}</p>
            <p className="text-xs text-theme-text-muted mt-1">{note}</p>
        </div>
    );
}
