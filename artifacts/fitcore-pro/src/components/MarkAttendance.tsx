import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMembers,
    useMarkAttendance,
    getListAttendanceQueryKey,
} from '@workspace/api-client-react';
import { formatTime } from '@/lib/format';

export default function MarkAttendance() {
    const qc = useQueryClient();
    const { data: members = [] } = useListMembers();
    const mark = useMarkAttendance({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListAttendanceQueryKey() }) },
    });
    const [search, setSearch] = useState('');
    const [recent, setRecent] = useState<Array<{ name: string; at: Date }>>([]);

    const filtered = members
        .filter((m) => m.status === 'active')
        .filter((m) => search ? m.name.toLowerCase().includes(search.toLowerCase()) || m.id.toLowerCase().includes(search.toLowerCase()) : true)
        .slice(0, 12);

    const checkIn = (id: string, name: string) => {
        mark.mutate(
            { data: { memberId: id, source: 'manual' } },
            { onSuccess: () => setRecent((r) => [{ name, at: new Date() }, ...r].slice(0, 8)) },
        );
    };

    return (
        <div className="max-w-5xl mx-auto space-y-6 pb-20">
            <div>
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Mark Attendance</h1>
                <p className="text-sm text-theme-text-muted">Search and check in members manually.</p>
            </div>

            <input
                className="w-full px-4 py-3 bg-theme-bg-card border border-theme-border rounded-xl text-sm"
                placeholder="Search by name or member ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map((m) => (
                    <button
                        key={m.id}
                        onClick={() => checkIn(m.id, m.name)}
                        disabled={mark.isPending}
                        className="bg-theme-bg-card border border-theme-border rounded-xl p-4 text-left hover:border-theme-primary-main disabled:opacity-50 transition-colors"
                    >
                        <img src={m.avatarUrl} alt="" className="w-12 h-12 rounded-full mb-2" />
                        <div className="font-semibold text-theme-text-main">{m.name}</div>
                        <div className="text-xs text-theme-text-muted">{m.id} · {m.plan}</div>
                        <div className="mt-2 text-xs text-theme-primary-main font-semibold">Tap to check in</div>
                    </button>
                ))}
            </div>

            {recent.length > 0 && (
                <div className="bg-theme-bg-card border border-theme-border rounded-2xl p-5 shadow-sm">
                    <h2 className="font-semibold text-theme-text-main mb-3">Recent Check-ins</h2>
                    <ul className="space-y-2 text-sm">
                        {recent.map((r, i) => (
                            <li key={i} className="flex justify-between">
                                <span className="font-medium">{r.name}</span>
                                <span className="text-theme-text-muted">{formatTime(r.at)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
