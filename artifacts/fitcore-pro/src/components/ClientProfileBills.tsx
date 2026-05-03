import { useState } from 'react';
import { useListMemberBills } from '@workspace/api-client-react';
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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<'membership' | 'pt' | null>(null);
    const { data: bills = [] } = useListMemberBills(memberId);

    return (
        <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">
            {activeModal === 'membership' && <CreateMembershipBill memberId={memberId} onClose={() => setActiveModal(null)} />}
            {activeModal === 'pt' && <CreatePTBill memberId={memberId} onClose={() => setActiveModal(null)} />}

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
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        {bills.length === 0 && (
                            <tr><td colSpan={6} className="px-6 py-12 text-center text-theme-text-muted">No bills yet for this member.</td></tr>
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
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
