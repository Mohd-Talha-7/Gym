import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useCreateInquiry,
    getListInquiriesQueryKey,
    getGetDashboardStatsQueryKey,
} from '@workspace/api-client-react';

export default function AddInquiry({ onNavigate }: { onNavigate: (path: string) => void }) {
    const qc = useQueryClient();
    const create = useCreateInquiry({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListInquiriesQueryKey() });
                qc.invalidateQueries({ queryKey: getGetDashboardStatsQueryKey() });
                onNavigate('inquiries');
            },
        },
    });

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        interest: 'Annual Gold',
        source: 'Walk-in',
        assignedTo: 'Ravi Sharma',
        notes: '',
    });
    const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.phone || !form.email) return;
        create.mutate({
            data: {
                name: form.name,
                phone: form.phone,
                email: form.email,
                interest: form.interest,
                source: form.source,
                assignedTo: form.assignedTo,
                notes: form.notes || undefined,
            },
        });
    };

    return (
        <div className="flex-1 p-2 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-[1920px] mx-auto">
            <div className="mb-6 mt-2">
                <h1 className="text-2xl font-bold text-theme-text-main">Add New Inquiry</h1>
            </div>

            <form onSubmit={submit} className="bg-theme-bg-card rounded-lg border border-theme-border p-6 shadow-sm max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input label="Full Name *" value={form.name} onChange={(v) => update('name', v)} required />
                    <Input label="Phone *" value={form.phone} onChange={(v) => update('phone', v)} required />
                    <Input label="Email *" type="email" value={form.email} onChange={(v) => update('email', v)} required />
                    <Sel label="Interest *" value={form.interest} onChange={(v) => update('interest', v)} options={['Monthly', 'Quarterly', 'Half Yearly', 'Annual Gold']} />
                    <Sel label="Source *" value={form.source} onChange={(v) => update('source', v)} options={['Walk-in', 'Referral', 'Instagram', 'Facebook', 'Google', 'Website']} />
                    <Sel label="Assigned Staff" value={form.assignedTo} onChange={(v) => update('assignedTo', v)} options={['Ravi Sharma', 'Sarah', 'Vikram', 'Unassigned']} />
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Notes</label>
                        <textarea
                            value={form.notes}
                            onChange={(e) => update('notes', e.target.value)}
                            rows={3}
                            className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md text-sm"
                        />
                    </div>
                </div>

                {create.isError && <p className="mt-4 text-sm text-rose-600">Failed to save. Check required fields.</p>}

                <div className="mt-6 flex justify-end gap-3 border-t border-theme-border pt-6">
                    <button type="button" onClick={() => onNavigate('inquiries')} className="px-6 py-2 border border-theme-primary-main rounded-full text-sm font-medium text-theme-primary-main">Cancel</button>
                    <button type="submit" disabled={create.isPending} className="px-6 py-2 rounded-full text-sm font-medium text-white bg-theme-primary-main disabled:opacity-60">
                        {create.isPending ? 'Saving…' : 'Save Inquiry'}
                    </button>
                </div>
            </form>
        </div>
    );
}

function Input({ label, value, onChange, type = 'text', required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md text-sm text-theme-text-main"
            />
        </div>
    );
}

function Sel({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md text-sm text-theme-text-main"
            >
                {options.map((o) => <option key={o}>{o}</option>)}
            </select>
        </div>
    );
}
