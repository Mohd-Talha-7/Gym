import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useCreateMember,
    getListMembersQueryKey,
    getGetDashboardStatsQueryKey,
} from '@workspace/api-client-react';

export default function AddClient({ onNavigate }: { onNavigate: (path: string) => void }) {
    const qc = useQueryClient();
    const create = useCreateMember({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListMembersQueryKey() });
                qc.invalidateQueries({ queryKey: getGetDashboardStatsQueryKey() });
                onNavigate('members');
            },
        },
    });

    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        gender: 'Male',
        plan: 'Monthly',
        bloodGroup: '',
        dob: '',
        address: '',
        emergencyContact: '',
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
                gender: form.gender,
                plan: form.plan,
                bloodGroup: form.bloodGroup || undefined,
                dob: form.dob || undefined,
                address: form.address || undefined,
                emergencyContact: form.emergencyContact || undefined,
            },
        });
    };

    return (
        <div className="flex-1 overflow-x-hidden p-2 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-[1920px] mx-auto custom-scrollbar">
            <div className="max-w-4xl mx-auto">
                <header className="mb-8 mt-2">
                    <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">Add New Client</h1>
                    <p className="text-theme-text-muted text-sm mt-1">Register a new member.</p>
                </header>

                <form onSubmit={submit} className="bg-theme-bg-card rounded-xl p-6 lg:p-8 shadow-sm border border-theme-border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <Field label="Full Name *" required value={form.name} onChange={(v) => update('name', v)} placeholder="Full legal name" />
                        <Field label="Phone *" required value={form.phone} onChange={(v) => update('phone', v)} placeholder="+91 98765 43210" />
                        <Field label="Email *" required type="email" value={form.email} onChange={(v) => update('email', v)} placeholder="client@example.com" />
                        <Select label="Gender *" value={form.gender} onChange={(v) => update('gender', v)} options={['Male', 'Female', 'Other']} />
                        <Select label="Plan *" value={form.plan} onChange={(v) => update('plan', v)} options={['Monthly', 'Quarterly', 'Half Yearly', 'Annual Gold']} />
                        <Select label="Blood Group" value={form.bloodGroup} onChange={(v) => update('bloodGroup', v)} options={['', 'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']} />
                        <Field label="Date of Birth" type="date" value={form.dob} onChange={(v) => update('dob', v)} />
                        <Field label="Emergency Contact" value={form.emergencyContact} onChange={(v) => update('emergencyContact', v)} placeholder="+91 ..." />
                        <div className="md:col-span-2">
                            <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">Address</label>
                            <textarea
                                value={form.address}
                                onChange={(e) => update('address', e.target.value)}
                                className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main rounded-lg py-2 px-3 text-sm"
                                rows={2}
                                placeholder="Full street address"
                            />
                        </div>
                    </div>

                    {create.isError && (
                        <p className="mt-4 text-sm text-rose-600">Failed to save. Check required fields.</p>
                    )}

                    <div className="mt-6 flex justify-end gap-3 border-t border-theme-border pt-6">
                        <button type="button" onClick={() => onNavigate('members')} className="px-6 py-2.5 rounded-lg text-sm font-semibold text-theme-text-muted hover:bg-theme-bg-main">
                            Cancel
                        </button>
                        <button type="submit" disabled={create.isPending} className="px-8 py-2.5 bg-theme-primary-main text-white rounded-lg text-sm font-bold disabled:opacity-60">
                            {create.isPending ? 'Saving…' : 'Save Client'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function Field({ label, value, onChange, type = 'text', placeholder, required }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean }) {
    return (
        <div>
            <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">{label}</label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={required}
                placeholder={placeholder}
                className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main rounded-lg py-2 px-3 text-sm text-theme-text-main"
            />
        </div>
    );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
    return (
        <div>
            <label className="block text-[11px] font-bold text-theme-text-muted uppercase tracking-wider mb-1.5">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-theme-bg-main border border-theme-border focus:border-theme-primary-main rounded-lg py-2 px-3 text-sm text-theme-text-main"
            >
                {options.map((o) => <option key={o} value={o}>{o || '—'}</option>)}
            </select>
        </div>
    );
}
