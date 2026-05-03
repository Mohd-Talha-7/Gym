import { useState } from 'react';
import { useListMembers } from '@workspace/api-client-react';
import { formatDate } from '@/lib/format';

export default function ClientsDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
    const { data: members = [], isLoading } = useListMembers();
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    const filtered = members.filter((m) => {
        if (statusFilter !== 'all' && m.status !== statusFilter) return false;
        if (search) {
            const q = search.toLowerCase();
            return m.name.toLowerCase().includes(q) || m.id.toLowerCase().includes(q) || m.phone.includes(q);
        }
        return true;
    });

    return (
        <div className="flex-1 overflow-auto relative z-0 max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-4 mt-2">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight text-theme-text-main">Clients</h1>
                    <p className="text-theme-text-muted text-sm">Manage and track your active gym members and subscriptions.</p>
                </div>
                <button
                    className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-sm"
                    onClick={() => onNavigate('members-add')}
                >
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                    Add New Client
                </button>
            </div>

            <div className="bg-theme-bg-card rounded-2xl p-4 mb-6 shadow-sm flex flex-wrap items-center gap-4 border border-theme-border">
                <div className="flex-1 min-w-[240px] relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-theme-text-muted text-lg pointer-events-none">search</span>
                    <input
                        className="w-full bg-theme-bg-main border border-transparent focus:border-theme-primary-main rounded-xl pl-10 pr-4 py-2.5 text-sm text-theme-text-main"
                        placeholder="Search by name, ID or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-theme-bg-main border-none rounded-xl px-4 py-2.5 text-sm cursor-pointer min-w-[140px] text-theme-text-main font-medium"
                >
                    <option value="all">Status: All</option>
                    <option value="active">Active</option>
                    <option value="expired">Expired</option>
                </select>
            </div>

            <div className="bg-theme-bg-card rounded-2xl shadow-sm border border-theme-border overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase tracking-wide text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">ID</th>
                            <th className="text-left px-4 py-3">Plan</th>
                            <th className="text-left px-4 py-3">Phone</th>
                            <th className="text-left px-4 py-3">Status</th>
                            <th className="text-left px-4 py-3">Expiry</th>
                            <th className="text-right px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && (
                            <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">Loading members…</td></tr>
                        )}
                        {!isLoading && filtered.length === 0 && (
                            <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">No members found.</td></tr>
                        )}
                        {filtered.map((m) => (
                            <tr key={m.id} className="hover:bg-theme-bg-main/50 cursor-pointer" onClick={() => onNavigate(`members-detail:${m.id}`)}>
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img src={m.avatarUrl} alt="" className="w-8 h-8 rounded-full" />
                                    <span className="font-medium text-theme-text-main">{m.name}</span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{m.id}</td>
                                <td className="px-4 py-3">{m.plan}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{m.phone}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${m.status === 'active' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                                        {m.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(m.expiryDate)}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-theme-primary-main text-xs font-semibold hover:underline">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
