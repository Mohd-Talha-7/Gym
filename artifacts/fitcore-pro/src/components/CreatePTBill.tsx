import React, { useState } from 'react';

export default function CreatePTBill({ onClose }: { onClose: () => void }) {
    const [ratePerSession, setRatePerSession] = useState(500);
    const [sessions, setSessions] = useState(20);
    const [taxRate, setTaxRate] = useState(18); // e.g. 18% GST

    const subtotal = ratePerSession * sessions;
    const calculatedTax = (subtotal * taxRate) / 100;
    const finalTotal = subtotal + calculatedTax;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
            <div className="bg-theme-bg-card w-full max-w-3xl rounded-xl shadow-2xl border border-theme-border flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-theme-border">
                    <div>
                        <h2 className="text-xl font-bold text-theme-text-main">Personal Training Invoice</h2>
                        <p className="text-sm text-theme-text-muted mt-1">Bill for dedicated PT packages.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-theme-bg-main rounded-lg transition-colors text-theme-text-muted">
                        <span className="material-symbols-outlined text-[24px]">close</span>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                    <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* PT Details */}
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Invoice Number</label>
                                    <input disabled className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm sm:text-sm text-theme-text-muted cursor-not-allowed" defaultValue="INV-PT-2024-032" type="text" />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Select Trainer<span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <select className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm appearance-none cursor-pointer text-theme-text-main">
                                            <option value="mark">Mark Davidson (Elite Trainer)</option>
                                            <option value="sarah">Sarah Jenkins</option>
                                            <option value="mike">Mike Ross</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-theme-text-muted">
                                            <i className="fa-solid fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Valid From<span className="text-red-500">*</span></label>
                                        <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" type="date" defaultValue="2024-11-01" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Valid Until</label>
                                        <input className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main" type="date" defaultValue="2024-12-01" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Client Goals / Focus</label>
                                    <textarea className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main sm:text-sm text-theme-text-main resize-none h-[88px]" placeholder="E.g., Hypertrophy and strength conditioning..." />
                                </div>
                            </div>

                            {/* Billing Calculations */}
                            <div className="bg-theme-bg-main p-5 rounded-lg border border-theme-border space-y-4 h-fit">
                                <h3 className="font-bold text-theme-text-main border-b border-theme-border pb-2 mb-4">Payment Breakdown</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-semibold mb-1 text-theme-text-muted">No. of Sessions</label>
                                        <input
                                            type="number"
                                            value={sessions}
                                            onChange={(e) => setSessions(Number(e.target.value))}
                                            className="w-full px-3 py-2 border border-theme-border bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main sm:text-sm text-theme-text-main font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1 text-theme-text-muted">Rate/Session ($)</label>
                                        <input
                                            type="number"
                                            value={ratePerSession}
                                            onChange={(e) => setRatePerSession(Number(e.target.value))}
                                            className="w-full px-3 py-2 border border-theme-border bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main sm:text-sm text-theme-text-main font-medium"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold mb-1 text-theme-text-muted">Tax Rate (%)</label>
                                    <input
                                        type="number"
                                        value={taxRate}
                                        onChange={(e) => setTaxRate(Number(e.target.value))}
                                        className="w-full px-3 py-2 border border-theme-border bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-theme-primary-main sm:text-sm text-theme-text-main"
                                    />
                                </div>

                                <div className="pt-4 mt-4 border-t border-theme-border border-dashed space-y-2">
                                    <div className="flex justify-between text-sm text-theme-text-muted">
                                        <span>Total Sessions Cost</span>
                                        <span className="font-medium text-theme-text-main">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-theme-text-muted">
                                        <span>Assessed Tax ({taxRate}%)</span>
                                        <span>${calculatedTax.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="pt-3 mt-3 border-t border-theme-border flex justify-between items-center">
                                    <span className="text-sm font-bold text-theme-text-main">Grand Total</span>
                                    <span className="text-2xl font-black text-theme-primary-main">${finalTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-theme-border bg-theme-bg-main flex justify-end gap-3 rounded-b-xl">
                    <button onClick={onClose} className="px-5 py-2 border border-theme-border text-theme-text-main rounded-lg text-sm font-bold hover:bg-slate-50 transition-colors shadow-sm">
                        Cancel
                    </button>
                    <button onClick={onClose} className="px-5 py-2 bg-[#d7ff00] text-black rounded-lg text-sm font-bold hover:bg-[#bceb00] transition-colors shadow-sm flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">request_quote</span>
                        Generate PT Invoice
                    </button>
                </div>

            </div>
        </div>
    );
}
