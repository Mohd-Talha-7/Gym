import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMembers,
    useCreateBill,
    getListBillsQueryKey,
    getListMemberBillsQueryKey,
} from '@workspace/api-client-react';

const CLASSES = ['Yoga', 'Zumba', 'CrossFit', 'Pilates', 'Spin', 'HIIT', 'Boxing'];
const PAYMENT_MODES = ['cash', 'card', 'upi'] as const;

export default function GroupClassBill({ onNavigate }: { onNavigate: (path: string) => void }) {
    const qc = useQueryClient();
    const { data: members = [] } = useListMembers();

    const [memberId, setMemberId] = useState('');
    const [className, setClassName] = useState('Yoga');
    const [sessions, setSessions] = useState(8);
    const [pricePerSessionRupees, setPricePerSessionRupees] = useState(300);
    const [paidRupees, setPaidRupees] = useState(0);
    const [paymentMode, setPaymentMode] = useState<typeof PAYMENT_MODES[number]>('cash');
    const [notes, setNotes] = useState('');

    const totalRupees = sessions * pricePerSessionRupees;

    const create = useCreateBill({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListBillsQueryKey() });
                if (memberId) qc.invalidateQueries({ queryKey: getListMemberBillsQueryKey(memberId) });
                onNavigate('billing-history');
            },
        },
    });

    const member = members.find((m) => m.id === memberId);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!memberId) {
            alert('Please select a member.');
            return;
        }
        create.mutate({
            data: {
                memberId,
                type: 'group',
                items: [{
                    name: `${className} – ${sessions} sessions @ ₹${pricePerSessionRupees}`,
                    amount: totalRupees * 100,
                }],
                paid: paidRupees * 100,
                paymentMode,
                notes: notes || undefined,
            },
        });
    };

    return (
        <div className="p-4 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-4xl mx-auto custom-scrollbar">
            <div className="mb-6 mt-2">
                <nav className="flex text-sm text-theme-text-muted mb-2">
                    <ol className="flex items-center space-x-2">
                        <li><button type="button" onClick={() => onNavigate('billing-history')} className="hover:text-theme-text-main">Billing</button></li>
                        <li><span className="mx-1">/</span></li>
                        <li className="font-medium text-theme-text-main">Group Class Bill</li>
                    </ol>
                </nav>
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">Group Class Bill</h2>
                <p className="text-xs text-on-surface-variant mt-1">Create a new invoice for group training sessions.</p>
            </div>
            <form onSubmit={submit} className="bg-surface-container-lowest rounded-xl shadow-sm border border-theme-border p-6 space-y-5">
                <div>
                    <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Member</label>
                    <select className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={memberId} onChange={(e) => setMemberId(e.target.value)} required>
                        <option value="">Select a member…</option>
                        {members.map((m) => (
                            <option key={m.id} value={m.id}>{m.name} ({m.id}) – {m.phone}</option>
                        ))}
                    </select>
                    {member && <p className="text-xs text-on-surface-variant mt-1">{member.email} · plan: {member.plan}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Class</label>
                        <select className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={className} onChange={(e) => setClassName(e.target.value)}>
                            {CLASSES.map((c) => <option key={c}>{c}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Sessions</label>
                        <input type="number" min={1} className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={sessions} onChange={(e) => setSessions(Number(e.target.value))} required />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Price / session (₹)</label>
                        <input type="number" min={0} className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={pricePerSessionRupees} onChange={(e) => setPricePerSessionRupees(Number(e.target.value))} required />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Total (₹)</label>
                        <input className="w-full h-11 px-3 rounded-md bg-surface-container-low border border-theme-border text-sm font-bold" value={totalRupees} readOnly />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Paid Now (₹)</label>
                        <input type="number" min={0} max={totalRupees} className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={paidRupees} onChange={(e) => setPaidRupees(Number(e.target.value))} />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Payment Mode</label>
                        <select className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value as typeof PAYMENT_MODES[number])}>
                            {PAYMENT_MODES.map((m) => <option key={m} value={m}>{m.toUpperCase()}</option>)}
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Notes</label>
                    <textarea rows={2} className="w-full p-3 rounded-md bg-white border border-theme-border text-sm" value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>
                {create.isError && <p className="text-sm text-red-600">Failed to create bill — try again.</p>}
                <div className="flex justify-end gap-3 pt-4 border-t border-theme-border">
                    <button type="button" onClick={() => onNavigate('billing-history')} className="px-5 py-2 text-sm font-medium text-on-surface-variant rounded-lg border border-theme-border">Cancel</button>
                    <button type="submit" disabled={create.isPending} className="px-6 py-2 text-sm font-bold text-white bg-theme-primary-main rounded-lg disabled:opacity-50">
                        {create.isPending ? 'Saving…' : 'Create Group Class Bill'}
                    </button>
                </div>
            </form>
        </div>
    );
}
