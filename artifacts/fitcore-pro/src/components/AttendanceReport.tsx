import { useListAttendance } from '@workspace/api-client-react';
import { formatDate, formatTime } from '@/lib/format';

export default function AttendanceReport() {
    const { data: rows = [], isLoading } = useListAttendance();

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div>
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Attendance Report</h1>
                <p className="text-sm text-theme-text-muted">Recent member check-ins.</p>
            </div>

            <div className="bg-theme-bg-card rounded-2xl border border-theme-border overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">Date</th>
                            <th className="text-left px-4 py-3">Check-in</th>
                            <th className="text-left px-4 py-3">Check-out</th>
                            <th className="text-left px-4 py-3">Source</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={5} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && rows.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-theme-text-muted">No attendance records.</td></tr>}
                        {rows.map((r) => (
                            <tr key={r.id}>
                                <td className="px-4 py-3 flex items-center gap-3">
                                    {r.memberAvatar && <img src={r.memberAvatar} alt="" className="w-7 h-7 rounded-full" />}
                                    <span className="font-medium">{r.memberName}</span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(r.checkIn)}</td>
                                <td className="px-4 py-3">{formatTime(r.checkIn)}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{r.checkOut ? formatTime(r.checkOut) : '—'}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{r.source}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
