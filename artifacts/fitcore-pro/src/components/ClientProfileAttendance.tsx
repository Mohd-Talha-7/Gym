import { useListMemberAttendance } from '@workspace/api-client-react';

function fmtDate(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
function fmtTime(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
}

export default function ClientProfileAttendance({ memberId }: { memberId: string }) {
    const { data: records = [] } = useListMemberAttendance(memberId);
    const totalVisits = records.length;
    const now = new Date();
    const thisMonth = records.filter((r) => {
        const d = new Date(r.checkIn);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;
    const durations = records.filter((r) => r.checkOut).map((r) => (new Date(r.checkOut!).getTime() - new Date(r.checkIn).getTime()) / 60000);
    const avgDuration = durations.length ? Math.round(durations.reduce((s, d) => s + d, 0) / durations.length) : 0;

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-xl font-black tracking-tight text-theme-text-main">Attendance Record</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Total Visits</span>
                    <span className="text-2xl font-black text-theme-primary-main leading-tight">{totalVisits}</span>
                </div>
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Visits This Month</span>
                    <span className="text-2xl font-black text-theme-text-main leading-tight">{thisMonth}</span>
                </div>
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Avg. Duration</span>
                    <span className="text-2xl font-black text-theme-text-main leading-tight">{avgDuration}m</span>
                </div>
                <div className="bg-theme-bg-card p-4 rounded-xl border border-theme-border shadow-sm">
                    <span className="text-[10px] uppercase font-bold text-theme-text-muted mb-1 block">Last Visit</span>
                    <span className="text-xl font-black text-theme-text-main leading-tight mt-1">{records[0] ? fmtDate(records[0].checkIn) : '—'}</span>
                </div>
            </div>

            <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden mt-6">
                <table className="w-full text-left text-sm border-collapse whitespace-nowrap">
                    <thead className="bg-theme-bg-main text-theme-text-muted font-bold text-[10px] uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Check-in</th>
                            <th className="px-6 py-4">Check-out</th>
                            <th className="px-6 py-4">Duration</th>
                            <th className="px-6 py-4">Source</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {records.length === 0 && (
                            <tr><td colSpan={5} className="px-6 py-12 text-center text-theme-text-muted">No attendance records.</td></tr>
                        )}
                        {records.map((r) => {
                            const dur = r.checkOut ? Math.round((new Date(r.checkOut).getTime() - new Date(r.checkIn).getTime()) / 60000) : null;
                            return (
                                <tr key={r.id} className="hover:bg-theme-bg-main transition-colors">
                                    <td className="px-6 py-4 font-bold text-theme-text-main">{fmtDate(r.checkIn)}</td>
                                    <td className="px-6 py-4 text-theme-text-muted font-medium">{fmtTime(r.checkIn)}</td>
                                    <td className="px-6 py-4 text-theme-text-muted font-medium">{r.checkOut ? fmtTime(r.checkOut) : '—'}</td>
                                    <td className="px-6 py-4 font-medium text-theme-text-main">{dur != null ? `${dur} mins` : '—'}</td>
                                    <td className="px-6 py-4 text-theme-text-muted font-medium capitalize">{r.source}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
