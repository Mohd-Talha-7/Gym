import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMemberDocuments,
    useCreateMemberDocument,
    getListMemberDocumentsQueryKey,
} from '@workspace/api-client-react';

function fmtDate(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

const STATUS_STYLES: Record<string, string> = {
    Signed: 'bg-green-100 text-green-700',
    Pending: 'bg-orange-100 text-orange-700',
    'Not Required': 'bg-slate-200 text-slate-600',
};

export default function ClientProfileDocuments({ memberId }: { memberId: string }) {
    const qc = useQueryClient();
    const { data: docs = [] } = useListMemberDocuments(memberId);
    const create = useCreateMemberDocument({
        mutation: { onSuccess: () => qc.invalidateQueries({ queryKey: getListMemberDocumentsQueryKey(memberId) }) },
    });
    const [showAdd, setShowAdd] = useState(false);
    const [form, setForm] = useState({ name: '', type: 'ID Proof', status: 'Pending', note: '' });

    const submit = () => {
        create.mutate(
            { id: memberId, data: { name: form.name, type: form.type, status: form.status, uploadedBy: 'Reception', note: form.note || null } },
            { onSuccess: () => { setShowAdd(false); setForm({ name: '', type: 'ID Proof', status: 'Pending', note: '' }); } },
        );
    };

    return (
        <div className="space-y-6 pb-24">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold tracking-tight text-theme-text-main">Documents ({docs.length})</h3>
                <button
                    onClick={() => setShowAdd(true)}
                    className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2 rounded-lg text-sm font-semibold"
                >
                    + Add Document
                </button>
            </div>

            {showAdd && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Add Document</h2>
                        <input className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Document name (e.g. Aadhaar Card)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                            <option>ID Proof</option><option>Address Proof</option><option>Medical Certificate</option><option>Membership Agreement</option><option>Photo</option><option>Other</option>
                        </select>
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
                            <option>Pending</option><option>Signed</option><option>Not Required</option>
                        </select>
                        <textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" placeholder="Note (optional)" value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setShowAdd(false)}>Cancel</button>
                            <button disabled={create.isPending || !form.name} onClick={submit} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {create.isPending ? 'Saving…' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {docs.length === 0 && (
                <div className="bg-theme-bg-card rounded-xl border border-theme-border p-12 text-center">
                    <span className="material-symbols-outlined text-5xl text-theme-text-muted opacity-40 mb-4">description</span>
                    <p className="text-sm text-theme-text-muted">No documents uploaded for this member.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {docs.map((d) => (
                    <div key={d.id} className="bg-theme-bg-card rounded-xl p-5 border border-theme-border flex flex-col justify-between hover:shadow-lg transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mr-4">
                                    <span className="material-symbols-outlined text-3xl">description</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-theme-text-main leading-tight">{d.name}</h4>
                                    <p className="text-xs text-theme-text-muted font-medium mt-0.5">Type: {d.type}</p>
                                </div>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest ${STATUS_STYLES[d.status] ?? 'bg-slate-100 text-slate-600'}`}>{d.status}</span>
                        </div>

                        {d.note && (
                            <div className="bg-theme-bg-main p-3 rounded-lg mb-4">
                                <p className="text-[11px] leading-tight text-theme-text-muted italic">"{d.note}"</p>
                            </div>
                        )}

                        <div className="flex items-center justify-between mt-2 pt-4 border-t border-theme-border">
                            <div className="text-[11px] text-theme-text-muted">
                                Uploaded: <span className="font-semibold text-theme-text-main">{fmtDate(d.uploadedAt)}</span> by {d.uploadedBy}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
