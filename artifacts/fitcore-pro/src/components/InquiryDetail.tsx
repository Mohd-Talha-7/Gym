import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useGetInquiry,
    useUpdateInquiry,
    useConvertInquiry,
    getGetInquiryQueryKey,
    getListInquiriesQueryKey,
    getListMembersQueryKey,
    getGetDashboardStatsQueryKey,
} from '@workspace/api-client-react';

export default function InquiryDetail({ onNavigate, inquiryId }: { onNavigate: (path: string) => void; inquiryId: string }) {
    const qc = useQueryClient();
    const { data: inquiry, isLoading } = useGetInquiry(inquiryId);
    const [form, setForm] = useState({
        name: '', phone: '', email: '', interest: '', source: '', assignedTo: '', notes: '',
    });
    const [statusDraft, setStatusDraft] = useState('');

    useEffect(() => {
        if (inquiry) {
            setForm({
                name: inquiry.name,
                phone: inquiry.phone,
                email: inquiry.email ?? '',
                interest: inquiry.interest,
                source: inquiry.source,
                assignedTo: inquiry.assignedTo,
                notes: inquiry.notes ?? '',
            });
            setStatusDraft(inquiry.status);
        }
    }, [inquiry]);

    const updateInquiry = useUpdateInquiry({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getGetInquiryQueryKey(inquiryId) });
                qc.invalidateQueries({ queryKey: getListInquiriesQueryKey() });
            },
        },
    });

    const convertInquiry = useConvertInquiry({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListInquiriesQueryKey() });
                qc.invalidateQueries({ queryKey: getGetInquiryQueryKey(inquiryId) });
                qc.invalidateQueries({ queryKey: getListMembersQueryKey() });
                qc.invalidateQueries({ queryKey: getGetDashboardStatsQueryKey() });
                onNavigate('members');
            },
        },
    });

    if (isLoading) return <div className="p-8 text-theme-text-muted">Loading inquiry…</div>;
    if (!inquiry) {
        return (
            <div className="p-8">
                <button onClick={() => onNavigate('inquiries')} className="text-theme-primary-main font-bold">← Back to Inquiries</button>
                <p className="mt-4 text-theme-text-muted">Inquiry not found.</p>
            </div>
        );
    }

    const handleSave = () => {
        updateInquiry.mutate({
            id: inquiryId,
            data: {
                name: form.name,
                phone: form.phone,
                email: form.email || null,
                interest: form.interest,
                source: form.source,
                assignedTo: form.assignedTo,
                notes: form.notes || null,
            },
        });
    };

    const handleStatusUpdate = () => {
        if (statusDraft && statusDraft !== inquiry.status) {
            updateInquiry.mutate({ id: inquiryId, data: { status: statusDraft } });
        }
    };

    const handleConvert = () => {
        if (window.confirm(`Convert ${inquiry.name} to a member?`)) {
            convertInquiry.mutate({ id: inquiryId });
        }
    };

    const statusColor: Record<string, string> = {
        pending: 'bg-amber-50 text-amber-600 border-amber-100',
        contacted: 'bg-blue-50 text-blue-600 border-blue-100',
        converted: 'bg-green-50 text-green-700 border-green-100',
        lost: 'bg-rose-50 text-rose-600 border-rose-100',
    };

    return (
        <div className="flex flex-col xl:flex-row min-h-full h-auto w-full max-w-[1920px] mx-auto -mx-4 md:-mx-6 px-4 md:px-6">
            <main className="flex-1 pr-0 xl:pr-6 pb-24 w-full">
                <nav className="my-6 flex items-center gap-2 text-theme-text-muted text-[11px] uppercase tracking-[0.05em] font-semibold">
                    <button onClick={() => onNavigate('inquiries')} className="hover:text-theme-primary-main">Inquiries</button>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    <span className="text-theme-text-main font-bold">{inquiry.name}</span>
                </nav>

                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">{inquiry.name}</h1>
                    <p className="text-theme-text-muted text-sm mt-1">Lead ID: {inquiry.id} • {inquiry.source}</p>
                </div>

                <div className="grid grid-cols-12 gap-6 w-full">
                    <div className="col-span-12 lg:col-span-7 space-y-6">
                        <section className="bg-theme-bg-card rounded-xl p-6 border border-theme-border shadow-sm">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-theme-text-muted mb-6">Inquiry Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                <Field label="Full Name">
                                    <input className="w-full bg-transparent border-b border-theme-border p-1 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                                </Field>
                                <Field label="Phone Number">
                                    <input className="w-full bg-transparent border-b border-theme-border p-1 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                                </Field>
                                <Field label="Email Address">
                                    <input className="w-full bg-transparent border-b border-theme-border p-1 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                                </Field>
                                <Field label="Primary Interest">
                                    <input className="w-full bg-transparent border-b border-theme-border p-1 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main" value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} />
                                </Field>
                                <Field label="Source">
                                    <input className="w-full bg-transparent border-b border-theme-border p-1 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main" value={form.source} onChange={(e) => setForm({ ...form, source: e.target.value })} />
                                </Field>
                                <Field label="Assigned Staff">
                                    <input className="w-full bg-transparent border-b border-theme-border p-1 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main" value={form.assignedTo} onChange={(e) => setForm({ ...form, assignedTo: e.target.value })} />
                                </Field>
                            </div>

                            <div className="mt-8 space-y-1">
                                <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">Remarks</label>
                                <textarea className="w-full bg-transparent border border-theme-border rounded p-2 font-semibold text-theme-text-main focus:outline-none focus:border-theme-primary-main min-h-[80px] resize-none" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                            </div>

                            <div className="mt-8 pt-6 border-t border-theme-border">
                                <button onClick={handleSave} disabled={updateInquiry.isPending} className="bg-theme-primary-main text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 shadow-sm disabled:opacity-50">
                                    {updateInquiry.isPending ? 'Saving…' : 'Save Changes'}
                                </button>
                            </div>
                        </section>
                    </div>

                    <div className="col-span-12 lg:col-span-5 space-y-6">
                        <section className="bg-theme-bg-card rounded-xl p-6 border border-theme-border shadow-sm">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-theme-text-muted mb-6">Status Update</h2>
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border capitalize ${statusColor[inquiry.status] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>{inquiry.status}</div>
                                <select value={statusDraft} onChange={(e) => setStatusDraft(e.target.value)} className="flex-1 border-none bg-theme-bg-main p-2 rounded-lg text-sm font-semibold text-theme-text-main focus:ring-1 focus:ring-theme-primary-main">
                                    <option value="pending">Pending</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="converted">Converted</option>
                                    <option value="lost">Lost</option>
                                </select>
                            </div>
                            <button onClick={handleStatusUpdate} disabled={updateInquiry.isPending || statusDraft === inquiry.status} className="w-full py-2.5 rounded-xl border-2 border-theme-primary-main text-theme-primary-main font-bold text-sm hover:bg-theme-primary-light disabled:opacity-50">
                                Update Status
                            </button>
                        </section>

                        <section className="bg-theme-bg-card rounded-xl p-6 border border-theme-border shadow-sm">
                            <h2 className="text-sm font-bold uppercase tracking-wider text-theme-text-muted mb-4">Inquiry Info</h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between"><span className="text-theme-text-muted">Created</span><span className="font-bold">{new Date(inquiry.inquiryDate).toLocaleString('en-IN')}</span></div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="mt-8 lg:mt-12 flex justify-end">
                    <button onClick={handleConvert} disabled={convertInquiry.isPending || inquiry.status === 'converted'} className="flex items-center gap-3 bg-theme-primary-main text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50">
                        <span className="material-symbols-outlined">person_add</span>
                        <span>{convertInquiry.isPending ? 'Converting…' : inquiry.status === 'converted' ? 'Already Converted' : 'Convert to Client'}</span>
                    </button>
                </div>
            </main>
        </div>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div className="space-y-1">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-theme-text-muted">{label}</label>
            {children}
        </div>
    );
}
