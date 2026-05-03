import { useState } from 'react';
import { useListCelebrations } from '@workspace/api-client-react';

export default function BirthdaysAnniversaries() {
    const { data: items = [], isLoading } = useListCelebrations();
    const [filter, setFilter] = useState<'both' | 'Birthday' | 'Anniversary'>('both');

    const filtered = items.filter((i) => filter === 'both' || i.type === filter);

    return (
        <div className="p-4 md:p-8 min-h-screen w-full max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-black text-theme-text-main tracking-tight">Birthdays & Anniversaries</h1>
                <button className="flex items-center gap-2 bg-theme-primary-main text-white px-5 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-theme-primary-hover transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Export CSV
                </button>
            </div>

            <div className="bg-theme-bg-card rounded-xl p-4 mb-6 flex flex-wrap gap-4 items-end shadow-sm border border-theme-border">
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-theme-text-muted mb-1.5">Type Filter</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value as typeof filter)}
                        className="w-full bg-theme-bg-main border-none rounded-lg text-sm px-4 py-2.5"
                    >
                        <option value="both">Both</option>
                        <option value="Birthday">Birthdays</option>
                        <option value="Anniversary">Anniversaries</option>
                    </select>
                </div>
            </div>

            <div className="bg-theme-bg-card rounded-2xl shadow-sm border border-theme-border overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-theme-bg-main text-xs uppercase text-theme-text-muted">
                        <tr>
                            <th className="text-left px-4 py-3">Member</th>
                            <th className="text-left px-4 py-3">Occasion</th>
                            <th className="text-left px-4 py-3">Date</th>
                            <th className="text-left px-4 py-3">Phone</th>
                            <th className="text-right px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {isLoading && <tr><td colSpan={5} className="px-4 py-8 text-center text-theme-text-muted">Loading…</td></tr>}
                        {!isLoading && filtered.length === 0 && <tr><td colSpan={5} className="px-4 py-8 text-center text-theme-text-muted">No upcoming celebrations.</td></tr>}
                        {filtered.map((i) => (
                            <tr key={`${i.id}-${i.type}`}>
                                <td className="px-4 py-3 flex items-center gap-3">
                                    <img src={i.avatarUrl} className="w-8 h-8 rounded-full" alt="" />
                                    <span className="font-medium">{i.name}</span>
                                </td>
                                <td className="px-4 py-3">
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${i.type === 'Birthday' ? 'bg-pink-50 text-pink-700' : 'bg-emerald-50 text-emerald-700'}`}>
                                        {i.type}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-theme-text-muted">{i.date}</td>
                                <td className="px-4 py-3 text-theme-text-muted">{i.phone}</td>
                                <td className="px-4 py-3 text-right">
                                    <button className="text-theme-primary-main text-xs font-semibold hover:underline">Send Wish</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
