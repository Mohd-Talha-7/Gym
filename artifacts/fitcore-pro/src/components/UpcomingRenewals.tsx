import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
    useListRenewals,
    useUpdateMember,
    useCreateBill,
    getListRenewalsQueryKey,
    getListBillsQueryKey,
    getGetMemberQueryKey,
    getGetCollectionProgressQueryKey,
    getGetRevenueQueryKey,
    getGetDashboardStatsQueryKey,
} from '@workspace/api-client-react';
import { formatDate, formatINR } from '@/lib/format';

const PLAN_PRICES: Record<string, number> = {
    Basic: 1500,
    Standard: 2500,
    Premium: 4000,
    Platinum: 6000,
};

export default function UpcomingRenewals() {
    const qc = useQueryClient();
    const { data: renewals = [], isLoading } = useListRenewals();
    const [search, setSearch] = useState('');
    const [period, setPeriod] = useState<15 | 30>(30);
    const [renewFor, setRenewFor] = useState<{ memberId: string; memberName: string; plan: string; expiryDate: string } | null>(null);
    const [months, setMonths] = useState(1);
    const [price, setPrice] = useState('1500');
    const [paid, setPaid] = useState(true);
    const [paymentMode, setPaymentMode] = useState('UPI');

    const invalidateAll = () => {
        qc.invalidateQueries({ queryKey: getListRenewalsQueryKey() });
        qc.invalidateQueries({ queryKey: getListBillsQueryKey() });
        if (renewFor) qc.invalidateQueries({ queryKey: getGetMemberQueryKey(renewFor.memberId) });
        qc.invalidateQueries({ queryKey: getGetCollectionProgressQueryKey() });
        qc.invalidateQueries({ queryKey: getGetRevenueQueryKey() });
        qc.invalidateQueries({ queryKey: getGetDashboardStatsQueryKey() });
    };

    const updateMember = useUpdateMember();
    const createBill = useCreateBill();

    const openRenewal = (r: { memberId: string; memberName: string; plan: string; expiryDate: string }) => {
        setRenewFor(r);
        setMonths(1);
        const base = PLAN_PRICES[r.plan] ?? 2000;
        setPrice(String(base));
        setPaid(true);
        setPaymentMode('UPI');
    };

    const submitRenewal = async () => {
        if (!renewFor) return;
        const expiry = new Date(renewFor.expiryDate);
        const newExpiry = new Date(expiry);
        newExpiry.setMonth(newExpiry.getMonth() + months);
        const amountPaise = Math.round(Number(price || 0) * 100) * months;

        await updateMember.mutateAsync({
            id: renewFor.memberId,
            data: { expiryDate: newExpiry.toISOString(), status: 'active' },
        });
        await createBill.mutateAsync({
            data: {
                memberId: renewFor.memberId,
                type: 'membership',
                items: [{ name: `${renewFor.plan} membership × ${months} month${months > 1 ? 's' : ''}`, amount: amountPaise }],
                paid: paid ? amountPaise : 0,
                paymentMode: paid ? paymentMode : null,
                notes: `Renewal — extended to ${newExpiry.toLocaleDateString('en-IN')}`,
            },
        });
        invalidateAll();
        setRenewFor(null);
    };

    const filtered = renewals.filter((r) =>
        r.daysLeft <= period &&
        (search ? r.memberName.toLowerCase().includes(search.toLowerCase()) : true)
    );

    const isPending = updateMember.isPending || createBill.isPending;

    return (
        <div className="max-w-6xl mx-auto bg-theme-bg-card rounded-2xl shadow-sm border border-theme-border p-6 md:p-8">
            {renewFor && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setRenewFor(null)}>
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3" onClick={(e) => e.stopPropagation()}>
                        <h2 className="text-lg font-bold">Renew Membership</h2>
                        <p className="text-sm text-theme-text-muted">
                            <span className="font-bold text-theme-text-main">{renewFor.memberName}</span> — {renewFor.plan} plan, expires {formatDate(renewFor.expiryDate)}
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                            <label className="text-xs font-semibold col-span-2">Renewal length</label>
                            {[1, 3, 6, 12].map((m) => (
                                <button key={m} type="button" onClick={() => setMonths(m)}
                                    className={`px-3 py-2 rounded-lg text-sm font-semibold border ${months === m ? 'bg-theme-primary-main text-white border-theme-primary-main' : 'bg-white border-slate-200'}`}>
                                    {m} month{m > 1 ? 's' : ''}
                                </button>
                            ))}
                        </div>
                        <label className="text-xs font-semibold block">Price per month (₹)</label>
                        <input type="number" className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <div className="flex items-center gap-2">
                            <input id="rn-paid" type="checkbox" checked={paid} onChange={(e) => setPaid(e.target.checked)} />
                            <label htmlFor="rn-paid" className="text-sm">Mark as paid now</label>
                        </div>
                        {paid && (
                            <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                                <option>UPI</option><option>Cash</option><option>Card</option><option>Bank Transfer</option>
                            </select>
                        )}
                        <div className="bg-slate-50 rounded-lg p-3 text-sm">
                            Total: <span className="font-bold">{formatINR(Math.round(Number(price || 0) * 100) * months)}</span>
                        </div>
                        <div className="flex gap-2 justify-end pt-2">
                            <button className="px-4 py-2 text-sm" onClick={() => setRenewFor(null)}>Cancel</button>
                            <button onClick={submitRenewal} disabled={isPending || !price} className="bg-theme-primary-main text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50">
                                {isPending ? 'Renewing…' : 'Confirm Renewal'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mb-8">
                <h1 className="text-2xl font-bold text-theme-text-main mb-1 tracking-tight">Upcoming Renewals</h1>
                <p className="text-sm text-theme-text-muted">Manage and track memberships expiring soon.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input className="flex-1 px-3 py-2.5 border border-theme-border rounded-lg text-sm" placeholder="Search by Member Name" value={search} onChange={(e) => setSearch(e.target.value)} />
                <select value={period} onChange={(e) => setPeriod(Number(e.target.value) as 15 | 30)} className="px-3 py-2.5 border border-theme-border rounded-lg text-sm">
                    <option value={15}>Next 15 Days</option>
                    <option value={30}>Next 30 Days</option>
                </select>
            </div>

            <div className="border border-theme-border rounded-xl overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">Phone</th>
                            <th className="text-left px-4 py-3">Plan</th>
                            <th className="text-left px-4 py-3">Expiry</th>
                            <th className="text-left px-4 py-3">Days Left</th>
                            <th className="text-left px-4 py-3">Amount Due</th>
                            <th className="text-right px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && filtered.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">No renewals due in this window.</td></tr>}
                        {filtered.map((r) => (
                            <tr key={r.memberId}>
                                <td className="px-4 py-3 font-medium">{r.memberName}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{r.phone}</td>
                                <td className="px-4 py-3">{r.plan}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(r.expiryDate)}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${r.daysLeft <= 7 ? 'bg-rose-50 text-rose-700' : r.daysLeft <= 15 ? 'bg-amber-50 text-amber-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                        {r.daysLeft} days
                                    </span>
                                </td>
                                <td className="px-4 py-3">{r.amountDue > 0 ? formatINR(r.amountDue) : '—'}</td>
                                <td className="px-4 py-3 text-right">
                                    <button onClick={() => openRenewal(r)} className="text-theme-primary-main text-xs font-semibold hover:underline">Renew Now</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
