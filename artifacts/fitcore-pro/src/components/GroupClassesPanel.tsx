import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListGroupClasses,
    useCreateGroupClass,
    useDeleteGroupClass,
    useBookGroupClass,
    useListTrainers,
    useListMembers,
    getListGroupClassesQueryKey,
} from '@workspace/api-client-react';

const CATEGORIES = ['Strength', 'Cardio', 'Yoga', 'HIIT', 'Pilates', 'Zumba', 'CrossFit', 'Spin'];

function fmtDateTime(d: string | Date) {
    return new Date(d).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit', hour12: true });
}

export default function GroupClassesPanel() {
    const qc = useQueryClient();
    const { data: classes = [], isLoading } = useListGroupClasses();
    const { data: trainers = [] } = useListTrainers();
    const { data: members = [] } = useListMembers();
    const invalidate = () => qc.invalidateQueries({ queryKey: getListGroupClassesQueryKey() });
    const create = useCreateGroupClass({ mutation: { onSuccess: invalidate } });
    const del = useDeleteGroupClass({ mutation: { onSuccess: invalidate } });
    const book = useBookGroupClass({ mutation: { onSuccess: invalidate } });

    const [showAdd, setShowAdd] = useState(false);
    const [bookFor, setBookFor] = useState<string | null>(null);
    const [bookMember, setBookMember] = useState('');
    const [bookError, setBookError] = useState('');

    const todayLocal = (() => {
        const d = new Date();
        d.setMinutes(d.getMinutes() - d.getTimezoneOffset() + 60);
        return d.toISOString().slice(0, 16);
    })();
    const [form, setForm] = useState({ name: '', category: 'Strength', trainer: '', capacity: '20', durationMins: '60', scheduledAt: todayLocal, room: 'Main Floor' });

    const submit = () => {
        create.mutate(
            { data: { name: form.name, category: form.category, trainer: form.trainer, capacity: Number(form.capacity), durationMins: Number(form.durationMins), scheduledAt: new Date(form.scheduledAt).toISOString(), room: form.room } },
            { onSuccess: () => { setShowAdd(false); setForm({ ...form, name: '' }); } },
        );
    };

    const submitBook = () => {
        if (!bookFor || !bookMember) return;
        setBookError('');
        book.mutate(
            { id: bookFor, data: { memberId: bookMember } },
            {
                onSuccess: () => { setBookFor(null); setBookMember(''); },
                onError: (e: unknown) => {
                    const msg = (e as { response?: { data?: { error?: string } } })?.response?.data?.error ?? 'Booking failed';
                    setBookError(msg);
                },
            },
        );
    };

    const sorted = [...classes].sort((a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime());

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Group Classes</h1>
                    <p className="text-sm text-theme-text-muted">Schedule classes and manage bookings.</p>
                </div>
                <button onClick={() => setShowAdd(true)} className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold">+ New Class</button>
            </div>

            {showAdd && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Schedule New Class</h2>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Class name (e.g. Morning HIIT)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                        </select>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.trainer} onChange={(e) => setForm({ ...form, trainer: e.target.value })}>
                            <option value="">Select trainer…</option>
                            {trainers.map((t) => <option key={t.id} value={t.name}>{t.name} — {t.specialty}</option>)}
                        </select>
                        <div className="grid grid-cols-2 gap-2">
                            <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Capacity" type="number" value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} />
                            <input className="px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Duration (min)" type="number" value={form.durationMins} onChange={(e) => setForm({ ...form, durationMins: e.target.value })} />
                        </div>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" type="datetime-local" value={form.scheduledAt} onChange={(e) => setForm({ ...form, scheduledAt: e.target.value })} />
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Room" value={form.room} onChange={(e) => setForm({ ...form, room: e.target.value })} />
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                            <button onClick={submit} disabled={create.isPending || !form.name || !form.trainer} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {create.isPending ? 'Saving…' : 'Schedule Class'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {bookFor && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => { setBookFor(null); setBookError(''); }}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Book Member into Class</h2>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={bookMember} onChange={(e) => setBookMember(e.target.value)}>
                            <option value="">Select member…</option>
                            {members.map((m) => <option key={m.id} value={m.id}>{m.name} ({m.id})</option>)}
                        </select>
                        {bookError && <p className="text-xs text-rose-600">{bookError}</p>}
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => { setBookFor(null); setBookError(''); }}>Cancel</button>
                            <button onClick={submitBook} disabled={book.isPending || !bookMember} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {book.isPending ? 'Booking…' : 'Book'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isLoading && <div className="text-center py-12 text-theme-text-muted">Loading classes…</div>}
            {!isLoading && sorted.length === 0 && (
                <div className="bg-theme-bg-card rounded-2xl border border-theme-border p-12 text-center">
                    <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">event</span>
                    <p className="text-sm text-theme-text-muted">No classes scheduled. Click "+ New Class" to schedule one.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sorted.map((c) => {
                    const full = c.bookedCount >= c.capacity;
                    return (
                        <div key={c.id} className="bg-theme-bg-card border border-theme-border rounded-2xl p-5 shadow-sm flex flex-col">
                            <div className="flex items-start justify-between mb-2">
                                <div className="text-[10px] uppercase tracking-wide text-theme-primary-main font-bold">{c.category}</div>
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${c.status === 'cancelled' ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'}`}>{c.status}</span>
                            </div>
                            <h3 className="text-lg font-bold text-theme-text-main mb-1">{c.name}</h3>
                            <div className="text-sm text-theme-text-muted mb-3">{fmtDateTime(c.scheduledAt)} · {c.durationMins} min</div>
                            <div className="space-y-1 text-xs text-theme-text-muted mb-4">
                                <div>👨‍🏫 Trainer: <span className="text-theme-text-main font-semibold">{c.trainer}</span></div>
                                <div>🏠 Room: <span className="text-theme-text-main font-semibold">{c.room}</span></div>
                                <div>👥 Bookings: <span className={`font-bold ${full ? 'text-rose-600' : 'text-emerald-700'}`}>{c.bookedCount} / {c.capacity}</span></div>
                            </div>
                            <div className="flex gap-2 mt-auto pt-3 border-t border-theme-border">
                                <button
                                    onClick={() => { setBookFor(c.id); setBookError(''); setBookMember(''); }}
                                    disabled={full}
                                    className="flex-1 text-xs font-semibold bg-theme-primary-main hover:bg-theme-primary-hover text-white px-3 py-1.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {full ? 'Full' : '+ Book Member'}
                                </button>
                                <button
                                    onClick={() => { if (confirm(`Delete class "${c.name}"?`)) del.mutate({ id: c.id }); }}
                                    className="text-xs font-semibold text-rose-600 hover:bg-rose-50 px-3 py-1.5 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
