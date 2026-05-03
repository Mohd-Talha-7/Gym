import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListSportsClients,
    useListSportsPackages,
    useListMembers,
    useCreateSportsClient,
    getListSportsClientsQueryKey,
} from '@workspace/api-client-react';
import { formatDate } from '@/lib/format';

export default function SportsClients() {
    const qc = useQueryClient();
    const { data: clients = [], isLoading } = useListSportsClients();
    const { data: packages = [] } = useListSportsPackages();
    const { data: members = [] } = useListMembers();
    const create = useCreateSportsClient({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListSportsClientsQueryKey() }) },
    });
    const [search, setSearch] = useState('');
    const [sport, setSport] = useState('All');
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ memberId: '', sport: 'Cricket', packageName: '', sessions: 12, coach: 'Coach Singh', level: 'Beginner', durationDays: 30 });

    const sportFilters = ['All', ...Array.from(new Set(clients.map((c) => c.sport)))];
    const filtered = clients.filter((c) => {
        if (sport !== 'All' && c.sport !== sport) return false;
        if (search && !c.memberName.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    const allSports = Array.from(new Set(packages.map((p) => p.sport)));
    const sportPackages = packages.filter((p) => p.sport === form.sport);

    const submit = () => {
        const member = members.find((m) => m.id === form.memberId);
        if (!member) return;
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + Number(form.durationDays || 30));
        create.mutate(
            {
                data: {
                    memberId: member.id,
                    memberName: member.name,
                    sport: form.sport,
                    packageName: form.packageName || 'Custom',
                    sessionsLeft: Number(form.sessions),
                    expiryDate: expiry.toISOString(),
                    coach: form.coach,
                    level: form.level,
                },
            },
            { onSuccess: () => { setShowAdd(false); setForm({ memberId: '', sport: 'Cricket', packageName: '', sessions: 12, coach: 'Coach Singh', level: 'Beginner', durationDays: 30 }); } },
        );
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Clients</h1>
                    <p className="text-sm text-theme-text-muted">Manage students enrolled in sports coaching.</p>
                </div>
                <button onClick={() => setShowAdd(true)} className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold">+ Enroll Client</button>
            </div>

            {showAdd && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Enroll Sports Client</h2>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.memberId} onChange={(e) => setForm({ ...form, memberId: e.target.value })}>
                            <option value="">Select member…</option>
                            {members.map((m) => <option key={m.id} value={m.id}>{m.name} ({m.id})</option>)}
                        </select>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.sport} onChange={(e) => setForm({ ...form, sport: e.target.value, packageName: '' })}>
                            {(allSports.length ? allSports : ['Cricket', 'Tennis', 'Badminton', 'Swimming']).map((s) => <option key={s}>{s}</option>)}
                        </select>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.packageName} onChange={(e) => {
                            const pkg = sportPackages.find((p) => p.name === e.target.value);
                            setForm({ ...form, packageName: e.target.value, sessions: pkg?.sessions ?? form.sessions, durationDays: pkg?.durationDays ?? form.durationDays });
                        }}>
                            <option value="">Select package (or custom)…</option>
                            {sportPackages.map((p) => <option key={p.id} value={p.name}>{p.name} — {p.sessions} sessions</option>)}
                        </select>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Sessions" type="number" value={form.sessions} onChange={(e) => setForm({ ...form, sessions: Number(e.target.value) })} />
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Coach name" value={form.coach} onChange={(e) => setForm({ ...form, coach: e.target.value })} />
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.level} onChange={(e) => setForm({ ...form, level: e.target.value })}>
                            <option>Beginner</option><option>Intermediate</option><option>Advanced</option>
                        </select>
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                            <button onClick={submit} disabled={create.isPending || !form.memberId} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {create.isPending ? 'Saving…' : 'Enroll'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex gap-3">
                <input className="flex-1 px-3 py-2 bg-theme-bg-card border border-theme-border rounded-lg text-sm" placeholder="Search clients..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={sport} onChange={(e) => setSport(e.target.value)} className="px-3 py-2 bg-theme-bg-card border border-theme-border rounded-lg text-sm">
                    {sportFilters.map((s) => <option key={s}>{s}</option>)}
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
