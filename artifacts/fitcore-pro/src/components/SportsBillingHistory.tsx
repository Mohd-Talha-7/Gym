import { useListSportsBills } from '@workspace/api-client-react';
import { formatDate, formatINR } from '@/lib/format';

export default function SportsBillingHistory() {
    const { data: bills = [], isLoading } = useListSportsBills();

    return (
        <div className="max-w-7xl mx-auto space-y-6 pb-20">
            <div>
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Sports Billing History</h1>
                <p className="text-sm text-theme-text-muted">All sports coaching invoices and payments.</p>
            </div>

            <div className="bg-theme-bg-card rounded-2xl border border-theme-border overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Invoice ID</th>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">Sport</th>
                            <th className="text-left px-4 py-3">Package</th>
                            <th className="text-left px-4 py-3">Amount</th>
                            <th className="text-left px-4 py-3">Status</th>
                            <th className="text-left px-4 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && bills.length === 0 && <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">No bills.</td></tr>}
                        {bills.map((b) => (
                            <tr key={b.id}>
                                <td className="px-4 py-3 font-medium">{b.id}</td>
                                <td className="px-4 py-3">{b.memberName}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{b.sport}</td>
                                <td className="px-4 py-3">{b.packageName}</td>
                                <td className="px-4 py-3 font-semibold">{formatINR(b.amount)}</td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${b.status === 'paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{b.status}</span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(b.createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
