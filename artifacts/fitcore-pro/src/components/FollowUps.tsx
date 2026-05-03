import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListFollowUps,
    useUpdateFollowUp,
    useDeleteFollowUp,
    getListFollowUpsQueryKey,
} from '@workspace/api-client-react';
import { formatDate } from '@/lib/format';

export default function FollowUps() {
    const qc = useQueryClient();
    const { data: followUps = [], isLoading } = useListFollowUps();
    const updateMut = useUpdateFollowUp({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListFollowUpsQueryKey() }) },
    });
    const deleteMut = useDeleteFollowUp({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListFollowUpsQueryKey() }) },
    });

    const stats = useMemo(() => {
        const today = new Date(); today.setHours(23, 59, 59, 999);
        const startOfToday = new Date(); startOfToday.setHours(0, 0, 0, 0);
        const pendingToday = followUps.filter((f) => f.status === 'pending' && new Date(f.scheduledFor) >= startOfToday && new Date(f.scheduledFor) <= today).length;
        const high = followUps.filter((f) => f.priority === 'High' && f.status === 'pending').length;
        const overdue = followUps.filter((f) => f.status === 'pending' && new Date(f.scheduledFor) < startOfToday).length;
        const completed = followUps.filter((f) => f.status === 'completed').length;
        return { pendingToday, high, overdue, completed };
    }, [followUps]);

    return (
        <div className="space-y-6 w-full max-w-7xl mx-auto pb-20">
            <div className="flex items-end justify-between">
                <div>
                    <h2 className="text-[1.5rem] font-bold tracking-tight text-theme-text-main">Follow-ups</h2>
                    <p className="text-[0.6875rem] text-theme-text-muted uppercase tracking-[0.05em] font-medium">
                        Manage your active member and lead communications
                    </p>
                </div>
                <button className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    New Follow-up
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard label="Pending Today" value={stats.pendingToday} accent="bg-blue-100 text-blue-700" />
                <StatCard label="High Priority" value={stats.high} accent="bg-rose-100 text-rose-700" />
                <StatCard label="Overdue" value={stats.overdue} accent="bg-amber-100 text-amber-700" />
                <StatCard label="Completed" value={stats.completed} accent="bg-emerald-100 text-emerald-700" />
            </div>

            <div className="bg-theme-bg-card rounded-2xl shadow-sm border border-theme-border overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">Type</th>
                            <th className="text-left px-4 py-3">Priority</th>
                            <th className="text-left px-4 py-3">Scheduled</th>
                            <th className="text-left px-4 py-3">Status</th>
                            <th className="text-left px-4 py-3">Last Comment</th>
                            <th className="text-right px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && followUps.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">No follow-ups.</td></tr>}
                        {followUps.map((f) => (
                            <tr key={f.id} className="hover:bg-theme-bg-main/40">
                                <td className="px-4 py-3">
                                    <div className="font-medium">{f.memberName}</div>
                                    <div className="text-xs text-theme-text-muted">{f.phone}</div>
                                </td>
                                <td className="px-4 py-3">{f.type}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${f.priority === 'High' ? 'bg-rose-50 text-rose-700' : f.priority === 'Medium' ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                        {f.priority}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(f.scheduledFor)}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${f.status === 'completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-700'}`}>
                                        {f.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted truncate max-w-xs">{f.lastComment}</td>
                                <td className="px-4 py-3 text-right space-x-2">
                                    {f.status !== 'completed' && (
                                        <button
                                            onClick={() => updateMut.mutate({ id: f.id, data: { status: 'completed' } })}
                                            className="text-emerald-600 text-xs font-semibold hover:underline"
                                        >
                                            Mark Done
                                        </button>
                                    )}
                                    <button
                                        onClick={() => deleteMut.mutate({ id: f.id })}
                                        className="text-rose-600 text-xs font-semibold hover:underline"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function StatCard({ label, value, accent }: { label: string; value: number; accent: string }) {
    return (
        <div className="bg-theme-bg-card p-5 rounded-xl border border-theme-border shadow-sm">
            <div className={`inline-flex p-2 rounded-lg ${accent} mb-2`}>
                <span className="material-symbols-outlined text-[20px]">flag</span>
            </div>
            <p className="text-[0.6875rem] font-medium text-theme-text-muted uppercase tracking-wider">{label}</p>
            <p className="text-2xl font-bold text-theme-text-main">{String(value).padStart(2, '0')}</p>
        </div>
    );
}
