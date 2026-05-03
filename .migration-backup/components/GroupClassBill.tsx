import React from 'react';

export default function GroupClassBill() {
    return (
        <div className="p-4 md:p-6 pb-24 h-full overflow-y-auto w-full max-w-7xl mx-auto custom-scrollbar">
            {/* Breadcrumb & Title */}
            <div className="mb-6 mt-2">
                <nav className="flex text-sm text-theme-text-muted mb-2">
                    <ol className="flex items-center space-x-2">
                        <li>
                            <button className="hover:text-theme-text-main transition-colors">Billing</button>
                        </li>
                        <li><span className="mx-1">/</span></li>
                        <li className="font-medium text-theme-text-main">Group Class Bill</li>
                    </ol>
                </nav>
            </div>

            {/* Main Content Card */}
            <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-theme-border overflow-hidden">
                {/* Form Header */}
                <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-theme-border">
                    <div>
                        <h3 className="text-xl font-bold text-on-surface tracking-tight">Group Class Bill</h3>
                        <p className="text-xs text-on-surface-variant mt-1">Create a new invoice for specialized group training sessions.</p>
                    </div>
                    {/* Reward Points Box */}
                    <div className="bg-theme-primary-light/50 px-4 py-3 rounded-lg border border-theme-primary-main/20">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-theme-primary-main text-lg">stars</span>
                            <span className="text-xs font-semibold text-theme-primary-main uppercase tracking-wider">Reward Points</span>
                        </div>
                        <p className="text-theme-primary-main font-bold text-sm mt-1">0.00 * Rs. 1 = Rs. 0</p>
                    </div>
                </div>

                <form className="p-6 text-on-surface">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6">
                        {/* LEFT COLUMN: Member Information */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Invoice ID</label>
                                    <input className="w-full bg-surface-container-low border-theme-border rounded-lg text-sm px-3 py-2 cursor-not-allowed" readOnly type="text" value="INV-2024-0892" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Invoice Date</label>
                                    <input className="w-full border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main bg-white" type="date" defaultValue="2024-05-24" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Member ID</label>
                                    <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="Auto-fill ID" type="text" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Client Name</label>
                                    <div className="relative">
                                        <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 pl-9 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="Search client..." type="text" />
                                        <span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant text-lg">search</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Contact Number</label>
                                    <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" type="tel" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Alternate Contact</label>
                                    <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" type="tel" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">E-mail Address</label>
                                <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="john.doe@example.com" type="email" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Client Source</label>
                                    <select className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main">
                                        <option>Social Media</option>
                                        <option>Referral</option>
                                        <option>Walk-in</option>
                                        <option>Website</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Joining Date</label>
                                    <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" type="date" />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Class & Billing */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Package</label>
                                    <select className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main">
                                        <option>Monthly Group Access</option>
                                        <option>10-Session Pass</option>
                                        <option>VIP Group Unlimited</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1.5">
                                        <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider">Class Name</label>
                                        <span className="text-[10px] text-theme-primary-main font-bold">Capacity: 15/20 booked</span>
                                    </div>
                                    <select className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main">
                                        <option>Power HIIT Morning</option>
                                        <option>Yoga Flow Advanced</option>
                                        <option>Strength &amp; Conditioning</option>
                                    </select>
                                    <div className="mt-1 w-full bg-surface-container-highest h-1 rounded-full overflow-hidden flex">
                                        <div className="bg-theme-primary-main h-full w-[75%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Class Schedule</label>
                                    <input className="w-full bg-surface-container-low border-theme-border rounded-lg text-sm px-3 py-2 cursor-not-allowed" readOnly type="text" value="Mon/Wed/Fri 7:00 AM" />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Sessions</label>
                                        <input className="w-full bg-surface-container-low border-theme-border rounded-lg text-sm px-3 py-2 text-center" readOnly type="text" value="12" />
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">End Date</label>
                                        <input className="w-full bg-surface-container-low border-theme-border rounded-lg text-sm px-2 py-2" readOnly type="text" value="2024-06-24" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Price</label>
                                    <input className="w-full bg-surface-container-low border-theme-border rounded-lg text-sm px-3 py-2 font-medium" readOnly type="text" value="Rs. 4,500" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Discount (%)</label>
                                    <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="0" type="number" />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Admission</label>
                                    <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="500" type="number" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Tax (%)</label>
                                    <select className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main">
                                        <option>GST 18%</option>
                                        <option>Service Tax 12%</option>
                                        <option>Non-Taxable</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Redeem Rewards</label>
                                    <div className="flex items-center gap-2">
                                        <input className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="0" type="number" />
                                        <button className="bg-surface-container-high px-3 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-theme-primary-light hover:text-theme-primary-main transition-colors" type="button">Apply</button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-theme-primary-light/50 p-4 rounded-xl flex justify-between items-center border border-theme-primary-main/10">
                                <span className="text-theme-primary-main font-bold uppercase text-xs tracking-widest">Amount Payable</span>
                                <span className="text-theme-primary-main text-3xl font-black">Rs. 5,310.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Mode Section */}
                    <div className="mt-10 pt-8 border-t border-theme-border">
                        <h4 className="text-sm font-bold text-on-surface mb-6 flex items-center gap-2">
                            <span className="material-symbols-outlined text-theme-primary-main">account_balance_wallet</span>
                            Payment Information
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                            <div>
                                <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Mode of Payment 1</label>
                                <select className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main">
                                    <option>Credit Card</option>
                                    <option>Cash</option>
                                    <option>UPI / QR Scan</option>
                                    <option>Net Banking</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-[11px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1.5">Mode of Payment 2 (Optional)</label>
                                <select className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main">
                                    <option>None</option>
                                    <option>Cash</option>
                                    <option>Credit Card</option>
                                    <option>UPI</option>
                                </select>
                            </div>
                            <div className="bg-surface-container-low px-4 py-2 rounded-lg border border-theme-border flex justify-between items-center">
                                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Balance Due</span>
                                <span className="text-red-500 font-black text-lg">Rs. 0.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Collapsible Additional Info */}
                    <div className="mt-8">
                        <button className="w-full flex items-center justify-between py-4 border-y border-theme-border group" type="button">
                            <span className="text-sm font-bold text-on-surface flex items-center gap-2">
                                <span className="material-symbols-outlined text-theme-primary-main group-hover:rotate-12 transition-transform">note_add</span>
                                Additional Info &amp; Remarks
                            </span>
                            <span className="material-symbols-outlined text-on-surface-variant">keyboard_arrow_down</span>
                        </button>
                        <div className="py-4">
                            <textarea className="w-full bg-white border border-theme-border rounded-lg text-sm px-3 py-2 focus:ring-1 focus:ring-theme-primary-main focus:border-theme-primary-main" placeholder="Add any special instructions or billing notes here..." rows={3}></textarea>
                        </div>
                    </div>

                    {/* Notification Toggles */}
                    <div className="mt-6 flex flex-wrap gap-6 bg-surface-container-low/50 p-4 rounded-xl border border-theme-border">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input defaultChecked className="w-4 h-4 text-theme-primary-main rounded border-outline-variant/40 focus:ring-theme-primary-main" type="checkbox" />
                            <span className="text-xs font-semibold text-on-surface-variant group-hover:text-theme-primary-main transition-colors">Send Text SMS</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input defaultChecked className="w-4 h-4 text-theme-primary-main rounded border-outline-variant/40 focus:ring-theme-primary-main" type="checkbox" />
                            <span className="text-xs font-semibold text-on-surface-variant group-hover:text-theme-primary-main transition-colors">Send Email Invoice</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="w-4 h-4 text-theme-primary-main rounded border-outline-variant/40 focus:ring-theme-primary-main" type="checkbox" />
                            <span className="text-xs font-semibold text-on-surface-variant group-hover:text-theme-primary-main transition-colors">Send WhatsApp</span>
                        </label>
                    </div>

                    {/* Form Actions */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
                        <button className="px-8 py-3 bg-white text-on-surface font-bold text-sm rounded-xl border border-theme-border hover:bg-surface-container-low transition-all active:scale-95 flex items-center justify-center gap-2" type="button">
                            <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                            Preview PDF
                        </button>
                        <button className="px-8 py-3 bg-theme-primary-main text-white font-bold text-sm rounded-xl shadow-lg hover:bg-theme-primary-hover transition-all active:scale-95 flex items-center justify-center gap-2" type="submit">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            Submit Bill
                        </button>
                    </div>
                </form>

                {/* Footer Meta Info */}
                <div className="mb-6 mt-2 text-center text-on-surface-variant">
                    <p className="text-[10px] uppercase tracking-widest font-medium">FitCore Pro Billing Engine v4.2 • Secure PCI-DSS Compliant Transaction</p>
                </div>
            </div>
        </div>
    );
}
