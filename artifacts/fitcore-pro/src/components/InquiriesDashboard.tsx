import { useState } from 'react';
import { useListInquiries } from '@workspace/api-client-react';
import { formatDate } from '@/lib/format';

export default function InquiriesDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
    const { data: inquiries = [], isLoading } = useListInquiries();
    const [tab, setTab] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = inquiries.filter((q) => {
        if (tab !== 'All' && q.status.toLowerCase() !== tab.toLowerCase()) return false;
        if (search) {
            const s = search.toLowerCase();
            return q.name.toLowerCase().includes(s) || q.phone.includes(search) || q.id.toLowerCase().includes(s);
        }
        return true;
    });

    return (
        <div className="flex-1 flex flex-col overflow-hidden relative z-0 max-w-7xl mx-auto space-y-6">
            <div className="flex items-center justify-between flex-shrink-0 mt-4">
                <h1 className="text-2xl font-bold text-theme-text-main tracking-tight">Inquiries</h1>
                <button
                    onClick={() => onNavigate('inquiries-add')}
                    className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm flex items-center gap-2"
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                    Add New Inquiry
                </button>
            </div>

            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="flex items-center p-1 bg-theme-bg-main rounded-lg border border-theme-border w-max">
                    {['All', 'Pending', 'Follow-up', 'Converted', 'Lost'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${tab === t ? 'bg-theme-bg-card shadow-sm text-theme-primary-main border border-theme-border' : 'text-theme-text-muted hover:text-theme-text-main'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
                <div className="relative w-64">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[16px] text-theme-text-muted pointer-events-none">search</span>
                    <input
                        className="w-full pl-9 pr-3 py-2 text-sm bg-theme-bg-card border border-theme-border rounded-lg"
                        placeholder="Search by name, ID, or phone..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-theme-bg-card rounded-2xl shadow-sm border border-theme-border overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Name</th>
                            <th className="text-left px-4 py-3">Phone</th>
                            <th className="text-left px-4 py-3">Interest</th>
                            <th className="text-left px-4 py-3">Source</th>
                            <th className="text-left px-4 py-3">Status</th>
                            <th className="text-left px-4 py-3">Assigned</th>
                            <th className="text-left px-4 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && (
                            <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>
                        )}
                        {!isLoading && filtered.length === 0 && (
                            <tr><td colSpan={7} className="px-4 py-8 text-center text-theme-text-muted">No inquiries.</td></tr>
                        )}
                        {filtered.map((q) => (
                            <tr key={q.id} className="hover:bg-theme-bg-main/50 cursor-pointer" onClick={() => onNavigate(`inquiries-detail:${q.id}`)}>
                                <td className="px-4 py-3 font-medium">{q.name}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{q.phone}</td>
                                <td className="px-4 py-3">{q.interest}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{q.source}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${q.status === 'converted' ? 'bg-emerald-50 text-emerald-700' : q.status === 'pending' ? 'bg-amber-50 text-amber-700' : 'bg-blue-50 text-blue-700'}`}>
                                        {q.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{q.assignedTo}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{formatDate(q.inquiryDate)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
