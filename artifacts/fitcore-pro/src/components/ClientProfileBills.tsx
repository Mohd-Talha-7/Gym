import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListMemberBills,
    useUpdateBill,
    getListMemberBillsQueryKey,
    getListBillsQueryKey,
    getGetMemberQueryKey,
    getGetCollectionProgressQueryKey,
    getGetRevenueQueryKey,
    getGetDashboardStatsQueryKey,
} from '@workspace/api-client-react';
import CreateMembershipBill from './CreateMembershipBill';
import CreatePTBill from './CreatePTBill';

function fmtDate(d?: Date | string | null) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}
function fmtINR(paise: number) {
    return `₹${(paise / 100).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export default function ClientProfileBills({ memberId }: { memberId: string }) {
    const qc = useQueryClient();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<'membership' | 'pt' | null>(null);
    const [collectFor, setCollectFor] = useState<{ id: string; balance: number } | null>(null);
    const [collectAmount, setCollectAmount] = useState('');
    const [collectMode, setCollectMode] = useState('UPI');
    const { data: bills = [] } = useListMemberBills(memberId);
    const updateBill = useUpdateBill({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListMemberBillsQueryKey(memberId) });
                qc.invalidateQueries({ queryKey: getListBillsQueryKey() });
                qc.invalidateQueries({ queryKey: getGetMemberQueryKey(memberId) });
                qc.invalidateQueries({ queryKey: getGetCollectionProgressQueryKey() });
                qc.invalidateQueries({ queryKey: getGetRevenueQueryKey() });
                qc.invalidateQueries({ queryKey: getGetDashboardStatsQueryKey() });
            },
        },
    });

    const submitCollect = () => {
        if (!collectFor) return;
        const bill = bills.find((b) => b.id === collectFor.id);
        if (!bill) return;
        const additional = Math.round(Number(collectAmount || 0) * 100);
        if (additional <= 0) return;
        updateBill.mutate(
            { id: collectFor.id, data: { paid: bill.paid + additional, paymentMode: collectMode } },
            { onSuccess: () => { setCollectFor(null); setCollectAmount(''); } },
        );
    };

    return (
        <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
            {activeModal === 'membership' && <CreateMembershipBill memberId={memberId} onClose={() => setActiveModal(null)} />}
            {activeModal === 'pt' && <CreatePTBill memberId={memberId} onClose={() => setActiveModal(null)} />}

            {collectFor && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setCollectFor(null)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Collect Payment</h2>
                        <p className="text-sm text-theme-text-muted">Outstanding: <span className="font-bold text-theme-text-main">{fmtINR(collectFor.balance)}</span></p>
                        <input
                            type="number"
                            placeholder="Amount in ₹"
                            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                            value={collectAmount}
                            onChange={(e) => setCollectAmount(e.target.value)}
                        />
                        <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={collectMode} onChange={(e) => setCollectMode(e.target.value)}>
                            <option>UPI</option><option>Cash</option><option>Card</option><option>Bank Transfer</option>
                        </select>
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setCollectFor(null)}>Cancel</button>
                            <button
                                disabled={updateBill.isPending || !collectAmount}
                                className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50"
                                onClick={submitCollect}
                            >
                                {updateBill.isPending ? 'Saving…' : 'Record Payment'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="p-6 flex items-center justify-between border-b border-theme-border">
                <h2 className="text-lg font-bold tracking-tight text-theme-text-main">Billing History</h2>
                <div className="relative">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        Generate Invoice
                        <span className="material-symbols-outlined text-[18px]" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-theme-border rounded-xl shadow-lg z-10 overflow-hidden">
                            <div className="p-1">
                                <button onClick={() => { setActiveModal('membership'); setIsDropdownOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 font-medium rounded-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] text-theme-text-muted">card_membership</span>
                                    Gym Membership Bill
                                </button>
                                <button onClick={() => { setActiveModal('pt'); setIsDropdownOpen(false); }} className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 font-medium rounded-lg flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px] text-theme-text-muted">fitness_center</span>
                                    Personal Training Bill
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse whitespace-nowrap">
                    <thead className="bg-theme-bg-main text-theme-text-muted font-bold text-[10px] uppercase tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Invoice #</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4">Type</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Paid</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {bills.length === 0 && (
                            <tr><td colSpan={7} className="px-6 py-12 text-center text-theme-text-muted">No bills yet for this member.</td></tr>
                        )}
                        {bills.map((b) => {
                            const isPaid = b.status === 'paid';
                            return (
                                <tr key={b.id} className="hover:bg-theme-bg-main transition-colors">
                                    <td className="px-6 py-4 font-bold text-theme-text-main">{b.id}</td>
                                    <td className="px-6 py-4 text-theme-text-muted font-medium">{fmtDate(b.createdAt)}</td>
                                    <td className="px-6 py-4 text-theme-text-main font-medium capitalize">{b.type}</td>
                                    <td className="px-6 py-4 font-black text-theme-text-main">{fmtINR(b.amount)}</td>
                                    <td className="px-6 py-4 text-theme-text-main">{fmtINR(b.paid)}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold border ${isPaid ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${isPaid ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                                            <span className="capitalize">{b.status}</span>
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {!isPaid && b.balance > 0 && (
                                            <button
                                                onClick={() => { setCollectFor({ id: b.id, balance: b.balance }); setCollectAmount(String(b.balance / 100)); }}
                                                className="text-xs font-semibold text-theme-primary-main hover:underline"
                                            >
                                                Collect Payment
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
