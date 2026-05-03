import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListTrainers,
    useCreateTrainer,
    useDeleteTrainer,
    useUpdateTrainer,
    getListTrainersQueryKey,
} from '@workspace/api-client-react';
import { formatINR } from '@/lib/format';

const SPECIALTIES = ['General Fitness', 'Strength & Conditioning', 'Yoga', 'CrossFit', 'Cardio', 'Pilates', 'Bodybuilding', 'Sports Coaching'];

export default function TrainersPanel() {
    const qc = useQueryClient();
    const { data: trainers = [], isLoading } = useListTrainers();
    const invalidate = () => qc.invalidateQueries({ queryKey: getListTrainersQueryKey() });
    const create = useCreateTrainer({ mutation: { onSuccess: invalidate } });
    const del = useDeleteTrainer({ mutation: { onSuccess: invalidate } });
    const update = useUpdateTrainer({ mutation: { onSuccess: invalidate } });

    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', email: '', specialty: 'General Fitness', experienceYears: '2', hourlyRate: '500', bio: '' });

    const submit = () => {
        create.mutate(
            { data: { name: form.name, phone: form.phone, email: form.email || null, specialty: form.specialty, experienceYears: Number(form.experienceYears || 0), hourlyRate: Math.round(Number(form.hourlyRate || 0) * 100), bio: form.bio || null } },
            { onSuccess: () => { setShowAdd(false); setForm({ name: '', phone: '', email: '', specialty: 'General Fitness', experienceYears: '2', hourlyRate: '500', bio: '' }); } },
        );
    };

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Trainers</h1>
                    <p className="text-sm text-theme-text-muted">Manage your coaching staff and hourly rates.</p>
                </div>
                <button onClick={() => setShowAdd(true)} className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold">+ Add Trainer</button>
            </div>

            {showAdd && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Add Trainer</h2>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Email (optional)" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })}>
                            {SPECIALTIES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                        <div className="grid grid-cols-2 gap-2">
                            <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Experience (yrs)" type="number" value={form.experienceYears} onChange={(e) => setForm({ ...form, experienceYears: e.target.value })} />
                            <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Hourly Rate (₹)" type="number" value={form.hourlyRate} onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })} />
                        </div>
                        <textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Short bio (optional)" value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                            <button onClick={submit} disabled={create.isPending || !form.name || !form.phone} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {create.isPending ? 'Saving…' : 'Save Trainer'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLoading && <div className="text-center py-12 text-theme-text-muted">Loading trainers…</div>}
            {!isLoading && trainers.length === 0 && (
                <div className="bg-theme-bg-card rounded-2xl border border-theme-border p-12 text-center">
                    <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">groups</span>
                    <p className="text-sm text-theme-text-muted">No trainers yet. Click "+ Add Trainer" to get started.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {trainers.map((t) => (
                    <div key={t.id} className="bg-theme-bg-card border border-theme-border rounded-2xl p-5 shadow-sm flex flex-col">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-theme-primary-main/10 flex items-center justify-center text-theme-primary-main font-bold text-lg">
                                    {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-theme-text-main leading-tight">{t.name}</h3>
                                    <p className="text-xs text-theme-text-muted mt-0.5">{t.specialty}</p>
                                </div>
                            </div>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${t.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>{t.status}</span>
                        </div>
                        <div className="space-y-1 text-xs text-theme-text-muted mb-4">
                            <div>📞 {t.phone}</div>
                            {t.email && <div>✉️ {t.email}</div>}
                            <div>🎓 {t.experienceYears} years experience</div>
                            <div>💰 {formatINR(t.hourlyRate)}/hour</div>
                        </div>
                        {t.bio && <p className="text-xs text-theme-text-main italic mb-3 flex-1">"{t.bio}"</p>}
                        <div className="flex gap-2 mt-auto pt-3 border-t border-theme-border">
                            <button
                                onClick={() => update.mutate({ id: t.id, data: { status: t.status === 'active' ? 'inactive' : 'active' } })}
                                className="flex-1 text-xs font-semibold bg-theme-bg-main hover:bg-slate-100 px-3 py-1.5 rounded-lg"
                            >
                                {t.status === 'active' ? 'Deactivate' : 'Activate'}
                            </button>
                            <button
                                onClick={() => { if (confirm(`Delete ${t.name}?`)) del.mutate({ id: t.id }); }}
                                className="text-xs font-semibold text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
