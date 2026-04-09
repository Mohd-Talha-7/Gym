import React, { useState } from 'react';
import CreateMembershipBill from './CreateMembershipBill';
import CreatePTBill from './CreatePTBill';

export default function ClientProfileBills() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<'membership' | 'pt' | null>(null);

    return (
        <div className="bg-theme-bg-card rounded-xl shadow-sm border border-theme-border overflow-hidden">

            {activeModal === 'membership' && <CreateMembershipBill onClose={() => setActiveModal(null)} />}
            {activeModal === 'pt' && <CreatePTBill onClose={() => setActiveModal(null)} />}

            <div className="p-6 flex items-center justify-between border-b border-theme-border">
                <h2 className="text-lg font-bold tracking-tight text-theme-text-main">Billing History</h2>

                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="bg-theme-primary-main hover:bg-theme-primary-hover text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-theme-primary-main flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        Generate Invoice
                        <span className="material-symbols-outlined text-[18px] transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>expand_more</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white border border-theme-border rounded-xl shadow-lg z-10 overflow-hidden transform opacity-100 scale-100 transition-all duration-200 origin-top-right">
                            <div className="p-1">
                                <button
                                    onClick={() => { setActiveModal('membership'); setIsDropdownOpen(false); }}
                                    className="w-full text-left px-4 py-2.5 text-sm text-theme-text-main hover:bg-slate-50 font-medium rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[18px] text-theme-text-muted">card_membership</span>
                                    Gym Membership Bill
                                </button>
                                <button
                                    onClick={() => { setActiveModal('pt'); setIsDropdownOpen(false); }}
                                    className="w-full text-left px-4 py-2.5 text-sm text-theme-text-main hover:bg-slate-50 font-medium rounded-lg flex items-center gap-2 transition-colors"
                                >
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
                            <th className="px-6 py-4">Description</th>
                            <th className="px-6 py-4">Amount</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-theme-border">
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">INV-2024-1052</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">Oct 20, 2024</td>
                            <td className="px-6 py-4 text-theme-text-main font-medium">Annual Pro Elite Membership</td>
                            <td className="px-6 py-4 font-black text-theme-text-main">$18,500.00</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold border border-green-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Paid
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-theme-primary-main hover:text-theme-primary-hover font-bold text-sm">Download</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">INV-2024-0891</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">Aug 02, 2024</td>
                            <td className="px-6 py-4 text-theme-text-main font-medium">Protein Supplement (Whey Gold)</td>
                            <td className="px-6 py-4 font-black text-theme-text-main">$3,200.00</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold border border-green-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Paid
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-theme-primary-main hover:text-theme-primary-hover font-bold text-sm">Download</button>
                            </td>
                        </tr>
                        <tr className="hover:bg-theme-bg-main transition-colors">
                            <td className="px-6 py-4 font-bold text-theme-text-main">INV-2023-2341</td>
                            <td className="px-6 py-4 text-theme-text-muted font-medium">Oct 26, 2023</td>
                            <td className="px-6 py-4 text-theme-text-main font-medium">Annual Pro Membership (Initial)</td>
                            <td className="px-6 py-4 font-black text-theme-text-main">$15,000.00</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-md text-xs font-bold border border-green-200">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Paid
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-theme-primary-main hover:text-theme-primary-hover font-bold text-sm">Download</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
