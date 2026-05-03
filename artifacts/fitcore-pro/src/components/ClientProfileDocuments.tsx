import { useListMemberDocuments } from '@workspace/api-client-react';

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
    const { data: docs = [] } = useListMemberDocuments(memberId);

    return (
        <div className="space-y-6 pb-24">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold tracking-tight text-theme-text-main">Documents ({docs.length})</h3>
            </div>

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
