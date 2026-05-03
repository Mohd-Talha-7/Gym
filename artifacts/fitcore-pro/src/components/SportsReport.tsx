import { useGetSportsReport } from '@workspace/api-client-react';
import { formatINR } from '@/lib/format';

export default function SportsReport() {
    const { data, isLoading } = useGetSportsReport();

    if (isLoading || !data) return <div className="text-center py-12 text-theme-text-muted">Loading report…</div>;

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div>
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Report</h1>
                <p className="text-sm text-theme-text-muted">Coaching revenue and engagement summary.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Kpi label="Total Revenue" value={formatINR(data.totalRevenue)} />
                <Kpi label="Total Clients" value={String(data.totalClients)} />
                <Kpi label="Sessions Completed" value={String(data.sessionsCompleted)} />
            </div>

            <div className="bg-theme-bg-card rounded-2xl border border-theme-border overflow-hidden shadow-sm">
                <div className="px-5 py-3 border-b border-theme-border font-semibold">By Sport</div>
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Sport</th>
                            <th className="text-left px-4 py-3">Clients</th>
                            <th className="text-left px-4 py-3">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {data.bySport.map((s) => (
                            <tr key={s.sport}>
                                <td className="px-4 py-3 font-medium">{s.sport}</td>
                                <td className="px-4 py-3">{s.clients}</td>
                                <td className="px-4 py-3 font-semibold">{formatINR(s.revenue)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function Kpi({ label, value }: { label: string; value: string }) {
    return (
        <div className="bg-theme-bg-card p-5 rounded-2xl border border-theme-border shadow-sm">
            <div className="text-[10px] uppercase tracking-wide text-theme-text-muted mb-1">{label}</div>
            <div className="text-3xl font-bold text-theme-text-main">{value}</div>
        </div>
    );
}
