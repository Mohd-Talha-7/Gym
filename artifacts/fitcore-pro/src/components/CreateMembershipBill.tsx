import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateBill, getListMemberBillsQueryKey, getListBillsQueryKey, getGetMemberQueryKey } from '@workspace/api-client-react';

export default function CreateMembershipBill({ onClose, memberId }: { onClose: () => void; memberId: string }) {
    const qc = useQueryClient();
    const [plan, setPlan] = useState('Annual Pro Elite');
    const [subtotal, setSubtotal] = useState(15000);
    const [discount, setDiscount] = useState(0);
    const [taxRate, setTaxRate] = useState(18);
    const [paid, setPaid] = useState(0);
    const [paymentMode, setPaymentMode] = useState('cash');
    const [notes, setNotes] = useState('');

    const calculatedDiscount = (subtotal * discount) / 100;
    const taxableAmount = subtotal - calculatedDiscount;
    const calculatedTax = (taxableAmount * taxRate) / 100;
    const finalTotal = taxableAmount + calculatedTax;

    const createBill = useCreateBill({
        mutation: {
            onSuccess: () => {
                qc.invalidateQueries({ queryKey: getListMemberBillsQueryKey(memberId) });
                qc.invalidateQueries({ queryKey: getListBillsQueryKey() });
                qc.invalidateQueries({ queryKey: getGetMemberQueryKey(memberId) });
                onClose();
            },
        },
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createBill.mutate({
            data: {
                memberId,
                type: 'membership',
                items: [{ name: plan, amount: Math.round(finalTotal * 100) }],
                paid: Math.round(paid * 100),
                paymentMode,
                notes: notes || null,
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto">
            <div className="bg-theme-bg-card w-full max-w-3xl rounded-xl shadow-2xl border border-theme-border flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between p-6 border-b border-theme-border">
                    <div>
                        <h2 className="text-xl font-bold text-theme-text-main">Gym Membership Invoice</h2>
                        <p className="text-sm text-theme-text-muted mt-1">Create a new membership invoice for this client.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-theme-bg-main rounded-lg text-theme-text-muted">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 custom-scrollbar">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Membership Plan*</label>
                                <select value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md text-sm">
                                    <option>Annual Pro Elite</option>
                                    <option>Annual Standard</option>
                                    <option>Monthly Access</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Payment Mode</label>
                                <select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)} className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md text-sm">
                                    <option value="cash">Cash</option>
                                    <option value="upi">UPI</option>
                                    <option value="card">Card</option>
                                    <option value="bank">Bank Transfer</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1.5 text-theme-text-main">Notes</label>
                                <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full px-3 py-2 border border-theme-border bg-theme-bg-main rounded-md text-sm h-[88px] resize-none" placeholder="Add any special notes..." />
                            </div>
                        </div>

                        <div className="bg-theme-bg-main p-5 rounded-lg border border-theme-border space-y-4 h-fit">
                            <h3 className="font-bold text-theme-text-main border-b border-theme-border pb-2 mb-4">Financials (₹)</h3>
                            <div>
                                <label className="block text-xs font-semibold mb-1 text-theme-text-muted">Base Amount (₹)</label>
                                <input type="number" value={subtotal} onChange={(e) => setSubtotal(Number(e.target.value))} className="w-full px-3 py-2 border border-theme-border bg-white rounded-md text-sm" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold mb-1 text-theme-text-muted">Discount (%)</label>
                                    <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} className="w-full px-3 py-2 border border-theme-border bg-white rounded-md text-sm" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold mb-1 text-theme-text-muted">Tax Rate (%)</label>
                                    <input type="number" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full px-3 py-2 border border-theme-border bg-white rounded-md text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold mb-1 text-theme-text-muted">Amount Paid Now (₹)</label>
                                <input type="number" value={paid} onChange={(e) => setPaid(Number(e.target.value))} className="w-full px-3 py-2 border border-theme-border bg-white rounded-md text-sm" />
                            </div>
                            <div className="pt-4 border-t border-theme-border border-dashed space-y-2 text-sm">
                                <div className="flex justify-between text-theme-text-muted"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
                                <div className="flex justify-between text-red-500"><span>Discount</span><span>-₹{calculatedDiscount.toFixed(2)}</span></div>
                                <div className="flex justify-between text-theme-text-muted"><span>Tax ({taxRate}%)</span><span>₹{calculatedTax.toFixed(2)}</span></div>
                            </div>
                            <div className="pt-3 border-t border-theme-border flex justify-between items-center">
                                <span className="text-sm font-bold text-theme-text-main">Grand Total</span>
                                <span className="text-2xl font-black text-theme-primary-main">₹{finalTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end gap-3">
                        <button type="button" onClick={onClose} className="px-5 py-2 border border-theme-border text-theme-text-main rounded-lg text-sm font-bold">Cancel</button>
                        <button type="submit" disabled={createBill.isPending} className="px-5 py-2 bg-theme-primary-main text-white rounded-lg text-sm font-bold disabled:opacity-50">
                            {createBill.isPending ? 'Creating…' : 'Generate Invoice'}
                        </button>
                    </div>
                    {createBill.isError && (
                        <p className="mt-3 text-sm text-rose-600">Failed to create bill. Try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
}
