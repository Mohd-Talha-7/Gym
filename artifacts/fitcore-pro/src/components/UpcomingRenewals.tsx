import { useState } from 'react';
import { useListRenewals } from '@workspace/api-client-react';
import { formatDate, formatINR } from '@/lib/format';

export default function UpcomingRenewals() {
    const { data: renewals = [], isLoading } = useListRenewals();
    const [search, setSearch] = useState('');
    const [period, setPeriod] = useState<15 | 30>(30);

    const filtered = renewals.filter((r) =>
        r.daysLeft <= period &&
        (search ? r.memberName.toLowerCase().includes(search.toLowerCase()) : true)
    );

    return (
        <div className="max-w-6xl mx-auto bg-theme-bg-card rounded-2xl shadow-sm border border-theme-border p-6 md:p-8">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-theme-text-main mb-1 tracking-tight">Upcoming Renewals</h1>
                <p className="text-sm text-theme-text-muted">Manage and track memberships expiring soon.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    className="flex-1 px-3 py-2.5 border border-theme-border rounded-lg text-sm"
                    placeholder="Search by Member Name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    value={period}
                    onChange={(e) => setPeriod(Number(e.target.value) as 15 | 30)}
                    className="px-3 py-2.5 border border-theme-border rounded-lg text-sm"
                >
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
                                    <button className="text-theme-primary-main text-xs font-semibold hover:underline">Renew Now</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
