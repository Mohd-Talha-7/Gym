import { useState } from 'react';
import { useListSportsClients } from '@workspace/api-client-react';
import { formatDate } from '@/lib/format';

export default function SportsClients() {
    const { data: clients = [], isLoading } = useListSportsClients();
    const [search, setSearch] = useState('');
    const [sport, setSport] = useState('All');

    const sports = ['All', ...Array.from(new Set(clients.map((c) => c.sport)))];
    const filtered = clients.filter((c) => {
        if (sport !== 'All' && c.sport !== sport) return false;
        if (search && !c.memberName.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Clients</h1>
                    <p className="text-sm text-theme-text-muted">Manage students enrolled in sports coaching.</p>
                </div>
                <button className="bg-theme-primary-main text-white px-5 py-2.5 rounded-xl text-sm font-semibold">+ Enroll Client</button>
            </div>

            <div className="flex gap-3">
                <input
                    className="flex-1 px-3 py-2 bg-theme-bg-card border border-theme-border rounded-lg text-sm"
                    placeholder="Search clients..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    value={sport}
                    onChange={(e) => setSport(e.target.value)}
                    className="px-3 py-2 bg-theme-bg-card border border-theme-border rounded-lg text-sm"
                >
                    {sports.map((s) => <option key={s}>{s}</option>)}
                </select>
            </div>

            <div className="bg-theme-bg-card rounded-2xl border border-theme-border overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Student</th>
                            <th className="text-left px-4 py-3">Sport</th>
                            <th className="text-left px-4 py-3">Package</th>
                            <th className="text-left px-4 py-3">Coach</th>
                            <th className="text-left px-4 py-3">Sessions Left</th>
                            <th className="text-left px-4 py-3">Expiry</th>
                            <th className="text-left px-4 py-3">Level</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && filtered.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">No clients found.</td></tr>}
                        {filtered.map((c) => (
                            <tr key={c.id}>
                                <td className="px-4 py-3 font-medium">{c.memberName}</td>
                                <td className="px-4 py-3">{c.sport}</td>
                                <td className="px-4 py-3">{c.packageName}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{c.coach}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.sessionsLeft <= 3 ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                        {c.sessionsLeft}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(c.expiryDate)}</td>
                                <td className="px-4 py-3">{c.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
