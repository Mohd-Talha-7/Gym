import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListSportsPackages,
    useCreateSportsPackage,
    getListSportsPackagesQueryKey,
} from '@workspace/api-client-react';
import { formatINR } from '@/lib/format';

export default function SportsPackages() {
    const qc = useQueryClient();
    const { data: packages = [], isLoading } = useListSportsPackages();
    const create = useCreateSportsPackage({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListSportsPackagesQueryKey() }) },
    });
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ name: '', sport: 'Cricket', sessions: '', price: '', durationDays: '' });

    const submit = () => {
        create.mutate(
            { data: { name: form.name, sport: form.sport, sessions: Number(form.sessions || 0), price: Math.round(Number(form.price || 0) * 100), durationDays: Number(form.durationDays || 0) } },
            { onSuccess: () => { setShowAdd(false); setForm({ name: '', sport: 'Cricket', sessions: '', price: '', durationDays: '' }); } },
        );
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Packages</h1>
                    <p className="text-sm text-theme-text-muted">Define coaching packages for each sport.</p>
                </div>
                <button onClick={() => setShowAdd(true)} className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold">+ New Package</button>
            </div>

            {showAdd && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">New Sports Package</h2>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Package name (e.g. Pro Plus)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.sport} onChange={(e) => setForm({ ...form, sport: e.target.value })}>
                            <option>Cricket</option><option>Tennis</option><option>Badminton</option><option>Swimming</option><option>Football</option><option>Basketball</option>
                        </select>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Sessions" type="number" value={form.sessions} onChange={(e) => setForm({ ...form, sessions: e.target.value })} />
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Price (₹)" type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Duration (days)" type="number" value={form.durationDays} onChange={(e) => setForm({ ...form, durationDays: e.target.value })} />
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                            <button onClick={submit} disabled={create.isPending || !form.name} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {create.isPending ? 'Saving…' : 'Save Package'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLoading && <div className="text-center py-12 text-theme-text-muted">Loading packages…</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {packages.map((p) => (
                    <div key={p.id} className="bg-theme-bg-card border border-theme-border rounded-2xl p-5 shadow-sm">
                        <div className="text-[10px] uppercase tracking-wide text-theme-text-muted mb-1">{p.sport}</div>
                        <h3 className="text-lg font-bold text-theme-text-main mb-3">{p.name}</h3>
                        <div className="space-y-2 text-sm text-theme-text-muted mb-4">
                            <div className="flex justify-between"><span>Sessions</span><span className="text-theme-text-main font-semibold">{p.sessions}</span></div>
                            <div className="flex justify-between"><span>Duration</span><span className="text-theme-text-main font-semibold">{p.durationDays} days</span></div>
                            <div className="flex justify-between"><span>Price</span><span className="text-theme-primary-main font-bold">{formatINR(p.price)}</span></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
