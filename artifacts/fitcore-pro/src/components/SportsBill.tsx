import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMembers,
    useCreateBill,
    getListBillsQueryKey,
    getListSportsBillsQueryKey,
    getGetSportsReportQueryKey,
    getListMemberBillsQueryKey,
} from '@workspace/api-client-react';

const SPORTS = ['Cricket', 'Football', 'Swimming', 'Badminton', 'Tennis', 'Basketball', 'Other'];
const PAYMENT_MODES = ['cash', 'card', 'upi'] as const;

export default function SportsBill({ onNavigate }: { onNavigate: (path: string) => void }) {
    const qc = useQueryClient();
    const { data: members = [] } = useListMembers();
    const [memberId, setMemberId] = useState('');
    const [sport, setSport] = useState('Badminton');
    const [packageName, setPackageName] = useState('Monthly Coaching');
    const [amountRupees, setAmountRupees] = useState(2500);
    const [paidRupees, setPaidRupees] = useState(0);
    const [paymentMode, setPaymentMode] = useState<typeof PAYMENT_MODES[number]>('cash');
    const [notes, setNotes] = useState('');

    const create = useCreateBill({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListBillsQueryKey() });
                qc.invalidateQueries({ queryKey: getListSportsBillsQueryKey() });
                qc.invalidateQueries({ queryKey: getGetSportsReportQueryKey() });
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
                type: 'sports',
                items: [{ name: `${sport} – ${packageName}`, amount: amountRupees * 100 }],
                paid: paidRupees * 100,
                paymentMode,
                notes: notes || undefined,
            },
        });
    };

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full custom-scrollbar">
            <div className="mb-6">
                <h2 className="text-2xl font-bold tracking-tight text-on-surface">Sports Bill</h2>
                <p className="text-xs text-on-surface-variant mt-1">Create a new invoice for sports coaching.</p>
            </div>
            <form onSubmit={submit} className="bg-surface-container-lowest rounded-xl shadow-sm border border-theme-border p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Member</label>
                        <select className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={memberId} onChange={(e) => setMemberId(e.target.value)} required>
                            <option value="">Select a member…</option>
                            {members.map((m) => (
                                <option key={m.id} value={m.id}>{m.name} ({m.id}) – {m.phone}</option>
                            ))}
                        </select>
                        {member && (
                            <p className="text-xs text-on-surface-variant mt-1">{member.email} · plan: {member.plan}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Sport</label>
                        <select className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={sport} onChange={(e) => setSport(e.target.value)}>
                            {SPORTS.map((s) => <option key={s}>{s}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Package Name</label>
                        <input className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={packageName} onChange={(e) => setPackageName(e.target.value)} required />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Amount (₹)</label>
                        <input type="number" min={0} className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={amountRupees} onChange={(e) => setAmountRupees(Number(e.target.value))} required />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Paid Now (₹)</label>
                        <input type="number" min={0} max={amountRupees} className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={paidRupees} onChange={(e) => setPaidRupees(Number(e.target.value))} />
                    </div>
                    <div>
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Payment Mode</label>
                        <select className="w-full h-11 px-3 rounded-md bg-white border border-theme-border text-sm" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value as typeof PAYMENT_MODES[number])}>
                            {PAYMENT_MODES.map((m) => <option key={m} value={m}>{m.toUpperCase()}</option>)}
                        </select>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1.5">Notes</label>
                        <textarea rows={2} className="w-full p-3 rounded-md bg-white border border-theme-border text-sm" value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </div>
                </div>
                {create.isError && <p className="text-sm text-red-600">Failed to create bill — try again.</p>}
                <div className="flex justify-end gap-3 pt-4 border-t border-theme-border">
                    <button type="button" onClick={() => onNavigate('billing-history')} className="px-5 py-2 text-sm font-medium text-on-surface-variant rounded-lg border border-theme-border">Cancel</button>
                    <button type="submit" disabled={create.isPending} className="px-6 py-2 text-sm font-bold text-white bg-theme-primary-main rounded-lg disabled:opacity-50">
                        {create.isPending ? 'Saving…' : 'Create Sports Bill'}
                    </button>
                </div>
            </form>
        </div>
    );
}
